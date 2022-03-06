import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();
const createUserController = new CreateUserController();

router.post("/users", createUserController.handle); //already passing request and response

export { router };
