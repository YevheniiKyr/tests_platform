import { Request, Response, NextFunction } from "express";
import NotFoundException from "./Exceptions/NotFoundException.js";
import ValidationException from "./Exceptions/ValidationException.js";

const errorHandler = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    if (error instanceof NotFoundException) {
        return res.status(error.status).json({ message: error.message });
    }
    if (error instanceof ValidationException) {
        return res.status(400).send({
            message: error.message,
        });
    } else return res.status(500).json({ message: error.message });
};

export default errorHandler;