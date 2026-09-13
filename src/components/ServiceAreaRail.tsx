import Link from "next/link";
import { ArrowRight, Clock3, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { DUMMY_DATA, IMAGES } from "@/lib/images";

const highlights = [
  { icon: MapPin, value: "12+", label: "Communities" },
  { icon: Sparkles, value: "2,500+", label: "Projects" },
  { icon: Clock3, value: "15+", label: "Years local" },
  { icon: ShieldCheck, value: "45 mi", label: "Service radius" },
];

export function ServiceAreaRail() {
  const areas = DUMMY_DATA.serviceAreas;
  const cards = [...areas, ...areas];
  const pills = [...areas.slice().reverse(), ...areas.slice().reverse()];

  return (
    <section className="relative overflow-hidden bg-[#090b0a] py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#1c392f]/25 blur-[140px] animate-glow" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#c9ad70]/[0.05] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 text-center">
        <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c9ad70]"><MapPin size={12} /> Our reach</span>
        <h2 className="mt-4 text-4xl text-[#f4f0e8] sm:text-5xl">Serving your community.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#8e8a83]">From established neighborhoods to new communities, our team brings the same measured care to every home.</p>
      </div>

      <div className="area-rail relative mt-14">
        <div className="area-rail-track flex w-max gap-4 px-2">
          {cards.map((area, index) => (
            <Link key={`${area.name}-${index}`} href="/service-areas" className="group relative h-56 w-[252px] shrink-0 overflow-hidden rounded-[24px] border border-[#29312b] bg-[#111512] transition hover:border-[#65583d] sm:w-[286px]">
              <img src={IMAGES.homes[area.img]} alt={`${area.name} service area`} className="absolute inset-0 h-full w-full object-cover opacity-55 grayscale-[12%] transition duration-1000 group-hover:scale-105 group-hover:opacity-75 group-hover:grayscale-0" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b0a] via-[#090b0a]/60 to-transparent" />
              {area.primary && <span className="absolute left-4 top-4 rounded-full border border-[#c9ad70]/35 bg-[#111512]/85 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.16em] text-[#d8bd80] backdrop-blur-md">Core area</span>}
              <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                <div className="flex items-center gap-1.5"><MapPin size={12} className="shrink-0 text-[#6f9a87]" /><h3 className="truncate text-lg text-[#f4f0e8]">{area.name}</h3></div>
                <p className="mt-1.5 line-clamp-2 text-[10px] leading-4 text-[#aaa49b]">{area.desc}</p>
                <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3"><span className="text-[10px] font-semibold uppercase tracking-wider text-[#c9ad70]">{area.projects}+ projects</span><ArrowRight size={13} className="text-[#aaa49b] transition group-hover:translate-x-1 group-hover:text-[#d8bd80]" /></div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="area-rail relative mt-5">
        <div className="area-rail-reverse flex w-max items-center gap-3 px-2">
          {pills.map((area, index) => (
            <Link key={`pill-${area.name}-${index}`} href="/service-areas" className="flex shrink-0 items-center gap-2 rounded-full border border-[#29312b] bg-[#111512] px-4 py-2 text-[10px] font-medium uppercase tracking-wider text-[#aaa49b] transition hover:border-[#65583d] hover:text-[#d8bd80]"><i className="h-1.5 w-1.5 rounded-full bg-[#4f7d6a]" />{area.name}</Link>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[26px] border border-[#29312b] bg-[#29312b] sm:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.label} className="bg-[#111512] p-5 text-center sm:p-6">
              <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-[#365247] bg-[#17221d] text-[#75a18e]"><item.icon size={15} /></span>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#f4f0e8]">{item.value}</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-[#77746e]">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/service-areas" className="inline-flex items-center gap-2 rounded-full bg-[#c9ad70] px-6 py-3 text-xs font-semibold text-[#11120f] transition hover:bg-[#dfc98d]">Explore service areas <ArrowRight size={14} /></Link>
          <p className="mt-4 text-[10px] text-[#706b63]">Outside the listed area? <Link href="/contact" className="text-[#c9ad70] underline-offset-4 hover:underline">Ask our concierge about your address.</Link></p>
        </div>
      </div>
    </section>
  );
}
