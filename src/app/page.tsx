import Link from "next/link";
import {
  ArrowRight,
  Award,
  Bath,
  Check,
  ChevronRight,
  Gem,
  Hammer,
  Home,
  MoveRight,
  Phone,
  Play,
  Quote,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { BeforeAfterReveal } from "@/components/BeforeAfterReveal";
import { PricingPreview } from "@/components/PricingPreview";
import { ReviewRail } from "@/components/ReviewRail";
import { ServiceAreaRail } from "@/components/ServiceAreaRail";
import { DUMMY_DATA, IMAGES } from "@/lib/images";

const services = [
  { title: "Bespoke countertops", eyebrow: "Natural & engineered stone", description: "Precision-templated granite, quartz, quartzite, and marble—fabricated to honor the architecture of your home.", href: "/countertops", image: IMAGES.kitchens[0], number: "01" },
  { title: "Kitchen transformations", eyebrow: "Design · Build · Coordinate", description: "A considered renovation experience spanning layouts, cabinetry, surfaces, lighting, plumbing, and installation.", href: "/kitchen-remodeling", image: IMAGES.kitchens[4], number: "02" },
  { title: "Bathroom retreats", eyebrow: "Tile · Vanities · Showers", description: "Layered material palettes, custom showers, tailored vanities, and careful coordination from demolition through reveal.", href: "/bathroom-remodeling", image: IMAGES.bathrooms[0], number: "03" },
  { title: "Cabinetry & details", eyebrow: "Storage with intention", description: "Cabinet systems, islands, backsplashes, sinks, and finishing details that make a room feel complete.", href: "/cabinets", image: IMAGES.kitchens[5], number: "04" },
];

const materials = [
  { name: "Granite", note: "Natural character", href: "/materials/granite", image: IMAGES.countertops[3] },
  { name: "Quartz", note: "Quiet consistency", href: "/materials/quartz", image: IMAGES.countertops[1] },
  { name: "Quartzite", note: "Rare movement", href: "/materials/quartzite", image: IMAGES.countertops[2] },
  { name: "Marble", note: "Timeless patina", href: "/materials/marble", image: IMAGES.countertops[4] },
];

const process = [
  { number: "I", title: "Discover", text: "We listen to how you live, what the room needs to do, and how you want it to feel." },
  { number: "II", title: "Define", text: "Measurements, materials, scope, allowances, and timing become a clear written proposal." },
  { number: "III", title: "Craft", text: "Your project moves through procurement, templating, fabrication, and coordinated preparation." },
  { number: "IV", title: "Reveal", text: "Experienced installers complete the work, protect your home, and walk through every detail." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[820px] overflow-hidden bg-[#17110e] text-white lg:min-h-[calc(100vh-112px)]">
        <img src={IMAGES.hero} alt="Tailored luxury kitchen by House of Granite" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17110e]/95 via-[#17110e]/68 to-[#17110e]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17110e]/80 via-transparent to-[#17110e]/20" />
        <div className="absolute left-[58%] top-[18%] hidden h-[55%] w-px bg-gradient-to-b from-transparent via-white/25 to-transparent lg:block" />

        <div className="relative mx-auto flex min-h-[820px] max-w-7xl items-center px-4 py-24 lg:min-h-[calc(100vh-112px)]">
          <div className="grid w-full gap-16 lg:grid-cols-[1.12fr_.88fr] lg:items-end">
            <div className="animate-fade-up max-w-3xl">
              <div className="mb-8 flex items-center gap-4"><span className="h-px w-10 bg-[#c7a66c]" /><span className="text-[10px] font-semibold uppercase tracking-[.28em] text-[#d7bd8a]">Countertops · Kitchens · Baths</span></div>
              <h1 className="text-5xl leading-[.98] tracking-[-.05em] text-[#fffdf9] sm:text-6xl lg:text-[82px]">
                Rooms of<br />lasting <span className="italic text-[#d6bd8e]">character.</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-white/60 sm:text-lg">Premium stonework and complete remodeling, brought together through measured design, skilled fabrication, and thoughtful project care.</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/estimate" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#c6a66c] px-7 py-4 text-xs font-bold uppercase tracking-[.12em] text-[#21170f] shadow-[0_20px_48px_-22px_rgba(198,166,108,.65)] transition hover:bg-[#dfc896]">Begin a consultation <ArrowRight size={15} className="transition group-hover:translate-x-1" /></Link>
                <Link href="/gallery" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[.06] px-7 py-4 text-xs font-semibold uppercase tracking-[.12em] text-white backdrop-blur-md transition hover:bg-white/10"><Play size={14} /> View our work</Link>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-[10px] uppercase tracking-[.12em] text-white/45">
                <span className="flex items-center gap-2"><Check size={12} className="text-[#d6bd8e]" /> Licensed &amp; insured</span>
                <span className="flex items-center gap-2"><Check size={12} className="text-[#d6bd8e]" /> 15+ years of craft</span>
                <span className="flex items-center gap-2"><Check size={12} className="text-[#d6bd8e]" /> Warranty-backed work</span>
              </div>
            </div>

            <div className="hidden justify-end pb-2 lg:flex">
              <div className="w-[330px] border-l border-white/15 pl-8">
                <Quote size={26} className="text-[#c6a66c]" />
                <p className="mt-5 font-[Georgia] text-xl leading-8 text-white/85">“The details feel intentional. The entire room finally belongs to the house.”</p>
                <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-5"><div><p className="text-xs font-semibold text-white">Sarah M.</p><p className="mt-1 text-[9px] uppercase tracking-wider text-white/40">Verified kitchen client</p></div><div className="flex gap-0.5">{[1,2,3,4,5].map((item) => <Star key={item} size={11} className="fill-[#c6a66c] text-[#c6a66c]" />)}</div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/15 backdrop-blur-md"><div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-4 sm:grid-cols-4">{[
          ["2,500+", "Completed projects"], ["4.9 / 5", "Client rating"], ["98%", "On-time delivery"], ["45 mi", "Service radius"],
        ].map(([value,label]) => <div key={label} className="px-4 py-5 text-center"><p className="font-[Georgia] text-xl text-white sm:text-2xl">{value}</p><p className="mt-1 text-[8px] uppercase tracking-[.16em] text-white/40">{label}</p></div>)}</div></div>
      </section>

      {/* Brand statement */}
      <section className="bg-[#f8f5ef] py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[.65fr_1.35fr] lg:items-start">
          <div className="flex items-center gap-3 pt-2 text-[10px] font-semibold uppercase tracking-[.22em] text-[#9a7546]"><Sparkles size={12} /> House of Granite</div>
          <div>
            <h2 className="max-w-4xl text-4xl leading-[1.15] text-[#2a211b] sm:text-5xl lg:text-[58px]">We shape enduring materials into rooms that feel <span className="italic text-[#826a51]">inevitable.</span></h2>
            <div className="mt-10 grid gap-8 border-t border-[#ddd2c4] pt-8 sm:grid-cols-2"><p className="text-sm leading-7 text-[#796d61]">Our work starts with proportion, function, and honest material. Every edge, opening, seam, fixture, and transition is considered as part of the whole room.</p><p className="text-sm leading-7 text-[#796d61]">Homeowners receive one clear process from early ideas through measurement, fabrication, trade coordination, installation, and final walkthrough.</p></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#fffdf9] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#9a7546]">The house, considered</p><h2 className="mt-3 text-4xl text-[#2a211b] sm:text-5xl">Our areas of craft.</h2></div><Link href="/our-process" className="group inline-flex items-center gap-2 text-xs font-semibold text-[#6b5746]">How we work <MoveRight size={15} className="transition group-hover:translate-x-1" /></Link></div>

          <div className="grid gap-5 lg:grid-cols-2">
            {services.map((service, index) => (
              <Link key={service.title} href={service.href} className={`group relative overflow-hidden rounded-[28px] ${index === 0 || index === 3 ? "min-h-[520px]" : "min-h-[400px]"}`}>
                <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c140f]/90 via-[#1c140f]/24 to-transparent" />
                <span className="absolute right-5 top-5 font-[Georgia] text-sm text-white/45">{service.number}</span>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8"><p className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#d6bd8e]">{service.eyebrow}</p><h3 className="mt-2 text-3xl text-white">{service.title}</h3><p className="mt-3 max-w-lg text-xs leading-6 text-white/55">{service.description}</p><span className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-white">Explore service <ChevronRight size={12} className="transition group-hover:translate-x-1" /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-[#211a16] py-24 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]"><div><div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.22em] text-[#d6bd8e]"><Gem size={12} /> Material library</div><h2 className="mt-4 text-4xl text-white sm:text-5xl">Surfaces with a story.</h2><p className="mt-5 max-w-sm text-sm leading-7 text-white/45">Natural movement, quiet consistency, tactile finishes, and the right performance for the room.</p><Link href="/materials" className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-white/70 transition hover:border-[#c6a66c]/50 hover:text-white">Compare materials <ArrowRight size={12} /></Link></div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{materials.map((material,index) => <Link key={material.name} href={material.href} className={`group relative overflow-hidden rounded-[22px] ${index % 2 ? "mt-10" : "mb-10"}`}><img src={material.image} alt={material.name} className="h-[310px] w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-95" /><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 p-4"><h3 className="text-xl text-white">{material.name}</h3><p className="mt-1 text-[9px] uppercase tracking-wider text-[#d6bd8e]">{material.note}</p></div></Link>)}</div></div>
        </div>
      </section>

      {/* Transformation */}
      <section className="material-surface py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-[.52fr_1.48fr] lg:items-end">
            <div className="pb-2"><div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.22em] text-[#9a7546]"><Home size={12} /> Transformation</div><h2 className="mt-4 text-4xl leading-tight text-[#2a211b] sm:text-5xl">Move the line.<br />See the difference.</h2><p className="mt-5 max-w-sm text-sm leading-7 text-[#796d61]">Drag across the image to compare an existing kitchen with its renewed character.</p><div className="mt-8 border-l border-[#b28a52] pl-5"><p className="font-[Georgia] text-xl text-[#3c3028]">A brighter, more generous kitchen</p><p className="mt-2 text-xs leading-6 text-[#827467]">Replanned circulation · tailored cabinetry · new stone surfaces · layered lighting</p></div></div>
            <BeforeAfterReveal />
          </div>
        </div>
      </section>

      {/* Why trust */}
      <section className="bg-[#fffdf9] py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[560px]"><img src={IMAGES.work[0]} alt="Craftsperson working on a renovation" className="absolute left-0 top-0 h-[82%] w-[82%] rounded-[30px] object-cover" /><img src={IMAGES.countertops[0]} alt="Natural stone slabs" className="absolute bottom-0 right-0 h-[42%] w-[45%] rounded-[24px] border-8 border-[#fffdf9] object-cover" /><div className="absolute bottom-[12%] left-5 rounded-2xl border border-white/20 bg-[#211a16]/85 p-5 text-white backdrop-blur-xl"><Award size={18} className="text-[#d6bd8e]" /><p className="mt-3 font-[Georgia] text-xl">15+ years</p><p className="mt-1 text-[9px] uppercase tracking-wider text-white/45">Local craftsmanship</p></div></div>
          <div><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#9a7546]">Trust is built into the process</p><h2 className="mt-4 text-4xl leading-tight text-[#2a211b] sm:text-5xl">Clear communication.<br />Careful execution.</h2><p className="mt-6 max-w-lg text-sm leading-7 text-[#796d61]">The most beautiful room is only successful when the experience of creating it feels equally considered. That means a clear scope, accountable ownership, respect for your home, and thoughtful follow-through.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{[
            [ShieldCheck,"Licensed & insured","Appropriate protection for your home and project."], [Ruler,"Measured precisely","Digital and physical templating for a confident fit."], [Hammer,"Installed carefully","Experienced craftspeople and a clean job site."], [Bath,"Coordinated fully","Design, materials, trades, timing, and final inspection."],
          ].map(([Icon,title,text]) => { const ItemIcon = Icon as typeof ShieldCheck; return <div key={String(title)} className="rounded-2xl border border-[#e1d7ca] bg-[#f8f5ef] p-5"><ItemIcon size={17} className="text-[#547466]" /><h3 className="mt-4 font-[Inter] text-sm font-semibold tracking-normal text-[#302720]">{String(title)}</h3><p className="mt-2 text-[11px] leading-5 text-[#827467]">{String(text)}</p></div>; })}</div><Link href="/about" className="mt-8 inline-flex items-center gap-2 text-xs font-semibold text-[#6b5746]">Meet House of Granite <ArrowRight size={13} /></Link></div>
        </div>
      </section>

      <PricingPreview />

      {/* Process */}
      <section className="bg-[#f1ece4] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center"><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#9a7546]">A calm, guided experience</p><h2 className="mt-4 text-4xl text-[#2a211b] sm:text-5xl">From first idea to final reveal.</h2></div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-[#ddd2c4] bg-[#ddd2c4] md:grid-cols-4">{process.map((step,index) => <div key={step.title} className="group bg-[#fffdf9] p-7 transition hover:bg-[#faf6ef]"><div className="flex items-center justify-between"><span className="font-[Georgia] text-sm text-[#b28a52]">{step.number}</span>{index < process.length - 1 && <MoveRight size={14} className="hidden text-[#c5b5a2] md:block" />}</div><h3 className="mt-12 font-[Inter] text-base font-semibold tracking-normal text-[#302720]">{step.title}</h3><p className="mt-3 text-xs leading-6 text-[#796d61]">{step.text}</p></div>)}</div>
          <div className="mt-10 text-center"><Link href="/our-process" className="inline-flex items-center gap-2 rounded-full bg-[#233d34] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#315246]">See the complete process <ArrowRight size={13} /></Link></div>
        </div>
      </section>

      <ServiceAreaRail />
      <ReviewRail />

      {/* Brand partners */}
      <section className="border-y border-[#e4dbcf] bg-[#fffdf9] py-14">
        <div className="mx-auto max-w-7xl px-4"><p className="text-center text-[8px] font-semibold uppercase tracking-[.24em] text-[#a39689]">Material and supplier relationships</p><div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">{DUMMY_DATA.brands.map((brand) => <span key={brand} className="text-sm font-semibold text-[#a39a90] transition hover:text-[#6b5746]">{brand}</span>)}</div></div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#211a16] py-28 text-white">
        <img src={IMAGES.kitchens[6]} alt="Elegant finished kitchen" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#211a16] via-[#211a16]/92 to-[#233d34]/75" />
        <div className="relative mx-auto max-w-5xl px-4 text-center"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#c6a66c]/35 text-[#d6bd8e]"><Sparkles size={18} /></div><h2 className="mx-auto mt-7 max-w-4xl text-4xl leading-tight text-white sm:text-6xl">Let’s make the room feel like it was always meant to be there.</h2><p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/50">Share your plans, photos, measurements, and timing. We’ll help define the right next step.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/estimate" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c6a66c] px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#21170f] transition hover:bg-[#dfc896]">Request consultation <ArrowRight size={14} /></Link><a href="tel:+15551234567" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[.05] px-7 py-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-white/10"><Phone size={14} /> (555) 123-4567</a></div></div>
      </section>
    </>
  );
}
