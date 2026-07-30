"use client";

import { useState } from "react";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { ArrowRight, Filter, X } from "lucide-react";

const categories = [
  { name: "All Projects", filter: "all" },
  { name: "Kitchens", filter: "kitchens" },
  { name: "Bathrooms", filter: "bathrooms" },
  { name: "Countertops", filter: "countertops" },
  { name: "Backsplash", filter: "backsplash" },
  { name: "Outdoor", filter: "outdoor" },
  { name: "Fireplace", filter: "fireplace" },
];

// Build comprehensive gallery with LOCAL images
const galleryItems = [
  // Kitchens - 8 images
  { img: IMAGES.kitchens[0], category: "kitchens", title: "Modern White Kitchen", desc: "Quartz countertops with waterfall island" },
  { img: IMAGES.kitchens[1], category: "kitchens", title: "Contemporary Kitchen", desc: "Granite counters with custom cabinets" },
  { img: IMAGES.kitchens[2], category: "kitchens", title: "Bright Open Kitchen", desc: "Full renovation with quartzite tops" },
  { img: IMAGES.kitchens[3], category: "kitchens", title: "Farmhouse Kitchen", desc: "Marble counters and shaker cabinets" },
  { img: IMAGES.kitchens[4], category: "kitchens", title: "Luxury Kitchen Remodel", desc: "Custom everything from floor to ceiling" },
  { img: IMAGES.kitchens[5], category: "kitchens", title: "Transitional Kitchen", desc: "Granite island with pendant lighting" },
  { img: IMAGES.kitchens[6], category: "kitchens", title: "Chef's Kitchen", desc: "Professional appliances with quartz" },
  { img: IMAGES.kitchens[7], category: "kitchens", title: "Coastal Kitchen Design", desc: "Light colors with natural stone" },
  // Bathrooms - 6 images
  { img: IMAGES.bathrooms[0], category: "bathrooms", title: "Luxury Master Bath", desc: "Marble vanity with walk-in shower" },
  { img: IMAGES.bathrooms[1], category: "bathrooms", title: "Modern Bathroom", desc: "Floating vanity with quartz top" },
  { img: IMAGES.bathrooms[2], category: "bathrooms", title: "Spa-Like Retreat", desc: "Freestanding tub with stone accents" },
  { img: IMAGES.bathrooms[3], category: "bathrooms", title: "Contemporary Shower", desc: "Frameless glass with custom tile" },
  { img: IMAGES.bathrooms[4], category: "bathrooms", title: "Traditional Bath Update", desc: "Granite vanity with crown molding" },
  { img: IMAGES.bathrooms[5], category: "bathrooms", title: "Guest Bathroom", desc: "Compact design with style" },
  // Countertops - 6 images
  { img: IMAGES.countertops[0], category: "countertops", title: "Granite Slab Selection", desc: "Our showroom collection" },
  { img: IMAGES.countertops[1], category: "countertops", title: "Calacatta Quartz", desc: "Beautiful veining pattern" },
  { img: IMAGES.countertops[2], category: "countertops", title: "Quartzite Surface", desc: "Natural stone beauty" },
  { img: IMAGES.countertops[3], category: "countertops", title: "Granite Texture", desc: "Close-up of natural patterns" },
  { img: IMAGES.countertops[4], category: "countertops", title: "White Marble", desc: "Elegant Carrara marble" },
  { img: IMAGES.countertops[5], category: "countertops", title: "Polished Finish", desc: "Mirror-like surface" },
  // Backsplash - 4 images
  { img: IMAGES.backsplash[0], category: "backsplash", title: "Subway Tile", desc: "Classic white subway tile" },
  { img: IMAGES.backsplash[1], category: "backsplash", title: "Patterned Backsplash", desc: "Colorful tile design" },
  { img: IMAGES.backsplash[2], category: "backsplash", title: "Geometric Pattern", desc: "Modern tile layout" },
  { img: IMAGES.backsplash[3], category: "backsplash", title: "Natural Wood Accent", desc: "Warm wood tones" },
  // Outdoor - 2 images
  { img: IMAGES.outdoor[0], category: "outdoor", title: "Outdoor Kitchen", desc: "Stone counters with built-in grill" },
  { img: IMAGES.outdoor[1], category: "outdoor", title: "BBQ Island", desc: "Complete outdoor cooking station" },
  // Fireplace - 2 images
  { img: IMAGES.fireplace[0], category: "fireplace", title: "Modern Fireplace", desc: "Stone surround with large windows" },
  { img: IMAGES.fireplace[1], category: "fireplace", title: "Cozy Fireplace", desc: "Traditional mantel design" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState("");

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (img: string, title: string) => {
    setLightboxImage(img);
    setLightboxTitle(title);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxTitle("");
  };

  return (
    <>
      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gold-400 transition z-10"
          >
            <X size={32} />
          </button>
          <div className="max-w-5xl max-h-[90vh] relative" onClick={e => e.stopPropagation()}>
            <img 
              src={lightboxImage} 
              alt={lightboxTitle}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg font-semibold">{lightboxTitle}</p>
          </div>
        </div>
      )}

      <section className="bg-granite-950 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">Our Work</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Project Gallery</h1>
          <p className="text-granite-300 text-lg max-w-2xl mx-auto mb-6">
            Browse our portfolio of {galleryItems.length} completed projects. Click any image to view larger.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-granite-400">
            <span>2,500+ Projects Completed</span>
            <span>•</span>
            <span>1,800+ Happy Clients</span>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 bg-white border-b border-granite-100 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter size={16} className="text-granite-400 shrink-0" />
            {categories.map((c) => {
              const count = c.filter === "all" 
                ? galleryItems.length 
                : galleryItems.filter(i => i.category === c.filter).length;
              return (
                <button
                  key={c.filter}
                  onClick={() => setActiveFilter(c.filter)}
                  className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition ${
                    activeFilter === c.filter
                      ? "bg-gold-500 text-white"
                      : "bg-granite-100 text-granite-700 hover:bg-granite-200"
                  }`}
                >
                  {c.name}
                  <span className="ml-1 text-xs opacity-70">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-granite-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-granite-500 text-lg">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredItems.map((item, i) => (
                <div
                  key={`${item.category}-${i}`}
                  className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all bg-white cursor-pointer"
                  onClick={() => openLightbox(item.img, item.title)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-granite-950/80 via-granite-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block bg-gold-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold">{item.title}</h3>
                    <p className="text-granite-300 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-granite-950 mb-4">Ready to Start Your Project?</h3>
            <p className="text-granite-600 mb-6">Let us help you create your dream kitchen or bathroom.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimate"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg"
              >
                Request an Estimate <ArrowRight size={18} />
              </Link>
              <Link
                href="/kitchen-design-tool"
                className="inline-flex items-center justify-center gap-2 bg-granite-950 hover:bg-granite-800 text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Try Our Design Tool
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
