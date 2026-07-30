import type { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight, CheckCircle, ThumbsUp, MessageSquare } from "lucide-react";
import { DUMMY_DATA } from "@/lib/images";

export const metadata: Metadata = {
  title: "Reviews & Testimonials | House of Granite LLC",
  description: "Read what our customers say about our countertops, kitchen remodeling, and bathroom remodeling services.",
};

const reviewStats = {
  total: DUMMY_DATA.reviews.length,
  average: 4.9,
  fiveStar: DUMMY_DATA.reviews.filter(r => r.rating === 5).length,
  fourStar: DUMMY_DATA.reviews.filter(r => r.rating === 4).length,
  threeStar: 0,
  twoStar: 0,
  oneStar: 0,
};

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-granite-950 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Customer Reviews</h1>
          <p className="text-granite-300 text-lg max-w-2xl mx-auto mb-8">
            Don&apos;t just take our word for it — hear from our satisfied customers.
          </p>
          
          {/* Rating Summary */}
          <div className="inline-flex flex-col items-center bg-granite-900 rounded-2xl p-8 border border-granite-800">
            <div className="flex gap-1 mb-2">
              {[1,2,3,4,5].map((s) => <Star key={s} size={28} className="fill-gold-400 text-gold-400" />)}
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold text-white">{reviewStats.average}</span>
              <span className="text-granite-400 text-lg">/ 5</span>
            </div>
            <p className="text-granite-400 text-sm">Based on {reviewStats.total}+ verified reviews</p>
            
            {/* Rating Breakdown */}
            <div className="mt-6 w-full max-w-xs space-y-2">
              {[
                { stars: 5, count: reviewStats.fiveStar },
                { stars: 4, count: reviewStats.fourStar },
                { stars: 3, count: reviewStats.threeStar },
                { stars: 2, count: reviewStats.twoStar },
                { stars: 1, count: reviewStats.oneStar },
              ].map((row) => (
                <div key={row.stars} className="flex items-center gap-2 text-sm">
                  <span className="text-granite-400 w-12">{row.stars} star</span>
                  <div className="flex-1 h-2 bg-granite-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gold-400 rounded-full"
                      style={{ width: `${(row.count / reviewStats.total) * 100}%` }}
                    />
                  </div>
                  <span className="text-granite-500 w-8 text-right">{row.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Review Highlights */}
      <section className="py-12 bg-white border-b border-granite-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-granite-950 mb-1">{DUMMY_DATA.stats.projectsCompleted.toLocaleString()}+</div>
              <p className="text-granite-500 text-sm">Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-granite-950 mb-1">{DUMMY_DATA.stats.happyClients.toLocaleString()}+</div>
              <p className="text-granite-500 text-sm">Happy Clients</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-granite-950 mb-1">15+</div>
              <p className="text-granite-500 text-sm">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-granite-950 mb-1">98%</div>
              <p className="text-granite-500 text-sm">Would Recommend</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-granite-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DUMMY_DATA.reviews.map((r) => (
              <div key={r.id} className="bg-white rounded-2xl p-6 shadow-sm border border-granite-100 hover:shadow-lg hover:border-gold-200 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  {r.verified && (
                    <span className="flex items-center gap-1 text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                      <CheckCircle size={12} /> Verified
                    </span>
                  )}
                </div>
                <p className="text-granite-700 text-sm leading-relaxed mb-4">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-granite-100">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-granite-200 to-granite-400 flex items-center justify-center font-bold text-granite-700 text-sm">
                      {r.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-granite-950 text-sm">{r.name}</p>
                      <p className="text-granite-500 text-xs">{r.location}</p>
                    </div>
                  </div>
                  <span className="bg-granite-100 text-granite-600 px-2.5 py-1 rounded-full text-xs font-medium">
                    {r.project}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-granite-50 text-xs text-granite-400">
                  <span>{new Date(r.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1 hover:text-granite-600 transition">
                      <ThumbsUp size={12} /> Helpful
                    </button>
                    <button className="flex items-center gap-1 hover:text-granite-600 transition">
                      <MessageSquare size={12} /> Reply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-granite-950 mb-4">Join Our Happy Customers</h2>
          <p className="text-granite-600 mb-6">Ready to experience the House of Granite difference?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/estimate" className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg">
              Get a Free Estimate <ArrowRight size={18} />
            </Link>
            <Link href="/gallery" className="inline-flex items-center justify-center gap-2 border border-granite-300 text-granite-700 px-8 py-4 rounded-xl font-semibold transition hover:bg-granite-50">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
