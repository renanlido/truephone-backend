import { Request, Response } from "express";

import { FindFileUseCase } from "./findFileUseCase";

export class FindFileController {
  async handle(request: Request, response: Response) {
    const createFileUseCase = new FindFileUseCase();

    const result = await createFileUseCase.execute();

    response.json(result);
  }
}
