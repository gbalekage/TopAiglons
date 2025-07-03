import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";
import crypto from "crypto";
import { sendPasswordResetEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Please enter your email" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        {
          error:
            "Email not found, enter the email you created your account with",
        },
        { status: 401 }
      );
    }

    // Generate raw token
    const token = crypto.randomBytes(32).toString("hex");
    const expiration = Date.now() + 15 * 60 * 1000;

    const resetUrl = `${process.env.CLIENT_URL}/reset-password/${token}`;

    // Set token and expiration
    user.resetToken = token;
    user.resetTokenExpires = expiration;

    // ✅ Add activity log
    user.activityLogs?.push({
      action: "Requested password reset",
      timestamp: new Date(),
      device: req.headers.get("user-agent") || "Unknown device",
      location: req.headers.get("x-forwarded-for") || "Unknown IP",
    });

    await user.save();

    await sendPasswordResetEmail(user.email, user.name, resetUrl);

    return NextResponse.json({
      message: "A reset link has been sent to your email address.",
    });
  } catch (err) {
    console.error("Password reset error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
