import { Phone, ArrowUpRight, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';
import RevealOnScroll from './RevealOnScroll';

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-28 relative overflow-hidden transition-colors duration-300 border-t"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <RevealOnScroll direction="up">
          {/* Subtitle tag */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs border text-xs uppercase tracking-[0.2em] font-semibold mb-6"
            style={{
              backgroundColor: 'var(--color-accent-bg)',
              borderColor: 'var(--color-border)',
              color: 'var(--color-accent)',
            }}
          >
            <span>Bookings &amp; Enquiries</span>
          </div>

          {/* Heading */}
          <h2
            className="font-serif-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight mb-6"
            style={{ color: 'var(--color-text)' }}
          >
            Ready for Your Next Look?
          </h2>

          {/* Copy */}
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 opacity-85"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Visit Shanghai Greater China in Central London or call us to discuss your next hairstyle.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {/* Primary CTA: Call Now */}
            <a
              id="final-cta-call"
              href={BUSINESS_INFO.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.16em] font-semibold rounded-xs shadow-md hover:opacity-90 transition-all duration-200 group"
              style={{
                backgroundColor: 'var(--color-btn-primary-bg)',
                color: 'var(--color-btn-primary-text)',
              }}
            >
              <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform opacity-90" />
              <span>Call Now: {BUSINESS_INFO.phoneDisplay}</span>
            </a>

            {/* Secondary CTA: Get Directions */}
            <a
              id="final-cta-directions"
              href={BUSINESS_INFO.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 border text-xs sm:text-sm uppercase tracking-[0.14em] font-medium rounded-xs transition-all duration-200 group"
              style={{
                backgroundColor: 'var(--color-card)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)',
              }}
            >
              <MapPin className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
              <span>Get Directions</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform opacity-80" />
            </a>
          </div>

          {/* Quick Footer Meta inside CTA */}
          <div
            className="pt-8 border-t flex flex-wrap items-center justify-center gap-6 text-xs opacity-75"
            style={{
              borderColor: 'var(--color-border)',
              color: 'var(--color-text-muted)',
            }}
          >
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" style={{ color: 'var(--color-accent)' }} />
              First Floor, Gerrard St, London W1D 5PF
            </span>
            <span className="opacity-40 hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" style={{ color: 'var(--color-accent)' }} />
              Open Daily: 11:00 AM – 8:00 PM
            </span>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
