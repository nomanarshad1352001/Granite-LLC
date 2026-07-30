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
  ThumbsUp,
  Play,
  MapPin,
  Calendar,
  Flame,
  Grid3X3,
} from "lucide-react";

const services = [
  {
    icon: Ruler,
    title: "Countertops",
    desc: "Granite, quartz, quartzite & marble countertops — expertly fabricated and installed.",
    href: "/countertops",
    img: IMAGES.kitchens[0],
    features: ["Free Templating", "Custom Edges", "Same-Week Install"],
  },
  {
    icon: Home,
    title: "Kitchen Remodeling",
    desc: "Full kitchen renovations including cabinets, countertops, backsplash & more.",
    href: "/kitchen-remodeling",
    img: IMAGES.kitchens[1],
    features: ["Full Design", "Project Management", "Turnkey Solutions"],
  },
  {
    icon: Paintbrush,
    title: "Bathroom Remodeling",
    desc: "Walk-in showers, vanities, tile work, and complete bathroom transformations.",
    href: "/bathroom-remodeling",
    img: IMAGES.bathrooms[0],
    features: ["Custom Showers", "Vanity Tops", "Tile Installation"],
  },
  {
    icon: Hammer,
    title: "Cabinets",
    desc: "Custom cabinet installation and replacement for kitchens and bathrooms.",
    href: "/cabinets",
    img: IMAGES.kitchens[5],
    features: ["Soft-Close", "Custom Sizes", "Quality Hardware"],
  },
  {
    icon: Grid3X3,
    title: "Backsplash",
    desc: "Beautiful tile backsplash installation to complete your kitchen design.",
    href: "/backsplash",
    img: IMAGES.backsplash[1],
    features: ["Subway Tile", "Mosaic", "Natural Stone"],
  },
  {
    icon: Flame,
    title: "Fireplace Surrounds",
    desc: "Stunning stone and marble fireplace surrounds that transform any room.",
    href: "/fireplace",
    img: IMAGES.fireplace[0],
    features: ["Marble", "Granite", "Custom Design"],
  },
];

const reasons = [
  { icon: Award, title: "15+ Years Experience", desc: "Trusted craftsmanship since 2009.", stat: "15+" },
  { icon: Users, title: "2,500+ Projects", desc: "Completed throughout the region.", stat: "2.5K" },
  { icon: Star, title: "450+ 5-Star Reviews", desc: "Consistently excellent service.", stat: "450+" },
  { icon: Clock, title: "On-Time Delivery", desc: "We respect your timeline.", stat: "98%" },
];

