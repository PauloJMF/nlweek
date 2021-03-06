import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/userRepository";

interface ICreateUserRequest {
    name: string
    email: string
    password: string
    admin?: boolean
}

class CreateUserService {
    async execute({ name, email, password, admin = false }: ICreateUserRequest) {
        const usersRepository = getCustomRepository(UserRepository)

        if (!email) {
            throw new Error('Email not set')
        }

        const userAlreadyExists = await usersRepository.findOne({ email })

        if (userAlreadyExists) {
            throw new Error('Email already being used')
        }

        const passwordHash = await hash(password, 8)

        const user = usersRepository.create({
            name,
            email,
            password: passwordHash,
            admin
        })

        await usersRepository.save(user)

        return user
    }
}

export { CreateUserService }