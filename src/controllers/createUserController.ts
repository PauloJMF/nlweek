import { Request, Response } from "express";
import { CreateUserService } from "../services/createUserService";
class CreateUserController {

    async handle(request: Request, response: Response) {
        const { name, email, password, admin } = request.body

        const userCreateService = new CreateUserService()

        const user = await userCreateService.execute({ name, email,password, admin })

        return response.json(user)
    }
}

export { CreateUserController }