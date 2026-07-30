import type { Metadata } from "next";
import Link from "next/link";
import { IMAGES, DUMMY_DATA } from "@/lib/images";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Granite Countertops | House of Granite LLC",
  description: "Natural granite countertops with unique patterns and exceptional durability. View our granite selection and get a free estimate.",
};

const granites = DUMMY_DATA.materials.filter(m => m.type === "Granite");

const features = [
  "100% natural stone",
  "Unique patterns in every slab",
  "Extremely heat resistant",
  "Scratch resistant surface",
  "Increases home value",
  "Wide range of colors",
  "Timeless beauty",
  "Eco-friendly material",
];

export default function GranitePage() {
  return (
    <>
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.countertops[3]})` }} />
        <div className="absolute inset-0 bg-granite-950/70" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <span className="inline-block text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">Natural Stone</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Granite Countertops</h1>
          <p className="text-granite-200 text-lg max-w-2xl">
            Timeless beauty meets exceptional durability. Each granite slab is a unique work of nature.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-granite-950 mb-6">Why Choose Granite?</h2>
            <p className="text-granite-600 mb-6 leading-relaxed">
              Granite is a natural igneous rock formed over millions of years. Each slab features unique 
              patterns, colors, and mineral deposits that cannot be replicated. It's one of the hardest 
              natural materials, making it perfect for high-traffic kitchen countertops.
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
            <img src={IMAGES.countertops[3]} alt="Granite" className="rounded-xl shadow-lg w-full h-48 object-cover" />
            <img src={IMAGES.kitchens[0]} alt="Granite kitchen" className="rounded-xl shadow-lg w-full h-48 object-cover mt-8" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-granite-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-granite-950 mb-8 text-center">Popular Granite Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {granites.map((g) => (
              <div key={g.name} className="bg-white rounded-xl p-4 text-center shadow-sm border border-granite-100 hover:shadow-lg transition">
                <div className="w-full h-20 rounded-lg bg-gradient-to-br from-granite-300 to-granite-500 mb-3" />
                <h3 className="font-semibold text-granite-950 text-sm">{g.name.replace(' Granite', '')}</h3>
                <p className="text-granite-500 text-xs mt-1">{g.origin}</p>
                <span className="text-gold-600 text-xs font-medium">{g.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-granite-950 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for Granite Countertops?</h2>
          <p className="text-granite-300 mb-8">Visit our showroom or schedule a free in-home estimate.</p>
          <Link href="/estimate" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
            Request an Estimate <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
