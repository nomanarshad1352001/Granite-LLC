import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  Code2,
  FileText,
  FolderKanban,
  GalleryHorizontalEnd,
  Globe2,
  LayoutDashboard,
  LockKeyhole,
  PanelsTopLeft,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  UtensilsCrossed,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";
import { idealBuyers, platformFeatures, qualities, techStack } from "@/lib/admin-data";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Platform Overview",
  description: "Product title, purpose, ideal clients, features, qualities, architecture, and technology stack for House of Granite Studio.",
};

const journey = [
  { number: "01", title: "Attract", text: "High-end service pages, material education, galleries, reviews, local coverage, and clear calls to action.", icon: Globe2 },
  { number: "02", title: "Plan", text: "Customers create a kitchen layout, place cabinets and appliances, add measurements, notes, and contact details.", icon: UtensilsCrossed },
  { number: "03", title: "Qualify", text: "The team reviews project type, source, potential value, urgency, files, and preferred contact method.", icon: Target },
  { number: "04", title: "Estimate", text: "Sales tracks consultations, measurements, site visits, material preferences, and quote status.", icon: FileText },
  { number: "05", title: "Deliver", text: "Operations coordinates planning, templating, fabrication, installation, ownership, and deadlines.", icon: FolderKanban },
  { number: "06", title: "Grow", text: "Management monitors conversion, pipeline, revenue, project health, reviews, and website performance.", icon: BarChart3 },
];

const productAreas = [
  { title: "Customer website", description: "A premium, mobile-first remodeling storefront built to educate, establish trust, and convert visitors.", icon: PanelsTopLeft, href: "/" },
  { title: "Visual planner", description: "An interactive brief-builder that gives sales teams more context before the first consultation.", icon: UtensilsCrossed, href: "/kitchen-design-tool" },
  { title: "Admin workspace", description: "A polished command center for leads, projects, plans, content, media, staff, and reporting.", icon: LayoutDashboard, href: "/admin/login" },
];

