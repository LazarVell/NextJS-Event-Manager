import connectMongoDB from "@/libs/mongodb";
import Event from "@/models/event";
import { NextRequest, NextResponse } from "next/server";

interface RequestBody {
  title: string;
  date: string;
  location: string;
  description: string;
  users?: string[];
}

export async function POST(request: NextRequest) {
  const { title, date, location, description }: RequestBody =
    await request.json();
  const users: string[] = [];
  await connectMongoDB();
  await Event.create({ title, date, location, description, users });
  return NextResponse.json({ message: "Event Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const events = await Event.find();
  return NextResponse.json({ events });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Event.findByIdAndDelete(id);
  return NextResponse.json({ message: "Event deleted" }, { status: 200 });
}
