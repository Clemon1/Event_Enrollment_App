import booking from "../models/bookingModel.js";
import User from "../models/userModel.js";

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
