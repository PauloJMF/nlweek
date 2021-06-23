import { Router } from "express";
import { CreateTagController } from "./controllers/createTagController";
import { CreateUserController } from "./controllers/createUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router()

const createUserController = new CreateUserController()

const createTagController = new CreateTagController()

router.post('/tags', [ensureAdmin], createTagController.handle)

router.post('/users', createUserController.handle)

export { router }