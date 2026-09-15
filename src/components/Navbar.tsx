import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, Clock, MapPin, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';
import { isSalonOpenNow, scrollToSection } from '../utils/salonUtils';
import ThemeSelector from './ThemeSelector';

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
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Transformations', id: 'transformations' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Location', id: 'location' },
    { label: 'Contact', id: 'contact' },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 lg:gap-8">
        
        {/* Column 1 (Left): Brand Identity & Location */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          id="brand-logo"
          className="group flex flex-col justify-center shrink-0 focus:outline-hidden"
        >
          <span
            className="font-serif-title text-xl sm:text-2xl lg:text-[23px] xl:text-[25px] tracking-[0.16em] uppercase font-semibold transition-colors leading-tight"
            style={{ color: 'var(--color-text)' }}
          >
            SHANGHAI GREATER CHINA
          </span>
          <div className="flex items-center gap-2 mt-0.5">
            <span
              className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase font-medium opacity-70"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Hair Salon • Gerrard St • Central London
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
        <div className="flex items-center gap-2 lg:hidden shrink-0">
          <ThemeSelector />

          <a
            id="mobile-header-call-btn"
            href={BUSINESS_INFO.phoneTel}
            aria-label="Call salon now"
            className="inline-flex items-center justify-center h-10 px-3 sm:px-3.5 rounded-xs gap-1.5 active:scale-95 transition-transform"
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
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-card-subtle)',
              color: 'var(--color-text)',
            }}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer (Visible on < lg) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            id="mobile-navigation-drawer"
            className="lg:hidden border-b overflow-hidden"
            style={{
              backgroundColor: 'var(--color-bg)',
              borderColor: 'var(--color-border)',
            }}
          >
            <div className="px-4 sm:px-6 py-5 space-y-4 max-w-7xl mx-auto">
              <div
                className="flex items-center gap-2 text-xs pb-3 border-b"
                style={{ borderColor: 'var(--color-border-subtle)', color: 'var(--color-text-muted)' }}
              >
                <Clock className="w-3.5 h-3.5" style={{ color: 'var(--color-accent)' }} />
                <span>{openStatus.statusText}</span>
              </div>

              <div className="grid gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      id={`mobile-nav-${link.id}`}
                      onClick={() => handleNavClick(link.id)}
                      className={`flex items-center justify-between py-2.5 px-3 rounded-xs text-sm font-medium text-left transition-colors cursor-pointer ${
                        isActive ? 'font-semibold' : 'opacity-85'
                      }`}
                      style={{
                        backgroundColor: isActive ? 'var(--color-accent-bg)' : 'transparent',
                        color: isActive ? 'var(--color-accent)' : 'var(--color-text)',
                      }}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'opacity-100 translate-x-0.5' : 'opacity-40'}`} />
                    </button>
                  );
                })}
              </div>

              <div className="pt-3 border-t space-y-2.5" style={{ borderColor: 'var(--color-border-subtle)' }}>
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="w-full flex items-center justify-center gap-2 py-3 text-xs uppercase tracking-[0.16em] font-semibold rounded-xs"
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
                  className="w-full flex items-center justify-center gap-2 py-2.5 border text-xs uppercase tracking-[0.14em] font-medium rounded-xs"
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
