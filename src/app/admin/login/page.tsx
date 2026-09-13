import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/AdminLoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Sign in to the House of Granite Studio administration workspace.",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  const cookieStore = await cookies();
  if (cookieStore.get("hog_admin_session")?.value === "demo-authenticated") {
    redirect("/admin");
  }

  return <AdminLoginForm />;
}
