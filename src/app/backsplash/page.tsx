import type { Metadata } from "next";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Backsplash Installation | House of Granite LLC",
  description: "Beautiful tile backsplash installation for kitchens and bathrooms. Subway tile, mosaic, natural stone, and more.",
};

const styles = [
  { name: "Subway Tile", desc: "Classic rectangular tiles in a brick pattern. Timeless and versatile.", img: IMAGES.backsplash[0] },
  { name: "Mosaic", desc: "Small tiles creating intricate patterns. Perfect for accent areas.", img: IMAGES.backsplash[1] },
  { name: "Herringbone", desc: "Tiles arranged in a zigzag pattern. Adds visual interest and movement.", img: IMAGES.backsplash[2] },
  { name: "Natural Stone", desc: "Marble, travertine, or slate for an organic, elegant look.", img: IMAGES.backsplash[3] },
];

const services = [
  "Tile selection assistance",
  "Custom pattern design",
  "Subway tile installation",
  "Mosaic tile installation",
  "Natural stone backsplash",
  "Glass tile backsplash",
  "Grout color selection",
  "Behind-range installation",
  "Full wall backsplash",
  "Accent strip installation",
  "Existing backsplash removal",
  "Surface preparation",
];

export default function BacksplashPage() {
  return (
    <>
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.backsplash[1]})` }} />
        <div className="absolute inset-0 bg-granite-950/70" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Backsplash Installation</h1>
          <p className="text-granite-200 text-lg max-w-2xl">
            Complete your kitchen or bathroom with a beautiful, professionally installed backsplash.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-granite-950 mb-4">Popular Backsplash Styles</h2>
            <p className="text-granite-600 max-w-2xl mx-auto">
              From classic subway tile to intricate mosaics, we install every style with precision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {styles.map((s) => (
              <div key={s.name} className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-granite-100">
                <div className="h-48 overflow-hidden">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-granite-950 mb-2">{s.name}</h3>
                  <p className="text-granite-600 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-granite-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-granite-950 mb-6">Our Backsplash Services</h2>
            <p className="text-granite-600 mb-6">
              A backsplash protects your walls and adds style to your kitchen or bathroom. 
              We handle everything from design to installation.
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
          <div className="grid grid-cols-2 gap-4">
            <img src={IMAGES.backsplash[0]} alt="Backsplash" className="rounded-xl shadow-lg w-full h-48 object-cover" />
            <img src={IMAGES.backsplash[2]} alt="Backsplash" className="rounded-xl shadow-lg w-full h-48 object-cover mt-8" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-granite-950 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for a Beautiful Backsplash?</h2>
          <p className="text-granite-300 mb-8">Get a free estimate for your backsplash installation project.</p>
          <Link href="/estimate" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
            Request an Estimate <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
