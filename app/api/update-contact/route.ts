import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const body: ContactRequestBody = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    const newContact = await prisma.contact.create({
      data: { name, email, message },
    });

    return new Response(JSON.stringify(newContact), { status: 201 });
  } catch (error: unknown) {
    const errMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";
    return new Response(JSON.stringify({ error: errMessage }), {
      status: 500,
    });
  }
}
