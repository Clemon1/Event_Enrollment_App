import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
    },
    dateOfEvent: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

const events = mongoose.model("events", eventSchema);

export default events;
