import { useState } from 'react';
import { MapPin, Phone, Clock, ArrowUpRight, Navigation, Copy, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';
import { isSalonOpenNow } from '../utils/salonUtils';
import RevealOnScroll from './RevealOnScroll';

export default function LocationSection() {
  const [copied, setCopied] = useState(false);
  const status = isSalonOpenNow();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="location"
      className="py-20 lg:py-28 border-t transition-colors duration-300"
      style={{
        backgroundColor: 'var(--color-bg)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with subtle fade-in-up */}
        <RevealOnScroll direction="up">
          <div className="max-w-3xl mb-16">
            <span
              className="text-xs uppercase tracking-[0.24em] font-semibold block mb-2"
              style={{ color: 'var(--color-accent)' }}
            >
              Salon Location &amp; Hours
            </span>
            <h2
              className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-4"
              style={{ color: 'var(--color-text)' }}
            >
              Find Us in Central London
            </h2>
            <p className="text-base opacity-85" style={{ color: 'var(--color-text-muted)' }}>
              Conveniently situated on the first floor along Gerrard Street, right in the heart of London’s West End, Chinatown, and Soho area.
            </p>
          </div>
        </RevealOnScroll>

        {/* Two Column Layout: Details Card + Embedded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Detailed Salon Information Card with subtle fade-in-up */}
          <div className="lg:col-span-5">
            <RevealOnScroll direction="up">
              <div
                className="border p-8 sm:p-10 rounded-xs shadow-xs space-y-8"
                style={{
                  backgroundColor: 'var(--color-card-subtle)',
                  borderColor: 'var(--color-border)',
                }}
              >
                {/* Business Header */}
                <div>
                  <span
                    className="text-[11px] uppercase tracking-[0.22em] font-semibold block mb-1"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    Hair Salon • Central London
                  </span>
                  <h3 className="font-serif-title text-3xl font-medium" style={{ color: 'var(--color-text)' }}>
                    {BUSINESS_INFO.name}
                  </h3>
                </div>

                {/* Address with copy button */}
                <div className="flex items-start gap-4 pb-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
                  <div
                    className="w-10 h-10 rounded-xs flex items-center justify-center shrink-0 mt-1 border"
                    style={{
                      backgroundColor: 'var(--color-accent-bg)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-accent)',
                    }}
                  >
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs uppercase tracking-wider font-semibold block mb-1 opacity-75" style={{ color: 'var(--color-text-muted)' }}>
                      Salon Address
                    </span>
                    <p className="text-sm sm:text-base font-medium leading-snug" style={{ color: 'var(--color-text)' }}>
                      First Floor, Gerrard St<br />
                      London W1D 5PF<br />
                      United Kingdom
                    </p>
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="mt-2 inline-flex items-center gap-1.5 text-xs transition-colors cursor-pointer"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-500 font-medium">Copied to clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 pb-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
                  <div
                    className="w-10 h-10 rounded-xs flex items-center justify-center shrink-0 mt-1 border"
                    style={{
                      backgroundColor: 'var(--color-accent-bg)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-accent)',
                    }}
                  >
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold block mb-1 opacity-75" style={{ color: 'var(--color-text-muted)' }}>
                      Phone Enquiries &amp; Bookings
                    </span>
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="text-lg sm:text-xl font-serif-title font-semibold transition-colors"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                    <p className="text-xs mt-0.5 opacity-75" style={{ color: 'var(--color-text-muted)' }}>
                      Direct line to our stylists
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4 pb-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
                  <div
                    className="w-10 h-10 rounded-xs flex items-center justify-center shrink-0 mt-1 border"
                    style={{
                      backgroundColor: 'var(--color-accent-bg)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-accent)',
                    }}
                  >
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider font-semibold block mb-1 opacity-75" style={{ color: 'var(--color-text-muted)' }}>
                        Opening Hours
                      </span>
                      <span className={`text-[11px] px-2 py-0.5 rounded-xs font-medium ${status.isOpen ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'}`}>
                        {status.isOpen ? 'Open Now' : 'Closed Now'}
                      </span>
                    </div>
                    <p className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                      Monday – Sunday
                    </p>
                    <p className="text-sm opacity-80" style={{ color: 'var(--color-text-muted)' }}>
                      11:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>

                {/* Nearby Stations */}
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold block mb-2 opacity-75" style={{ color: 'var(--color-text-muted)' }}>
                    Nearby Underground Stations
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    {BUSINESS_INFO.metroStations.map((station, i) => (
                      <div
                        key={i}
                        className="p-2.5 border rounded-xs"
                        style={{
                          backgroundColor: 'var(--color-card)',
                          borderColor: 'var(--color-border)',
                        }}
                      >
                        <span className="font-semibold block" style={{ color: 'var(--color-text)' }}>{station.name}</span>
                        <span className="opacity-75" style={{ color: 'var(--color-text-muted)' }}>{station.walkTime}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Action Button */}
                <div className="pt-2">
                  <a
                    id="location-directions-btn"
                    href={BUSINESS_INFO.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 text-xs sm:text-sm uppercase tracking-[0.16em] font-semibold rounded-xs transition-opacity hover:opacity-90"
                    style={{
                      backgroundColor: 'var(--color-btn-primary-bg)',
                      color: 'var(--color-btn-primary-text)',
                    }}
                  >
                    <Navigation className="w-4 h-4 opacity-90" />
                    <span>Get Directions in Google Maps</span>
                    <ArrowUpRight className="w-4 h-4 opacity-80" />
                  </a>
                </div>

              </div>
            </RevealOnScroll>
          </div>

          {/* Right: Embedded Interactive Google Map with subtle fade-in-up */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <RevealOnScroll direction="up" delay={150}>
              <div
                className="relative w-full h-[450px] sm:h-[520px] lg:h-[580px] border rounded-xs overflow-hidden shadow-xs"
                style={{
                  backgroundColor: 'var(--color-card-subtle)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <iframe
                  title="Shanghai Greater China Gerrard Street London Location Map"
                  src={BUSINESS_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[20%] contrast-[105%]"
                />

                {/* Map Floating Location Card */}
                <div
                  className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs backdrop-blur-md p-4 border rounded-xs shadow-md"
                  style={{
                    backgroundColor: 'var(--color-card)',
                    borderColor: 'var(--color-border)',
                    opacity: 0.96,
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span
                      className="text-[11px] uppercase tracking-wider font-semibold"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      Gerrard Street • Central London
                    </span>
                  </div>
                  <p className="font-serif-title text-base font-semibold leading-tight" style={{ color: 'var(--color-text)' }}>
                    Shanghai Greater China
                  </p>
                  <p className="text-xs mt-0.5 opacity-80" style={{ color: 'var(--color-text-muted)' }}>
                    First Floor, Gerrard St, London W1D 5PF
                  </p>
                </div>
              </div>

              <p className="text-xs mt-3 text-center sm:text-left opacity-75" style={{ color: 'var(--color-text-muted)' }}>
                * Gerrard Street is a pedestrianized street in London Chinatown. Look for the entrance doorway to the first floor.
              </p>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
