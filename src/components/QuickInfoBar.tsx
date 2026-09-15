import { Star, MapPin, Clock, MessageSquare } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

export default function QuickInfoBar() {
  return (
    <section
      id="quick-info-bar"
      aria-label="Salon Key Information"
      className="border-y py-6 sm:py-8 transition-colors duration-300"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x"
            style={{ borderColor: 'var(--color-border)' }}
          >
            {/* 1. Rating */}
            <div className="flex items-center gap-3.5 pt-2 md:pt-0 md:px-4">
              <div
                className="w-10 h-10 rounded-xs flex items-center justify-center shrink-0 border"
                style={{
                  backgroundColor: 'var(--color-accent-bg)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-accent)',
                }}
              >
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-serif-title font-semibold" style={{ color: 'var(--color-text)' }}>
                    4.3★
                  </span>
                  <span className="text-xs uppercase tracking-wider opacity-75" style={{ color: 'var(--color-text-muted)' }}>
                    Google
                  </span>
                </div>
                <p className="text-xs opacity-80" style={{ color: 'var(--color-text-muted)' }}>
                  Based on public rating
                </p>
              </div>
            </div>

            {/* 2. Reviews */}
            <div
              className="flex items-center gap-3.5 pt-2 md:pt-0 md:px-4 border-t md:border-t-0"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div
                className="w-10 h-10 rounded-xs flex items-center justify-center shrink-0 border"
                style={{
                  backgroundColor: 'var(--color-accent-bg)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-accent)',
                }}
              >
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-serif-title font-semibold" style={{ color: 'var(--color-text)' }}>
                    216
                  </span>
                  <span className="text-xs uppercase tracking-wider opacity-75" style={{ color: 'var(--color-text-muted)' }}>
                    Reviews
                  </span>
                </div>
                <p className="text-xs opacity-80" style={{ color: 'var(--color-text-muted)' }}>
                  Google client reviews
                </p>
              </div>
            </div>

            {/* 3. Location */}
            <div
              className="flex items-center gap-3.5 pt-4 md:pt-0 md:px-4 border-t md:border-t-0"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div
                className="w-10 h-10 rounded-xs flex items-center justify-center shrink-0 border"
                style={{
                  backgroundColor: 'var(--color-accent-bg)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-accent)',
                }}
              >
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm sm:text-base font-serif-title font-semibold block leading-snug" style={{ color: 'var(--color-text)' }}>
                  Central London
                </span>
                <p className="text-xs opacity-80" style={{ color: 'var(--color-text-muted)' }}>
                  First Floor, Gerrard St (W1D 5PF)
                </p>
              </div>
            </div>

            {/* 4. Hours */}
            <div
              className="flex items-center gap-3.5 pt-4 md:pt-0 md:px-4 border-t md:border-t-0"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div
                className="w-10 h-10 rounded-xs flex items-center justify-center shrink-0 border"
                style={{
                  backgroundColor: 'var(--color-accent-bg)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-accent)',
                }}
              >
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm sm:text-base font-serif-title font-semibold block leading-snug" style={{ color: 'var(--color-text)' }}>
                  Open Daily
                </span>
                <p className="text-xs opacity-80" style={{ color: 'var(--color-text-muted)' }}>
                  Monday – Sunday: 11am – 8pm
                </p>
              </div>
            </div>

          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
