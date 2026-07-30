import type { Metadata } from "next";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Countertop Materials | House of Granite LLC",
  description: "Compare granite, quartz, quartzite, and marble countertop materials. Learn about durability, maintenance, and best uses.",
};

const materials = [
  {
    name: "Granite",
    img: IMAGES.countertops[3],
    desc: "A natural stone quarried from the earth, granite features unique patterns with incredible durability and heat resistance. Each slab is one-of-a-kind.",
    pros: ["Extremely heat resistant", "Unique natural patterns", "Scratch resistant", "Increases home value", "Wide range of colors"],
    cons: ["Requires periodic sealing", "Heavy (needs strong support)", "Seams may be visible"],
    maintenance: "Seal once a year. Clean daily with mild soap and warm water. Avoid harsh chemicals.",
    bestFor: "Kitchen countertops, outdoor kitchens, high-traffic areas, homeowners who love natural stone.",
  },
  {
    name: "Quartz",
    img: IMAGES.countertops[1],
    desc: "An engineered stone made from natural quartz crystals bound with resins. Offers consistent patterns, is non-porous, and requires minimal maintenance.",
    pros: ["Non-porous (no sealing needed)", "Consistent colors & patterns", "Stain resistant", "Low maintenance", "Wide design variety"],
    cons: ["Not as heat resistant as granite", "Can look uniform", "Higher cost for premium brands"],
    maintenance: "No sealing required. Clean with soap and water. Avoid excessive heat — use trivets.",
    bestFor: "Kitchens, bathrooms, vanities, busy families, commercial applications.",
  },
  {
    name: "Quartzite",
    img: IMAGES.countertops[2],
    desc: "A natural metamorphic rock that is harder than granite. Known for beautiful veining similar to marble but with far superior durability.",
    pros: ["Harder than granite", "Beautiful marble-like veining", "Excellent heat resistance", "Very durable", "Natural elegance"],
    cons: ["Higher price point", "Requires periodic sealing", "Limited color range"],
    maintenance: "Seal periodically. Clean with pH-neutral cleaners. Avoid acidic substances sitting on surface.",
    bestFor: "Luxury kitchens, waterfall edges, kitchen islands, homeowners wanting marble aesthetics with durability.",
  },
  {
    name: "Marble",
    img: IMAGES.countertops[4],
    desc: "A classic, timeless natural stone with distinctive veining. Softer than granite, marble develops character over time and offers unmatched elegance.",
    pros: ["Timeless beauty", "Cool surface (great for baking)", "Unique veining", "Luxury appeal", "Increases home value"],
    cons: ["Softer — can scratch & etch", "Porous — needs frequent sealing", "Not ideal for heavy-use kitchens"],
    maintenance: "Seal every 3-6 months. Clean spills immediately. Use cutting boards and coasters. Avoid acidic cleaners.",
    bestFor: "Bathroom vanities, fireplace surrounds, accent pieces, low-traffic areas, baking stations.",
  },
];

export default function MaterialsPage() {
  return (
    <>
      <section className="bg-granite-950 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Countertop Materials</h1>
          <p className="text-granite-300 text-lg max-w-2xl mx-auto">
            Compare our most popular countertop materials to find the perfect fit for your project.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {materials.map((m, idx) => (
            <div key={m.name} id={m.name.toLowerCase()} className="scroll-mt-24">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${idx % 2 === 1 ? "" : ""}`}>
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <img src={m.img} alt={`${m.name} countertop`} className="rounded-xl shadow-lg w-full h-80 object-cover" />
                </div>
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-3xl font-bold text-granite-950 mb-3">{m.name}</h2>
                  <p className="text-granite-600 leading-relaxed mb-6">{m.desc}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-green-700 mb-2 text-sm">✓ Advantages</h3>
                      <ul className="space-y-1">
                        {m.pros.map((p) => (
                          <li key={p} className="text-granite-600 text-sm flex gap-2">
                            <span className="text-green-500">•</span> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-700 mb-2 text-sm">⚠ Considerations</h3>
                      <ul className="space-y-1">
                        {m.cons.map((c) => (
                          <li key={c} className="text-granite-600 text-sm flex gap-2">
                            <span className="text-amber-500">•</span> {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-granite-50 rounded-lg p-4 mb-4">
                    <h3 className="font-semibold text-granite-800 text-sm mb-1">Maintenance</h3>
                    <p className="text-granite-600 text-sm">{m.maintenance}</p>
                  </div>

                  <div className="bg-gold-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gold-800 text-sm mb-1">Best For</h3>
                    <p className="text-granite-600 text-sm">{m.bestFor}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-granite-950 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Material is Right?</h2>
          <p className="text-granite-300 mb-8">Our experts will help you choose the perfect material for your project. Schedule a free consultation today.</p>
          <Link href="/estimate" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
            Get Expert Advice <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
