import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, DollarSign, Shield, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Financing Options | House of Granite LLC",
  description: "Flexible financing options for countertops, kitchen remodeling, and bathroom remodeling. Make your dream project affordable.",
};

export default function FinancingPage() {
  return (
    <>
      <section className="bg-granite-950 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Financing Options</h1>
          <p className="text-granite-300 text-lg max-w-2xl mx-auto">
            Make your dream kitchen or bathroom a reality with flexible financing options.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: DollarSign, title: "Competitive Rates", desc: "Low monthly payments that fit your budget." },
              { icon: Clock, title: "Quick Approval", desc: "Get approved in minutes — not days." },
              { icon: Shield, title: "No Hidden Fees", desc: "Transparent terms with no surprises." },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-xl border border-granite-100">
                <div className="w-14 h-14 bg-gold-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-gold-600" size={24} />
                </div>
                <h3 className="font-bold text-granite-950 mb-2">{item.title}</h3>
                <p className="text-granite-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-granite-50 rounded-xl p-8 border border-granite-100">
            <h2 className="text-2xl font-bold text-granite-950 mb-4">How Financing Works</h2>
            <div className="space-y-3">
              {[
                "Choose your project and receive a detailed estimate.",
                "Apply for financing — quick, easy application with fast approval.",
                "Select a payment plan that works for your budget.",
                "We begin your project and you make comfortable monthly payments.",
                "Enjoy your beautiful new space!",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="shrink-0 w-7 h-7 bg-gold-500 text-white rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                  <p className="text-granite-600 pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-xl font-bold text-granite-950 mb-4">Ready to Get Started?</h3>
            <p className="text-granite-600 mb-6">Contact us to learn more about financing your project.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/estimate" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                Request an Estimate <ArrowRight size={18} />
              </Link>
              <a href="tel:+15551234567" className="inline-flex items-center gap-2 border border-granite-300 text-granite-700 px-6 py-3 rounded-lg font-semibold transition hover:bg-granite-50">
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
