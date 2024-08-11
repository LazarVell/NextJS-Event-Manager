import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema(
  {
    title: String,
    date: String,
    location: String,
    description: String,
    users: [String],
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;
