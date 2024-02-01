import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from "@prisma/extension-accelerate";

export const db =
  globalThis.prisma || new PrismaClient().$extends(withAccelerate());

declare global {
  var prisma: PrismaClient | undefined;
}

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
