import type { Metadata } from "next";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { ArrowRight, CheckCircle, Briefcase, Clock, Heart, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | House of Granite LLC",
  description: "Join our team at House of Granite LLC. We're hiring skilled countertop fabricators, installers, and remodeling professionals.",
};

const benefits = [
  { icon: Heart, title: "Health Benefits", desc: "Medical, dental, and vision insurance for full-time employees." },
  { icon: Clock, title: "Flexible Schedule", desc: "Work-life balance with reasonable hours and paid time off." },
  { icon: TrendingUp, title: "Growth Opportunities", desc: "Advance your career with training and leadership paths." },
  { icon: Briefcase, title: "Competitive Pay", desc: "Top wages based on experience and performance bonuses." },
];

const openings = [
  { title: "Countertop Installer", type: "Full-Time", location: "Springfield", desc: "Experienced installer for granite, quartz, and quartzite countertops. Must have 2+ years experience." },
  { title: "Fabricator", type: "Full-Time", location: "Springfield", desc: "CNC machine operator and stone fabricator. Training available for the right candidate." },
  { title: "Kitchen Remodeling Lead", type: "Full-Time", location: "Springfield", desc: "Project lead for kitchen remodeling jobs. Experience with cabinets, tile, and plumbing coordination." },
  { title: "Sales Consultant", type: "Full-Time", location: "Springfield", desc: "In-home sales consultant for countertop and remodeling projects. Commission + base." },
  { title: "Installer Helper", type: "Full-Time", location: "Springfield", desc: "Entry-level position assisting with installations. Great opportunity to learn the trade." },
];

export default function CareersPage() {
  return (
    <>
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.work[0]})` }} />
        <div className="absolute inset-0 bg-granite-950/75" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Join Our Team</h1>
          <p className="text-granite-200 text-lg max-w-2xl">
            Build your career with House of Granite. We're looking for skilled, dedicated professionals 
            who take pride in quality craftsmanship.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-granite-950 mb-4">Why Work With Us</h2>
            <p className="text-granite-600 max-w-2xl mx-auto">
              We offer competitive pay, great benefits, and opportunities to grow your skills.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="text-center p-6 rounded-xl border border-granite-100 hover:shadow-lg transition">
                <div className="w-14 h-14 bg-gold-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <b.icon className="text-gold-600" size={24} />
                </div>
                <h3 className="font-bold text-granite-950 mb-2">{b.title}</h3>
                <p className="text-granite-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-granite-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-granite-950 mb-8 text-center">Current Openings</h2>
          <div className="space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="bg-white rounded-xl p-6 shadow-sm border border-granite-100 hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-granite-950 text-lg">{job.title}</h3>
                    <div className="flex items-center gap-3 mt-1 text-sm text-granite-500">
                      <span className="bg-gold-100 text-gold-700 px-2 py-0.5 rounded font-medium">{job.type}</span>
                      <span>{job.location}</span>
                    </div>
                    <p className="text-granite-600 text-sm mt-2">{job.desc}</p>
                  </div>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-granite-950 hover:bg-granite-800 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition shrink-0"
                  >
                    Apply Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-granite-950 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Position?</h2>
          <p className="text-granite-300 mb-8">
            We're always looking for talented people. Send us your resume and we'll keep you in mind 
            for future opportunities.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
