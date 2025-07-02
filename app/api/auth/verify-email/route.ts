import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const { code } = await req.json();

    const user = await User.findOne({
      verificationCode: code,
      verificationTokenExpires: { $gt: Date.now() },
    });
    if (!user)
      return NextResponse.json(
        { error: "Invalid or expired verification code" },
        { status: 409 }
      );

    user.verified = true;
    (user.verificationCode = undefined),
      (user.verificationTokenExpires = undefined);

    await user.save();

    return NextResponse.json(
      { message: `Email verified successfully`, user },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
