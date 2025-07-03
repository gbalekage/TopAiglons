import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Helper to generate a default password for Google users
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
    signIn: "/sign-in", // custom login page
  },
  callbacks: {
    // Create or update user on Google sign-in
    async signIn({ user, account }) {
      await connectToDatabase();

      const existingUser = await User.findOne({ email: user.email });

      const hashedPassword = await bcrypt.hash(generateUniquePassword(), 10);

      if (!existingUser) {
        await User.create({
          name: user.name,
          email: user.email,
          password: hashedPassword,
          provider: account?.provider || "google",
          image: user.image,
          verified: true,
          role: "client",
        });
      }

      return true;
    },

    // Attach token data (user ID, role, custom JWT)
    async jwt({ token, user }) {
      await connectToDatabase();

      const email = user?.email || token.email;
      const dbUser = await User.findOne({ email });

      if (dbUser) {
        token.id = dbUser._id.toString();
        token.role = dbUser.role;

        // ✅ Create a custom JWT token
        token.accessToken = jwt.sign(
          {
            id: dbUser._id,
            email: dbUser.email,
            role: dbUser.role,
          },
          process.env.JWT_SECRET!,
          { expiresIn: "7d" }
        );
      }

      console.log("✅ JWT Token with customToken:", token);
      return token;
    },

    // Attach token values to session object
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
