import Link from "next/link";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { DUMMY_DATA, IMAGES } from "@/lib/images";

const serviceLinks = [
  ["Countertops", "/countertops"], ["Kitchen Remodeling", "/kitchen-remodeling"], ["Bathroom Remodeling", "/bathroom-remodeling"],
  ["Cabinetry", "/cabinets"], ["Backsplash", "/backsplash"], ["Outdoor Kitchens", "/outdoor-kitchens"],
];
const exploreLinks = [
  ["Materials", "/materials"], ["Project Gallery", "/gallery"], ["Kitchen Planner", "/kitchen-design-tool"],
  ["Investment Guide", "/pricing"], ["Our Process", "/our-process"], ["Client Reviews", "/reviews"],
  ["Service Areas", "/service-areas"], ["Contractor Program", "/contractors"],
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#090b0a] text-[#aaa49b]">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_.75fr_.75fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3"><img src={IMAGES.logo} alt="House of Granite" className="h-14 w-14 rounded-2xl" /><div><p className="font-[Georgia] text-xl text-[#f4f0e8]">House of Granite</p><p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.28em] text-[#77746e]">Established 2009</p></div></Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#8e8a83]">Measured craftsmanship for kitchens, bathrooms, and architectural surfaces—designed around the way your home should feel.</p>
            <Link href="/estimate" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#c9ad70] px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider text-[#11120f] transition hover:bg-[#dfc98d]">Begin a consultation <ArrowUpRight size={13} /></Link>
          </div>

          <div><h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d8bd80]">Services</h3><ul className="mt-5 space-y-3">{serviceLinks.map(([label, href]) => <li key={href}><Link href={href} className="text-xs transition hover:text-[#f4f0e8]">{label}</Link></li>)}</ul></div>
          <div><h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d8bd80]">Explore</h3><ul className="mt-5 space-y-3">{exploreLinks.map(([label, href]) => <li key={href}><Link href={href} className="text-xs transition hover:text-[#f4f0e8]">{label}</Link></li>)}</ul></div>

          <div><h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d8bd80]">Visit &amp; connect</h3><div className="mt-5 space-y-4 text-xs"><a href="tel:+15551234567" className="flex items-start gap-3 transition hover:text-[#f4f0e8]"><Phone size={14} className="mt-0.5 shrink-0 text-[#6f9a87]" /><span>(555) 123-4567</span></a><a href="mailto:info@houseofgranitellc.com" className="flex items-start gap-3 transition hover:text-[#f4f0e8]"><Mail size={14} className="mt-0.5 shrink-0 text-[#6f9a87]" /><span>info@houseofgranitellc.com</span></a><div className="flex items-start gap-3"><MapPin size={14} className="mt-0.5 shrink-0 text-[#6f9a87]" /><span className="leading-5">123 Stone Avenue, Suite 100<br />Springfield, ST 12345</span></div><div className="flex items-start gap-3"><Clock3 size={14} className="mt-0.5 shrink-0 text-[#6f9a87]" /><span className="leading-5">Mon–Fri · 8–5<br />Saturday · 9–2</span></div></div><div className="mt-6 flex gap-2"><a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#303831] text-[9px] font-bold transition hover:border-[#65583d] hover:text-[#d8bd80]">IG</a><a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#303831] text-[9px] font-bold transition hover:border-[#65583d] hover:text-[#d8bd80]">FB</a></div></div>
        </div>

        <div className="mt-16 border-t border-white/[0.07] pt-8"><p className="text-center text-[8px] font-semibold uppercase tracking-[0.2em] text-[#5f5d58]">Materials &amp; supplier relationships</p><div className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-3">{DUMMY_DATA.brands.map((brand) => <span key={brand} className="text-[10px] font-semibold text-[#77746e]">{brand}</span>)}</div></div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">{DUMMY_DATA.certifications.map((cert) => <span key={cert} className="rounded-full border border-[#29312b] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-wider text-[#77746e]">{cert}</span>)}</div>
      </div>

      <div className="border-t border-white/[0.07]"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-[9px] text-[#5f5d58] sm:flex-row"><p>© {new Date().getFullYear()} House of Granite LLC. All rights reserved.</p><div className="flex gap-5"><Link href="/privacy-policy" className="hover:text-[#aaa49b]">Privacy</Link><Link href="/terms" className="hover:text-[#aaa49b]">Terms</Link><Link href="/platform" className="hover:text-[#aaa49b]">Platform</Link><Link href="/admin/login" className="hover:text-[#aaa49b]">Admin</Link></div></div></div>
    </footer>
  );
}
