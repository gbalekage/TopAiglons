// app/api/auth/signup/route.ts
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";
import { sendVerificationEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const { name, email, password, confirmPassword } = await req.json();

    if (!name || !email || !password)
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    const existing = await User.findOne({ email });
    if (existing)
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString(); // 6-digit code
    const verificationTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
    if (password !== confirmPassword)
      return NextResponse.json(
        { error: "Passwords do not match" },
        { status: 400 }
      );

    const user = new User({
      name,
      email,
      password: hashedPassword,
      verified: false,
      verificationCode,
      verificationTokenExpires,
    });

    await user.save();

    return NextResponse.json(
      { message: `User created, verication code sent to ${email}`, user },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
