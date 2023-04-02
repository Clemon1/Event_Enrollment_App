import booking from "../models/bookingModel.js";
import User from "../models/userModel.js";
import events from "../models/eventModel.js";

// get bookings
export const allBookings = async (req, res) => {
  try {
    const eventBooking = await booking.find();
    res.status(200).json(eventBooking);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Get single user bookings
export const userBookings = async (req, res) => {
  try {
    const id = req.params.id;
    const currenctUser = await User.findById(id);
    const eventBooking = await booking
      .find({ student: currenctUser })
      .populate("event")
      .exec();
    res.status(200).json(eventBooking);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//Checking the top booked event
export const topBookedEvent = async (req, res) => {
  try {
    const topEvents = await booking.aggregate([
      // Group bookings by event ID and count number of bookings
      { $group: { _id: "$event", bookingsCount: { $sum: 1 } } },
      // Sort events by number of bookings in descending order
      { $sort: { bookingsCount: -1 } },
      // Limit results to top 3 events
      { $limit: 3 },
      // Populate event details for each booking
      {
        $lookup: {
          from: "events",
          localField: "_id",
          foreignField: "_id",
          as: "event",
        },
      },
      { $unwind: "$event" },
      // Select only relevant fields for response
      {
        $project: {
          name: "$event.title",
          image: "$event.image",
          date: "$event.dateOfEvent",
          bookingsCount: 1,
        },
      },
    ]);
    res.json(topEvents);

    // res.status(200).json(booked);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// booking event

export const createBookings = async (req, res) => {
  try {
    const id = req.params.id;
    const { student, event } = req.body;

    const existingBooking = await booking.findOne({ student, event });
    if (existingBooking) {
      return res.status(400).json("You cannot book an event twice");
    }

    const newBooking = new booking(req.body);
    const lastestBooking = await newBooking.save();
    res.status(200).json(lastestBooking);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
