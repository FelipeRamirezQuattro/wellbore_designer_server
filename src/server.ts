// backend/src/app.ts
import express, { Application, Request, Response } from "express";
// import { Request, Response } from "express-serve-static-core";
import cors from "cors";
import mongoose from "mongoose";
import Tool from "./db/models/Tool";
import Design from "./db/models/Design";
import { ITool, IDesign, DesignDTO } from "./types";
import * as response from "./utils/response";
import { STATUS_CODES } from "./utils/constants";
import toolRoutes from "./routes/tool.routes";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.PORT);
const app: Application = express();
const PORT = process.env.PORT || 4000;
const DB_HOST =
  process.env.DB_HOST || "mongodb://localhost:27017/wellbore-designer";

var corsOptions = {
  origin: ["http://localhost:5173", "https://well.osidesigner.com"],
  methods: "GET,PUT,PATCH,POST,DELETE",
  exposedHeaders: ["X-Total-Records", "X-Total-Pages", "X-Current-Page"],
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Database connection
const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(DB_HOST);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

// API Endpoints
app.use("/api/tools", toolRoutes);

app.get("/api/test", (req: Request, res: Response) => {
  res.status(200).json({ message: "Test endpoint working" });
});

// app.post(
//   "/api/designs",
//   async (
//     req: Request<Record<string, any>, Record<string, any>, DesignDTO>,
//     res: Response<IDesign | { message: string }, Record<string, any>>,
//     next: NextFunction
//   ) => {
//     try {
//       const design = new Design({
//         tools: req.body.tools,
//       });
//       const savedDesign = await design.save();
//       res.status(201).json(savedDesign);
//     } catch (error) {
//       console.error("Error saving design:", error);
//       if (error instanceof mongoose.Error.ValidationError) {
//         return res.status(400).json({ message: error.message });
//       }
//       res.status(500).json({ message: "Server error" });
//     }
//   }
// );

// Server startup
const startServer = async (): Promise<void> => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
