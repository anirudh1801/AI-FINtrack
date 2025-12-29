export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { seedTransactions } from "@/actions/seed";

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return new Response(
      JSON.stringify({ error: "Seed route disabled in production" }),
      { status: 403 }
    );
  }

  const result = await seedTransactions();
  return Response.json(result);
}
