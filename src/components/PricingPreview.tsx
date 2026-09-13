import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { servicePricing } from "@/lib/service-pricing";

export function PricingPreview() {
  return (
    <section className="material-surface py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d8bd80]">Investment guidance</span>
            <h2 className="mt-4 text-4xl leading-tight text-[#f4f0e8] sm:text-5xl">Start with clarity.<br />Design with confidence.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#d7d2c9]">Explore realistic planning ranges before your consultation. Final proposals are measured, itemized, and tailored to your home.</p>
            <Link href="/pricing" className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#303831] bg-[#111512] px-5 py-2.5 text-xs font-semibold text-[#d7d2c9] transition hover:bg-white">View complete investment guide <ArrowRight size={13} /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {servicePricing.slice(0, 3).map((item) => (
              <Link key={item.id} href={`/estimate?service=${item.id}`} className="group rounded-[26px] border border-[#303831] bg-[#111512] p-5 shadow-[0_18px_55px_-42px_rgba(66,40,24,.42)] transition hover:-translate-y-1 hover:shadow-xl">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0d100e] text-[#d8bd80]"><item.icon size={17} /></span>
                <h3 className="mt-5 text-lg text-[#f4f0e8]">{item.shortName}</h3>
                <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#aaa49b]">Starting around</p>
                <p className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-[#f4f0e8]">{item.startingAt}</p>
                <p className="mt-1 min-h-8 text-[10px] leading-4 text-[#d8bd80]">{item.range}</p>
                <span className="mt-4 flex items-center gap-1 text-[10px] font-semibold text-[#d7d2c9]">Select &amp; estimate <ArrowRight size={11} className="transition group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-7 flex items-center gap-2 text-[10px] text-[#8e8a83]"><Info size={12} /> Illustrative starting prices vary by material, measurements, cutouts, demolition, access, and project scope.</p>
      </div>
    </section>
  );
}
