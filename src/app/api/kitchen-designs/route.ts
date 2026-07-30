import { db } from "@/db";
import { kitchenDesigns } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await db
      .insert(kitchenDesigns)
      .values({
        fullName: body.fullName,
        phone: body.phone,
        email: body.email,
        propertyAddress: body.propertyAddress || null,
        contactMethod: body.contactMethod || null,
        kitchenShape: body.kitchenShape || null,
        designData: body.designData || null,
        notes: body.notes || null,
        fileUrls: body.fileUrls || [],
      })
      .returning();
    return Response.json({ success: true, id: result[0].id });
  } catch (error) {
    console.error("Kitchen design submission error:", error);
    return Response.json(
      { success: false, error: "Failed to submit design" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const rows = await db.select().from(kitchenDesigns).orderBy(desc(kitchenDesigns.createdAt));
    return Response.json(rows);
  } catch (error) {
    console.error("Fetch kitchen designs error:", error);
    return Response.json([], { status: 500 });
  }
}
