import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "House of Granite LLC | Countertops, Kitchen & Bathroom Remodeling",
  description:
    "Premium granite, quartz & marble countertops. Expert kitchen and bathroom remodeling. Professional fabrication & installation. Free estimates.",
  keywords:
    "granite countertops, quartz countertops, kitchen remodeling, bathroom remodeling, countertop installation, cabinets, backsplash",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-granite-900 antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
