"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LuxuryTicker } from "@/components/LuxuryTicker";
import { LiveChat } from "@/components/LiveChat";
import { SiteMotion } from "@/components/SiteMotion";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <>
      <SiteMotion />
      <Header />
      <LuxuryTicker />
      <main key={pathname} className="site-page-enter min-h-screen">{children}</main>
      <Footer />
      <LiveChat />
    </>
  );
}
