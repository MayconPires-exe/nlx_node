import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"


interface ICreateComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {

    async execute({ tag_id, user_receiver, user_sender, message }: ICreateComplimentRequest) {
        const ComplimentsRepositories = getCustomRepository(ComplimentsRepositories);
    }
}

export { CreateComplimentService }