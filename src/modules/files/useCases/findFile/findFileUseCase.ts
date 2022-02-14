import { prisma } from "database/prismaClient";

export class FindFileUseCase {
  async execute() {
    try {
      const response = await prisma.file.findMany({
        include: { ContactList: true },
      });

      return response;
    } catch (error) {
      return error;
    }
  }
}
