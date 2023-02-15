import booking from "../models/bookingModel.js";

// get bookings
export const allBookings = async (req, res) => {
  try {
    const eventBooking = await booking.find();
    res.status(200).json(eventBooking);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Get users booking

// booking event

export const createBookings = async (req, res) => {
  try {
    const newBooking = new booking(req.body);
    const lastestBooking = await newBooking.save();
    res.status(200).json(lastestBooking);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
