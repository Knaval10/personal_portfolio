import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(): Promise<Response> {
  try {
    const data = await prisma.about.findFirst(); // Only one exists

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: unknown) {
    const errMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";

    return new Response(JSON.stringify({ error: errMessage }), {
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}
