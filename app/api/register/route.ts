import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

interface UserRegistrationRequest {
  name: string;
  email: string;
  password: string;
}

export async function POST(req: Request) {
  try {
    const { name, email, password }: UserRegistrationRequest = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "User registered!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: `An error occured, ${error}` },
      { status: 500 }
    );
  }
}
