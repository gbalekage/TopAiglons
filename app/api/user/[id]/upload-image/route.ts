import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";
import path from "path";
import { writeFile } from "fs/promises";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();

    const formData = await req.formData();
    const file = formData.get("image") as File;
    const { id } = await params;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filename = `${Date.now()}-${file.name}`;
    const filePath = path.join(process.cwd(), "public", "uploads", filename);

    await writeFile(filePath, buffer);

    const imageUrl = `/uploads/${filename}`;
    await User.findByIdAndUpdate(id, { image: imageUrl });

    return NextResponse.json({ imageUrl });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
