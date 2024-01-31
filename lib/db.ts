import { PrismaClient } from "@prisma/client";

// to prevent many prisma client instances for nextjs hot reload

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
