import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentRepository";
import { UserRepository } from "../repositories/UserRepository";


interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService{
    async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
        const complimentRepository = await getCustomRepository(ComplimentRepository);
        const userRepository = await getCustomRepository(UserRepository);

        if (!tag_id || !user_sender || !user_receiver || !message) {
            throw new Error("Missing params");
        };

        if (user_sender === user_receiver) {
            throw new Error("Cannot assign a compliment to yourself");
        };

        const userReceiverExist = await userRepository.findOne(user_receiver);

        if(!userReceiverExist) {
            throw new Error("User Receiver does not exists.")
        };

        const compliment = complimentRepository.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        });

        await complimentRepository.save(compliment);

        return compliment;
    };
};

export { CreateComplimentService };