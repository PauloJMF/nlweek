import { NextFunction, Request, Response } from "express";
import { CreateComplimentService } from "../services/createComplimentService";


class CreateComplimentController{
    async handle(request: Request, response: Response, next: NextFunction){
        const {tag_id, user_sender, user_receiver, message} = request.body

        const createComplimentService = new CreateComplimentService()

        const compliment = await createComplimentService.execute({tag_id, user_sender, user_receiver, message})

        return response.json(compliment)
    }
}

export {CreateComplimentController}