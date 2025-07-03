import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Extend the Session type to include 'token'
import { Session } from "next-auth";
declare module "next-auth" {
  interface Session {
    token?: string;
  }
}

// Generate a default random password for new Google users
const generateUniquePassword = () => {
  return `topaiglon-user${Math.floor(Math.random() * 1000)}`;
};

// Extract client IP address from request headers
const getClientIp = (req: any): string | null => {
  const forwarded = req.headers["x-forwarded-for"];
  if (forwarded) return forwarded.split(",")[0].trim();
  if (req.connection && req.connection.remoteAddress)
    return req.connection.remoteAddress;
  return null;
};

const handler = async (request: any, response: any) =>
  NextAuth(request, response, {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
    ],
    pages: {
      signIn: "/sign-in",
    },
    callbacks: {
      async signIn({ user, account }) {
        await connectToDatabase();

        // Find user in DB by email
        let existingUser = await User.findOne({ email: user.email });

        const hashedPassword = await bcrypt.hash(generateUniquePassword(), 10);

        // If new user, create account
        if (!existingUser) {
          existingUser = await User.create({
            name: user.name,
            email: user.email,
            password: hashedPassword,
            provider: account?.provider || "google",
            image: user.image,
            verified: true,
            role: "client",
            lastLogin: new Date(),
            activityLogs: [
              {
                action: "Google SignIn",
                timestamp: new Date(),
                device: request?.headers["user-agent"] || "Unknown Device",
                location: getClientIp(request) || "Unknown IP",
              },
            ],
          });
        } else {
          // Existing user: update last login and logs
          existingUser.lastLogin = new Date();
          existingUser.activityLogs.push({
            action: "Google SignIn",
            timestamp: new Date(),
            device: request?.headers["user-agent"] || "Unknown Device",
            location: getClientIp(request) || "Unknown IP",
          });
          await existingUser.save();
        }

        return true;
      },

    async jwt({ token, user }) {
      await connectToDatabase();

      // Find user by email from token or user object
      const email = user?.email || token.email;
      const dbUser = await User.findOne({ email });

      if (dbUser) {
        token.id = dbUser._id.toString();
        token.role = dbUser.role;

        // Create a custom JWT token for your client app if needed
        token.customToken = jwt.sign(
          {
            id: dbUser._id,
            email: dbUser.email,
            role: dbUser.role,
          },
          process.env.JWT_SECRET!,
          { expiresIn: "7d" }
        );
      }

      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;

      // Attach your custom JWT token to session (optional)
      session.token = typeof token.customToken === "string" ? token.customToken : undefined;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
