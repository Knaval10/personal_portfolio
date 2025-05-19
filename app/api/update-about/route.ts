import { withCors } from "@/app/lib/cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async () => {
  try {
    const data = await prisma.about.findMany();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // or your exact frontend domain
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

export const GET = withCors(handler);
