import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ | House of Granite LLC",
  description: "Frequently asked questions about countertops, kitchen remodeling, bathroom remodeling, and our services.",
};

const faqs = [
  { q: "How long does countertop installation take?", a: "Most countertop installations are completed in one day. The full process — from templating to installation — typically takes 5-10 business days, depending on material availability and project complexity." },
  { q: "Do I need to be home during installation?", a: "Yes, we recommend having someone present during the installation. Our team will need access to the work area and may have questions about final placement." },
  { q: "What's the difference between granite and quartz?", a: "Granite is a natural stone with unique patterns, requiring annual sealing. Quartz is engineered, non-porous, and virtually maintenance-free. Both are excellent choices — the best option depends on your priorities and lifestyle." },
  { q: "How much do new countertops cost?", a: "Countertop costs vary based on material, square footage, edge profiles, and cutouts. We provide free, detailed estimates so you know exactly what to expect. Contact us for a personalized quote." },
  { q: "Do you remove old countertops?", a: "Yes! We handle the removal of existing countertops as part of our service. We also handle demolition for kitchen and bathroom remodeling projects." },
  { q: "How long does a kitchen remodel take?", a: "A typical kitchen remodel takes 4-8 weeks, depending on scope. Simple countertop replacements can be done in days, while full renovations with cabinets, flooring, and plumbing take longer." },
  { q: "Do you offer financing?", a: "Yes, we offer flexible financing options to help make your project affordable. Visit our Financing page or ask us during your consultation." },
  { q: "Do you work with contractors and builders?", a: "Absolutely. We have a dedicated program for contractors and builders, including volume pricing, priority scheduling, and direct communication with our fabrication team." },
  { q: "What areas do you serve?", a: "We serve the greater metro area and surrounding communities, including Springfield, Riverside, Oakwood, Lakewood, Fairfield, Greenville, Maplewood, and Cedar Hills." },
  { q: "Can I see samples before choosing a material?", a: "Yes! We encourage customers to view samples at our showroom or request samples to take home. Seeing the material in your own lighting is the best way to make a decision." },
  { q: "Do you provide a warranty?", a: "Yes, we offer warranties on our fabrication and installation workmanship. Manufacturer warranties also apply to materials. We'll review all warranty details during your consultation." },
  { q: "What is digital templating?", a: "Digital templating uses laser technology to create precise measurements of your countertop space. This ensures a perfect fit and reduces errors compared to traditional measuring methods." },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-granite-950 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-granite-300 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services, materials, and process.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-granite-50 rounded-xl border border-granite-100 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-granite-950 hover:bg-granite-100 transition list-none">
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-gold-500 text-xl shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-granite-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-granite-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-granite-950 mb-4">Still Have Questions?</h2>
          <p className="text-granite-600 mb-6">Our team is happy to answer any questions about your project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              Contact Us <ArrowRight size={18} />
            </Link>
            <a href="tel:+15551234567" className="inline-flex items-center gap-2 border border-granite-300 text-granite-700 px-6 py-3 rounded-lg font-semibold transition hover:bg-white">
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
