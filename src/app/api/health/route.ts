export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({
    ok: true,
    mode: "demo",
    database: false,
    service: "House of Granite Studio",
    timestamp: new Date().toISOString(),
  });
}
