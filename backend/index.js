import express from "express";
import cookieParser from "cookie-parser"; // Corrected 'cookieparse' to 'cookie-parser'
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import authRoutes from "./Routes/auth.js";
import userRoutes from "./Routes/user.js";
import doctorRoutes from "./Routes/doctor.js";
import reviewRoutes from "./Routes/review.js"; 
import bookingRoutes from "./Routes/booking.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: [""],
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Api is working");
});

// database connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to mongoDB Database`.bgMagenta.white);
  } catch (error) {
    console.log(`Mongo Db error ${error}`.bgRed.white);
    process.exit(1);
  }
};

// middleware
app.use(express.json());
app.use(cookieParser());

// Routers
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/doctors", doctorRoutes);
app.use("/api/v1/reviews", reviewRoutes); 
app.use("/api/v1/bookings", bookingRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Server is working on port ${port}`.bgCyan.white);
});
