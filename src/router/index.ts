import { Router } from "express";
import { CreateFileController } from "modules/files/useCases/createFile/createFileController";

const routes = Router();

const createFileController = new CreateFileController();

routes.post("/files/create", createFileController.handle);
routes.get("/", (request, response) => {
  response.json({
    message: "Parabéns, vc chegou!",
    routeSpecs: {
      disponibleRoutes: ["/file/create"],
    },
  });
});

export { routes };
