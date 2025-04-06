import { Response } from "express";
import { STATUS_CODES } from "./constants";

export const success = function (res: Response, status: number, data: object) {
  return res.status(status).send(data);
};

export const error = function (res: Response, status: number, errors: object) {
  return res.status(status).send(errors);
};

export const emptySuccess = function (
  res: Response,
  status: number = STATUS_CODES.OK
) {
  return res.status(status).send();
};

export const internalServerError = (res: Response) => {
  return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).send({
    message: "Contacta al administrador del sistema.",
    success: false,
  });
};
