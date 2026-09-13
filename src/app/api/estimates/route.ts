import { leads } from "@/lib/admin-data";

export async function POST(req: Request) {
  const body = await req.json();
  if (!body.fullName || !body.phone || !body.email) {
    return Response.json({ success: false, error: "Name, phone, and email are required." }, { status: 400 });
  }

  return Response.json({
    success: true,
    id: `EST-${Date.now().toString().slice(-6)}`,
    message: "Demo estimate received. Data is not permanently stored.",
  });
}

export async function GET() {
  return Response.json(leads);
}
