import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminDashboard } from "@/components/AdminDashboard";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "House of Granite Studio business operations dashboard.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const cookieStore = await cookies();
  if (cookieStore.get("hog_admin_session")?.value !== "demo-authenticated") {
    redirect("/admin/login");
  }

  return <AdminDashboard />;
}
