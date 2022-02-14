import { Router } from "express";
import { CreateFileController } from "modules/files/useCases/createFile/createFileController";

const routes = Router();

const createFileController = new CreateFileController();

routes.post("/files/create", createFileController.handle);

export { routes };
