import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentRepository";

class ListUserReceivedComplimentsService {
    async execute(user_id){
        const complimentsRepository = await getCustomRepository(ComplimentRepository);

        const compliments = await complimentsRepository.find({
            where: {
                user_receiver: user_id
            }
        });

        return compliments;
    };
}

export { ListUserReceivedComplimentsService };
