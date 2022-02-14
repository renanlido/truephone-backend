import { prisma } from "database/prismaClient";
import { v4 as uuid } from "uuid";

type ContactsList = [{ message: string; phone: string; status: boolean }];

interface ICreateFileUseCase {
  name: string;
  date: string;
  contactsList: ContactsList;
}

export class CreateFileUseCase {
  async execute({
    name,
    date,
    contactsList,
  }: ICreateFileUseCase): Promise<ICreateFileUseCase> {
    const customName = `${name}-${uuid()}`;

    await prisma.file.create({
      data: {
        name: customName,
        date,
        ContactList: {
          create: contactsList,
        },
      },
    });

    return {
      name: customName,
      date,
      contactsList,
    };
  }
}
