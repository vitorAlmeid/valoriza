import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";
import { hash } from "bcryptjs";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {

    async execute ({ name, email, admin, password } : IUserRequest) {
        const userRepository = getCustomRepository(UserRepository);

        if (!email) {
            throw new Error("Missing params: e-mail");
        };

        const userAlreadyExists = await userRepository.findOne({ email });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        };

        const passwordHash = await hash(password, 8);

        const user = userRepository.create({
            name,
            email,
            admin,
            password: passwordHash
        });

        await userRepository.save(user);

        delete user.password

        return user;
    }
}

export { CreateUserService };