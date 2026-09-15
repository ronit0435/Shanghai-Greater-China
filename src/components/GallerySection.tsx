import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronRight, Phone } from 'lucide-react';
import { GALLERY_ITEMS, BUSINESS_INFO } from '../data/salonData';
import { GalleryItem } from '../types';
import RevealOnScroll from './RevealOnScroll';

type CategoryFilter = 'All' | 'Haircuts' | 'Hair Colour' | 'Styling' | 'Salon' | 'Hair Transformations';

const CATEGORIES: CategoryFilter[] = [
  'All',
  'Haircuts',
  'Hair Colour',
  'Styling',
  'Salon',
  'Hair Transformations',
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="gallery"
      className="py-20 lg:py-28 border-t transition-colors duration-300"
      style={{
        backgroundColor: 'var(--color-bg)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with subtle fade-in-up */}
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span
                className="text-xs uppercase tracking-[0.24em] font-semibold block mb-2"
                style={{ color: 'var(--color-accent)' }}
              >
                Visual Portfolio
              </span>
              <h2
                className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight"
                style={{ color: 'var(--color-text)' }}
              >
                Styling &amp; Atmosphere
              </h2>
            </div>
            <p
              className="mt-3 md:mt-0 text-xs sm:text-sm max-w-sm opacity-85"
              style={{ color: 'var(--color-text-muted)' }}
            >
              A visual curation of cuts, colour, perms, and styling aesthetics. Consult with our stylists to tailor your preferred look.
            </p>
          </div>
        </RevealOnScroll>

        {/* Category Filters with subtle entrance */}
        <RevealOnScroll direction="up" delay={100}>
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  id={`filter-gallery-${category.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setActiveCategory(category)}
                  className="px-4 py-2 text-xs uppercase tracking-[0.14em] font-medium whitespace-nowrap rounded-xs transition-all duration-200 cursor-pointer border"
                  style={{
                    backgroundColor: isActive ? 'var(--color-btn-primary-bg)' : 'var(--color-card-subtle)',
                    color: isActive ? 'var(--color-btn-primary-text)' : 'var(--color-text)',
                    borderColor: isActive ? 'var(--color-accent)' : 'var(--color-border)',
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </RevealOnScroll>

        {/* Asymmetric / Editorial Gallery Grid with subtle entrance */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <RevealOnScroll key={item.id} delay={(idx % 3) * 100} direction="up">
                <motion.div
                  layout
                  className="group relative cursor-pointer overflow-hidden border rounded-xs shadow-sm hover:shadow-md transition-shadow"
                  style={{
                    backgroundColor: 'var(--color-card-subtle)',
                    borderColor: 'var(--color-border)',
                  }}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="overflow-hidden aspect-4/5">
                    <img
                      src={item.imageUrl}
                      alt={item.alt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Subtle dark gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                    <span className="text-[11px] uppercase tracking-[0.2em] mb-1 font-medium" style={{ color: 'var(--color-accent)' }}>
                      {item.category}
                    </span>
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif-title text-xl text-white">
                        {item.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                        <Maximize2 className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Editorial Callout */}
        <RevealOnScroll direction="up" delay={150}>
          <div className="mt-14 text-center">
            <p className="text-xs mb-3 opacity-80" style={{ color: 'var(--color-text-muted)' }}>
              Want to achieve a similar hairstyle or discuss a custom finish?
            </p>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold border-b pb-1 transition-all"
              style={{
                color: 'var(--color-text)',
                borderColor: 'var(--color-accent)',
              }}
            >
              <span>Call for phone consultation at {BUSINESS_INFO.phoneDisplay}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </RevealOnScroll>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-3xl w-full p-4 sm:p-6 rounded-xs shadow-2xl border"
              style={{
                backgroundColor: 'var(--color-card)',
                borderColor: 'var(--color-border)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full transition-colors cursor-pointer border"
                style={{
                  backgroundColor: 'var(--color-card-subtle)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text)',
                }}
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-hidden max-h-[70vh] bg-black/10 flex items-center justify-center rounded-xs">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.alt}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div
                className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t"
                style={{ borderColor: 'var(--color-border-subtle)' }}
              >
                <div>
                  <span
                    className="text-[11px] uppercase tracking-[0.2em] font-semibold block"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {selectedImage.category}
                  </span>
                  <h3 className="font-serif-title text-2xl" style={{ color: 'var(--color-text)' }}>
                    {selectedImage.title}
                  </h3>
                </div>

                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.14em] font-medium rounded-xs"
                  style={{
                    backgroundColor: 'var(--color-btn-primary-bg)',
                    color: 'var(--color-btn-primary-text)',
                  }}
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Enquire About This Look</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
