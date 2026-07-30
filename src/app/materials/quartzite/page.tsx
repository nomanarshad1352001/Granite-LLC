import type { Metadata } from "next";
import Link from "next/link";
import { IMAGES, DUMMY_DATA } from "@/lib/images";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Quartzite Countertops | House of Granite LLC",
  description: "Natural quartzite countertops - harder than granite with marble-like beauty. Premium luxury stone.",
};

const quartzites = DUMMY_DATA.materials.filter(m => m.type === "Quartzite");

const features = [
  "Harder than granite",
  "Natural stone beauty",
  "Marble-like veining",
  "Excellent heat resistance",
  "UV resistant",
  "Long-lasting durability",
  "Unique patterns",
  "Premium luxury material",
];

export default function QuartzitePage() {
  return (
    <>
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.countertops[2]})` }} />
        <div className="absolute inset-0 bg-granite-950/70" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <span className="inline-block text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">Premium Natural Stone</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Quartzite Countertops</h1>
          <p className="text-granite-200 text-lg max-w-2xl">
            The beauty of marble with the durability of granite. Nature's perfect countertop material.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-granite-950 mb-6">Why Choose Quartzite?</h2>
            <p className="text-granite-600 mb-6 leading-relaxed">
              Quartzite is a natural metamorphic rock that starts as sandstone and transforms under 
              intense heat and pressure. The result is a stone harder than granite with stunning 
              veining patterns similar to marble. It's the ultimate choice for homeowners who want 
              both beauty and durability.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gold-500 shrink-0" />
                  <span className="text-granite-700 text-sm">{f}</span>
                </div>
              ))}
            </div>
            <Link href="/estimate" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              Get a Free Quote <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={IMAGES.countertops[2]} alt="Quartzite" className="rounded-xl shadow-lg w-full h-48 object-cover" />
            <img src={IMAGES.countertops[5]} alt="Quartzite" className="rounded-xl shadow-lg w-full h-48 object-cover mt-8" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-granite-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-granite-950 mb-8 text-center">Popular Quartzite Selections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quartzites.map((q) => (
              <div key={q.name} className="bg-white rounded-xl p-6 shadow-sm border border-granite-100 hover:shadow-lg transition flex gap-4">
                <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-granite-200 to-granite-400 shrink-0" />
                <div>
                  <h3 className="font-bold text-granite-950">{q.name.replace(' Quartzite', '')}</h3>
                  <p className="text-granite-500 text-sm">Origin: {q.origin}</p>
                  <span className="text-gold-600 text-sm font-medium">{q.price}</span>
                  {q.popular && <span className="ml-2 bg-gold-100 text-gold-700 text-xs px-2 py-0.5 rounded">Popular</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-granite-950 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for Quartzite Countertops?</h2>
          <p className="text-granite-300 mb-8">Experience the luxury of natural quartzite. Get a free estimate today.</p>
          <Link href="/estimate" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
            Request an Estimate <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
