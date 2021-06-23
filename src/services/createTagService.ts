import { getCustomRepository } from "typeorm"
import { TagRepository } from "../repositories/tagRepository"

interface IStoreTagRequest {
    name: string
}

class CreateTagService {
    async execute({ name }: IStoreTagRequest) {
        const tagRepository = getCustomRepository(TagRepository);
        if (!name) {
            throw new Error('No name provided')
        }

        const tagAlreadyExists = await tagRepository.findOne({ name })

        if (tagAlreadyExists) {
            throw new Error('Tag already being used')
        }

        const tag = tagRepository.create({name})

        await tagRepository.save(tag)

        return tag
    }
}

export { CreateTagService }