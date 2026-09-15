import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { SALON_SERVICES, BUSINESS_INFO } from '../data/salonData';
import { ServiceItem } from '../types';
import RevealOnScroll from './RevealOnScroll';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
}

const SERVICE_CATEGORIES = [
  'All',
  'Cuts & Finishing',
  'Colour Artistry',
  'Texture & Volume',
  'Styling & Occasion',
  'Hair Care & Health',
];

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredServices = activeCategory === 'All'
    ? SALON_SERVICES
    : SALON_SERVICES.filter((s) => s.category.includes(activeCategory) || activeCategory.includes(s.category));

  return (
    <section
      id="services"
      className="py-20 lg:py-28 border-t transition-colors duration-300"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <div>
              <span
                className="text-xs uppercase tracking-[0.24em] font-semibold block mb-2"
                style={{ color: 'var(--color-accent)' }}
              >
                Curated Service Menu
              </span>
              <h2
                className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight"
                style={{ color: 'var(--color-text)' }}
              >
                Hair Services in Central London
              </h2>
            </div>
            <p
              className="mt-4 md:mt-0 text-sm sm:text-base max-w-md opacity-85"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Tailored hair craft executed by experienced stylists. Hover over any service to inspect techniques, duration, and consultation details.
            </p>
          </div>
        </RevealOnScroll>

        {/* Category Selector Tabs */}
        <RevealOnScroll direction="up" delay={80}>
          <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-3 no-scrollbar">
            {SERVICE_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xs text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-200 border cursor-pointer whitespace-nowrap ${
                    isActive ? 'ring-1' : 'opacity-70 hover:opacity-100'
                  }`}
                  style={{
                    backgroundColor: isActive ? 'var(--color-btn-primary-bg)' : 'var(--color-card-subtle)',
                    color: isActive ? 'var(--color-btn-primary-text)' : 'var(--color-text)',
                    borderColor: isActive ? 'var(--color-accent)' : 'var(--color-border)',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </RevealOnScroll>

        {/* Services Grid with Visual Cards & Image Hover Zoom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
                className="h-full"
              >
                <div
                  className="group relative border flex flex-col justify-between overflow-hidden rounded-xs h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{
                    backgroundColor: 'var(--color-card)',
                    borderColor: 'var(--color-border)',
                  }}
                >
                  {/* Top Image Preview with Silky Hover Zoom */}
                  {service.imageUrl && (
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-900">
                      <img
                        src={service.imageUrl}
                        alt={service.name}
                        className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Gradient vignette on image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                      {/* Floating Category Pill */}
                      <div className="absolute top-3 left-3 z-10">
                        <span
                          className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md border shadow-xs"
                          style={{
                            backgroundColor: 'rgba(12, 10, 14, 0.75)',
                            borderColor: 'rgba(255, 255, 255, 0.15)',
                            color: 'var(--color-accent)',
                          }}
                        >
                          {service.category}
                        </span>
                      </div>

                      {/* Duration Tag */}
                      {service.duration && (
                        <div className="absolute top-3 right-3 z-10">
                          <span
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xs text-[10px] font-medium tracking-wide backdrop-blur-md text-neutral-200"
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                          >
                            <Clock className="w-2.5 h-2.5" />
                            {service.duration}
                          </span>
                        </div>
                      )}

                      {/* Hover Technique Tags - Slides up on hover */}
                      {service.tags && (
                        <div className="absolute bottom-3 left-3 right-3 z-10 flex flex-wrap gap-1 transform translate-y-2 opacity-85 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          {service.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-md text-white font-medium border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[11px] opacity-50" style={{ color: 'var(--color-text)' }}>
                          0{index + 1}
                        </span>
                        {service.popular && (
                          <span
                            className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-xs"
                            style={{
                              backgroundColor: 'var(--color-accent-bg)',
                              color: 'var(--color-accent)',
                            }}
                          >
                            <Sparkles className="w-2.5 h-2.5" />
                            Signature
                          </span>
                        )}
                      </div>

                      <h3
                        className="font-serif-title text-xl sm:text-2xl font-medium mb-2.5 transition-colors group-hover:opacity-90"
                        style={{ color: 'var(--color-text)' }}
                      >
                        {service.name}
                      </h3>

                      <p
                        className="text-xs sm:text-[13px] leading-relaxed mb-6 opacity-80"
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom Action Trigger */}
                    <div className="pt-4 border-t" style={{ borderColor: 'var(--color-border-subtle)' }}>
                      <button
                        type="button"
                        id={`enquire-btn-${service.id}`}
                        onClick={() => onSelectService && onSelectService(service)}
                        className="w-full inline-flex items-center justify-between text-xs uppercase tracking-[0.14em] font-semibold py-1.5 cursor-pointer transition-colors group/btn"
                        style={{ color: 'var(--color-accent)' }}
                      >
                        <span>Enquire &amp; Book</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Banner with Consultation Hotline */}
        <RevealOnScroll direction="up" delay={200}>
          <div
            className="mt-12 p-6 sm:p-7 border rounded-xs flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xs"
            style={{
              backgroundColor: 'var(--color-card)',
              borderColor: 'var(--color-border)',
            }}
          >
            <div className="flex items-center gap-3.5">
              <div className="w-3 h-3 rounded-full shrink-0 animate-pulse" style={{ backgroundColor: 'var(--color-accent)' }} />
              <div>
                <p className="text-xs sm:text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                  Need advice on style, colour blending, or perm texture?
                </p>
                <p className="text-xs opacity-75 mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
                  Our senior stylists provide direct telephone consultations daily on Gerrard Street.
                </p>
              </div>
            </div>

            <a
              href={BUSINESS_INFO.phoneTel}
              className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3 text-xs uppercase tracking-[0.14em] font-semibold rounded-xs shadow-xs hover:opacity-95 active:scale-98 transition-all"
              style={{
                backgroundColor: 'var(--color-btn-primary-bg)',
                color: 'var(--color-btn-primary-text)',
              }}
            >
              <Phone className="w-3.5 h-3.5 opacity-90" />
              <span>Call Salon ({BUSINESS_INFO.phoneDisplay})</span>
            </a>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
