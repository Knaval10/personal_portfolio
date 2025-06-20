// app/api/get-cv/route.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(): Promise<Response> {
  try {
    const latestCV = await prisma.document.findFirst({
      orderBy: { uploadedAt: "desc" },
    });

    if (!latestCV) {
      return new Response(JSON.stringify({ error: "No CV found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(latestCV), {
      status: 200,
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
