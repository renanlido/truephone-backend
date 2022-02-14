import { prisma } from "database/prismaClient";
import { v4 as uuid } from "uuid";

interface ICreateFileUseCase {
  name: string;
  date: string;
  contactsList: {
    message: string;
    phone: string;
    status: boolean;
  }[];
}

export class CreateFileUseCase {
  async execute({
    name,
    date,
    contactsList,
  }: ICreateFileUseCase): Promise<ICreateFileUseCase> {
    const customName = `${name}-${uuid()}`;

    try {
      await prisma.file.create({
        data: {
          name: customName,
          date,
          ContactList: {
            create: contactsList,
          },
        },
      });
    } catch (error) {
      return error;
    }

    return {
      name: customName,
      date,
      contactsList,
    };
  }
}
