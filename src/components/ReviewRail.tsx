import Link from "next/link";
import { ArrowRight, CheckCircle, Quote, Star } from "lucide-react";
import { DUMMY_DATA } from "@/lib/images";

export function ReviewRail() {
  const reviews = DUMMY_DATA.reviews.slice(0, 8);
  const loopedReviews = [...reviews, ...reviews];

  return (
    <section className="relative overflow-hidden bg-[#0d100e] py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-[#1c392f]/35 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 text-center">
        <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c9ad70]">
          <Star size={12} fill="currentColor" /> Client stories
        </span>
        <h2 className="mt-4 text-4xl text-[#f4f0e8] sm:text-5xl">Craftsmanship people remember.</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#8e8a83]">Thoughtful communication, precise installation, and rooms that feel considered long after the work is complete.</p>
        <div className="mt-5 flex items-center justify-center gap-3">
          <div className="flex gap-0.5">{[1,2,3,4,5].map((item) => <Star key={item} size={15} className="fill-[#c9ad70] text-[#c9ad70]" />)}</div>
          <span className="text-xs font-semibold text-[#d7d2c9]">4.9 average</span>
          <span className="text-[10px] text-[#706b63]">· 450+ five-star experiences</span>
        </div>
      </div>

      <div className="review-rail relative mt-14">
        <div className="review-rail-track flex w-max gap-5 px-2">
          {loopedReviews.map((review, index) => (
            <article key={`${review.id}-${index}`} className="w-[320px] shrink-0 rounded-[26px] border border-[#29312b] bg-[#141815] p-6 shadow-[0_24px_70px_-42px_rgba(0,0,0,.9)] transition hover:border-[#65583d] sm:w-[390px] sm:p-7">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">{Array.from({ length: review.rating }).map((_, star) => <Star key={star} size={12} className="fill-[#c9ad70] text-[#c9ad70]" />)}</div>
                <Quote size={25} className="text-[#504b43]" fill="currentColor" />
              </div>
              <p className="mt-5 min-h-[112px] text-sm leading-7 text-[#c2beb6]">“{review.text}”</p>
              <div className="mt-5 flex items-center gap-3 border-t border-[#29312b] pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#496057] bg-gradient-to-br from-[#26483b] to-[#111512] text-[10px] font-bold text-[#d8bd80]">{review.name.split(" ").map((name) => name[0]).join("").slice(0,2)}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5"><p className="truncate text-xs font-semibold text-[#f4f0e8]">{review.name}</p><CheckCircle size={11} className="shrink-0 text-[#5f927c]" /></div>
                  <p className="mt-0.5 truncate text-[10px] text-[#77746e]">{review.location} · {review.project}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="relative mt-12 text-center">
        <Link href="/reviews" className="inline-flex items-center gap-2 rounded-full border border-[#47443b] bg-[#151813] px-5 py-2.5 text-xs font-semibold text-[#d8bd80] transition hover:border-[#c9ad70]/60 hover:bg-[#1c201b]">Read every client story <ArrowRight size={13} /></Link>
      </div>
    </section>
  );
}
