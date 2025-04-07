import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/client";

export const prisma: PrismaClient<
  Prisma.PrismaClientOptions,
  never,
  DefaultArgs
> = new PrismaClient();
