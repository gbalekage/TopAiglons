import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Auth config
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;

        await connectToDatabase();

        const user = await User.findOne({ email: credentials.email });
        if (!user) throw new Error("Invalid email or password");

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) throw new Error("Invalid email or password");

        // Log login
        user.lastLogin = new Date();
        user.activityLogs.push({
          action: "Credentials SignIn",
          timestamp: new Date(),
          device: req?.headers["user-agent"] || "Unknown Device",
          location: "Unknown",
        });
        await user.save();

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],

  pages: {
    signIn: "/sign-in",
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        await connectToDatabase();

        let existingUser = await User.findOne({ email: user.email });
        const hashedPassword = await bcrypt.hash(
          `topaiglon-user${Math.floor(Math.random() * 1000)}`,
          10
        );

        if (!existingUser) {
          existingUser = await User.create({
            name: user.name,
            email: user.email,
            password: hashedPassword,
            provider: "google",
            image: user.image,
            verified: true,
            role: "client",
            lastLogin: new Date(),
            activityLogs: [
              {
                action: "Google SignIn",
                timestamp: new Date(),
                device: "",
                location: "Unknown",
              },
            ],
          });
        } else {
          existingUser.lastLogin = new Date();
          existingUser.activityLogs.push({
            action: "Google SignIn",
            timestamp: new Date(),
            device: "",
            location: "Unknown",
          });
          await existingUser.save();
        }

        user.id = existingUser._id.toString();
        user.role = existingUser.role;
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;

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
      return token;
    },

    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.id!;
        session.user.role = token.role;
        session.token = token.accessToken;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
