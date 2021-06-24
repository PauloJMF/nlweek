import { getCustomRepository, getRepository } from "typeorm"
import { Compliment } from "../entities/compliments"
import { UserRepository } from "../repositories/userRepository"

interface IComplimentStoreRequest{
    tag_id:number,
    user_sender:number,
    user_receiver:number,
    message:string
}

class CreateComplimentService {
    async execute({tag_id, user_sender, user_receiver, message}: IComplimentStoreRequest){
        const complimentsRepository = getRepository(Compliment)
        const usersRepository = getCustomRepository(UserRepository)

        if( user_sender === user_receiver){
            throw new Error('Sender and receiver cannot be the same')
        }

        const userReceiverExists = await usersRepository.findOne(user_receiver)

        if(!userReceiverExists){
            throw new Error('Users receiver does not exists')
        }
        
        const compliment = complimentsRepository.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        await complimentsRepository.save(compliment)

        return compliment
    }
}

export {CreateComplimentService}