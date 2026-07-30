import type { Metadata } from "next";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Services | House of Granite LLC",
  description:
    "Complete bathroom remodeling: walk-in showers, vanities, tile work, tub-to-shower conversions, and more. Free estimates available.",
};

const services = [
  "Full bathroom renovations",
  "Walk-in showers",
  "Tub-to-shower conversions",
  "Custom tiled showers",
  "Shower benches & niches",
  "Double-shower systems",
  "Vanities and vanity countertops",
  "Sinks and faucets",
  "Mirrors",
  "Bathroom flooring",
  "Wall tile",
  "Bathtub installation or removal",
  "Plumbing fixtures",
  "Lighting",
  "Demolition",
  "Design assistance",
  "Project management",
];

export default function BathroomRemodelingPage() {
  return (
    <>
      <section className="relative min-h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.bathrooms[0]})` }}
        />
        <div className="absolute inset-0 bg-granite-950/70" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Bathroom Remodeling
          </h1>
          <p className="text-granite-200 text-lg max-w-2xl">
            Create a stunning, functional bathroom with expert design and
            quality craftsmanship.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              {IMAGES.bathrooms.slice(0, 4).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Bathroom project ${i + 1}`}
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
              ))}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-granite-950 mb-6">
                Complete Bathroom Renovation Services
              </h2>
              <p className="text-granite-600 mb-6 leading-relaxed">
                Whether you want a luxury walk-in shower, a modern vanity, or a
                complete bathroom overhaul, our team handles every detail from
                demolition to final touches.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((s) => (
                  <div key={s} className="flex items-start gap-2">
                    <CheckCircle
                      size={16}
                      className="text-gold-500 mt-0.5 shrink-0"
                    />
                    <span className="text-granite-700 text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bathroom Gallery */}
      <section className="py-16 bg-granite-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-granite-950 mb-8 text-center">
            Bathroom Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {IMAGES.bathrooms.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Bathroom project ${i + 1}`}
                className="rounded-xl w-full h-64 object-cover shadow-sm hover:shadow-lg transition"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-granite-950 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Transform Your Bathroom Today
          </h2>
          <p className="text-granite-300 mb-8">
            Upload your bathroom pictures and measurements for a free estimate.
            Our team is ready to help create your dream bathroom.
          </p>
          <Link
            href="/estimate"
            className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
          >
            Request an Estimate <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
