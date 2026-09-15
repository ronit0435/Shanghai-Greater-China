import { Star, Quote, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { CUSTOMER_REVIEWS, BUSINESS_INFO } from '../data/salonData';
import RevealOnScroll from './RevealOnScroll';

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="py-20 lg:py-28 border-t transition-colors duration-300"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with subtle fade-in-up */}
        <RevealOnScroll direction="up">
          <div
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <div>
              <span
                className="text-xs uppercase tracking-[0.24em] font-semibold block mb-2"
                style={{ color: 'var(--color-accent)' }}
              >
                Client Feedback
              </span>
              <h2
                className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight"
                style={{ color: 'var(--color-text)' }}
              >
                What Our Clients Say
              </h2>
            </div>

            {/* Rating Summary Card */}
            <div
              className="mt-6 md:mt-0 flex items-center gap-4 border px-5 py-3 rounded-xs shadow-xs"
              style={{
                backgroundColor: 'var(--color-card)',
                borderColor: 'var(--color-border)',
              }}
            >
              <div className="flex" style={{ color: 'var(--color-accent)' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="border-l pl-4" style={{ borderColor: 'var(--color-border)' }}>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-serif-title font-semibold" style={{ color: 'var(--color-text)' }}>4.3★</span>
                  <span className="text-xs opacity-75" style={{ color: 'var(--color-text-muted)' }}>Google Rating</span>
                </div>
                <p className="text-xs font-medium opacity-80" style={{ color: 'var(--color-text-muted)' }}>216 Google Reviews</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* The 2 Authentic Supplied Reviews with subtle fade-in-up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CUSTOMER_REVIEWS.map((review, idx) => (
            <RevealOnScroll key={review.id} delay={idx * 150} direction="up">
              <div
                className="border p-8 sm:p-10 rounded-xs relative flex flex-col justify-between shadow-xs transition-colors h-full"
                style={{
                  backgroundColor: 'var(--color-card)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div>
                  {/* Quote icon & Star rating */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex" style={{ color: 'var(--color-accent)' }}>
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-7 h-7 opacity-30" style={{ color: 'var(--color-accent)' }} />
                  </div>

                  {/* Review Quote Text */}
                  <blockquote
                    className="font-serif-title text-2xl sm:text-[26px] italic font-normal leading-snug mb-8"
                    style={{ color: 'var(--color-text)' }}
                  >
                    &ldquo;{review.reviewText}&rdquo;
                  </blockquote>
                </div>

                {/* Author & Verified Source */}
                <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: 'var(--color-border-subtle)' }}>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wide" style={{ color: 'var(--color-text)' }}>
                      {review.author}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs opacity-75 mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Verified Google Review</span>
                    </div>
                  </div>

                  <span className="text-[11px] uppercase tracking-wider opacity-60 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                    London
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Subtle View on Google CTA */}
        <RevealOnScroll direction="up" delay={200}>
          <div className="mt-12 text-center">
            <a
              href={BUSINESS_INFO.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors py-2 opacity-80 hover:opacity-100 border-b"
              style={{
                color: 'var(--color-text)',
                borderColor: 'var(--color-accent)',
              }}
            >
              <span>View us on Google Maps (4.3★ based on 216 reviews)</span>
              <ArrowUpRight className="w-3.5 h-3.5" style={{ color: 'var(--color-accent)' }} />
            </a>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
