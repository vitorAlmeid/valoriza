import {  Request, Response, NextFunction, response, request } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if(!authorization) {
        return res
            .status(401)
            .json({ message: 'unauthorized' });

    };

    let token = authorization.split(' ')[1]

    try {  
        const { sub } = verify(token, 'f8c9af15163cccca7200bc531fb96278') as IPayload;
        req.user_id = sub;
        return next();
    } catch (error) {
        return res
            .status(401)
            .json({ message: 'unauthorized' });
    };
};
