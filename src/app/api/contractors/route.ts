const contractorRequests = [
  { id: "TR-291", companyName: "Lee Custom Homes", contactName: "Marcus Lee", projectType: "Multi-unit countertops", deadline: "Apr 18", status: "Pricing" },
  { id: "TR-290", companyName: "Brooks Development", contactName: "Ethan Brooks", projectType: "12-unit granite package", deadline: "May 6", status: "Site Visit" },
  { id: "TR-289", companyName: "Axis Build Group", contactName: "Noah Patel", projectType: "Commercial reception desk", deadline: "Mar 29", status: "Won" },
];

export async function POST(req: Request) {
  const body = await req.json();
  if (!body.companyName || !body.contactName || !body.phone || !body.email) {
    return Response.json({ success: false, error: "Company, contact, phone, and email are required." }, { status: 400 });
  }

  return Response.json({
    success: true,
    id: `TR-${Date.now().toString().slice(-5)}`,
    message: "Demo trade request received. Data is not permanently stored.",
  });
}

export async function GET() {
  return Response.json(contractorRequests);
}
