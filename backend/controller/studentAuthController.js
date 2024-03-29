import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// student Register
export const studentRegister = async (req, res) => {
  try {
    const { email, fullname, password } = req.body;
    if (!fullname || !email || !password) {
      return res.status(400).json("Cannot submit empty credentials");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(404).json("User already exist");
    }
    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const studentUser = new User({
      fullname: req.body.fullname,
      email: req.body.email,
      password: hashPassword,
    });
    const token = await jwt.sign(
      { userId: studentUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1hr",
      },
    );
    const student = await studentUser.save();
    res.status(200).json({ token, student });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Student Login
export const studentLogin = async (req, res) => {
  try {
    const { email, fullname, password } = req.body;
    if (!email || !password) {
      return res.status(400).json("Cannot submit empty credentials");
    }
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json("User does not exist");
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) return res.status(400).json("Invalid password");
    const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1hr",
    });

    res.status(200).json({ message: "Logged in succesfully", user, token });
  } catch (err) {
    res.status(500).json(err.message);
  }
};
