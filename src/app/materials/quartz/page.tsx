import type { Metadata } from "next";
import Link from "next/link";
import { IMAGES, DUMMY_DATA } from "@/lib/images";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Quartz Countertops | House of Granite LLC",
  description: "Engineered quartz countertops - non-porous, low maintenance, and beautiful. Perfect for busy kitchens.",
};

const quartzColors = DUMMY_DATA.materials.filter(m => m.type === "Quartz");

const features = [
  "Non-porous surface",
  "No sealing required",
  "Stain resistant",
  "Consistent patterns",
  "Wide color selection",
  "Low maintenance",
  "Hygienic surface",
  "Scratch resistant",
];

export default function QuartzPage() {
  return (
    <>
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.countertops[1]})` }} />
        <div className="absolute inset-0 bg-granite-950/70" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <span className="inline-block text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">Engineered Stone</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Quartz Countertops</h1>
          <p className="text-granite-200 text-lg max-w-2xl">
            The perfect blend of beauty and practicality. Non-porous, low maintenance, and virtually indestructible.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
            <img src={IMAGES.countertops[1]} alt="Quartz" className="rounded-xl shadow-lg w-full h-48 object-cover" />
            <img src={IMAGES.kitchens[1]} alt="Quartz kitchen" className="rounded-xl shadow-lg w-full h-48 object-cover mt-8" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-granite-950 mb-6">Why Choose Quartz?</h2>
            <p className="text-granite-600 mb-6 leading-relaxed">
              Quartz countertops are engineered from natural quartz crystals combined with resins 
              and pigments. The result is a non-porous, virtually maintenance-free surface that 
              resists stains, bacteria, and scratches. Perfect for busy families.
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
        </div>
      </section>

      <section className="py-16 bg-granite-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-granite-950 mb-8 text-center">Popular Quartz Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quartzColors.map((q) => (
              <div key={q.name} className="bg-white rounded-xl p-4 text-center shadow-sm border border-granite-100 hover:shadow-lg transition">
                <div className="w-full h-20 rounded-lg bg-gradient-to-br from-granite-100 to-granite-300 mb-3" />
                <h3 className="font-semibold text-granite-950 text-sm">{q.name.replace(' Quartz', '')}</h3>
                <span className="text-gold-600 text-xs font-medium">{q.price}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-granite-500 text-sm mt-6">
            We carry brands including Cambria, Silestone, Caesarstone, and more. Visit our showroom to see full selections.
          </p>
        </div>
      </section>

      <section className="py-16 bg-granite-950 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for Quartz Countertops?</h2>
          <p className="text-granite-300 mb-8">Get a free estimate for your quartz countertop project.</p>
          <Link href="/estimate" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
            Request an Estimate <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
