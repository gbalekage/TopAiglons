import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Helper to generate a random password for Google users
const generateUniquePassword = () => {
  return `topaiglon-user${Math.floor(Math.random() * 1000)}`;
};

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/sign-in", // your custom sign-in page
  },
  callbacks: {
    // ✅ Called on sign-in
    async signIn({ user, account }) {
      await connectToDatabase();

      const existingUser = await User.findOne({ email: user.email });
      const hashedPassword = await bcrypt.hash(generateUniquePassword(), 10);

      if (!existingUser) {
        const newUser = await User.create({
          name: user.name,
          email: user.email,
          password: hashedPassword,
          provider: account?.provider || "google",
          image: user.image,
          verified: true,
          role: "client",
        });

        // Pass required values to the jwt callback
        user.id = newUser._id.toString();
        user.role = newUser.role;
      } else {
        // Attach values for existing users too
        user.id = existingUser._id.toString();
        user.role = existingUser.role;
      }

      return true;
    },

    // ✅ Called after signIn to create or update JWT
    async jwt({ token, user }) {
      // When user is passed (only on signIn), populate custom fields
      if (user) {
        token.id = user.id;
        token.role = user.role;

        // Create custom JWT
        token.accessToken = jwt.sign(
          {
            id: user.id,
            email: token.email,
            role: user.role,
          },
          process.env.JWT_SECRET!,
          { expiresIn: "7d" }
        );
      }

      console.log("✅ JWT Token:", token);
      return token;
    },

    // ✅ Called when session is created — attach token data
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.token = token.accessToken as string;
      }

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
