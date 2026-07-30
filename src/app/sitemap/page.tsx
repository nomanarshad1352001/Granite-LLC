import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap | House of Granite LLC",
  description: "Complete sitemap of House of Granite LLC website.",
};

const sections = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Request an Estimate", href: "/estimate" },
      { label: "Project Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Countertops", href: "/countertops" },
      { label: "Kitchen Remodeling", href: "/kitchen-remodeling" },
      { label: "Bathroom Remodeling", href: "/bathroom-remodeling" },
      { label: "Cabinets", href: "/cabinets" },
      { label: "Backsplash Installation", href: "/backsplash" },
      { label: "Outdoor Kitchens", href: "/outdoor-kitchens" },
      { label: "Fireplace Surrounds", href: "/fireplace" },
      { label: "Kitchen Design Tool", href: "/kitchen-design-tool" },
    ],
  },
  {
    title: "Materials",
    links: [
      { label: "All Materials", href: "/materials" },
      { label: "Granite", href: "/materials/granite" },
      { label: "Quartz", href: "/materials/quartz" },
      { label: "Quartzite", href: "/materials/quartzite" },
      { label: "Marble", href: "/materials/marble" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Process", href: "/our-process" },
      { label: "Reviews & Testimonials", href: "/reviews" },
      { label: "FAQ", href: "/faq" },
      { label: "Service Areas", href: "/service-areas" },
      { label: "Financing", href: "/financing" },
      { label: "Contractors & Builders", href: "/contractors" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-granite-950 mb-8">Sitemap</h1>
        <p className="text-granite-600 mb-10">
          Find all pages on the House of Granite LLC website below.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-bold text-granite-950 text-lg mb-4 pb-2 border-b border-granite-200">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-granite-600 hover:text-gold-600 transition text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
