"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, LayoutDashboard, Menu, Phone, X } from "lucide-react";
import { IMAGES } from "@/lib/images";

const navItems = [
  { label: "Services", children: [
    { label: "Countertops", description: "Fabrication & installation", href: "/countertops" },
    { label: "Kitchen Remodeling", description: "Complete transformations", href: "/kitchen-remodeling" },
    { label: "Bathroom Remodeling", description: "Showers, vanities & tile", href: "/bathroom-remodeling" },
    { label: "Cabinets", description: "Thoughtful storage systems", href: "/cabinets" },
    { label: "Backsplash", description: "Tile & natural stone", href: "/backsplash" },
    { label: "Outdoor & Fireplace", description: "Stone beyond the kitchen", href: "/outdoor-kitchens" },
  ]},
  { label: "Materials", children: [
    { label: "All Materials", description: "Compare every surface", href: "/materials" },
    { label: "Granite", description: "Natural & enduring", href: "/materials/granite" },
    { label: "Quartz", description: "Refined & effortless", href: "/materials/quartz" },
    { label: "Quartzite", description: "Rare natural movement", href: "/materials/quartzite" },
    { label: "Marble", description: "Timeless character", href: "/materials/marble" },
  ]},
  { label: "Kitchen Planner", href: "/kitchen-design-tool" },
  { label: "Gallery", href: "/gallery" },
  { label: "Company", children: [
    { label: "Our Story", description: "Established craftsmanship", href: "/about" },
    { label: "Our Process", description: "From measure to reveal", href: "/our-process" },
    { label: "Client Reviews", description: "Verified experiences", href: "/reviews" },
    { label: "Service Areas", description: "Where we work", href: "/service-areas" },
    { label: "Contractors & Builders", description: "Trade partnerships", href: "/contractors" },
    { label: "FAQ", description: "Helpful answers", href: "/faq" },
  ]},
  { label: "Investment", href: "/pricing" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#090b0a]/95 text-[#f4f0e8] shadow-[0_12px_40px_-28px_rgba(0,0,0,.9)] backdrop-blur-xl">
      <div className="border-b border-white/[0.06] bg-[#0d100e]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-[9px] uppercase tracking-[0.16em] text-[#77746e] sm:text-[10px]">
          <div className="flex items-center gap-4"><span className="hidden sm:inline">Established 2009</span><i className="hidden h-1 w-1 rounded-full bg-[#c9ad70] sm:block" /><span>Licensed &amp; insured craftsmanship</span></div>
          <div className="flex items-center gap-4"><Link href="/admin/login" className="hidden items-center gap-1.5 transition hover:text-[#c9ad70] md:flex"><LayoutDashboard size={11} /> Studio</Link><a href="tel:+15551234567" className="flex items-center gap-1.5 font-semibold text-[#d8bd80] transition hover:text-[#f0dfae]"><Phone size={11} /> (555) 123-4567</a></div>
        </div>
      </div>

      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4">
        <Link href="/" className="group flex items-center gap-3">
          <img src={IMAGES.logo} alt="House of Granite" width={46} height={46} className="rounded-xl transition group-hover:scale-[1.03]" />
          <div className="hidden leading-tight sm:block"><div className="font-[Georgia] text-lg tracking-[-0.02em] text-[#f4f0e8]">House of Granite</div><div className="mt-1 text-[8px] font-semibold uppercase tracking-[0.3em] text-[#77746e]">Stone · Kitchens · Baths</div></div>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {navItems.map((item) => {
            const active = item.href ? pathname === item.href : item.children?.some((child) => pathname === child.href);
            return (
              <div key={item.label} className="relative" onMouseEnter={() => item.children && setOpenDropdown(item.label)} onMouseLeave={() => setOpenDropdown(null)}>
                {item.children ? (
                  <button className={`flex items-center gap-1 rounded-lg px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] transition ${active ? "text-[#d8bd80]" : "text-[#aaa49b] hover:bg-white/[0.04] hover:text-[#f4f0e8]"}`}>{item.label}<ChevronDown size={12} className={`transition ${openDropdown === item.label ? "rotate-180" : ""}`} /></button>
                ) : (
                  <Link href={item.href!} className={`rounded-lg px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] transition ${active ? "text-[#d8bd80]" : "text-[#aaa49b] hover:bg-white/[0.04] hover:text-[#f4f0e8]"}`}>{item.label}</Link>
                )}
                {item.children && openDropdown === item.label && (
                  <div className="animate-slide-down absolute left-0 top-full w-[284px] overflow-hidden rounded-2xl border border-[#2b312c] bg-[#111512]/98 p-2 shadow-[0_28px_80px_-20px_rgba(0,0,0,.85)] backdrop-blur-xl">
                    {item.children.map((child) => <Link key={child.href} href={child.href} className="group flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/[0.045]"><span className="h-7 w-px bg-[#343b35] transition group-hover:bg-[#c9ad70]" /><span><span className="block text-xs font-semibold text-[#d7d2c9] transition group-hover:text-[#f4f0e8]">{child.label}</span><span className="mt-0.5 block text-[9px] text-[#66645f]">{child.description}</span></span></Link>)}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <Link
            href="/admin/login"
            className="inline-flex items-center gap-2 rounded-full border border-[#d6c8b7] bg-[#fffdf9] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#493b32] shadow-sm transition hover:border-[#b28a52] hover:bg-[#faf6ec]"
          >
            <LayoutDashboard size={14} className="text-[#8c693d]" />
            Admin Panel
          </Link>
          <Link href="/estimate" className="rounded-full bg-[#c9ad70] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#11120f] shadow-[0_12px_35px_-16px_rgba(201,173,112,.55)] transition hover:bg-[#dfc98d]">Request consultation</Link>
        </div>
        <button onClick={() => setMobileOpen((value) => !value)} className="rounded-xl border border-[#2d342e] p-2.5 text-[#d7d2c9] transition hover:border-[#65583d] xl:hidden" aria-label="Toggle menu">{mobileOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-110px)] overflow-y-auto border-t border-white/[0.06] bg-[#0d100e] px-4 py-4 xl:hidden">
          {navItems.map((item) => <div key={item.label}>{item.children ? <><button onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)} className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[#c2beb6]"><span>{item.label}</span><ChevronDown size={14} className={`transition ${openDropdown === item.label ? "rotate-180" : ""}`} /></button>{openDropdown === item.label && <div className="mb-2 grid gap-1 pl-3">{item.children.map((child) => <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)} className="rounded-xl border-l border-[#343b35] px-4 py-2.5 text-xs text-[#8e8a83] hover:border-[#c9ad70] hover:bg-white/[0.03] hover:text-[#f4f0e8]">{child.label}</Link>)}</div>}</> : <Link href={item.href!} onClick={() => setMobileOpen(false)} className="block rounded-xl px-3 py-3 text-xs font-semibold uppercase tracking-wider text-[#c2beb6] hover:bg-white/[0.03]">{item.label}</Link>}</div>)}
          <div className="mt-3 grid gap-2 border-t border-[#29312b] pt-4"><Link href="/estimate" onClick={() => setMobileOpen(false)} className="rounded-xl bg-[#c9ad70] px-5 py-3 text-center text-xs font-semibold text-[#11120f]">Request consultation</Link><Link href="/admin/login" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-2 rounded-xl border border-[#343b35] px-5 py-3 text-xs font-semibold text-[#aaa49b]"><LayoutDashboard size={14} /> Admin Panel</Link></div>
        </div>
      )}
    </header>
  );
}
