import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, CircleDollarSign, Info, Ruler, ShieldCheck, Sparkles } from "lucide-react";
import { IMAGES } from "@/lib/images";
import { priceFactors, servicePricing } from "@/lib/service-pricing";

export const metadata: Metadata = {
  title: "Investment Guide",
  description: "Transparent starting prices and typical investment ranges for countertops, kitchen remodeling, bathroom remodeling, cabinets, backsplash, and vanities.",
};

const projectImages = [IMAGES.kitchens[0], IMAGES.kitchens[2], IMAGES.bathrooms[0], IMAGES.kitchens[5], IMAGES.backsplash[1], IMAGES.bathrooms[4]];

export default function PricingPage() {
  return (
    <>
      <section className="relative flex min-h-[540px] items-end overflow-hidden pb-20 pt-28 text-white">
        <img src={IMAGES.countertops[3]} alt="Premium natural stone surface" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d100e]/95 via-[#0d100e]/80 to-[#0d100e]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d100e] via-transparent to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#303831]/25 bg-[#111512]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d8bd80]"><CircleDollarSign size={14} /> Investment guide</span>
            <h1 className="mt-6 text-5xl leading-[1.04] tracking-[-0.04em] sm:text-6xl">Beautiful work begins with clear expectations.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">Explore common starting points and typical project ranges. Every home is measured and quoted individually for an accurate, written proposal.</p>
            <div className="mt-8 flex flex-wrap gap-5 text-xs text-white/55"><span className="flex items-center gap-2"><Check size={14} className="text-[#d8bd80]" /> Complimentary consultation</span><span className="flex items-center gap-2"><Check size={14} className="text-[#d8bd80]" /> Itemized proposal</span><span className="flex items-center gap-2"><Check size={14} className="text-[#d8bd80]" /> Financing available</span></div>
          </div>
        </div>
      </section>

      <section className="material-surface py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 max-w-3xl"><span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d8bd80]">Service investments</span><h2 className="mt-3 text-4xl text-[#f4f0e8] sm:text-5xl">Thoughtful options for every room.</h2><p className="mt-4 text-sm leading-7 text-[#aaa49b]">Select a service to begin a tailored estimate. Prices below are planning guidance, not binding offers.</p></div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {servicePricing.map((item, index) => (
              <article key={item.id} className="card-hover group overflow-hidden rounded-[28px] border border-[#303831] bg-[#111512] shadow-[0_20px_60px_-45px_rgba(70,42,24,.4)]">
                <div className="relative h-44 overflow-hidden"><img src={projectImages[index]} alt={item.shortName} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#0d100e]/70 to-transparent" />{item.popular && <span className="absolute left-4 top-4 rounded-full bg-[#c9ad70] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#11120f]">Most requested</span>}<span className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#d8bd80] backdrop-blur-xl"><item.icon size={18} /></span></div>
                <div className="p-6"><h3 className="text-xl text-[#f4f0e8]">{item.shortName}</h3><p className="mt-3 text-xs leading-6 text-[#d7d2c9]">{item.description}</p><div className="my-5 h-px bg-[#29312b]" /><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8e8a83]">Projects start around</p><p className="mt-1 text-3xl font-semibold tracking-[-0.035em] text-[#f4f0e8]">{item.startingAt}</p><p className="mt-1 text-[11px] font-medium text-[#d8bd80]">{item.range}</p><Link href={`/estimate?service=${item.id}`} className="mt-6 flex items-center justify-between rounded-xl bg-[#c9ad70] px-4 py-3 text-xs font-semibold text-[#11120f] transition hover:bg-[#dfc98d]">Build my estimate <ArrowRight size={14} /></Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111512] py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[34px]"><img src={IMAGES.kitchens[4]} alt="Luxury completed kitchen" className="h-[500px] w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#0d100e]/65 to-transparent" /><div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-[#0d100e]/65 p-5 text-white backdrop-blur-xl"><div className="flex items-center gap-3"><ShieldCheck size={20} className="text-[#d8bd80]" /><div><p className="text-sm font-semibold">No surprise pricing</p><p className="mt-1 text-[11px] text-white/55">Scope changes are documented and approved before work proceeds.</p></div></div></div></div>
          <div><span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d8bd80]">What shapes the proposal</span><h2 className="mt-3 text-4xl text-[#f4f0e8]">Every detail has a purpose—and a price.</h2><p className="mt-5 text-sm leading-7 text-[#aaa49b]">Our consultations establish what is essential, where to invest, and where thoughtful alternatives can protect the budget.</p><div className="mt-8 space-y-3">{priceFactors.map((factor, index) => <div key={factor} className="flex items-start gap-4 rounded-2xl border border-[#303831] bg-[#111512] p-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0d100e] text-[10px] font-semibold text-[#d8bd80]">0{index + 1}</span><p className="pt-1.5 text-sm text-[#d7d2c9]">{factor}</p></div>)}</div></div>
        </div>
      </section>

      <section className="bg-[#0d100e] py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center"><span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111512]/15 text-[#d8bd80]"><Ruler size={20} /></span><h2 className="mt-6 text-4xl">The right number begins with the right measurements.</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/55">Tell us what you are planning, include approximate dimensions and photos, and our team will prepare the next step.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/estimate" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#c9ad70] px-6 py-3.5 text-sm font-semibold text-[#11120f] transition hover:bg-[#dfc98d]">Request a tailored estimate <ArrowRight size={15} /></Link><Link href="/kitchen-design-tool" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold">Plan your kitchen <ArrowRight size={15} /></Link></div><p className="mt-6 flex items-center justify-center gap-2 text-[10px] text-white/35"><Info size={12} /> Price ranges are illustrative dummy data for this website demonstration.</p></div>
      </section>
    </>
  );
}
