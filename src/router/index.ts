import { Router } from "express";
import { CreateFileController } from "modules/files/useCases/createFile/createFileController";
import { FindFileController } from "modules/files/useCases/findFile/findFileController";

const routes = Router();

const createFileController = new CreateFileController();
const findeFileController = new FindFileController();

routes.post("/files/create", createFileController.handle);

routes.get("/get/all", findeFileController.handle);

routes.get("/", (request, response) => {
  response.json({
    message: "Parabéns, você chegou aqui!",
    routeSpecs: {
      disponibleRoutes: ["/file/create", "/get/all"],
    },
  });
});

export { routes };
