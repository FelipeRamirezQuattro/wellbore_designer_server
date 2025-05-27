import { Request, Response, NextFunction } from "express";
import { STATUS_CODES } from "../utils/constants";
import * as response from "../utils/response";

interface CustomResponse extends Response {
  totalRecords?: number;
  numberOfPages?: number;
  data?: any;
}

export const pageable = (req: Request, res: Response, next: NextFunction) => {
  const pageParam: string = (req.query.page as string) || "1";
  const perPageParam: string = (req.query.limit as string) || "10";
  let page = parseInt(pageParam);
  let limit = parseInt(perPageParam);
  if (isNaN(page) || page < 1) {
    page = 1;
  }
  if (limit < 0) {
    limit = 0;
  }
  req.body.pagination = {
    page,
    limit,
  };
  next();
};

export const headers = (req: Request, res: CustomResponse) => {
  const totalRecords = res.totalRecords;
  const numberOfPages = res.numberOfPages;
  const currentPage = req.body.pagination.page;

  totalRecords && res.header("X-Total-Records", totalRecords.toString());
  numberOfPages && res.header("X-Total-Pages", numberOfPages.toString());
  currentPage && res.header("X-Current-Page", currentPage.toString());

  response.success(res, STATUS_CODES.OK, {
    data: res.data,

    success: true,
  });
};
