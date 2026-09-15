import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Star, ArrowUpRight, Sparkles, Scissors, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface HeroProps {
  onOpenDirectionsModal?: () => void;
}

const ROTATING_SPECIALTIES = [
  'Asian Haircraft & Precision Cuts',
  'Japanese Perms & Body Waves',
  'Balayage & Dimensional Colour',
  'Thermal Straightening & Silk Treatments',
];

export default function Hero({ onOpenDirectionsModal }: HeroProps) {
  const [specialtyIndex, setSpecialtyIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const heroShowcaseImages = [
    {
      url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
      title: 'Precision Layering & Blow-Dry',
      tag: 'Bespoke Shaping',
    },
    {
      url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
      title: 'Digital Perm & Volume Waves',
      tag: 'Texture Craft',
    },
    {
      url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=80',
      title: 'Rich Dimensional Tone & Balayage',
      tag: 'Colour Artistry',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSpecialtyIndex((prev) => (prev + 1) % ROTATING_SPECIALTIES.length);
    }, 3600);
    return () => clearInterval(timer);
  }, []);

  const headlineWords = ['Hair,', 'Styled', 'Your', 'Way.'];

  return (
    <section
      id="hero"
      className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      {/* Dynamic atmospheric radial backdrop */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none -z-10 blur-3xl opacity-25 transition-opacity"
        style={{
          background: 'radial-gradient(ellipse at center, var(--color-accent) 0%, transparent 72%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Animated Editorial Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Badge: Location & Live Specialty Rotator */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs text-xs uppercase tracking-[0.2em] font-semibold border"
                style={{
                  backgroundColor: 'var(--color-accent-bg)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text)',
                }}
              >
                <MapPin className="w-3.5 h-3.5" style={{ color: 'var(--color-accent)' }} />
                <span>Gerrard Street • Central London W1D</span>
              </motion.div>

              {/* Animated Text Specialty Tag */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs text-xs font-medium border overflow-hidden"
                style={{
                  borderColor: 'var(--color-border-subtle)',
                  backgroundColor: 'var(--color-card-subtle)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <Scissors className="w-3 h-3" style={{ color: 'var(--color-accent)' }} />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={specialtyIndex}
                    initial={{ y: 14, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -14, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="inline-block tracking-wide font-medium"
                  >
                    {ROTATING_SPECIALTIES[specialtyIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Main Headline: Animated Word by Word Entrance */}
            <h1
              id="hero-main-heading"
              className="font-serif-title text-5xl sm:text-6xl md:text-7xl xl:text-[84px] font-normal leading-[1.03] tracking-[-0.02em] mb-6 flex flex-wrap gap-x-4 gap-y-1"
              style={{ color: 'var(--color-text)' }}
            >
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 35, rotateZ: i % 2 === 0 ? -1 : 1 }}
                  animate={{ opacity: 1, y: 0, rotateZ: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15 + i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={i === 2 || i === 3 ? 'italic font-light opacity-90' : ''}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Supporting Subheading with subtle entrance */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-lg sm:text-xl md:text-2xl font-normal tracking-tight mb-4"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Personalised Hair Styling in the Heart of London
            </motion.h2>

            {/* Editorial Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-base sm:text-lg leading-relaxed max-w-xl mb-9 font-normal opacity-85"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Discover professional hair styling in London Chinatown, with precision haircuts, bespoke colour, and Japanese texturising perms tailored to your lifestyle.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <a
                id="hero-primary-call-cta"
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.16em] font-semibold rounded-xs shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-300 group hover-shine-effect"
                style={{
                  backgroundColor: 'var(--color-btn-primary-bg)',
                  color: 'var(--color-btn-primary-text)',
                }}
              >
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform opacity-90" />
                <span>Call the Salon</span>
                <span className="text-xs font-normal hidden sm:inline ml-1 opacity-80">
                  ({BUSINESS_INFO.phoneDisplay})
                </span>
              </a>

              <a
                id="hero-secondary-directions-cta"
                href={BUSINESS_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (onOpenDirectionsModal) {
                    e.preventDefault();
                    onOpenDirectionsModal();
                  }
                }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 border text-xs sm:text-sm uppercase tracking-[0.14em] font-medium rounded-xs transition-all duration-300 hover:bg-opacity-80 group cursor-pointer"
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text)',
                  backgroundColor: 'var(--color-card-subtle)',
                }}
              >
                <span>Get Directions</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" style={{ color: 'var(--color-accent)' }} />
              </a>
            </motion.div>

            {/* Verified Trust Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="pt-6 border-t flex flex-wrap items-center gap-6 text-xs"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
            >
              <div className="flex items-center gap-2">
                <div className="flex" style={{ color: 'var(--color-accent)' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold" style={{ color: 'var(--color-text)' }}>4.3 Google Rating</span>
                <span className="opacity-75">(216 Reviews)</span>
              </div>
              <span className="opacity-40 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-500" />
                <span className="font-medium" style={{ color: 'var(--color-text)' }}>Open Daily 11:00 AM – 8:00 PM</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Showcase with Interactive Image Hover & Preview Selectors */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame with hover-zoom and subtle lighting */}
              <div
                className="group relative z-10 overflow-hidden shadow-2xl border transition-all duration-500 rounded-xs"
                style={{
                  borderColor: 'var(--color-border)',
                  backgroundColor: 'var(--color-card-subtle)',
                }}
              >
                {/* Active Image with smooth crossfade and zoom on hover */}
                <div className="relative h-[480px] sm:h-[540px] lg:h-[580px] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImageIndex}
                      src={heroShowcaseImages[activeImageIndex].url}
                      alt={heroShowcaseImages[activeImageIndex].title}
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out cursor-pointer"
                      referrerPolicy="no-referrer"
                      fetchPriority="high"
                    />
                  </AnimatePresence>

                  {/* Gentle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

                  {/* Floating Top Technique Tag */}
                  <div className="absolute top-5 left-5 z-20">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md shadow-sm border"
                      style={{
                        backgroundColor: 'rgba(12, 10, 14, 0.75)',
                        borderColor: 'rgba(255, 255, 255, 0.15)',
                        color: 'var(--color-accent)',
                      }}
                    >
                      <Sparkles className="w-3 h-3" />
                      {heroShowcaseImages[activeImageIndex].tag}
                    </span>
                  </div>

                  {/* Floating Accolade Badge (Animated Float) */}
                  <div className="absolute top-5 right-5 z-20 hidden sm:block animate-float">
                    <div
                      className="p-2.5 rounded-xs backdrop-blur-md border text-center shadow-lg"
                      style={{
                        backgroundColor: 'rgba(12, 10, 14, 0.82)',
                        borderColor: 'rgba(255, 255, 255, 0.15)',
                      }}
                    >
                      <div className="flex items-center justify-center gap-1 text-amber-400 text-xs font-semibold">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.3 / 5.0</span>
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-300 block mt-0.5">
                        Verified Reviews
                      </span>
                    </div>
                  </div>

                  {/* Floating Caption Overlay on bottom */}
                  <div
                    className="absolute bottom-6 left-6 right-6 p-4 backdrop-blur-md border rounded-xs shadow-lg transition-transform duration-300 group-hover:translate-y-[-4px]"
                    style={{
                      backgroundColor: 'var(--color-card)',
                      borderColor: 'var(--color-border)',
                      opacity: 0.95,
                    }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: 'var(--color-accent)' }}>
                        First Floor Salon • Gerrard St
                      </p>
                      <span className="text-[10px] opacity-60 font-mono">0{activeImageIndex + 1}/03</span>
                    </div>
                    <p className="text-sm font-serif-title font-medium leading-snug" style={{ color: 'var(--color-text)' }}>
                      {heroShowcaseImages[activeImageIndex].title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Style Selector Thumbnails (Click or Hover to preview other styles) */}
              <div className="flex items-center justify-center sm:justify-start gap-3 mt-4">
                {heroShowcaseImages.map((img, idx) => {
                  const isSelected = activeImageIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      onMouseEnter={() => setActiveImageIndex(idx)}
                      className={`group relative flex items-center gap-2 p-1.5 rounded-xs border text-left transition-all duration-200 cursor-pointer ${
                        isSelected ? 'ring-1' : 'opacity-70 hover:opacity-100'
                      }`}
                      style={{
                        borderColor: isSelected ? 'var(--color-accent)' : 'var(--color-border)',
                        backgroundColor: 'var(--color-card)',
                      }}
                      title={`Preview ${img.title}`}
                    >
                      <img
                        src={img.url}
                        alt={img.title}
                        className="w-9 h-9 object-cover rounded-xs"
                        referrerPolicy="no-referrer"
                      />
                      <span className="text-[11px] font-medium hidden md:inline pr-2" style={{ color: 'var(--color-text)' }}>
                        {img.tag}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Architectural Framing Accents */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full border -z-10 hidden sm:block pointer-events-none"
                style={{ borderColor: 'var(--color-border)' }}
              />
              <div
                className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 -z-10 hidden sm:block pointer-events-none"
                style={{ borderColor: 'var(--color-accent)' }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
