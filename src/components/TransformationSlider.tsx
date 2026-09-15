import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Phone, Scissors, MoveHorizontal } from 'lucide-react';
import { TRANSFORMATIONS_DATA, BUSINESS_INFO } from '../data/salonData';
import RevealOnScroll from './RevealOnScroll';

interface TransformationSliderProps {
  onOpenEnquiry?: () => void;
}

export default function TransformationSlider({ onOpenEnquiry }: TransformationSliderProps) {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = TRANSFORMATIONS_DATA[activeItemIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  return (
    <section
      id="transformations"
      className="py-20 lg:py-28 border-t transition-colors duration-300"
      style={{
        backgroundColor: 'var(--color-bg)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span
                className="text-xs uppercase tracking-[0.24em] font-semibold block mb-2"
                style={{ color: 'var(--color-accent)' }}
              >
                Signature Restyling
              </span>
              <h2
                className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight"
                style={{ color: 'var(--color-text)' }}
              >
                Interactive Hair Transformations
              </h2>
            </div>
            <p
              className="mt-3 md:mt-0 text-xs sm:text-sm max-w-md opacity-85"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Drag or glide the divider across to see how precision cutting and tailored Asian texturising revitalize natural movement and volume.
            </p>
          </div>
        </RevealOnScroll>

        {/* Transformation Showcase Tabs */}
        <RevealOnScroll direction="up" delay={100}>
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
            {TRANSFORMATIONS_DATA.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItemIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2.5 rounded-xs text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-200 border cursor-pointer whitespace-nowrap ${
                  activeItemIndex === idx ? 'ring-1' : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: activeItemIndex === idx ? 'var(--color-btn-primary-bg)' : 'var(--color-card-subtle)',
                  color: activeItemIndex === idx ? 'var(--color-btn-primary-text)' : 'var(--color-text)',
                  borderColor: activeItemIndex === idx ? 'var(--color-accent)' : 'var(--color-border)',
                }}
              >
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Interactive Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left / Center: Interactive Before/After Visual Stage */}
          <div className="lg:col-span-8 relative">
            <RevealOnScroll direction="up">
              <div
                ref={containerRef}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative h-[380px] sm:h-[480px] lg:h-[520px] w-full overflow-hidden select-none border rounded-xs shadow-xl cursor-ew-resize group"
                style={{
                  borderColor: 'var(--color-border)',
                  backgroundColor: 'var(--color-card-subtle)',
                }}
              >
                {/* AFTER Image (Full background layer) */}
                <img
                  src={activeItem.afterImage}
                  alt={`After transformation: ${activeItem.title}`}
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* AFTER Label Tag */}
                <div className="absolute top-4 right-4 z-10 pointer-events-none">
                  <span
                    className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md border shadow-sm"
                    style={{
                      backgroundColor: 'rgba(12, 10, 14, 0.8)',
                      borderColor: 'rgba(255, 255, 255, 0.15)',
                      color: 'var(--color-accent)',
                    }}
                  >
                    AFTER • FINISHED LOOK
                  </span>
                </div>

                {/* BEFORE Image (Clipped overlay layer) */}
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={activeItem.beforeImage}
                    alt={`Before transformation: ${activeItem.title}`}
                    className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                    style={{ width: containerRef.current?.offsetWidth || '100%' }}
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* BEFORE Label Tag */}
                  <div className="absolute top-4 left-4 z-10 pointer-events-none">
                    <span
                      className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md border shadow-sm text-neutral-300"
                      style={{
                        backgroundColor: 'rgba(12, 10, 14, 0.8)',
                        borderColor: 'rgba(255, 255, 255, 0.15)',
                      }}
                    >
                      BEFORE • INITIAL STATE
                    </span>
                  </div>
                </div>

                {/* Vertical Divider Line with Glow Handle */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 z-20 pointer-events-none"
                  style={{
                    left: `${sliderPosition}%`,
                    backgroundColor: 'var(--color-accent)',
                    boxShadow: '0 0 12px var(--color-accent)',
                  }}
                >
                  {/* Circular Draggable Thumb Handle */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center border shadow-xl transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: 'var(--color-bg)',
                      borderColor: 'var(--color-accent)',
                      color: 'var(--color-accent)',
                    }}
                  >
                    <MoveHorizontal className="w-4 h-4 animate-pulse" />
                  </div>
                </div>

                {/* Micro helper instruction tooltip on bottom */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                  <span
                    className="px-3 py-1 rounded-xs text-[10px] uppercase tracking-widest backdrop-blur-md border text-neutral-300 opacity-80"
                    style={{
                      backgroundColor: 'rgba(12, 10, 14, 0.75)',
                      borderColor: 'rgba(255, 255, 255, 0.12)',
                    }}
                  >
                    Slide or touch to compare
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: Hair Consultation Dossier & Booking Action */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <RevealOnScroll direction="up" delay={150}>
              <div
                className="p-6 sm:p-7 border rounded-xs"
                style={{
                  backgroundColor: 'var(--color-card)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Scissors className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: 'var(--color-accent)' }}>
                    Technique Dossier
                  </span>
                </div>

                <h3 className="font-serif-title text-2xl sm:text-3xl font-medium mb-3" style={{ color: 'var(--color-text)' }}>
                  {activeItem.title}
                </h3>

                <div className="space-y-4 text-xs sm:text-sm my-5 py-4 border-y" style={{ borderColor: 'var(--color-border-subtle)' }}>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold block mb-1 opacity-70" style={{ color: 'var(--color-text-muted)' }}>
                      Applied Technique:
                    </span>
                    <p className="font-medium" style={{ color: 'var(--color-text)' }}>
                      {activeItem.technique}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold block mb-1 opacity-70" style={{ color: 'var(--color-text-muted)' }}>
                      Client Vision:
                    </span>
                    <p className="opacity-85" style={{ color: 'var(--color-text-secondary)' }}>
                      {activeItem.clientGoal}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold block mb-1 opacity-70" style={{ color: 'var(--color-text-muted)' }}>
                      Stylist Notes:
                    </span>
                    <p className="opacity-80" style={{ color: 'var(--color-text-muted)' }}>
                      {activeItem.description}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs uppercase tracking-[0.16em] font-semibold rounded-xs shadow-xs hover:shadow-md transition-all duration-200"
                    style={{
                      backgroundColor: 'var(--color-btn-primary-bg)',
                      color: 'var(--color-btn-primary-text)',
                    }}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Book Transformation</span>
                  </a>
                  <p className="text-[11px] text-center mt-2 opacity-65">
                    Walk-ins &amp; advance bookings welcomed daily
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
