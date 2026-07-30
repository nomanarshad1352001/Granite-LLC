import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone, CheckCircle, Users } from "lucide-react";
import { IMAGES, DUMMY_DATA } from "@/lib/images";

export const metadata: Metadata = {
  title: "Service Areas | House of Granite LLC",
  description: "House of Granite serves the greater metro area including Springfield, Riverside, Oakwood, Lakewood, and more.",
};

export default function ServiceAreasPage() {
  const primaryAreas = DUMMY_DATA.serviceAreas.filter(a => a.primary);
  const secondaryAreas = DUMMY_DATA.serviceAreas.filter(a => !a.primary);
  
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.homes[1]})` }} />
        <div className="absolute inset-0 bg-granite-950/75" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <span className="inline-block text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">Coverage Area</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Service Areas</h1>
          <p className="text-granite-200 text-lg max-w-2xl">
            We proudly serve homeowners, contractors, and builders throughout the greater metro area 
            with premium countertops and expert remodeling services.
          </p>
          <div className="flex items-center gap-6 mt-6 text-sm text-granite-300">
            <div className="flex items-center gap-2">
              <Users size={16} className="text-gold-400" />
              <span>2,500+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-gold-400" />
              <span>12+ Communities Served</span>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-gold-600 font-semibold text-sm uppercase tracking-wider mb-2">Primary Coverage</span>
            <h2 className="text-3xl font-bold text-granite-950 mb-4">Main Service Areas</h2>
            <p className="text-granite-600 max-w-2xl mx-auto">
              These are our primary service areas with the fastest response times and widest range of services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {primaryAreas.map((area) => (
              <div
                key={area.name}
                className="group relative rounded-2xl overflow-hidden shadow-lg border-2 border-gold-400"
              >
                <div className="relative h-56">
                  <img 
                    src={IMAGES.homes[area.img]} 
                    alt={`${area.name} homes`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-granite-950/90 via-granite-950/50 to-transparent" />
                  <div className="absolute top-4 right-4 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    PRIMARY AREA
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={18} className="text-gold-400" />
                    <h3 className="font-bold text-white text-xl">{area.name}</h3>
                  </div>
                  <p className="text-granite-300 text-sm mb-3">{area.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold-400 font-semibold text-sm">{area.projects}+ Projects</span>
                    <Link href="/estimate" className="text-white text-sm hover:text-gold-400 transition inline-flex items-center gap-1">
                      Get Quote <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Service Areas */}
      <section className="py-16 bg-granite-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-gold-600 font-semibold text-sm uppercase tracking-wider mb-2">Extended Coverage</span>
            <h2 className="text-3xl font-bold text-granite-950 mb-4">Additional Service Areas</h2>
            <p className="text-granite-600 max-w-2xl mx-auto">
              We also provide full services to these surrounding communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryAreas.map((area) => (
              <div
                key={area.name}
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-granite-200"
              >
                <div className="relative h-44">
                  <img 
                    src={IMAGES.homes[area.img]} 
                    alt={`${area.name} homes`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-granite-950/80 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={14} className="text-gold-400" />
                    <h3 className="font-bold text-white">{area.name}</h3>
                  </div>
                  <p className="text-granite-300 text-xs mb-2">{area.desc}</p>
                  <span className="text-gold-400 font-medium text-xs">{area.projects}+ Projects</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services in All Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-gold-600 font-semibold text-sm uppercase tracking-wider mb-2">Full Service</span>
              <h2 className="text-3xl font-bold text-granite-950 mb-6">What We Offer in Every Area</h2>
              <p className="text-granite-600 mb-6">
                No matter where you're located within our service area, you'll receive the same 
                high-quality craftsmanship and professional service we're known for.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Granite Countertops",
                  "Quartz Countertops",
                  "Kitchen Remodeling",
                  "Bathroom Remodeling",
                  "Cabinet Installation",
                  "Backsplash Installation",
                  "Vanity Tops",
                  "Free In-Home Estimates",
                  "Digital Templating",
                  "Professional Installation",
                  "Removal & Demolition",
                  "Project Coordination",
                ].map((service) => (
                  <div key={service} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-gold-500 shrink-0" />
                    <span className="text-granite-700 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={IMAGES.kitchens[0]} alt="Kitchen project" className="rounded-xl shadow-lg w-full h-48 object-cover" />
              <img src={IMAGES.bathrooms[1]} alt="Bathroom project" className="rounded-xl shadow-lg w-full h-48 object-cover mt-8" />
              <img src={IMAGES.countertops[3]} alt="Countertop" className="rounded-xl shadow-lg w-full h-48 object-cover" />
              <img src={IMAGES.kitchens[5]} alt="Cabinets" className="rounded-xl shadow-lg w-full h-48 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Map / Contact CTA */}
      <section className="py-16 bg-granite-950">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-r from-granite-800 to-granite-900 rounded-2xl p-8 md:p-12 border border-granite-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Don't See Your Area?
                </h3>
                <p className="text-granite-300 mb-6">
                  We may still be able to help! Contact us to discuss your project location 
                  and we'll let you know if we can serve you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    Contact Us <ArrowRight size={18} />
                  </Link>
                  <a
                    href="tel:+15551234567"
                    className="inline-flex items-center justify-center gap-2 border border-granite-600 hover:border-granite-500 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <Phone size={18} />
                    (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-block bg-granite-700/50 rounded-2xl p-8">
                  <MapPin size={48} className="text-gold-400 mx-auto mb-4" />
                  <p className="text-white font-semibold text-lg mb-1">Headquarters</p>
                  <p className="text-granite-400 text-sm">
                    123 Stone Avenue, Suite 100<br />
                    Springfield, ST 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
