import type { Metadata } from "next";
import { Check, Clock3, ShieldCheck, Sparkles, Star } from "lucide-react";
import { EstimateForm } from "@/components/EstimateForm";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Request a Complimentary Estimate",
  description: "Request a detailed estimate for countertops, kitchen remodeling, bathroom remodeling, cabinets, backsplash, and vanities.",
};

export default function EstimatePage() {
  return (
    <div className="material-surface min-h-screen">
      <section className="relative overflow-hidden pb-24 pt-24 text-white">
        <img src={IMAGES.kitchens[1]} alt="Luxury kitchen with premium surfaces" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d100e]/95 via-[#0d100e]/82 to-[#0d100e]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d100e] via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#303831]/25 bg-[#111512]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d8bd80]"><Sparkles size={13} /> Complimentary consultation</span>
            <h1 className="mt-6 text-5xl leading-[1.04] tracking-[-0.04em] sm:text-6xl">Tell us what home should feel like.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">Share your room, ideas, measurements, timing, and investment goals. We’ll turn the details into a thoughtful next step.</p>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/55"><span className="flex items-center gap-2"><Clock3 size={14} className="text-[#d8bd80]" /> Reply within one business day</span><span className="flex items-center gap-2"><ShieldCheck size={14} className="text-[#d8bd80]" /> No-obligation review</span><span className="flex items-center gap-2"><Star size={14} className="fill-[#c9ad70] text-[#d8bd80]" /> 4.9 average rating</span></div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-10 pb-24">
        <div className="mx-auto grid max-w-7xl gap-7 px-4 lg:grid-cols-[290px_1fr] lg:items-start">
          <aside className="space-y-4 lg:sticky lg:top-32">
            <div className="rounded-[26px] border border-[#303831] bg-[#111512] p-6 shadow-[0_20px_60px_-42px_rgba(65,39,22,.4)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d8bd80]">What happens next</p>
              <div className="mt-5 space-y-5">{[
                ["01", "We review your project", "A specialist checks scope, timing, and any files."],
                ["02", "We connect personally", "Your preferred contact method guides our follow-up."],
                ["03", "We measure & advise", "An on-site consultation confirms dimensions and material."],
                ["04", "You receive a proposal", "Clear inclusions, allowances, timing, and investment."],
              ].map(([number, title, text]) => <div key={number} className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0d100e] text-[9px] font-semibold text-[#d8bd80]">{number}</span><div><p className="text-xs font-semibold text-[#f4f0e8]">{title}</p><p className="mt-1 text-[10px] leading-4 text-[#aaa49b]">{text}</p></div></div>)}</div>
            </div>
            <div className="rounded-[26px] bg-[#0d100e] p-6 text-white"><div className="flex gap-0.5">{[1,2,3,4,5].map((star) => <Star key={star} size={13} className="fill-[#c9ad70] text-[#d8bd80]" />)}</div><p className="mt-4 text-sm leading-6 text-white/75">“Professional from the first call to the final walkthrough.”</p><p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-[#d8bd80]">Verified homeowner</p></div>
            <div className="rounded-2xl border border-[#303831] bg-[#111512] p-4"><p className="flex items-center gap-2 text-xs font-semibold text-[#f4f0e8]"><Check size={13} /> Demo notice</p><p className="mt-2 text-[10px] leading-4 text-[#aaa49b]">This presentation uses dummy data. Your test submission is confirmed but not permanently stored.</p></div>
          </aside>
          <EstimateForm />
        </div>
      </section>
    </div>
  );
}
