import { Request, Response } from "express";

import { CreateFileUseCase } from "./createFileUseCase";

export class CreateFileController {
  async handle(request: Request, response: Response) {
    const { date, name, contactsList } = request.body;

    const createFileUseCase = new CreateFileUseCase();

    const result = await createFileUseCase.execute({
      date,
      name,
      contactsList,
    });

    response.json(result);
  }
}
