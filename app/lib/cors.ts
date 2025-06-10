import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function withCors(
  handler: (req: NextRequest) => Promise<Response>
): (req: NextRequest) => Promise<Response> {
  return async (req: NextRequest) => {
    if (req.method === "OPTIONS") {
      return new NextResponse(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*", // Change to your domain if needed
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    }

    const response = await handler(req);

    // Clone and add CORS headers to the real response
    const modifiedHeaders = new Headers(response.headers);
    modifiedHeaders.set("Access-Control-Allow-Origin", "*");
    modifiedHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    modifiedHeaders.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: modifiedHeaders,
    });
  };
}
