import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { IMAGES, DUMMY_DATA } from "@/lib/images";

export function Footer() {
  return (
    <footer className="bg-granite-950 text-granite-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image 
                src={IMAGES.logo} 
                alt="House of Granite Logo" 
                width={50} 
                height={50}
                className="rounded-lg"
              />
              <div className="leading-tight">
                <div className="font-bold text-white text-xl">House of Granite</div>
                <div className="text-xs text-granite-400 tracking-widest uppercase">Est. 2009</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Premium countertop fabrication &amp; installation. Expert kitchen
              and bathroom remodeling services for homeowners, contractors, and
              builders. Serving the community for over 15 years.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 hover:text-gold-400 transition"
              >
                <div className="w-8 h-8 bg-granite-800 rounded-lg flex items-center justify-center">
                  <Phone size={14} />
                </div>
                (555) 123-4567
              </a>
              <a
                href="mailto:info@houseofgranitellc.com"
                className="flex items-center gap-3 hover:text-gold-400 transition"
              >
                <div className="w-8 h-8 bg-granite-800 rounded-lg flex items-center justify-center">
                  <Mail size={14} />
                </div>
                info@houseofgranitellc.com
              </a>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-granite-800 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={14} />
                </div>
                <span>123 Stone Avenue, Suite 100<br />Springfield, ST 12345</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 bg-granite-800 hover:bg-gold-500 rounded-lg flex items-center justify-center transition text-xs font-bold">
                FB
              </a>
              <a href="#" className="w-10 h-10 bg-granite-800 hover:bg-gold-500 rounded-lg flex items-center justify-center transition text-xs font-bold">
                IG
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/countertops" className="hover:text-gold-400 transition">Countertops</Link></li>
              <li><Link href="/kitchen-remodeling" className="hover:text-gold-400 transition">Kitchen Remodeling</Link></li>
              <li><Link href="/bathroom-remodeling" className="hover:text-gold-400 transition">Bathroom Remodeling</Link></li>
              <li><Link href="/cabinets" className="hover:text-gold-400 transition">Cabinets</Link></li>
              <li><Link href="/backsplash" className="hover:text-gold-400 transition">Backsplash</Link></li>
              <li><Link href="/outdoor-kitchens" className="hover:text-gold-400 transition">Outdoor Kitchens</Link></li>
              <li><Link href="/fireplace" className="hover:text-gold-400 transition">Fireplace Surrounds</Link></li>
              <li><Link href="/kitchen-design-tool" className="hover:text-gold-400 transition">Kitchen Design Tool</Link></li>
            </ul>
          </div>

          {/* Materials */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Materials</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/materials/granite" className="hover:text-gold-400 transition">Granite</Link></li>
              <li><Link href="/materials/quartz" className="hover:text-gold-400 transition">Quartz</Link></li>
              <li><Link href="/materials/quartzite" className="hover:text-gold-400 transition">Quartzite</Link></li>
              <li><Link href="/materials/marble" className="hover:text-gold-400 transition">Marble</Link></li>
              <li><Link href="/materials" className="hover:text-gold-400 transition">All Materials</Link></li>
            </ul>
            
            <h3 className="font-semibold text-white mb-4 mt-6 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-gold-400 transition">About Us</Link></li>
              <li><Link href="/gallery" className="hover:text-gold-400 transition">Gallery</Link></li>
              <li><Link href="/reviews" className="hover:text-gold-400 transition">Reviews</Link></li>
              <li><Link href="/careers" className="hover:text-gold-400 transition">Careers</Link></li>
            </ul>
          </div>

          {/* Resources & Hours */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/our-process" className="hover:text-gold-400 transition">Our Process</Link></li>
              <li><Link href="/faq" className="hover:text-gold-400 transition">FAQ</Link></li>
              <li><Link href="/financing" className="hover:text-gold-400 transition">Financing</Link></li>
              <li><Link href="/contractors" className="hover:text-gold-400 transition">Contractors</Link></li>
              <li><Link href="/service-areas" className="hover:text-gold-400 transition">Service Areas</Link></li>
              <li><Link href="/estimate" className="hover:text-gold-400 transition">Get Estimate</Link></li>
              <li><Link href="/contact" className="hover:text-gold-400 transition">Contact Us</Link></li>
            </ul>
            
            <div className="mt-6 p-4 bg-granite-900 rounded-xl">
              <div className="flex items-center gap-2 text-white font-semibold text-sm mb-2">
                <Clock size={14} />
                Business Hours
              </div>
              <div className="text-xs space-y-1">
                <p>Mon – Fri: 8:00 AM – 5:00 PM</p>
                <p>Saturday: 9:00 AM – 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Brands */}
        <div className="border-t border-granite-800 mt-12 pt-8">
          <p className="text-center text-granite-500 text-xs mb-4">Brands We Carry</p>
          <div className="flex flex-wrap justify-center gap-6 text-granite-500 text-sm">
            {DUMMY_DATA.brands.map((brand) => (
              <span key={brand} className="hover:text-granite-300 transition">{brand}</span>
            ))}
          </div>
        </div>
        
        {/* Certifications */}
        <div className="border-t border-granite-800 mt-8 pt-8">
          <div className="flex flex-wrap justify-center gap-4">
            {DUMMY_DATA.certifications.map((cert) => (
              <span key={cert} className="bg-granite-900 text-granite-400 px-3 py-1.5 rounded-full text-xs font-medium">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-granite-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} House of Granite LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-gold-400 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold-400 transition">Terms &amp; Conditions</Link>
            <Link href="/sitemap" className="hover:text-gold-400 transition">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
