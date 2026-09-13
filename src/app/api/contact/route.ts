export async function POST(req: Request) {
  const body = await req.json();
  if (!body.name || !body.email || !body.message) {
    return Response.json({ success: false, error: "Name, email, and message are required." }, { status: 400 });
  }

  return Response.json({
    success: true,
    id: `MSG-${Date.now().toString().slice(-6)}`,
    message: "Demo message received. Data is not permanently stored.",
  });
}
