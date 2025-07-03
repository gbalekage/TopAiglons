import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const { password } = await req.json();
    const url = new URL(req.url);
    const token = url.pathname.split("/").pop();

    if (!password || !token) {
      return NextResponse.json(
        { error: "Missing password or token" },
        { status: 400 }
      );
    }

    // No hashing if you stored raw token (not recommended for production)
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpires: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid or expired token." },
        { status: 400 }
      );
    }

    // ✅ Hash the new password
    const hashedPassword = await bcrypt.hash(password, 12);
    user.password = hashedPassword;

    // ✅ Clear token fields
    user.resetToken = undefined;
    user.resetTokenExpires = undefined;

    // ✅ Add activity log
    user.activityLogs?.push({
      action: "Password reset successful",
      timestamp: new Date(),
      device: req.headers.get("user-agent") || "Unknown device",
      location: req.headers.get("x-forwarded-for") || "Unknown IP",
    });

    await user.save();

    return NextResponse.json(
      { message: "Password reset successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Password reset error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
