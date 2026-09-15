import { Star, Sparkles, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export default function MarqueeTicker() {
  const tickerItems = [
    { text: 'Gerrard Street • Central London Chinatown W1D', icon: MapPin },
    { text: 'Precision Asian Haircraft & Layering', icon: Sparkles },
    { text: '4.3★ Google Rated (216+ Client Reviews)', icon: Star },
    { text: 'Japanese Digital Perms & Waves', icon: Sparkles },
    { text: 'Open 7 Days: 11:00 AM – 8:00 PM', icon: Clock },
    { text: 'Bespoke Balayage & Creative Colour', icon: Sparkles },
    { text: 'Walk-ins & Appointments Welcome', icon: Sparkles },
    { text: `Direct Booking: ${BUSINESS_INFO.phoneDisplay}`, icon: Sparkles },
  ];

  return (
    <div
      className="relative overflow-hidden py-3 border-y select-none transition-colors duration-300"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderColor: 'var(--color-border)',
      }}
    >
      {/* Subtle edge fades */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, var(--color-bg-secondary), transparent)',
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, var(--color-bg-secondary), transparent)',
        }}
      />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Double array for infinite loop effect */}
        {[...tickerItems, ...tickerItems].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 px-6 sm:px-8 text-xs sm:text-[13px] uppercase tracking-[0.2em] font-medium whitespace-nowrap opacity-85 hover:opacity-100 transition-opacity"
              style={{ color: 'var(--color-text)' }}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--color-accent)' }} />
              <span>{item.text}</span>
              <span className="opacity-30 ml-4 font-mono text-[10px]">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
