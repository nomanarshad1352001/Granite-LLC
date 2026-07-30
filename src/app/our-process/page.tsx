import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Process | House of Granite LLC",
  description: "Learn about our step-by-step process for countertops and remodeling projects.",
};

const steps = [
  { num: "01", title: "Initial Consultation", desc: "Contact us by phone, email, or our online form. We'll discuss your project goals, budget, timeline, and answer any questions. You can also use our interactive Kitchen Design Tool to share your vision." },
  { num: "02", title: "On-Site Visit & Measurements", desc: "Our team visits your home to take precise measurements, assess the space, and discuss material options. We'll review your existing layout and identify any preparation work needed." },
  { num: "03", title: "Material Selection", desc: "Visit our showroom or browse our material catalog to select your preferred stone, color, and edge profile. Our experts will help you choose the right material for your project and lifestyle." },
  { num: "04", title: "Design & Planning", desc: "We create a detailed project plan including layout, material specifications, timelines, and a transparent estimate. For remodeling projects, we coordinate all trades and permits." },
  { num: "05", title: "Digital Templating", desc: "Using precision digital templating technology, we create exact measurements of your countertop layout, including cutouts for sinks, cooktops, and faucets." },
  { num: "06", title: "Fabrication", desc: "Your countertops are custom fabricated in our facility using state-of-the-art CNC equipment. Each piece is carefully crafted to exact specifications." },
  { num: "07", title: "Installation", desc: "Our experienced installers carefully transport and install your countertops or complete your remodeling project. We ensure proper fit, sealing, and finishing." },
  { num: "08", title: "Final Walkthrough", desc: "We conduct a thorough walkthrough with you to ensure everything meets your expectations. We clean up completely and provide care instructions for your new surfaces." },
];

export default function OurProcessPage() {
  return (
    <>
      <section className="bg-granite-950 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Process</h1>
          <p className="text-granite-300 text-lg max-w-2xl mx-auto">
            From first call to final walkthrough, here&apos;s how we deliver exceptional results every time.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="shrink-0 w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                  {step.num}
                </div>
                <div className="flex-1 pb-8 border-b border-granite-100 last:border-0">
                  <h3 className="text-xl font-bold text-granite-950 mb-2">{step.title}</h3>
                  <p className="text-granite-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-granite-950 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-granite-300 mb-8">Take the first step towards your dream kitchen or bathroom.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/estimate" className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
              Request a Free Estimate <ArrowRight size={20} />
            </Link>
            <Link href="/kitchen-design-tool" className="inline-flex items-center justify-center gap-2 border border-granite-600 hover:border-granite-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
              Try Our Design Tool
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
