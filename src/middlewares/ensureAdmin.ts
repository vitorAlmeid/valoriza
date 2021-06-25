import {  Request, Response, NextFunction, response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';



export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
    const userRepository = getCustomRepository(UserRepository);
    const { user_id: id } = req;

    const { admin } = await userRepository.findOne(id);
    
    if (admin) {
        return next();
    };

    return res
        .status(401)
        .json({ message: 'unauthorized' });
};
