import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

import cluster from "cluster";
import os from "os";
import cors from "cors";
import bodyParser from "body-parser";
import adminRouter from "./routes/adminRoutes.js";
import studentRouter from "./routes/studentAuthRouter.js";
import eventRouter from "./routes/eventRouter.js";
import bookingRouter from "./routes/bookingRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
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
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  // parse application/json
  app.use(bodyParser.json());

  // Routes
  app.use("/admin", adminRouter);
  app.use("/student", studentRouter);
  app.use("/event", eventRouter);
  app.use("/categories", categoryRouter);
  app.use("/booking", bookingRouter);

  app.listen(PORT, () =>
    console.log(`Worker ${process.pid} started and is running on PORT ${PORT}`),
  );
}
