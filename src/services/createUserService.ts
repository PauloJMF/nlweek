import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/userRepository";

interface ICreateUserRequest {
    name: string
    email: string
    admin?: boolean
}

class CreateUserService {
    async execute({ name, email, admin }: ICreateUserRequest) {
        const usersRepository = getCustomRepository(UserRepository)

        if (!email) {
            throw new Error('Email not set')
        }

        const userAlreadyExists = await usersRepository.findOne({ email })

        if (userAlreadyExists) {
            throw new Error('Email already being used')
        }

        const user = usersRepository.create({
            name,
            email,
            admin
        })

        await usersRepository.save(user)

        return user
    }
}

export { CreateUserService }