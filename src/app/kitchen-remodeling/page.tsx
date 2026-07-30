import type { Metadata } from "next";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Kitchen Remodeling Services | House of Granite LLC",
  description:
    "Full kitchen renovations, countertop replacement, cabinet installation, backsplash, sink, and appliance layout. Expert kitchen remodeling services.",
};

const services = [
  "Full kitchen renovations",
  "Countertop replacement",
  "Cabinet installation or replacement",
  "Kitchen islands and peninsulas",
  "Backsplash installation",
  "Sink and faucet installation",
  "Appliance layout planning",
  "Flooring",
  "Lighting",
  "Plumbing and electrical coordination",
  "Demolition and removal of existing materials",
  "Design assistance",
  "Project management",
];

export default function KitchenRemodelingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.kitchens[2]})` }}
        />
        <div className="absolute inset-0 bg-granite-950/70" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kitchen Remodeling
          </h1>
          <p className="text-granite-200 text-lg max-w-2xl">
            Transform your kitchen into the heart of your home with our
            comprehensive remodeling services.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-granite-950 mb-6">
                Complete Kitchen Renovation Services
              </h2>
              <p className="text-granite-600 mb-6 leading-relaxed">
                From initial design to final inspection, House of Granite LLC
                handles every aspect of your kitchen remodel. Our experienced
                team coordinates all trades to deliver a seamless renovation
                experience.
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
            <div className="grid grid-cols-2 gap-4">
              <img
                src={IMAGES.kitchens[1]}
                alt="Kitchen remodel"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src={IMAGES.kitchens[4]}
                alt="Kitchen cabinets"
                className="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
              />
              <img
                src={IMAGES.kitchens[5]}
                alt="Kitchen island"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src={IMAGES.kitchens[0]}
                alt="Kitchen countertop"
                className="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-granite-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-granite-950 mb-10 text-center">
            Our Kitchen Remodeling Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Consultation", desc: "We visit your home, discuss your vision, and take measurements." },
              { step: "2", title: "Design & Planning", desc: "Our team creates a detailed design and selects materials." },
              { step: "3", title: "Fabrication", desc: "Countertops are fabricated and cabinets are prepared." },
              { step: "4", title: "Installation", desc: "Professional installation with quality inspection." },
            ].map((p) => (
              <div
                key={p.step}
                className="bg-white rounded-xl p-6 text-center border border-granite-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-gold-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {p.step}
                </div>
                <h3 className="font-bold text-granite-950 mb-2">{p.title}</h3>
                <p className="text-granite-600 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-granite-950 mb-8 text-center">
            Kitchen Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {IMAGES.kitchens.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Kitchen project ${i + 1}`}
                className="rounded-xl w-full h-64 object-cover shadow-sm hover:shadow-lg transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-granite-950 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Your Dream Kitchen?
          </h2>
          <p className="text-granite-300 mb-8">
            Get a free consultation and estimate. Our team will help you design
            and build the perfect kitchen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
            >
              Request an Estimate <ArrowRight size={20} />
            </Link>
            <Link
              href="/kitchen-design-tool"
              className="inline-flex items-center justify-center gap-2 border border-granite-600 hover:border-granite-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
            >
              Try Our Design Tool
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
