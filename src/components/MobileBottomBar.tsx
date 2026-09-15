import { Phone, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface MobileBottomBarProps {
  onOpenDirections?: () => void;
}

export default function MobileBottomBar({ onOpenDirections }: MobileBottomBarProps) {
  return (
    <div
      id="mobile-sticky-action-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 backdrop-blur-md border-t p-3 shadow-lg transition-colors duration-300"
      style={{
        backgroundColor: 'var(--color-bg)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="flex items-center gap-2">
        {/* Call Now button */}
        <a
          id="mobile-bar-call-btn"
          href={BUSINESS_INFO.phoneTel}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 text-xs uppercase tracking-[0.16em] font-semibold rounded-xs active:scale-[0.98] transition-transform"
          style={{
            backgroundColor: 'var(--color-btn-primary-bg)',
            color: 'var(--color-btn-primary-text)',
          }}
        >
          <Phone className="w-3.5 h-3.5 opacity-90" />
          <span>Call Salon Now</span>
        </a>

        {/* Directions button */}
        <a
          id="mobile-bar-directions-btn"
          href={BUSINESS_INFO.googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (onOpenDirections) {
              e.preventDefault();
              onOpenDirections();
            }
          }}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-3 border text-xs uppercase tracking-wider font-semibold rounded-xs active:scale-[0.98] transition-transform"
          style={{
            backgroundColor: 'var(--color-card-subtle)',
            borderColor: 'var(--color-border)',
            color: 'var(--color-text)',
          }}
        >
          <Navigation className="w-3.5 h-3.5" style={{ color: 'var(--color-accent)' }} />
          <span>Map</span>
        </a>
      </div>
    </div>
  );
}