const featuredReviews = DUMMY_DATA.reviews.slice(0, 6);

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Stunning Full Width */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-granite-950 via-granite-950/80 to-granite-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-granite-950/60 via-transparent to-transparent" />
        
        {/* Animated particles/sparkles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
          <div className="absolute top-40 right-40 w-1.5 h-1.5 bg-gold-300 rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-gold-400 rounded-full animate-pulse delay-700" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
              <Sparkles size={16} className="text-gold-400" />
              <span>Trusted by 2,500+ Homeowners & Contractors</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Transform Your Home with{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
                Premium Stone
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-granite-200 mb-10 leading-relaxed max-w-2xl">
              From stunning granite and quartz countertops to complete kitchen and bathroom 
              renovations — House of Granite delivers exceptional craftsmanship you can trust.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/estimate"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-5 rounded-xl font-semibold text-lg transition-all shadow-2xl shadow-gold-500/30 hover:shadow-gold-500/50"
              >
                Get a Free Estimate
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/kitchen-design-tool"
                className="group inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-5 rounded-xl font-semibold text-lg transition-all backdrop-blur-sm"
              >
                <Play size={20} />
                Try Our Design Tool
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-granite-300">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-granite-600 to-granite-700 border-2 border-granite-950 flex items-center justify-center text-xs text-white font-medium">
                      {['SM','JK','ML','DR','JH'][i-1]}
                    </div>
                  ))}
                </div>
                <span className="font-medium">Join 2,500+ happy customers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} size={16} className="fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <span className="font-medium">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-granite-950 py-6 border-t border-granite-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {reasons.map((r) => (
              <div key={r.title} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-1">{r.stat}</div>
                <div className="text-sm text-granite-400">{r.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-granite-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-gold-600 font-semibold text-sm uppercase tracking-wider mb-3">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-granite-950 mb-5">
              Our Services
            </h2>
            <p className="text-granite-600 text-lg max-w-2xl mx-auto">
              Complete remodeling solutions from countertop fabrication to full
              kitchen and bathroom renovations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-granite-100 hover:border-gold-200"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-granite-950/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2 flex-wrap">
                      {s.features.map((f) => (
                        <span key={f} className="bg-white/90 backdrop-blur-sm text-granite-800 text-xs font-medium px-2.5 py-1 rounded-full">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold-100 to-gold-200 rounded-xl flex items-center justify-center shrink-0">
                      <s.icon className="text-gold-700" size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-granite-950 text-lg mb-1 group-hover:text-gold-700 transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-granite-600 text-sm leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-granite-100 flex items-center justify-between">
                    <span className="text-gold-600 font-semibold text-sm group-hover:text-gold-700">Learn More</span>
                    <ArrowRight size={16} className="text-gold-600 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/countertops"
              className="inline-flex items-center gap-2 text-granite-700 hover:text-granite-950 font-semibold transition"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-granite-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}} />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">Why House of Granite</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quality You Can Trust,<br />Service You Deserve
              </h2>
              <p className="text-granite-300 text-lg leading-relaxed mb-8">
                For over 15 years, we've been transforming homes throughout the region with 
                beautiful countertops and expert remodeling services. Our commitment to quality, 
                transparency, and customer satisfaction sets us apart.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Licensed & Insured",
                  "BBB A+ Rating",
                  "Manufacturer Certified",
                  "Warranty on All Work",
                  "Free In-Home Estimates",
                  "Financing Available",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-gold-400 shrink-0" />
                    <span className="text-granite-200 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-3 rounded-lg font-semibold transition hover:from-gold-600 hover:to-gold-700"
              >
                Learn About Us <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {reasons.map((r, i) => (
                <div
                  key={r.title}
                  className={`bg-gradient-to-br from-granite-800 to-granite-900 rounded-2xl p-6 border border-granite-700 ${i === 1 ? 'mt-8' : ''} ${i === 3 ? 'mt-8' : ''}`}
                >
                  <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center mb-4">
                    <r.icon className="text-gold-400" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{r.stat}</div>
                  <h3 className="font-semibold text-white mb-1">{r.title}</h3>
                  <p className="text-granite-400 text-sm">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-gold-600 font-semibold text-sm uppercase tracking-wider mb-3">Transformations</span>
            <h2 className="text-4xl md:text-5xl font-bold text-granite-950 mb-5">
              Before &amp; After
            </h2>
            <p className="text-granite-600 text-lg max-w-2xl mx-auto">
              See the stunning transformations we create for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Kitchen Transformation */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-granite-100">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img
                    src={IMAGES.kitchens[3]}
                    alt="Kitchen before"
                    className="w-full h-64 object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-granite-950 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    BEFORE
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={IMAGES.kitchens[2]}
                    alt="Kitchen after"
                    className="w-full h-64 object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-gold-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    AFTER
                  </span>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-r from-granite-50 to-white">
                <h3 className="font-bold text-granite-950 text-lg mb-2">Complete Kitchen Renovation</h3>
                <p className="text-granite-600 text-sm mb-3">Quartz countertops, new cabinets, subway tile backsplash</p>
                <Link href="/gallery" className="text-gold-600 font-semibold text-sm hover:text-gold-700 inline-flex items-center gap-1">
                  View Project <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            
            {/* Bathroom Transformation */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-granite-100">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img
                    src={IMAGES.bathrooms[3]}
                    alt="Bathroom before"
                    className="w-full h-64 object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-granite-950 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    BEFORE
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={IMAGES.bathrooms[0]}
                    alt="Bathroom after"
                    className="w-full h-64 object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-gold-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    AFTER
                  </span>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-r from-granite-50 to-white">
                <h3 className="font-bold text-granite-950 text-lg mb-2">Master Bathroom Transformation</h3>
                <p className="text-granite-600 text-sm mb-3">Walk-in shower, marble vanity, custom tile work</p>
                <Link href="/gallery" className="text-gold-600 font-semibold text-sm hover:text-gold-700 inline-flex items-center gap-1">
                  View Project <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-granite-950 hover:bg-granite-800 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg"
            >
              View Full Gallery <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-gradient-to-b from-granite-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-gold-600 font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-granite-950 mb-5">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} size={24} className="fill-gold-400 text-gold-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-granite-950">4.9</span>
              <span className="text-granite-500">• {DUMMY_DATA.reviews.length}+ Reviews</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredReviews.map((r) => (
              <div
                key={r.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-granite-100 hover:shadow-lg hover:border-gold-200 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  {r.verified && (
                    <span className="flex items-center gap-1 text-xs text-green-600 font-medium">
                      <CheckCircle size={12} /> Verified
                    </span>
                  )}
                </div>
                <p className="text-granite-700 text-sm leading-relaxed mb-4 line-clamp-4">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-granite-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-granite-200 to-granite-300 flex items-center justify-center font-semibold text-granite-700 text-sm">
                      {r.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-granite-950 text-sm">{r.name}</p>
                      <p className="text-granite-500 text-xs">{r.location}</p>
                    </div>
                  </div>
                  <span className="bg-granite-100 text-granite-600 px-2 py-1 rounded text-xs font-medium">
                    {r.project}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold transition"
            >
              Read All {DUMMY_DATA.reviews.length}+ Reviews <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Design Tool CTA */}
      <section className="py-24 bg-gradient-to-r from-granite-900 to-granite-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.kitchens[6]} alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} />
            Interactive Tool
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Design Your Dream Kitchen Online
          </h2>
          <p className="text-granite-300 text-lg mb-10 max-w-2xl mx-auto">
            Use our interactive Kitchen Design Tool to create your layout, place cabinets and 
            appliances, add measurements, and submit your design for a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kitchen-design-tool"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all shadow-2xl"
            >
              <Play size={22} />
              Start Designing Now
            </Link>
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center gap-2 border border-granite-600 hover:border-granite-400 text-white px-10 py-5 rounded-xl font-semibold text-lg transition"
            >
              Or Request an Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-gold-600 font-semibold text-sm uppercase tracking-wider mb-3">Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold text-granite-950 mb-5">
              Serving Your Community
            </h2>
            <p className="text-granite-600 text-lg max-w-2xl mx-auto">
              We proudly serve homeowners and contractors throughout the greater metro area.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {DUMMY_DATA.serviceAreas.slice(0, 8).map((area) => (
              <Link
                key={area.name}
                href="/service-areas"
                className={`group relative rounded-xl overflow-hidden h-48 ${area.primary ? 'ring-2 ring-gold-400' : ''}`}
              >
                <img 
                  src={IMAGES.homes[area.img]} 
                  alt={area.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-granite-950/80 via-granite-950/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    <MapPin size={14} className="text-gold-400" />
                    <h3 className="font-bold text-white">{area.name}</h3>
                  </div>
                  <p className="text-granite-300 text-xs">{area.projects}+ Projects</p>
                </div>
                {area.primary && (
                  <div className="absolute top-3 right-3 bg-gold-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    PRIMARY
                  </div>
                )}
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold transition"
            >
              View All Service Areas <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Brands We Work With */}
      <section className="py-16 bg-granite-50 border-y border-granite-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-granite-500 text-sm font-medium mb-8">TRUSTED BRANDS WE WORK WITH</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {DUMMY_DATA.brands.map((brand) => (
              <span key={brand} className="text-granite-400 font-semibold text-lg hover:text-granite-600 transition cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-granite-950 via-granite-900 to-granite-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-granite-300 text-lg mb-10 max-w-2xl mx-auto">
            Whether you need new countertops, a kitchen remodel, or a bathroom renovation, 
            our expert team is ready to bring your vision to life. Get started with a free estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all shadow-2xl"
            >
              <Calendar size={20} />
              Schedule Free Consultation
            </Link>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center gap-2 border border-granite-600 hover:border-granite-400 hover:bg-granite-800 text-white px-10 py-5 rounded-xl font-semibold text-lg transition"
            >
              <Phone size={20} />
              (555) 123-4567
            </a>
          </div>
          <p className="text-granite-500 text-sm">
            Mon – Fri: 8am – 5pm • Saturday: 9am – 2pm • Free Estimates
          </p>
        </div>
      </section>
    </>
  );
}
