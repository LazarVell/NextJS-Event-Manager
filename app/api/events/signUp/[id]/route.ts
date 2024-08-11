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
    user
  } = await request.json();
  await connectMongoDB();
  await Event.findByIdAndUpdate(id, {$addToSet: {users: user}});
  return NextResponse.json({ message: "Event updated!" }, { status: 200 });
}
