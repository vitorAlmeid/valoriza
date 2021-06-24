import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const userRepository = await getCustomRepository(UserRepository);

        if (!email || !password) {
            throw new Error("Missing params");
        };

        const user = await userRepository.findOne({
            email,
        });

        if(!user) {
            throw new Error("Invalid e-mail/password.");
        };

        const isAuthenticated = await compare(password, user.password);

        if(!isAuthenticated) {
            throw new Error("Invalid e-mail/password.");
        };

        const token = sign({
            email: user.email,
        }, 'f8c9af15163cccca7200bc531fb96278', {
            subject: user.id,
            expiresIn: "1h"
        });

        return token;
    };
};

export { AuthenticateUserService };
