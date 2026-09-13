"use client";

import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { IMAGES } from "@/lib/images";

export function BeforeAfterReveal() {
  const [position, setPosition] = useState(54);

  return (
    <div className="group relative aspect-[16/10] overflow-hidden rounded-[32px] bg-[#211a16] shadow-[0_34px_90px_-42px_rgba(40,27,18,.55)]">
      <img src={IMAGES.kitchens[3]} alt="Kitchen before remodeling" className="absolute inset-0 h-full w-full object-cover saturate-[.65]" />
      <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img src={IMAGES.kitchens[2]} alt="Kitchen after remodeling" className="h-full max-w-none object-cover" style={{ width: "min(92vw, 920px)" }} />
      </div>
      <div className="pointer-events-none absolute inset-y-0 w-px bg-white shadow-[0_0_18px_rgba(0,0,0,.35)]" style={{ left: `${position}%` }}>
        <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-[#fffdf9] text-[#4b392c] shadow-xl"><ArrowLeftRight size={17} /></span>
      </div>
      <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.18em] text-white backdrop-blur-md">After</span>
      <span className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.18em] text-white backdrop-blur-md">Before</span>
      <input type="range" min="8" max="92" value={position} onChange={(event) => setPosition(Number(event.target.value))} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" aria-label="Compare kitchen before and after" />
    </div>
  );
}
