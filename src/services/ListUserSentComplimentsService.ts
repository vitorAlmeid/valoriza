import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentRepository";

class ListUserSentComplimentsService {
    async execute(user_id){
        const complimentsRepository = await getCustomRepository(ComplimentRepository);

        const compliments = await complimentsRepository.find({
            where: {
                user_sender: user_id
            }
        });

        return compliments;
    };
}

export { ListUserSentComplimentsService };
