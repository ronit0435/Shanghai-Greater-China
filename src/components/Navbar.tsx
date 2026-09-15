import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, Clock, MapPin, ChevronRight, Sparkles, Scissors, Image as ImageIcon, Star, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';
import { isSalonOpenNow, scrollToSection } from '../utils/salonUtils';
import ThemeSelector, { MobileThemeSelector } from './ThemeSelector';

interface NavbarProps {
  onOpenEnquiry?: (serviceName?: string) => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openStatus, setOpenStatus] = useState({ isOpen: true, statusText: 'Open Daily 11:00 AM – 8:00 PM' });
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    setOpenStatus(isSalonOpenNow());
    const interval = setInterval(() => {
      setOpenStatus(isSalonOpenNow());
    }, 60000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'services', 'transformations', 'why-us', 'gallery', 'reviews', 'location', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i] === 'why-us' ? 'about' : sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { label: 'Home', id: 'hero', icon: Compass },
    { label: 'About', id: 'about', icon: Sparkles },
    { label: 'Services', id: 'services', icon: Scissors },
    { label: 'Transformations', id: 'transformations', icon: Sparkles },
    { label: 'Gallery', id: 'gallery', icon: ImageIcon },
    { label: 'Reviews', id: 'reviews', icon: Star },
    { label: 'Location', id: 'location', icon: MapPin },
    { label: 'Contact', id: 'contact', icon: Phone },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b backdrop-blur-md ${
        isScrolled
          ? 'shadow-sm'
          : 'shadow-none'
      }`}
      style={{
        backgroundColor: 'var(--color-bg)',
        borderColor: 'var(--color-border)',
        opacity: 0.98,
      }}
    >
      {/* Main Navigation Bar - Rock-solid steady height with balanced 3-column optical alignment */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
        
        {/* Column 1 (Left): Brand Identity & Location */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          id="brand-logo"
          className="group flex flex-col justify-center shrink min-w-0 focus:outline-hidden"
        >
          <span
            className="font-serif-title text-base sm:text-xl lg:text-[23px] xl:text-[25px] tracking-[0.10em] sm:tracking-[0.16em] uppercase font-semibold transition-colors leading-tight truncate"
            style={{ color: 'var(--color-text)' }}
          >
            SHANGHAI GREATER CHINA
          </span>
          <div className="flex items-center gap-2 mt-0.5">
            <span
              className="text-[8.5px] sm:text-[10px] tracking-[0.14em] sm:tracking-[0.22em] uppercase font-medium opacity-70 truncate"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Hair Salon • Gerrard St • Chinatown W1D
            </span>
            <span
              className="hidden xl:inline-flex items-center gap-1.5 text-[9px] font-semibold px-2 py-0.5 rounded-full border opacity-90"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-accent-bg)',
                color: 'var(--color-text)',
              }}
            >
              <span className={`inline-block w-1.5 h-1.5 rounded-full ${openStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
              <span>{openStatus.isOpen ? 'Open Today' : 'Opens 11am'}</span>
            </span>
          </div>
        </a>

        {/* Column 2 (Center): Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-2.5 py-2 xl:px-3.5 xl:py-2 text-xs xl:text-[13px] uppercase tracking-[0.14em] font-medium transition-all duration-200 cursor-pointer rounded-xs whitespace-nowrap ${
                  isActive ? 'font-semibold opacity-100' : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  color: isActive ? 'var(--color-accent)' : 'var(--color-text)',
                }}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Column 3 (Right): Desktop Controls (Theme Selector + Call CTA) */}
        <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
          <ThemeSelector />

          <a
            id="header-cta-phone"
            href={BUSINESS_INFO.phoneTel}
            className="group inline-flex items-center justify-center gap-2 h-10 px-4 xl:px-5 text-xs uppercase tracking-[0.14em] font-semibold rounded-xs active:scale-[0.98] transition-all duration-200 shadow-xs hover:opacity-95 shrink-0"
            style={{
              backgroundColor: 'var(--color-btn-primary-bg)',
              color: 'var(--color-btn-primary-text)',
            }}
          >
            <Phone className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform opacity-90" />
            <span>BOOK / CALL NOW</span>
          </a>
        </div>

        {/* Mobile & Tablet Controls (< lg) */}
        <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
          <ThemeSelector />

          <a
            id="mobile-header-call-btn"
            href={BUSINESS_INFO.phoneTel}
            aria-label="Call salon now"
            className="inline-flex items-center justify-center h-10 w-10 sm:w-auto sm:px-3 rounded-xs gap-1.5 active:scale-95 transition-transform"
            style={{
              backgroundColor: 'var(--color-btn-primary-bg)',
              color: 'var(--color-btn-primary-text)',
            }}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline text-xs uppercase tracking-wider font-semibold">Call</span>
          </a>

          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="h-10 w-10 flex items-center justify-center rounded-xs border transition-colors cursor-pointer"
            style={{
              borderColor: mobileMenuOpen ? 'var(--color-accent)' : 'var(--color-border)',
              backgroundColor: mobileMenuOpen ? 'var(--color-accent-bg)' : 'var(--color-card-subtle)',
              color: 'var(--color-text)',
            }}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer (Visible on < lg) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            id="mobile-navigation-drawer"
            className="lg:hidden border-b overflow-hidden shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto"
            style={{
              backgroundColor: 'var(--color-bg)',
              borderColor: 'var(--color-border)',
            }}
          >
            <div className="px-4 sm:px-6 py-5 space-y-5 max-w-7xl mx-auto">
              
              {/* 1. Theme Changer for Mobile */}
              <div
                className="p-3.5 sm:p-4 rounded-xs border shadow-xs"
                style={{
                  backgroundColor: 'var(--color-card-subtle)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <MobileThemeSelector />
              </div>

              {/* 2. Opening status indicator */}
              <div
                className="flex items-center justify-between text-xs px-1 pb-2 border-b"
                style={{ borderColor: 'var(--color-border-subtle)', color: 'var(--color-text-muted)' }}
              >
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${openStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                  <span className="font-medium" style={{ color: 'var(--color-text)' }}>{openStatus.statusText}</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-mono opacity-60">Gerrard St W1D</span>
              </div>

              {/* 3. Navigation Links List */}
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold block px-1 mb-1" style={{ color: 'var(--color-text-muted)' }}>
                  Menu Navigation
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    const Icon = link.icon;
                    return (
                      <button
                        key={link.id}
                        id={`mobile-nav-${link.id}`}
                        onClick={() => handleNavClick(link.id)}
                        className={`flex items-center justify-between py-3 px-3.5 rounded-xs text-sm font-medium text-left transition-all active:scale-[0.99] cursor-pointer ${
                          isActive ? 'font-semibold shadow-xs' : 'opacity-85 hover:opacity-100'
                        }`}
                        style={{
                          backgroundColor: isActive ? 'var(--color-accent-bg)' : 'transparent',
                          color: isActive ? 'var(--color-accent)' : 'var(--color-text)',
                          borderLeft: isActive ? '3px solid var(--color-accent)' : '3px solid transparent',
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4 opacity-75" />
                          <span className="tracking-wide">{link.label}</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'opacity-100 translate-x-0.5' : 'opacity-40'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. Action Buttons */}
              <div className="pt-2 border-t space-y-2.5" style={{ borderColor: 'var(--color-border-subtle)' }}>
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="w-full flex items-center justify-center gap-2 py-3.5 text-xs uppercase tracking-[0.16em] font-semibold rounded-xs shadow-xs active:scale-[0.98] transition-transform"
                  style={{
                    backgroundColor: 'var(--color-btn-primary-bg)',
                    color: 'var(--color-btn-primary-text)',
                  }}
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={BUSINESS_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 border text-xs uppercase tracking-[0.14em] font-medium rounded-xs active:scale-[0.98] transition-transform"
                  style={{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text)',
                    backgroundColor: 'var(--color-card-subtle)',
                  }}
                >
                  <MapPin className="w-3.5 h-3.5" style={{ color: 'var(--color-accent)' }} />
                  <span>Gerrard St, London W1D 5PF</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
