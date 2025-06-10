// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// Add PrismaClient to the global scope to prevent multiple instances
// in development mode (Next.js hot reloading can cause this)
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    // Optional: Add logging for better debugging in development
    // log: ['query', 'info', 'warn', 'error'],
  });

// In development, store the PrismaClient instance globally
// so it's not recreated on hot reloads
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma; // You can still export it as default if you prefer
