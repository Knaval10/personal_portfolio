export function withCors(handler: any) {
  return async (...args: any[]) => {
    const [req] = args;
    const res = new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow all origins (or specify domain)
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });

    if (req.method === "OPTIONS") {
      return res;
    }

    return handler(...args);
  };
}
