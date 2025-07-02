import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";

// Helper to extract IP from headers
function getClientIp(req: NextRequest): string | null {
  const forwarded = req.headers.get("x-forwarded-for");
  return forwarded ? forwarded.split(",")[0].trim() : null;
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return NextResponse.json(
        { error: "User not found or invalid credentials" },
        { status: 401 }
      );
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatch) {
      return NextResponse.json({ error: "Incorect Password" }, { status: 401 });
    }

    if (!existingUser.verified) {
      return NextResponse.json(
        { error: "Please verify your email before logging in." },
        { status: 403 }
      );
    }

    // Generate JWT
    const token = jwt.sign(
      {
        id: existingUser._id,
        email: existingUser.email,
        role: existingUser.role,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    // Get IP and device
    const ipAddress = getClientIp(req) || "Unknown IP";
    const userAgent = req.headers.get("user-agent") || "Unknown Device";

    // Update login data
    existingUser.lastLogin = new Date();
    existingUser.activityLogs.push({
      action: "Login",
      timestamp: new Date(),
      device: userAgent,
      location: ipAddress,
    });

    await existingUser.save();

    return NextResponse.json({
      message: "Login successful, signing you in...",
      user: {
        id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
        role: existingUser.role,
      },
      token,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
