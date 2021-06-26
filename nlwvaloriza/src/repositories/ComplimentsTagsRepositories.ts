import { Repository, EntityRepository } from "typeorm";
import { Compliment } from "../entities/Compliment";

@EntityRepository(Compliment)
class ComplimentsTagsRepositories extends Repository<Compliment> {

}

export { ComplimentsTagsRepositories };