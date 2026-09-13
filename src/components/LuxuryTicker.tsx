import Link from "next/link";
import { Circle, MapPin, ShieldCheck, Sparkles, Star } from "lucide-react";

const tickerItems = [
  { label: "Complimentary in-home consultation", href: "/estimate", icon: Sparkles },
  { label: "Granite · Quartz · Quartzite · Marble", href: "/materials", icon: Circle },
  { label: "Serving your community since 2009", href: "/service-areas", icon: MapPin },
  { label: "4.9 average customer rating", href: "/reviews", icon: Star },
  { label: "Kitchen & bathroom transformations", href: "/gallery", icon: Circle },
  { label: "Explore transparent price guidance", href: "/pricing", icon: Sparkles },
  { label: "Licensed · insured · warranty backed", href: "/about", icon: ShieldCheck },
];

export function LuxuryTicker() {
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div className="luxury-ticker group relative overflow-hidden border-y border-[#29312b] text-[#aaa49b]" aria-label="Featured services">
      <div className="ticker-track flex w-max items-center py-2.5 group-hover:[animation-play-state:paused]">
        {doubled.map((item, index) => (
          <Link
            key={`${item.label}-${index}`}
            href={item.href}
            className="mx-7 flex items-center gap-2.5 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.2em] transition hover:text-[#d8bd80] sm:text-[11px]"
          >
            <item.icon size={12} className="text-[#c9ad70]" fill={item.icon === Star ? "currentColor" : "none"} />
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
