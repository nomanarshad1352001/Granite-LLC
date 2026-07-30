import type { Metadata } from "next";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { ArrowRight, CheckCircle, Sun, Shield, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "Outdoor Kitchen Countertops | House of Granite LLC",
  description: "Durable outdoor kitchen countertops in granite and other weather-resistant materials. Built to last.",
};

const features = [
  { icon: Sun, title: "UV Resistant", desc: "Materials that won't fade in direct sunlight." },
  { icon: Shield, title: "Weather Durable", desc: "Withstands rain, snow, and temperature changes." },
  { icon: Flame, title: "Heat Resistant", desc: "Safe for placement near grills and heat sources." },
];

const services = [
  "Outdoor kitchen countertops",
  "BBQ island tops",
  "Outdoor bar counters",
  "Built-in grill surrounds",
  "Outdoor sink cutouts",
  "Weather-resistant materials",
  "Granite for outdoors",
  "Concrete countertops",
  "Custom edge profiles",
  "Outdoor wet bar tops",
  "Pizza oven counters",
  "Pool house counters",
];

export default function OutdoorKitchensPage() {
  return (
    <>
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.outdoor[1]})` }} />
        <div className="absolute inset-0 bg-granite-950/70" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Outdoor Kitchen Countertops</h1>
          <p className="text-granite-200 text-lg max-w-2xl">
            Durable, beautiful countertops designed to withstand the elements and enhance your outdoor living space.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((f) => (
              <div key={f.title} className="text-center p-8 rounded-xl border border-granite-100 hover:shadow-lg transition">
                <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <f.icon className="text-gold-600" size={28} />
                </div>
                <h3 className="font-bold text-granite-950 text-lg mb-2">{f.title}</h3>
                <p className="text-granite-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-granite-950 mb-6">Built for the Outdoors</h2>
              <p className="text-granite-600 mb-6">
                Your outdoor kitchen deserves countertops that look great and perform even better. 
                We specialize in selecting and installing materials that withstand sun, rain, heat, and cold.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {services.map((s) => (
                  <div key={s} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span className="text-granite-700 text-sm">{s}</span>
                  </div>
                ))}
              </div>
              <Link href="/estimate" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                Get a Quote <ArrowRight size={18} />
              </Link>
            </div>
            <div>
              <img src={IMAGES.outdoor[0]} alt="Outdoor kitchen" className="rounded-xl shadow-xl w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-granite-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-granite-950 mb-8 text-center">Outdoor Kitchen Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={IMAGES.outdoor[0]} alt="Outdoor kitchen project" className="rounded-xl shadow-lg w-full h-64 object-cover" />
            <img src={IMAGES.outdoor[1]} alt="Outdoor kitchen project" className="rounded-xl shadow-lg w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-granite-950 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Create Your Perfect Outdoor Kitchen</h2>
          <p className="text-granite-300 mb-8">Contact us for a free consultation and estimate.</p>
          <Link href="/estimate" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
            Request an Estimate <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
