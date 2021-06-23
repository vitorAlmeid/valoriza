import {  Request, Response, NextFunction, response } from 'express';



export function ensureAdmin(req: Request, res: Response, next: NextFunction) {
    const admin = false;

    if (admin) {
        return next();
    };

    return res
        .status(401)
        .json({ message: 'unauthorized' });
};
