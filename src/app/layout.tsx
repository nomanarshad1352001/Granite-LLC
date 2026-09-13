import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://houseofgranite.example"),
  title: {
    default: "House of Granite Studio | Remodeling Sales & Operations Platform",
    template: "%s | House of Granite Studio",
  },
  description:
    "A premium countertop, kitchen, and bathroom remodeling website with visual kitchen planning, lead capture, project operations, content management, and a SaaS-style admin workspace.",
  keywords: [
    "granite countertops",
    "quartz countertops",
    "kitchen remodeling",
    "bathroom remodeling",
    "kitchen planner",
    "remodeling CRM",
    "countertop business software",
  ],
  openGraph: {
    title: "House of Granite Studio",
    description: "From first inspiration to final installation—one connected remodeling platform.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-granite-900 antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
