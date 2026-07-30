import { db } from "@/db";
import { estimates } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await db
      .insert(estimates)
      .values({
        fullName: body.fullName,
        phone: body.phone,
        email: body.email,
        projectAddress: body.projectAddress || null,
        city: body.city || null,
        zipCode: body.zipCode || null,
        propertyType: body.propertyType || null,
        projectType: body.projectType || null,
        timeline: body.timeline || null,
        customerType: body.customerType || null,
        description: body.description || null,
        measurements: body.measurements || null,
        preferredMaterial: body.preferredMaterial || null,
        contactMethod: body.contactMethod || null,
        appointmentDate: body.appointmentDate || null,
        services: body.services || [],
        fileUrls: body.fileUrls || [],
      })
      .returning();
    return Response.json({ success: true, id: result[0].id });
  } catch (error) {
    console.error("Estimate submission error:", error);
    return Response.json(
      { success: false, error: "Failed to submit estimate" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const rows = await db.select().from(estimates).orderBy(desc(estimates.createdAt));
    return Response.json(rows);
  } catch (error) {
    console.error("Fetch estimates error:", error);
    return Response.json([], { status: 500 });
  }
}
