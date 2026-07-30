import { db } from "@/db";
import { contractorSubmissions } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await db
      .insert(contractorSubmissions)
      .values({
        companyName: body.companyName,
        contactName: body.contactName,
        phone: body.phone,
        email: body.email,
        projectType: body.projectType || null,
        description: body.description || null,
        deadline: body.deadline || null,
        fileUrls: body.fileUrls || [],
      })
      .returning();
    return Response.json({ success: true, id: result[0].id });
  } catch (error) {
    console.error("Contractor submission error:", error);
    return Response.json(
      { success: false, error: "Failed to submit" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const rows = await db
      .select()
      .from(contractorSubmissions)
      .orderBy(desc(contractorSubmissions.createdAt));
    return Response.json(rows);
  } catch (error) {
    console.error("Fetch contractor submissions error:", error);
    return Response.json([], { status: 500 });
  }
}
