import { Document } from "mongoose";

export interface ITool extends Document {
  name: string;
  partNumber: string;
  outerDiameter: number;
  innerDiameter: number;
  topThreadConnection: string;
  bottomThreadConnection: string;
  length: number;
  type: string;
  image: string;
  description: string;
  createdAt: Date;
}

export interface IDesign extends Document {
  tools: ITool["_id"][];
  createdAt: Date;
}

export interface DesignDTO {
  tools: string[];
}
