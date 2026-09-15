import { Scissors, Sparkles, Heart, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';
import RevealOnScroll from './RevealOnScroll';

export default function AboutSection() {
  const highlights = [
    {
      icon: Sparkles,
      title: 'Personalised Styling',
      text: 'Every cut, colour, and finish is tailored to your hair texture and individual style.',
    },
    {
      icon: Scissors,
      title: 'Haircuts & Shaping',
      text: 'Carefully executed cuts, classic shaping, and modern hair transformations.',
    },
    {
      icon: Heart,
      title: 'Quality & Friendly Service',
      text: 'A welcoming, comfortable atmosphere where clients feel valued and heard.',
    },
    {
      icon: MapPin,
      title: 'Central London Location',
      text: 'Conveniently situated on Gerrard Street in London’s vibrant Chinatown / Soho area.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 lg:py-28 relative overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="max-w-3xl mb-16">
            <div
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] font-semibold mb-3"
              style={{ color: 'var(--color-accent)' }}
            >
              <span>About The Salon</span>
            </div>
            <h2
              className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-6"
              style={{ color: 'var(--color-text)' }}
            >
              Style That Feels Like You
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed opacity-85"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Shanghai Greater China is an established hair salon located on the first floor of Gerrard Street in London Chinatown. Whether visiting for a routine trim, Japanese texturising, or an expressive colour transformation, our focus is always on delivering quality service with genuine care.
            </p>
          </div>
        </RevealOnScroll>

        {/* Editorial Split: Left Multi-layer Imagery + Right Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Multi-angle Salon Imagery with Hover Scale */}
          <div className="lg:col-span-6 relative">
            <RevealOnScroll direction="up">
              <div className="relative">
                {/* Main Large Image */}
                <div
                  className="group relative z-10 overflow-hidden shadow-xl border rounded-xs"
                  style={{
                    borderColor: 'var(--color-border)',
                    backgroundColor: 'var(--color-card-subtle)',
                  }}
                >
                  <div className="overflow-hidden h-[400px] sm:h-[480px]">
                    <img
                      src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80"
                      alt="Shanghai Greater China salon interior on Gerrard Street"
                      className="w-full h-full object-cover transform group-hover:scale-106 transition-transform duration-700 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Subtle dark gradient overlay with reveal */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-5 left-5 right-5 z-20 pointer-events-none">
                    <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-xs bg-black/60 text-white backdrop-blur-xs font-mono">
                      GERRARD ST • FIRST FLOOR SANCTUARY
                    </span>
                  </div>
                </div>

                {/* Secondary Inset Image with interactive hover */}
                <div
                  className="group absolute -bottom-8 -right-4 sm:right-6 w-48 sm:w-56 h-48 sm:h-56 z-20 overflow-hidden shadow-2xl border rounded-xs hidden sm:block"
                  style={{
                    borderColor: 'var(--color-border)',
                    backgroundColor: 'var(--color-card)',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80"
                    alt="Precision haircut styling in progress"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-2 left-2 right-2 text-center">
                    <span className="text-[9px] uppercase tracking-widest text-white font-semibold px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-xs">
                      Asian Hair Craft
                    </span>
                  </div>
                </div>

                {/* Architectural accent borders */}
                <div
                  className="absolute -top-4 -left-4 w-full h-full border -z-10 hidden sm:block pointer-events-none"
                  style={{ borderColor: 'var(--color-border)' }}
                />
                <div
                  className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 -z-10 hidden sm:block pointer-events-none"
                  style={{ borderColor: 'var(--color-accent)' }}
                />
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Emphasised Pillars */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
            <RevealOnScroll direction="up">
              <p className="text-base sm:text-lg leading-relaxed opacity-85" style={{ color: 'var(--color-text-muted)' }}>
                Located on the first floor overlooking bustling Gerrard Street, our salon provides a quiet, dedicated space for thoughtful consultations and attentive styling. We listen closely to what you want, blending precision technical scissor work with everyday comfort.
              </p>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <RevealOnScroll key={idx} delay={idx * 80} direction="up">
                    <div
                      className="group p-5 border rounded-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      style={{
                        backgroundColor: 'var(--color-card-subtle)',
                        borderColor: 'var(--color-border)',
                      }}
                    >
                      <div
                        className="w-9 h-9 rounded-xs flex items-center justify-center mb-3 border transition-colors group-hover:border-current"
                        style={{
                          backgroundColor: 'var(--color-accent-bg)',
                          borderColor: 'var(--color-border)',
                          color: 'var(--color-accent)',
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-serif-title text-lg font-semibold mb-1.5 transition-colors" style={{ color: 'var(--color-text)' }}>
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] leading-relaxed opacity-80" style={{ color: 'var(--color-text-muted)' }}>
                        {item.text}
                      </p>
                    </div>
                  </RevealOnScroll>
                );
              })}
            </div>

            <RevealOnScroll direction="up" delay={200}>
              <div className="pt-4 flex flex-wrap items-center gap-5">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="inline-flex items-center gap-2.5 px-6 py-3 text-xs uppercase tracking-[0.16em] font-semibold rounded-xs shadow-xs transition-all duration-200"
                  style={{
                    backgroundColor: 'var(--color-btn-primary-bg)',
                    color: 'var(--color-btn-primary-text)',
                  }}
                >
                  <span>Call Us ({BUSINESS_INFO.phoneDisplay})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <span className="text-xs opacity-70" style={{ color: 'var(--color-text-muted)' }}>
                  Walk-ins &amp; appointments welcome daily
                </span>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
