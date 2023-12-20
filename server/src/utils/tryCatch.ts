import { NextFunction, Request, RequestHandler, Response } from "express";

export const tryCatch =
    (controller: RequestHandler<any>) => async (req: Request, res: Response, next: NextFunction) => {
        try {
            await controller(req, res, next);
        } catch (e) {
            return next(e);
        }
    };