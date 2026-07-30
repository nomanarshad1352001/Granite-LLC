import type { Metadata } from "next";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { Award, Shield, Users, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | House of Granite LLC",
  description: "Learn about House of Granite LLC — over 15 years of experience in countertops and home remodeling.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[350px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.kitchens[4]})` }} />
        <div className="absolute inset-0 bg-granite-950/75" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About House of Granite</h1>
          <p className="text-granite-200 text-lg max-w-2xl">
            Dedicated to quality craftsmanship, honest service, and transforming homes for over 15 years.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-granite-950 mb-6">Our Story</h2>
            <p className="text-granite-600 leading-relaxed mb-4">
              House of Granite LLC was founded with a simple mission: to provide homeowners, contractors, and builders with the highest quality countertops and remodeling services at fair prices. What started as a small countertop fabrication shop has grown into a full-service home remodeling company serving the greater metro area.
            </p>
            <p className="text-granite-600 leading-relaxed mb-4">
              Our team brings together skilled fabricators, experienced installers, and dedicated project managers who share a passion for transforming spaces. We believe every home deserves beautiful, functional design — and every customer deserves transparency, quality, and respect.
            </p>
            <p className="text-granite-600 leading-relaxed">
              Today, we specialize in granite, quartz, and quartzite countertops, as well as complete kitchen and bathroom remodeling. We work closely with each client to understand their vision, budget, and timeline, delivering results that exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={IMAGES.kitchens[0]} alt="Our work" className="rounded-xl shadow-lg w-full h-48 object-cover" />
            <img src={IMAGES.bathrooms[1]} alt="Our work" className="rounded-xl shadow-lg w-full h-48 object-cover mt-8" />
            <img src={IMAGES.countertops[3]} alt="Our work" className="rounded-xl shadow-lg w-full h-48 object-cover" />
            <img src={IMAGES.kitchens[5]} alt="Our work" className="rounded-xl shadow-lg w-full h-48 object-cover mt-8" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-granite-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-granite-950 mb-10 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "15+ Years Experience", desc: "Deep expertise in countertop fabrication and home remodeling." },
              { icon: Shield, title: "Licensed & Insured", desc: "Full coverage for your peace of mind and protection." },
              { icon: Users, title: "500+ Happy Clients", desc: "Homeowners, contractors, and builders trust our work." },
              { icon: Clock, title: "On-Time Completion", desc: "We respect your timeline and deliver on schedule." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 text-center shadow-sm border border-granite-100">
                <div className="w-14 h-14 bg-granite-950 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-gold-400" size={24} />
                </div>
                <h3 className="font-bold text-granite-950 mb-2">{item.title}</h3>
                <p className="text-granite-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-granite-950 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s Build Something Beautiful</h2>
          <p className="text-granite-300 mb-8">Contact us today for a free consultation and estimate.</p>
          <Link href="/estimate" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
            Get a Free Estimate <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
