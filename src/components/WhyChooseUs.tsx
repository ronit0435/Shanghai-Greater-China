import { WHY_CHOOSE_US } from '../data/salonData';
import { Sparkles, MapPin, Smile, Scissors } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const icons = [Sparkles, MapPin, Smile, Scissors];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 lg:py-28 border-t transition-colors duration-300"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with subtle fade-in-up */}
        <RevealOnScroll direction="up">
          <div className="max-w-3xl mb-16">
            <span
              className="text-xs uppercase tracking-[0.24em] font-semibold block mb-3"
              style={{ color: 'var(--color-accent)' }}
            >
              Why Choose Us
            </span>
            <h2
              className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-4"
              style={{ color: 'var(--color-text)' }}
            >
              A Welcoming Salon in Gerrard Street
            </h2>
            <p className="text-base opacity-85" style={{ color: 'var(--color-text-muted)' }}>
              Dedicated to thoughtful care, skilled execution, and a friendly atmosphere in the heart of London.
            </p>
          </div>
        </RevealOnScroll>

        {/* 4 Clean Premium Feature Blocks with staggered subtle fade-in-up */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <RevealOnScroll key={item.id} delay={index * 100} direction="up">
                <div
                  className="border p-7 rounded-xs flex flex-col justify-between hover:shadow-sm transition-all duration-300 h-full"
                  style={{
                    backgroundColor: 'var(--color-card)',
                    borderColor: 'var(--color-border)',
                  }}
                >
                  <div>
                    <div
                      className="flex items-center justify-between mb-8 pb-4 border-b"
                      style={{ borderColor: 'var(--color-border-subtle)' }}
                    >
                      <span className="font-mono text-xs font-semibold opacity-70" style={{ color: 'var(--color-accent)' }}>
                        {item.number}
                      </span>
                      <div
                        className="w-8 h-8 rounded-xs flex items-center justify-center border"
                        style={{
                          backgroundColor: 'var(--color-accent-bg)',
                          borderColor: 'var(--color-border)',
                          color: 'var(--color-accent)',
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3
                      className="font-serif-title text-xl font-semibold mb-3 tracking-wide"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="text-xs sm:text-[13px] leading-relaxed opacity-80"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
