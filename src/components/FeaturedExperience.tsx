import { Phone, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';
import RevealOnScroll from './RevealOnScroll';

export default function FeaturedExperience() {
  return (
    <section
      className="py-20 lg:py-28 border-t overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: 'var(--color-bg)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Large Premium Hair Image */}
          <div className="lg:col-span-6 relative">
            <RevealOnScroll direction="up">
              <div
                className="relative z-10 overflow-hidden shadow-xl border"
                style={{
                  borderColor: 'var(--color-border)',
                  backgroundColor: 'var(--color-card-subtle)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1100&q=80"
                  alt="Hair style transformation and texture styling at Shanghai Greater China"
                  className="w-full h-[480px] sm:h-[540px] object-cover hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Architectural accent framing */}
              <div
                className="absolute -bottom-4 -left-4 w-full h-full border -z-10 hidden sm:block pointer-events-none"
                style={{ borderColor: 'var(--color-border)' }}
              />
            </RevealOnScroll>
          </div>

          {/* Right: Editorial Experience Copy with subtle fade-in-up */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <RevealOnScroll direction="up" delay={150}>
              <div
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] font-semibold mb-3"
                style={{ color: 'var(--color-accent)' }}
              >
                <span>The Salon Experience</span>
              </div>

              <h2
                className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-6"
                style={{ color: 'var(--color-text)' }}
              >
                Your Look, Your Style
              </h2>

              <p
                className="text-base sm:text-lg leading-relaxed mb-8 opacity-85"
                style={{ color: 'var(--color-text-muted)' }}
              >
                From a fresh cut to a complete style transformation, our salon experience is designed around the look you want to achieve.
              </p>

              <div
                className="space-y-4 mb-10 pb-8 border-b"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-sm opacity-85" style={{ color: 'var(--color-text-secondary)' }}>
                    Convenient central location on Gerrard Street in Chinatown / Soho.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-sm opacity-85" style={{ color: 'var(--color-text-secondary)' }}>
                    Welcoming team offering personalized consultations for your haircut, colour, or texture treatment.
                  </p>
                </div>
              </div>

              {/* CTA: Call +44 7837 584522 */}
              <div>
                <a
                  id="featured-experience-cta"
                  href={BUSINESS_INFO.phoneTel}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.16em] font-semibold rounded-xs hover:shadow-md transition-all duration-200 group"
                  style={{
                    backgroundColor: 'var(--color-btn-primary-bg)',
                    color: 'var(--color-btn-primary-text)',
                  }}
                >
                  <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform opacity-90" />
                  <span>Call +44 7837 584522</span>
                </a>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
