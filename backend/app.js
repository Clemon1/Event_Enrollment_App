import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import adminRouter from "./routes/adminRoutes.js";
import studentRouter from "./routes/studentAuthRouter.js";
import eventRouter from "./routes/eventRouter.js";
import bookingRouter from "./routes/bookingRoutes.js";

const app = express();
const PORT = process.env.PORT;
// MongoDB Connection
const dbConnect = async () => {
  try {
    await mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.DB_URL);
    console.log("Database Connected");
  } catch (err) {
    console.log(err.message);
  }
};
dbConnect();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Routes
app.use("/admin", adminRouter);
app.use("/student", studentRouter);
app.use("/event", eventRouter);
app.use("/booking", bookingRouter);

app.listen(PORT, () => console.log(`app is running on PORT ${PORT}`));
