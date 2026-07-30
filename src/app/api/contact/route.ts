import { db } from "@/db";
import { contactMessages } from "@/db/schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await db
      .insert(contactMessages)
      .values({
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        subject: body.subject || null,
        message: body.message,
      })
      .returning();
    return Response.json({ success: true, id: result[0].id });
  } catch (error) {
    console.error("Contact submission error:", error);
    return Response.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}
