import connectMongoDB from "@/libs/mongodb";
import Event from "@/models/event";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  id: string;
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { id } = params;
  const {
    newTitle: title,
    newDate: date,
    newLocation: location,
    newDescription: description,
  } = await request.json();
  await connectMongoDB();
  await Event.findByIdAndUpdate(id, { title, date, location, description });
  return NextResponse.json({ message: "Event updated!" }, { status: 200 });
}

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { id } = params;
  await connectMongoDB();
  const event = await Event.findOne({ _id: id });
  return NextResponse.json({ event }, { status: 200 });
}
