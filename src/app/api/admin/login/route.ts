import { NextResponse } from "next/server";
import { DEMO_ADMIN } from "@/lib/admin-data";

export async function POST(req: Request) {
  const body = await req.json();
  const email = String(body.email ?? "").trim().toLowerCase();
  const password = String(body.password ?? "");

  if (email !== DEMO_ADMIN.email || password !== DEMO_ADMIN.password) {
    return NextResponse.json(
      { success: false, error: "Invalid demo credentials. Use the credentials shown on the login page." },
      { status: 401 }
    );
  }

  const response = NextResponse.json({
    success: true,
    user: { name: DEMO_ADMIN.name, email: DEMO_ADMIN.email, role: DEMO_ADMIN.role },
  });

  response.cookies.set("hog_admin_session", "demo-authenticated", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return response;
}
