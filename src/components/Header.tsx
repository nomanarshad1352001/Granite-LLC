"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { IMAGES } from "@/lib/images";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Countertops", href: "/countertops" },
      { label: "Kitchen Remodeling", href: "/kitchen-remodeling" },
      { label: "Bathroom Remodeling", href: "/bathroom-remodeling" },
      { label: "Cabinets", href: "/cabinets" },
      { label: "Backsplash", href: "/backsplash" },
      { label: "Outdoor Kitchens", href: "/outdoor-kitchens" },
      { label: "Fireplace Surrounds", href: "/fireplace" },
    ],
  },
  {
    label: "Materials",
    href: "#",
    children: [
      { label: "All Materials", href: "/materials" },
      { label: "Granite", href: "/materials/granite" },
      { label: "Quartz", href: "/materials/quartz" },
      { label: "Quartzite", href: "/materials/quartzite" },
      { label: "Marble", href: "/materials/marble" },
    ],
  },
  { label: "Kitchen Design Tool", href: "/kitchen-design-tool" },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Company",
    href: "#",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Process", href: "/our-process" },
      { label: "Reviews", href: "/reviews" },
      { label: "FAQ", href: "/faq" },
      { label: "Service Areas", href: "/service-areas" },
      { label: "Contractors & Builders", href: "/contractors" },
      { label: "Financing", href: "/financing" },
      { label: "Careers", href: "/careers" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-granite-950 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">✨ Premium Countertops & Remodeling Services</span>
            <Link href="/estimate" className="text-gold-400 hover:text-gold-300 font-medium">
              Free Estimates →
            </Link>
          </div>
          <a
            href="tel:+15551234567"
            className="flex items-center gap-1.5 hover:text-gold-400 transition font-medium"
          >
            <Phone size={14} />
            (555) 123-4567
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src={IMAGES.logo} 
              alt="House of Granite Logo" 
              width={50} 
              height={50}
              className="rounded-lg"
            />
            <div className="leading-tight hidden sm:block">
              <div className="font-bold text-granite-950 text-xl tracking-tight">
                House of Granite
              </div>
              <div className="text-xs text-granite-500 tracking-widest uppercase">
                Est. 2009
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-granite-700 hover:text-granite-950 transition rounded-md hover:bg-granite-50">
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-granite-700 hover:text-granite-950 transition rounded-md hover:bg-granite-50"
                  >
                    {item.label}
                  </Link>
                )}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-white rounded-xl shadow-xl border border-granite-100 py-2 min-w-[220px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-granite-700 hover:bg-gradient-to-r hover:from-gold-50 hover:to-transparent hover:text-granite-950 transition"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/estimate"
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition shadow-lg shadow-gold-500/25"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-granite-700 hover:bg-granite-100 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-granite-100 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.label ? null : item.label
                        )
                      }
                      className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-granite-700 rounded-lg hover:bg-granite-50"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 space-y-0.5 pb-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2.5 text-sm text-granite-600 hover:text-granite-950 rounded-lg hover:bg-granite-50"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-3 text-sm font-medium text-granite-700 rounded-lg hover:bg-granite-50"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-granite-100 space-y-3">
              <Link
                href="/estimate"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-gold-500 to-gold-600 text-white px-5 py-3 rounded-lg text-sm font-semibold"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:+15551234567"
                className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-granite-700 border border-granite-200 rounded-lg hover:bg-granite-50"
              >
                <Phone size={16} />
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
