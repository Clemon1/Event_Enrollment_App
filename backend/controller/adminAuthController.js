import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Admin Register
export const adminRegister = async (req, res) => {
  try {
    const { email, fullname, password } = req.body;
    if (!fullname || !email || !password) {
      return res.status(400).json("Cannot submit empty credentials");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(404).json("User already exist");
    }
    const salt = await bcrypt.genSalt(8);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const adminUser = new User({
      fullname: req.body.fullname,
      email: req.body.email,
      isAdmin: true,
      password: hashPassword,
    });

    const token = await jwt.sign(
      { userId: adminUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1hr",
      },
    );
    const admin = await adminUser.save();
    res.status(200).json({ token, admin });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Admin Login
export const adminLogin = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json("Cannot submit empty credentials");
    }
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json("User does not exist");
    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password,
    );
    if (!comparePassword) return res.status(400).json("Invalid password");
    if (user.isAdmin === false)
      return res
        .status(400)
        .json("You are not an admin please return back to your own page");

    const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1hr",
    });
    const { password, ...others } = user._doc;
    res.status(200).json({ token, others });
  } catch (err) {
    res.status(500).json(err.message);
  }
};
// checking total number of users

export const checkingUser = async (req, res) => {
  try {
    const studentNumber = await User.find({ isAdmin: false }).count();
    const adminNumber = await User.find({ isAdmin: true }).count();
    res.status(200).json({ studentNumber, adminNumber });
  } catch (err) {
    res.status(500).json(err.message);
  }
};
