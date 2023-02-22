import User from "../models/userModel.js";
import bcrypt from "bcrypt";

// Admin Register
export const adminRegister = async (req, res) => {
  try {
    const { email, fullname, password } = req.body;
    if ((!fullname, !email, !password)) {
      return res.status(400).json("Cannot submit empty credentials");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(404).json("User already exist");
    }
    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const adminUser = new User({
      fullname: req.body.fullname,
      email: req.body.email,
      isAdmin: true,
      password: hashPassword,
    });
    const admin = await adminUser.save();
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Admin Login
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json("Cannot submit empty credentials");
    }
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json("User does not exist");
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) return res.status(400).json("Invalid password");
    if (user.isAdmin === false)
      return res
        .status(400)
        .json("You are not an admin please return back to your own page");

    res.status(200).json("Logged in succesfully");
  } catch (err) {
    res.status(500).json(err.message);
  }
};
