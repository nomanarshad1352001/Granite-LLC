import type { Metadata } from "next";
import { ContractorForm } from "@/components/ContractorForm";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contractors & Builders | House of Granite LLC",
  description: "Partner with House of Granite for countertop fabrication, installation, and remodeling services. Volume pricing and priority scheduling.",
};

const benefits = [
  "Volume and trade pricing",
  "Priority scheduling",
  "Direct communication with fabrication team",
  "Reliable delivery timelines",
  "Custom fabrication capabilities",
  "On-site coordination",
  "Dedicated account manager",
  "Flexible payment terms",
];

export default function ContractorsPage() {
  return (
    <>
      <section className="bg-granite-950 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contractors &amp; Builders</h1>
          <p className="text-granite-300 text-lg max-w-2xl mx-auto">
            Partner with House of Granite for reliable countertop fabrication, installation, and remodeling services.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-granite-950 mb-6">Why Partner With Us?</h2>
            <p className="text-granite-600 leading-relaxed mb-6">
              We understand the unique needs of contractors and builders. Our dedicated trade program offers competitive pricing, reliable timelines, and direct access to our fabrication team. Whether you need countertops for a single project or an ongoing partnership, we&apos;re ready to deliver.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                  <span className="text-granite-700 text-sm">{b}</span>
                </div>
              ))}
            </div>
            <div className="bg-granite-50 rounded-xl p-6 border border-granite-100">
              <h3 className="font-bold text-granite-950 mb-3">How It Works</h3>
              <ol className="space-y-3 text-sm text-granite-600">
                <li className="flex gap-3"><span className="shrink-0 w-6 h-6 bg-gold-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span> Submit your project details using the form</li>
                <li className="flex gap-3"><span className="shrink-0 w-6 h-6 bg-gold-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span> Our team reviews your plans and provides pricing</li>
                <li className="flex gap-3"><span className="shrink-0 w-6 h-6 bg-gold-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span> We coordinate templating and fabrication</li>
                <li className="flex gap-3"><span className="shrink-0 w-6 h-6 bg-gold-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span> Professional installation on your schedule</li>
              </ol>
            </div>
          </div>

          <div>
            <ContractorForm />
          </div>
        </div>
      </section>
    </>
  );
}
