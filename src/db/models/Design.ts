import { Schema, model } from "mongoose";
import { IDesign } from "../../types";

const DesignSchema = new Schema<IDesign>({
  tools: [{ type: Schema.Types.ObjectId, ref: "Tool", required: true }],
  createdAt: { type: Date, default: Date.now },
});

export default model<IDesign>("Design", DesignSchema);
