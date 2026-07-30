import type { Metadata } from "next";
import Link from "next/link";
import { IMAGES, DUMMY_DATA } from "@/lib/images";
import { ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Marble Countertops | House of Granite LLC",
  description: "Classic marble countertops with timeless elegance. Perfect for bathroom vanities and luxury applications.",
};

const marbles = DUMMY_DATA.materials.filter(m => m.type === "Marble");

const features = [
  "Timeless elegance",
  "Unique veining patterns",
  "Cool surface temperature",
  "Perfect for baking",
  "Increases home value",
  "Classic luxury appeal",
  "Naturally beautiful",
  "Ages gracefully",
];

const considerations = [
  "Requires regular sealing",
  "Can etch from acidic substances",
  "Softer than granite",
  "Best for low-traffic areas",
];

export default function MarblePage() {
  return (
    <>
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.countertops[4]})` }} />
        <div className="absolute inset-0 bg-granite-950/70" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <span className="inline-block text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">Timeless Elegance</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Marble Countertops</h1>
          <p className="text-granite-200 text-lg max-w-2xl">
            Classic beauty that has adorned the finest homes for centuries. Nothing matches marble's timeless appeal.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
            <img src={IMAGES.countertops[4]} alt="Marble" className="rounded-xl shadow-lg w-full h-48 object-cover" />
            <img src={IMAGES.bathrooms[3]} alt="Marble bathroom" className="rounded-xl shadow-lg w-full h-48 object-cover mt-8" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-granite-950 mb-6">The Timeless Choice</h2>
            <p className="text-granite-600 mb-6 leading-relaxed">
              Marble has been prized for thousands of years for its distinctive veining and elegant 
              appearance. While it requires more care than other stones, many homeowners love how 
              marble develops character over time, creating a lived-in, luxurious feel.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gold-500 shrink-0" />
                  <span className="text-granite-700 text-sm">{f}</span>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 text-amber-700 font-semibold text-sm mb-2">
                <AlertTriangle size={16} />
                <span>Good to Know</span>
              </div>
              <ul className="text-amber-700 text-sm space-y-1">
                {considerations.map((c) => (
                  <li key={c}>• {c}</li>
                ))}
              </ul>
            </div>
            <Link href="/estimate" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              Get a Free Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-granite-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-granite-950 mb-4 text-center">Popular Marble Selections</h2>
          <p className="text-granite-600 text-center mb-8 max-w-2xl mx-auto">
            We recommend marble for bathroom vanities, fireplace surrounds, and areas with lighter use.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {marbles.map((m) => (
              <div key={m.name} className="bg-white rounded-xl p-6 shadow-sm border border-granite-100 hover:shadow-lg transition flex gap-4">
                <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-white to-granite-200 shrink-0" />
                <div>
                  <h3 className="font-bold text-granite-950">{m.name.replace(' Marble', '')}</h3>
                  <p className="text-granite-500 text-sm">Origin: {m.origin}</p>
                  <span className="text-gold-600 text-sm font-medium">{m.price}</span>
                  {m.popular && <span className="ml-2 bg-gold-100 text-gold-700 text-xs px-2 py-0.5 rounded">Popular</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-granite-950 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in Marble?</h2>
          <p className="text-granite-300 mb-8">Let us help you determine if marble is right for your project.</p>
          <Link href="/estimate" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
            Request a Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
