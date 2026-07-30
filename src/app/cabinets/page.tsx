import type { Metadata } from "next";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Cabinet Services | House of Granite LLC",
  description: "Custom cabinet installation and replacement for kitchens and bathrooms. Base cabinets, wall cabinets, tall cabinets, and more.",
};

const services = [
  "Base cabinet installation",
  "Wall cabinet installation",
  "Tall & pantry cabinets",
  "Cabinet replacement",
  "Cabinet refacing",
  "Custom cabinet layouts",
  "Kitchen cabinet design",
  "Bathroom vanity cabinets",
  "Soft-close hardware",
  "Cabinet demolition & removal",
  "Island cabinets",
  "Specialty storage solutions",
];

export default function CabinetsPage() {
  return (
    <>
      <section className="relative min-h-[350px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.kitchens[5]})` }} />
        <div className="absolute inset-0 bg-granite-950/70" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cabinet Services</h1>
          <p className="text-granite-200 text-lg max-w-2xl">Professional cabinet installation and replacement for kitchens and bathrooms.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-granite-950 mb-6">Quality Cabinets, Expert Installation</h2>
            <p className="text-granite-600 leading-relaxed mb-6">
              Cabinets are the foundation of your kitchen or bathroom design. We offer professional installation, replacement, and design services to give your space the storage and style it deserves.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((s) => (
                <div key={s} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                  <span className="text-granite-700 text-sm">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={IMAGES.kitchens[1]} alt="Cabinet installation" className="rounded-xl shadow-lg w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-granite-950 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Need New Cabinets?</h2>
          <p className="text-granite-300 mb-8">Request a free estimate and let us help you choose the perfect cabinets for your space.</p>
          <Link href="/estimate" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
            Request an Estimate <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
