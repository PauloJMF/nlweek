import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../entities/tags";

@EntityRepository(Tag)
class TagRepository extends Repository<Tag>{

}

export { TagRepository }