export default function PlatformPage() {
  return (
    <div className="bg-[#f5f5f0]">
      <section className="relative overflow-hidden bg-[#0f211c] py-24 text-white sm:py-28">
        <div className="absolute inset-0 opacity-25">
          <img src={IMAGES.kitchens[1]} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f211c] via-[#0f211c]/95 to-[#0f211c]/70" />
        </div>
        <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-gold-500/15 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#e8ca73]/25 bg-[#e8ca73]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#eed991]">
              <Sparkles size={14} /> Product &amp; technical overview
            </div>
            <p className="mb-4 text-sm font-semibold text-[#e8ca73]">Project title</p>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              House of Granite<br /><span className="text-[#e8ca73]">Studio</span>
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-white/60">
              A premium remodeling sales and operations platform connecting customer inspiration, visual kitchen planning, estimate capture, project delivery, content management, and business intelligence.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/admin/login" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#e8ca73] px-6 py-3.5 text-sm font-semibold text-[#14231e] shadow-2xl shadow-black/15 transition hover:bg-[#f1dda0]">Explore admin demo <ArrowRight size={16} className="transition group-hover:translate-x-0.5" /></Link>
              <Link href="/kitchen-design-tool" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/10">Try visual planner <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-7 pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-4 md:grid-cols-3">
            {productAreas.map((area) => (
              <Link key={area.title} href={area.href} className="group rounded-3xl border border-white bg-white/90 p-7 shadow-[0_24px_60px_-35px_rgba(19,45,37,.35)] backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-xl">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#153f35] text-[#e8ca73]"><area.icon size={20} /></span>
                <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-[#1c2824]">{area.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#71807a]">{area.description}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-[#2f6d5c]">Open experience <ArrowRight size={13} className="transition group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ae7b27]">What the platform does</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#17231f]">One connected journey—from click to completion.</h2>
              <p className="mt-5 text-base leading-7 text-[#72807a]">The platform reduces fragmented communication and gives both customers and staff a clear path through the remodeling lifecycle.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {journey.map((step) => (
                <div key={step.number} className="rounded-2xl border border-[#dfe5e1] bg-white p-6 shadow-[0_10px_30px_-28px_rgba(20,45,38,.4)]">
                  <div className="flex items-center justify-between"><span className="text-xs font-semibold text-[#b17e2a]">{step.number}</span><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#edf4f1] text-[#397464]"><step.icon size={17} /></span></div>
                  <h3 className="mt-5 text-base font-semibold text-[#1e2b27]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#76837e]">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ae7b27]">Core capabilities</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#17231f]">A focused operating system for remodeling companies.</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-[#e1e6e3] bg-[#e1e6e3] md:grid-cols-2 lg:grid-cols-4">
            {platformFeatures.map((feature, index) => {
              const Icon = [UtensilsCrossed, Users, FileText, FolderKanban, Globe2, GalleryHorizontalEnd, Workflow, BarChart3][index];
              return (
                <div key={feature.title} className="bg-white p-6 transition hover:bg-[#fafbf9]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#163f36] text-[#e8ca73]"><Icon size={18} /></span>
                  <h3 className="mt-5 text-sm font-semibold text-[#22302b]">{feature.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-[#77847f]">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] bg-[#153f35] p-8 text-white sm:p-10">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e8ca73]/15 text-[#e8ca73]"><Target size={20} /></span>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#e8ca73]">Who will buy it</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">Ideal client profiles</h2>
              <p className="mt-4 text-sm leading-6 text-white/55">Best suited to renovation businesses that need a premium website plus a structured internal workflow.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {idealBuyers.map((buyer) => <div key={buyer} className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/[0.045] p-3"><Check size={14} className="mt-0.5 shrink-0 text-[#e8ca73]" /><span className="text-xs leading-5 text-white/75">{buyer}</span></div>)}
              </div>
            </div>

            <div className="rounded-[32px] border border-[#dfe5e1] bg-white p-8 sm:p-10">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#edf4f1] text-[#397464]"><ShieldCheck size={20} /></span>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#ae7b27]">Product qualities</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#17231f]">Designed to feel credible, calm, and commercially useful.</h2>
              <div className="mt-7 space-y-3">
                {qualities.map((quality) => <div key={quality} className="flex items-center gap-3 border-b border-[#edf0ee] pb-3 last:border-0"><CheckCircle2 size={16} className="shrink-0 text-[#397464]" /><span className="text-sm text-[#5f6d68]">{quality}</span></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#101f1a] py-24 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e8ca73]">Technology stack</p><h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">Modern, portable, and Vercel-ready.</h2><p className="mt-4 text-sm leading-6 text-white/50">This demo intentionally uses typed mock data. It requires no database, migration, seed process, or external authentication service.</p></div>
            <div className="flex gap-2"><span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] font-semibold text-white/55">NO DATABASE</span><span className="rounded-full border border-[#e8ca73]/20 bg-[#e8ca73]/10 px-3 py-1.5 text-[10px] font-semibold text-[#e8ca73]">DEPLOY READY</span></div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <div className="hidden grid-cols-[.65fr_1fr_1.8fr] bg-white/[0.06] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/35 md:grid"><span>Layer</span><span>Technology</span><span>Purpose</span></div>
            <div className="divide-y divide-white/10">
              {techStack.map((row) => <div key={row.layer} className="grid gap-2 px-6 py-5 transition hover:bg-white/[0.035] md:grid-cols-[.65fr_1fr_1.8fr] md:gap-6"><span className="text-[10px] font-semibold uppercase tracking-wider text-[#e8ca73]">{row.layer}</span><span className="text-sm font-semibold text-white">{row.technology}</span><span className="text-xs leading-5 text-white/45">{row.purpose}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { icon: LockKeyhole, title: "Demo authentication", text: "A working HTTP-only cookie session protects the admin route. Credentials are visible and prefilled for evaluation." },
              { icon: Code2, title: "Database-free data", text: "All CRM, project, content, and analytics records are typed mock data stored directly in the codebase for easy demos." },
              { icon: Rocket, title: "Production evolution", text: "Replace mock repositories with PostgreSQL or a CRM, then add real identity, file storage, email, and accounting integrations." },
            ].map((item) => <div key={item.title} className="rounded-3xl border border-[#e0e5e2] bg-[#f9faf8] p-7"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#356f5f] shadow-sm"><item.icon size={19} /></span><h3 className="mt-5 text-base font-semibold text-[#1e2b27]">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#74817c]">{item.text}</p></div>)}
          </div>

          <div className="mt-16 overflow-hidden rounded-[36px] bg-gradient-to-br from-[#173f36] to-[#0e2922] p-8 text-center text-white sm:p-12">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8ca73] text-[#173f36]"><Wrench size={21} /></div>
            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">See the complete business experience.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/55">Explore the customer website, build a kitchen plan, then sign into the administration workspace to see how the company receives and manages that demand.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/admin/login" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e8ca73] px-6 py-3.5 text-sm font-semibold text-[#14231e]">Open admin dashboard <ArrowRight size={16} /></Link>
              <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white">View customer website <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
