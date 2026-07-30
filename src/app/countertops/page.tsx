import type { Metadata } from "next";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Countertop Services | House of Granite LLC",
  description:
    "Granite, quartz, quartzite, and marble countertops. Expert fabrication, templating, and installation for kitchens, bathrooms, and more.",
};

const services = [
  "Material selection assistance",
  "Granite countertops",
  "Quartz countertops",
  "Quartzite countertops",
  "Marble countertops",
  "Countertop fabrication",
  "Digital or physical templating",
  "Professional installation",
  "Removal of existing countertops",
  "Sink cutouts",
  "Cooktop cutouts",
  "Faucet holes",
  "Backsplashes",
  "Waterfall edges",
  "Kitchen islands",
  "Bathroom vanities",
  "Fireplace surrounds",
  "Outdoor kitchen countertops",
  "Countertop repairs or modifications",
];

const materials = [
  {
    name: "Granite",
    img: IMAGES.countertops[3],
    desc: "Natural stone with unique patterns. Extremely durable, heat-resistant, and available in hundreds of colors. Perfect for high-traffic kitchens.",
    pros: ["Heat resistant", "Unique natural patterns", "Extremely durable", "Adds home value"],
    care: "Seal annually. Clean with mild soap and water.",
    uses: "Kitchens, bathrooms, outdoor kitchens, fireplace surrounds",
  },
  {
    name: "Quartz",
    img: IMAGES.countertops[1],
    desc: "Engineered stone combining natural quartz with resins. Non-porous, consistent colors, and virtually maintenance-free. Ideal for busy families.",
    pros: ["Non-porous", "Low maintenance", "Consistent patterns", "Stain resistant"],
    care: "No sealing required. Clean with soap and water.",
    uses: "Kitchens, bathrooms, vanities, commercial spaces",
  },
  {
    name: "Quartzite",
    img: IMAGES.countertops[2],
    desc: "Natural metamorphic stone harder than granite. Beautiful veining similar to marble but far more durable. A premium choice.",
    pros: ["Harder than granite", "Beautiful veining", "Heat resistant", "Long-lasting"],
    care: "Seal periodically. Avoid acidic cleaners.",
    uses: "Kitchens, bathrooms, waterfall edges, islands",
  },
  {
    name: "Marble",
    img: IMAGES.countertops[4],
    desc: "Classic elegance with distinctive veining. Best suited for low-traffic areas or homeowners who appreciate natural patina over time.",
    pros: ["Timeless beauty", "Cool surface", "Unique character", "Luxury appeal"],
    care: "Seal regularly. Clean spills immediately. Use cutting boards.",
    uses: "Bathroom vanities, fireplace surrounds, accent pieces",
  },
];

export default function CountertopsPage() {
  return (
    <>
      <section className="relative min-h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.countertops[0]})` }}
        />
        <div className="absolute inset-0 bg-granite-950/70" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Countertop Services
          </h1>
          <p className="text-granite-200 text-lg max-w-2xl">
            Premium countertop fabrication and installation in granite, quartz,
            quartzite, and marble.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-granite-950 mb-4">
              Our Countertop Process &amp; Services
            </h2>
            <p className="text-granite-600 max-w-2xl mx-auto">
              From material selection to final installation, we handle every step
              with precision and care.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {services.map((s) => (
              <div key={s} className="flex items-start gap-2 p-3 bg-granite-50 rounded-lg">
                <CheckCircle
                  size={14}
                  className="text-gold-500 mt-0.5 shrink-0"
                />
                <span className="text-granite-700 text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 bg-granite-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-granite-950 mb-10 text-center">
            Countertop Materials
          </h2>
          <div className="space-y-12">
            {materials.map((m, idx) => (
              <div
                key={m.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  idx % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={m.img}
                    alt={`${m.name} countertop`}
                    className="rounded-xl shadow-lg w-full h-72 object-cover"
                  />
                </div>
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="text-2xl font-bold text-granite-950 mb-3">
                    {m.name} Countertops
                  </h3>
                  <p className="text-granite-600 leading-relaxed mb-4">
                    {m.desc}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-granite-800 text-sm mb-2">
                      Advantages
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {m.pros.map((p) => (
                        <span
                          key={p}
                          className="bg-gold-50 text-gold-700 px-3 py-1 rounded-full text-xs font-medium border border-gold-200"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-granite-800 text-sm mb-1">
                      Maintenance
                    </h4>
                    <p className="text-granite-600 text-sm">{m.care}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-granite-800 text-sm mb-1">
                      Common Uses
                    </h4>
                    <p className="text-granite-600 text-sm">{m.uses}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-granite-950 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Your Countertop Estimate
          </h2>
          <p className="text-granite-300 mb-8">
            Ready for beautiful new countertops? Contact us for a free
            consultation and estimate.
          </p>
          <Link
            href="/estimate"
            className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
          >
            Request a Free Estimate <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
