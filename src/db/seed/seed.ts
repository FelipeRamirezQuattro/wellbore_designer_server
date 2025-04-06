// seed.ts
import mongoose from "mongoose";
import Tool from "../models/Tool";

const DB_HOST =
  process.env.DB_HOST || "mongodb://localhost:27017/wellbore-designer";

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(DB_HOST);
    console.log("Connected to MongoDB...");

    // Create Sand Lift tool data
    const sandLift = {
      name: "Sand Lift",
      outerDiameter: 8.5, // Example value in inches
      innerDiameter: 7.875, // Example value in inches
      length: 40, // Example value in feet
      type: "Completion Tool",
      image: "sand-lift.jpg", // or URL to image
      description:
        "Advanced sand control tool for wellbore stabilization and production optimization",
    };

    // Create and save the tool
    const createdTool = await Tool.create(sandLift);

    console.log("Tool created successfully:", createdTool);

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
