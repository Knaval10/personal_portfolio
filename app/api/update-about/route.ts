import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    console.log("DATABASE_URL:", process.env.DATABASE_URL); // ✅ TEMP LOG

    const data = await prisma.about.findMany();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}
