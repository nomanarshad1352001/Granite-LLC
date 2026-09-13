import Link from "next/link";
import { IMAGES, DUMMY_DATA } from "@/lib/images";
import {
  Star,
  Shield,
  Clock,
  Award,
  Phone,
  ArrowRight,
  CheckCircle,
  Ruler,
  Hammer,
  Home,
  Paintbrush,
  Sparkles,
  Users,
  Play,
  MapPin,
  Calendar,
  Flame,
  Grid3X3,
  ChevronRight,
  Gem,
  Zap,
} from "lucide-react";

const services = [
  { icon: Ruler, title: "Countertops", desc: "Granite, quartz, quartzite & marble countertops — expertly fabricated and installed.", href: "/countertops", img: IMAGES.kitchens[0], features: ["Free Templating", "Custom Edges", "Same-Week Install"] },
  { icon: Home, title: "Kitchen Remodeling", desc: "Full kitchen renovations including cabinets, countertops, backsplash & more.", href: "/kitchen-remodeling", img: IMAGES.kitchens[1], features: ["Full Design", "Project Management", "Turnkey Solutions"] },
  { icon: Paintbrush, title: "Bathroom Remodeling", desc: "Walk-in showers, vanities, tile work, and complete bathroom transformations.", href: "/bathroom-remodeling", img: IMAGES.bathrooms[0], features: ["Custom Showers", "Vanity Tops", "Tile Installation"] },
  { icon: Hammer, title: "Cabinets", desc: "Custom cabinet installation and replacement for kitchens and bathrooms.", href: "/cabinets", img: IMAGES.kitchens[5], features: ["Soft-Close", "Custom Sizes", "Quality Hardware"] },
  { icon: Grid3X3, title: "Backsplash", desc: "Beautiful tile backsplash installation to complete your kitchen design.", href: "/backsplash", img: IMAGES.backsplash[1], features: ["Subway Tile", "Mosaic", "Natural Stone"] },
  { icon: Flame, title: "Fireplace Surrounds", desc: "Stunning stone and marble fireplace surrounds that transform any room.", href: "/fireplace", img: IMAGES.fireplace[0], features: ["Marble", "Granite", "Custom Design"] },
];

const whyUs = [
  { icon: Award, title: "15+ Years", subtitle: "Experience", desc: "Trusted craftsmanship since 2009.", stat: "15+" },
  { icon: Users, title: "2,500+", subtitle: "Projects Done", desc: "Completed throughout the region.", stat: "2.5K" },
  { icon: Star, title: "4.9 / 5", subtitle: "Rating", desc: "Consistently excellent reviews.", stat: "4.9" },
  { icon: Clock, title: "98%", subtitle: "On-Time", desc: "We respect your timeline.", stat: "98%" },
];

const featuredReviews = DUMMY_DATA.reviews.slice(0, 6);

const materials = [
  { name: "Granite", img: IMAGES.countertops[3], href: "/materials/granite", tag: "Most Popular" },
  { name: "Quartz", img: IMAGES.countertops[1], href: "/materials/quartz", tag: "Low Maintenance" },
  { name: "Quartzite", img: IMAGES.countertops[2], href: "/materials/quartzite", tag: "Premium" },
  { name: "Marble", img: IMAGES.countertops[4], href: "/materials/marble", tag: "Timeless" },
];

