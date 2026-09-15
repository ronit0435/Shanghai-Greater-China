import { useState } from 'react';
import { Phone, MapPin, Clock, X, ShieldCheck, Cookie } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';
import { scrollToSection } from '../utils/salonUtils';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'cookies' | null>(null);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Location', id: 'location' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer id="footer" className="bg-[#141312] text-[#E5DFD5] pt-16 pb-28 md:pb-16 border-t border-[#262422]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#292724]">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-4">
            <span className="font-serif-title text-2xl sm:text-3xl tracking-[0.16em] uppercase font-semibold text-white block mb-2">
              SHANGHAI GREATER CHINA
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-[#8C7355] font-semibold mb-4">
              Hair Salon in Central London
            </p>
            <p className="text-xs sm:text-[13px] text-[#A69E92] leading-relaxed max-w-sm mb-6">
              Personalised hair styling, cuts, colour, perms and hair transformations located on Gerrard Street in Central London.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#242220] border border-[#33302C] text-xs text-[#C2B7A7]">
              <span>4.3★ Rating</span>
              <span className="text-[#59534B]">•</span>
              <span>216 Google Reviews</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.22em] text-[#8C7355] font-semibold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-[#BDB5A8] hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="lg:col-span-5 space-y-4 text-xs sm:text-[13px] text-[#BDB5A8]">
            <h3 className="text-xs uppercase tracking-[0.22em] text-[#8C7355] font-semibold mb-4">
              Salon Details
            </h3>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#8C7355] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">{BUSINESS_INFO.street}</p>
                <p>{BUSINESS_INFO.postalCode}, {BUSINESS_INFO.city}, {BUSINESS_INFO.country}</p>
                <p className="text-[#877E71] text-xs mt-0.5">Central London / Chinatown / Soho area</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <Phone className="w-4 h-4 text-[#8C7355] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-[#877E71] uppercase tracking-wider">Phone</p>
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="text-white hover:text-[#8C7355] font-medium transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <Clock className="w-4 h-4 text-[#8C7355] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-[#877E71] uppercase tracking-wider">Opening Hours</p>
                <p className="text-white font-medium">{BUSINESS_INFO.openingHours.days}</p>
                <p>{BUSINESS_INFO.openingHours.hours}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7368]">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setActiveModal('privacy')}
              className="hover:text-[#C7BEAF] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setActiveModal('cookies')}
              className="hover:text-[#C7BEAF] transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {activeModal === 'privacy' && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FAF8F5] text-[#1A1918] max-w-lg w-full p-6 sm:p-8 rounded-xs shadow-2xl border border-[#D5CDC0] relative">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-1.5 text-[#635D54] hover:text-[#1A1918] bg-[#EFECE6] rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#8C7355] font-semibold mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Legal Information</span>
            </div>
            <h3 className="font-serif-title text-2xl mb-4 font-semibold">Privacy Policy</h3>
            <div className="text-xs sm:text-sm text-[#5C564D] space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p>
                Shanghai Greater China values your privacy. When you telephone or visit our salon on Gerrard Street, London, any details you share with us (such as your name, appointment time, or hair preferences) are used solely for fulfilling your salon services.
              </p>
              <p>
                We do not sell, rent, or trade client personal contact information to third parties. For any inquiries regarding how your data is handled, please call the salon directly.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#EAE4DA] text-right">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 bg-[#1A1918] text-[#FAF8F5] text-xs uppercase tracking-wider font-medium rounded-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Policy Modal */}
      {activeModal === 'cookies' && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FAF8F5] text-[#1A1918] max-w-lg w-full p-6 sm:p-8 rounded-xs shadow-2xl border border-[#D5CDC0] relative">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-1.5 text-[#635D54] hover:text-[#1A1918] bg-[#EFECE6] rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#8C7355] font-semibold mb-2">
              <Cookie className="w-4 h-4" />
              <span>Information</span>
            </div>
            <h3 className="font-serif-title text-2xl mb-4 font-semibold">Cookie Policy</h3>
            <div className="text-xs sm:text-sm text-[#5C564D] space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p>
                This website uses essential technical cookies and standard browser local storage to ensure smooth navigation, interactive map loading, and responsive presentation.
              </p>
              <p>
                No unnecessary tracking or third-party advertising cookies are stored on your device without your consent.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#EAE4DA] text-right">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 bg-[#1A1918] text-[#FAF8F5] text-xs uppercase tracking-wider font-medium rounded-xs"
              >
                Accept &amp; Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
