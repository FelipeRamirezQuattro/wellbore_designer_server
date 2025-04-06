import { Schema, model } from "mongoose";
import { ITool } from "../../types";

const ToolSchema = new Schema<ITool>({
  name: { type: String, required: true },
  partNumber: { type: String, required: true },
  outerDiameter: { type: Number, required: true },
  innerDiameter: { type: Number, required: true },
  topThreadConnection: { type: String, required: true },
  bottomThreadConnection: { type: String, required: true },
  length: { type: Number, required: true, default: 10 },
  type: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model<ITool>("Tool", ToolSchema);
