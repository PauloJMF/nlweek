import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/createTagController";
import { CreateUserController } from "./controllers/createUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { CreateComplimentService } from "./services/createComplimentService";

const router = Router()

const createUserController = new CreateUserController()

const createTagController = new CreateTagController()

const authenticateUserController = new AuthenticateUserController()

const createComplimentController = new CreateComplimentController()


router.post('/tags', [ensureAdmin], createTagController.handle)

router.post('/users', createUserController.handle)

router.post('/compliments', createComplimentController.handle)

router.post('/login', authenticateUserController.handle)

export { router }