export default function HomePage() {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={IMAGES.hero} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-granite-950 via-granite-950/85 to-granite-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-granite-950 via-transparent to-granite-950/30" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-fade-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 text-sm font-medium mb-8">
                <Sparkles size={16} className="text-gold-400" />
                <span className="text-white/90">Trusted by 2,500+ Homeowners &amp; Contractors</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Transform Your
                <br />
                Home with{" "}
                <span className="shimmer-text">Premium Stone</span>
              </h1>

              <p className="text-lg md:text-xl text-granite-300 mb-10 leading-relaxed max-w-xl">
                From stunning granite and quartz countertops to complete kitchen and bathroom
                renovations — House of Granite delivers exceptional craftsmanship you can trust.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/estimate"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-5 rounded-2xl font-semibold text-lg transition-all shadow-2xl shadow-gold-500/30 hover:shadow-gold-500/50 hover:scale-[1.02] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Get a Free Estimate
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  href="/kitchen-design-tool"
                  className="group inline-flex items-center justify-center gap-3 glass hover:bg-white/15 text-white px-8 py-5 rounded-2xl font-semibold text-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition">
                    <Play size={18} className="ml-0.5" />
                  </div>
                  Design Your Kitchen
                </Link>
              </div>

              {/* Trust Bar */}
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-3">
                    {["SM","JK","ML","DR","JH"].map((init, i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 border-2 border-granite-950 flex items-center justify-center text-[10px] text-white font-bold">
                        {init}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-granite-300 ml-1">
                    <span className="font-semibold text-white">2,500+</span> happy customers
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} size={16} className="fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <span className="text-sm text-granite-300 font-semibold">4.9/5</span>
                </div>
              </div>
            </div>

            {/* Right side floating cards */}
            <div className="lg:col-span-5 hidden lg:flex flex-col gap-4 animate-fade-right">
              <div className="glass rounded-2xl p-5 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                    <img src={IMAGES.kitchens[2]} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Latest Project</p>
                    <p className="text-granite-400 text-xs">Modern Kitchen Remodel — Springfield</p>
                  </div>
                  <span className="ml-auto bg-green-500/20 text-green-400 text-xs font-bold px-2.5 py-1 rounded-full">NEW</span>
                </div>
              </div>

              <div className="glass rounded-2xl p-5 ml-8" style={{ animationDelay: "1s", animation: "float 3s ease-in-out 1s infinite" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center">
                    <Star className="text-gold-400" size={22} />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">⭐ 5-Star Review</p>
                    <p className="text-granite-400 text-xs">&ldquo;Absolutely beautiful work!&rdquo;</p>
                    <p className="text-granite-500 text-[10px] mt-0.5">— Sarah M., Springfield</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-5 ml-4" style={{ animationDelay: "2s", animation: "float 3s ease-in-out 2s infinite" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <CheckCircle className="text-green-400" size={22} />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Free Consultation</p>
                    <p className="text-granite-400 text-xs">Book yours today — no obligation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] uppercase tracking-[0.3em]">Explore</span>
          <div className="w-5 h-8 border-2 border-white/25 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-gold-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS BAR ═══════════════ */}
      <section className="relative z-10 -mt-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl shadow-granite-900/10 border border-granite-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-granite-100">
            {whyUs.map((item, i) => (
              <div key={item.title} className={`p-6 md:p-8 text-center animate-count-up delay-${(i+1)*100}`}>
                <div className="w-12 h-12 bg-gradient-to-br from-gold-100 to-gold-200 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="text-gold-700" size={22} />
                </div>
                <div className="text-2xl md:text-3xl font-extrabold text-granite-950">{item.title}</div>
                <div className="text-xs text-granite-500 font-medium uppercase tracking-wider mt-1">{item.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section className="py-28 bg-gradient-to-b from-white via-granite-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-gold-600 font-semibold text-sm uppercase tracking-widest mb-4">
              <Gem size={14} /> What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-granite-950 mb-5 tracking-tight">
              Our Services
            </h2>
            <p className="text-granite-500 text-lg max-w-2xl mx-auto">
              Complete remodeling solutions from countertop fabrication to full
              kitchen and bathroom renovations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                className={`group card-hover bg-white rounded-3xl overflow-hidden border border-granite-100 animate-fade-up delay-${(i+1)*100}`}
                style={{ opacity: 1 }}
              >
                <div className="h-56 img-zoom relative">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-granite-950/70 via-granite-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
                    {s.features.map((f) => (
                      <span key={f} className="glass-white text-granite-800 text-[11px] font-semibold px-3 py-1 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-gold-500/20">
                      <s.icon className="text-white" size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-granite-950 text-lg mb-1 group-hover:text-gold-700 transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-granite-500 text-sm leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 pt-4 border-t border-granite-100 flex items-center justify-between">
                    <span className="text-gold-600 font-semibold text-sm">Explore Service</span>
                    <div className="w-8 h-8 bg-gold-50 rounded-full flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                      <ArrowRight size={14} className="text-gold-600 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ MATERIALS ═══════════════ */}
      <section className="py-24 bg-granite-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">
              <Gem size={14} /> Premium Materials
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
              Explore Our Stone Collection
            </h2>
            <p className="text-granite-400 text-lg max-w-2xl mx-auto">
              From natural granite to engineered quartz — find the perfect surface for your space.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {materials.map((m) => (
              <Link
                key={m.name}
                href={m.href}
                className="group relative rounded-3xl overflow-hidden h-72 card-hover"
              >
                <img src={m.img} alt={m.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-granite-950 via-granite-950/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="glass text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {m.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-1">{m.name}</h3>
                  <span className="text-gold-400 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/materials" className="inline-flex items-center gap-2 glass hover:bg-white/10 text-white px-6 py-3 rounded-xl font-semibold transition">
              Browse All Materials <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY CHOOSE US ═══════════════ */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-granite-50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-gold-600 font-semibold text-sm uppercase tracking-widest mb-4">
                <Shield size={14} /> Why Us
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-granite-950 mb-6 tracking-tight leading-tight">
                Quality You Can Trust,<br />
                <span className="text-gold-600">Service You Deserve</span>
              </h2>
              <p className="text-granite-500 text-lg leading-relaxed mb-8 max-w-lg">
                For over 15 years, we&apos;ve been transforming homes throughout the region. Our
                commitment to quality, transparency, and customer satisfaction sets us apart.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Licensed, Insured & BBB A+ Rated",
                  "Manufacturer Certified Installers",
                  "Free In-Home Estimates & Consultations",
                  "Warranty on All Workmanship",
                  "Financing Options Available",
                  "Dedicated Project Manager",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle size={14} className="text-white" />
                    </div>
                    <span className="text-granite-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-granite-950 hover:bg-granite-800 text-white px-7 py-4 rounded-2xl font-semibold transition shadow-xl"
              >
                Learn About Us <ArrowRight size={18} />
              </Link>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[500px]">
              <div className="col-span-7 row-span-4 rounded-3xl overflow-hidden img-zoom">
                <img src={IMAGES.kitchens[2]} alt="Kitchen project" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-5 row-span-3 rounded-3xl overflow-hidden img-zoom">
                <img src={IMAGES.bathrooms[1]} alt="Bathroom project" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-5 row-span-3 rounded-3xl overflow-hidden img-zoom">
                <img src={IMAGES.countertops[3]} alt="Countertop" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-7 row-span-2 rounded-3xl overflow-hidden img-zoom">
                <img src={IMAGES.kitchens[5]} alt="Cabinets" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ BEFORE & AFTER ═══════════════ */}
      <section className="py-24 bg-gradient-to-b from-granite-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-gold-600 font-semibold text-sm uppercase tracking-widest mb-4">
              <Zap size={14} /> Transformations
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-granite-950 mb-5 tracking-tight">
              Before &amp; After
            </h2>
            <p className="text-granite-500 text-lg max-w-2xl mx-auto">
              See the stunning transformations we create for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              { before: IMAGES.kitchens[3], after: IMAGES.kitchens[2], title: "Complete Kitchen Renovation", desc: "Quartz countertops, new cabinets, subway tile backsplash" },
              { before: IMAGES.bathrooms[3], after: IMAGES.bathrooms[0], title: "Master Bathroom Transformation", desc: "Walk-in shower, marble vanity, custom tile work" },
            ].map((p) => (
              <div key={p.title} className="card-hover rounded-3xl overflow-hidden bg-white border border-granite-100 shadow-sm">
                <div className="grid grid-cols-2 h-64">
                  <div className="relative img-zoom">
                    <img src={p.before} alt="Before" className="w-full h-full object-cover" />
                    <span className="absolute top-4 left-4 bg-granite-950/80 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1.5 rounded-full tracking-wide">BEFORE</span>
                  </div>
                  <div className="relative img-zoom">
                    <img src={p.after} alt="After" className="w-full h-full object-cover" />
                    <span className="absolute top-4 left-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-full tracking-wide">AFTER</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-granite-950 text-lg mb-1">{p.title}</h3>
                  <p className="text-granite-500 text-sm mb-3">{p.desc}</p>
                  <Link href="/gallery" className="text-gold-600 font-semibold text-sm hover:text-gold-700 inline-flex items-center gap-1 group">
                    View Project <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-granite-950 hover:bg-granite-800 text-white px-8 py-4 rounded-2xl font-semibold transition shadow-xl"
            >
              View Full Gallery <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ REVIEWS ═══════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-gold-600 font-semibold text-sm uppercase tracking-widest mb-4">
              <Star size={14} /> Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-granite-950 mb-5 tracking-tight">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-3 mt-2">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} size={22} className="fill-gold-400 text-gold-400" />
                ))}
              </div>
              <span className="text-2xl font-extrabold text-granite-950">4.9</span>
              <span className="text-granite-500">• {DUMMY_DATA.reviews.length}+ Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredReviews.map((r, i) => (
              <div
                key={r.id}
                className={`card-hover bg-gradient-to-br from-white to-granite-50 rounded-3xl p-7 border border-granite-100`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  {r.verified && (
                    <span className="flex items-center gap-1 text-[11px] text-green-600 font-semibold bg-green-50 px-2.5 py-1 rounded-full">
                      <CheckCircle size={10} /> Verified
                    </span>
                  )}
                </div>
                <p className="text-granite-600 text-sm leading-relaxed mb-5">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-granite-100">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center font-bold text-white text-xs">
                    {r.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-granite-950 text-sm">{r.name}</p>
                    <p className="text-granite-400 text-xs">{r.location}</p>
                  </div>
                  <span className="bg-granite-100 text-granite-600 px-2.5 py-1 rounded-full text-[10px] font-semibold">
                    {r.project}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold text-lg transition"
            >
              Read All {DUMMY_DATA.reviews.length}+ Reviews <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ DESIGN TOOL CTA ═══════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.kitchens[6]} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-granite-950/90" />
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gold-600/10 to-transparent" />
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 text-sm font-medium mb-8">
            <Sparkles size={16} className="text-gold-400" />
            <span className="text-white/90">Interactive Tool</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Design Your Dream Kitchen
            <br />
            <span className="shimmer-text">Right Here, Right Now</span>
          </h2>
          <p className="text-granite-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Use our interactive Kitchen Design Tool to create your layout, place cabinets and
            appliances, add measurements, and submit for a free estimate — all from your browser.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kitchen-design-tool"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all shadow-2xl hover:scale-[1.02] animate-pulse-gold"
            >
              <Play size={22} />
              Start Designing Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICE AREAS ═══════════════ */}
      <section className="py-24 bg-gradient-to-b from-white to-granite-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-gold-600 font-semibold text-sm uppercase tracking-widest mb-4">
              <MapPin size={14} /> Coverage
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-granite-950 mb-5 tracking-tight">
              Serving Your Community
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {DUMMY_DATA.serviceAreas.slice(0, 8).map((area) => (
              <Link
                key={area.name}
                href="/service-areas"
                className={`group relative rounded-2xl overflow-hidden h-52 card-hover ${area.primary ? "ring-2 ring-gold-400 ring-offset-2" : ""}`}
              >
                <img src={IMAGES.homes[area.img]} alt={area.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-granite-950/90 via-granite-950/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    <MapPin size={13} className="text-gold-400" />
                    <h3 className="font-bold text-white text-sm">{area.name}</h3>
                  </div>
                  <p className="text-granite-400 text-[11px]">{area.projects}+ Projects</p>
                </div>
                {area.primary && (
                  <div className="absolute top-3 right-3 bg-gold-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                    HQ
                  </div>
                )}
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/service-areas" className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold transition">
              View All Service Areas <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ BRANDS ═══════════════ */}
      <section className="py-12 bg-white border-y border-granite-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-granite-400 text-xs font-semibold uppercase tracking-[0.2em] mb-8">Trusted Brands We Carry</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
            {DUMMY_DATA.brands.map((brand) => (
              <span key={brand} className="text-granite-300 font-bold text-xl hover:text-gold-500 transition cursor-default select-none">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="py-28 bg-gradient-to-br from-granite-950 via-granite-900 to-granite-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Ready to Transform
            <br />
            <span className="shimmer-text">Your Home?</span>
          </h2>
          <p className="text-granite-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you need new countertops, a kitchen remodel, or a bathroom renovation,
            our expert team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/estimate"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all shadow-2xl hover:scale-[1.02]"
            >
              <Calendar size={22} />
              Schedule Free Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center gap-3 glass hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition"
            >
              <Phone size={22} />
              (555) 123-4567
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-granite-500 text-sm">
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-gold-500" /> Free Estimates</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-gold-500" /> No Obligation</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-gold-500" /> Financing Available</span>
          </div>
        </div>
      </section>
    </>
  );
}
