// controllers/tools.ts
import { NextFunction, Request, Response } from "express";
import Tool from "../db/models/Tool";
import * as apiResponse from "../utils/response";

interface CustomResponse extends Response {
  totalRecords?: number;
  numberOfPages?: number;
  data?: any;
}

export const getTools = async (req: Request, res: Response) => {
  try {
    const tools = await Tool.find();
    apiResponse.success(res, 200, {
      data: tools,
      message: "Tools fetched successfully",
    });
  } catch (error) {
    console.error(error);
    apiResponse.internalServerError(res);
  }
};
export const getToolsPaginated = async (
  req: Request,
  res: CustomResponse,
  next: NextFunction
): Promise<void> => {
  try {
    const { page = 1, limit = 5 } = req.body.pagination;
    const search = req.query.search as string;
    const tools = await Tool.find({
      ...(search && {
        $or: [
          { name: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } },
        ],
      }),
    })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });
    const count = await Tool.countDocuments();
    res.totalRecords = count;
    res.numberOfPages = Math.ceil(count / limit);
    res.data = tools;
    next();
  } catch (error) {
    console.error(error);
    apiResponse.internalServerError(res);
  }
};
