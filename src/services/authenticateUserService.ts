import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/userRepository"

interface IAuthenticateRequest{
    email:string
    password:string
}
class AuthenticateUserService {
    async execute({email, password}: IAuthenticateRequest){
        const userRepository = getCustomRepository(UserRepository)

        const user = await userRepository.findOne({
            email
        })
        
        if(!user){
            throw new Error ('Email/password incorrect')
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error ('Email/password incorrect')
        }
        
        const token = sign(
            {
                email:user.email,
            },
            process.env.secret as string, 
            {
                subject: user.name,
                expiresIn: '1d'
            }
            )
        return token
    }
}

export {AuthenticateUserService}