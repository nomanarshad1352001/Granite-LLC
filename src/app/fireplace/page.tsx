import type { Metadata } from "next";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Fireplace Surrounds | House of Granite LLC",
  description: "Stunning stone and marble fireplace surrounds that transform any room. Custom design and installation.",
};

const materials = [
  { name: "Marble", desc: "Classic elegance with beautiful veining. Perfect for traditional and contemporary styles." },
  { name: "Granite", desc: "Durable and heat-resistant with unique natural patterns. Bold statement piece." },
  { name: "Quartzite", desc: "Combines marble aesthetics with granite durability. Stunning visual impact." },
  { name: "Slate", desc: "Rustic, textured look ideal for cabin or craftsman styles." },
];

const services = [
  "Full fireplace surrounds",
  "Hearth installation",
  "Mantel tops",
  "Floor-to-ceiling designs",
  "Custom edge profiles",
  "Built-in shelving surrounds",
  "Insert surrounds",
  "Existing surround removal",
  "Stone veneer installation",
  "Coordinated hearth & surround",
];

export default function FireplacePage() {
  return (
    <>
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.fireplace[0]})` }} />
        <div className="absolute inset-0 bg-granite-950/70" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Fireplace Surrounds</h1>
          <p className="text-granite-200 text-lg max-w-2xl">
            Transform your fireplace into a stunning focal point with a custom stone or marble surround.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-granite-950 mb-6">Make Your Fireplace the Focal Point</h2>
            <p className="text-granite-600 mb-6">
              A beautifully crafted fireplace surround elevates your entire living space. We design and 
              install custom surrounds in marble, granite, quartzite, and other natural stones.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {services.map((s) => (
                <div key={s} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                  <span className="text-granite-700 text-sm">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={IMAGES.fireplace[1]} alt="Fireplace surround" className="rounded-xl shadow-xl w-full h-96 object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-granite-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-granite-950 mb-10 text-center">Material Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((m) => (
              <div key={m.name} className="bg-white rounded-xl p-6 shadow-sm border border-granite-100 hover:shadow-lg transition">
                <h3 className="font-bold text-granite-950 text-lg mb-2">{m.name}</h3>
                <p className="text-granite-600 text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-granite-950 mb-8 text-center">Fireplace Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={IMAGES.fireplace[0]} alt="Fireplace project" className="rounded-xl shadow-lg w-full h-72 object-cover" />
            <img src={IMAGES.fireplace[1]} alt="Fireplace project" className="rounded-xl shadow-lg w-full h-72 object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-granite-950 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Fireplace?</h2>
          <p className="text-granite-300 mb-8">Get a free estimate for your custom fireplace surround.</p>
          <Link href="/estimate" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
            Request an Estimate <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
