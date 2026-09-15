import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, Clock, MapPin, Check, Copy } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';
import { ServiceItem } from '../types';

interface EnquiryModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ service, isOpen, onClose }: EnquiryModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-md w-full border p-6 sm:p-8 rounded-xs shadow-2xl"
          style={{
            backgroundColor: 'var(--color-card)',
            borderColor: 'var(--color-border)',
            color: 'var(--color-text)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full cursor-pointer border"
            style={{
              backgroundColor: 'var(--color-card-subtle)',
              borderColor: 'var(--color-border)',
              color: 'var(--color-text)',
            }}
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Tag */}
          <span
            className="text-[11px] uppercase tracking-[0.2em] font-semibold block mb-1"
            style={{ color: 'var(--color-accent)' }}
          >
            Service Enquiry &amp; Booking
          </span>

          <h3 className="font-serif-title text-2xl sm:text-3xl font-medium mb-2" style={{ color: 'var(--color-text)' }}>
            {service ? service.name : 'Salon Consultation'}
          </h3>

          {service && (
            <p
              className="text-xs sm:text-[13px] leading-relaxed mb-6 pb-4 border-b opacity-80"
              style={{
                borderColor: 'var(--color-border-subtle)',
                color: 'var(--color-text-muted)',
              }}
            >
              {service.description}
            </p>
          )}

          <div className="space-y-4 mb-6">
            <div
              className="p-4 rounded-xs border"
              style={{
                backgroundColor: 'var(--color-card-subtle)',
                borderColor: 'var(--color-border)',
              }}
            >
              <p className="text-xs leading-relaxed opacity-85" style={{ color: 'var(--color-text-muted)' }}>
                To inquire about availability or discuss your hairstyle directly with our team, please call the salon.
              </p>
            </div>

            {/* Direct Call Button */}
            <a
              href={BUSINESS_INFO.phoneTel}
              className="w-full inline-flex items-center justify-center gap-3 py-3.5 text-xs sm:text-sm uppercase tracking-[0.16em] font-semibold rounded-xs transition-opacity hover:opacity-90"
              style={{
                backgroundColor: 'var(--color-btn-primary-bg)',
                color: 'var(--color-btn-primary-text)',
              }}
            >
              <Phone className="w-4 h-4 opacity-90" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>

            {/* Copy button */}
            <button
              type="button"
              onClick={handleCopyPhone}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 border text-xs uppercase tracking-wider font-medium rounded-xs transition-colors cursor-pointer"
              style={{
                backgroundColor: 'var(--color-card-subtle)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)',
              }}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500 font-medium">Number Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" style={{ color: 'var(--color-accent)' }} />
                  <span>Copy Phone Number</span>
                </>
              )}
            </button>
          </div>

          {/* Quick info */}
          <div
            className="pt-4 border-t text-xs space-y-1.5 opacity-75"
            style={{
              borderColor: 'var(--color-border-subtle)',
              color: 'var(--color-text-muted)',
            }}
          >
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" style={{ color: 'var(--color-accent)' }} />
              <span>Open Daily: 11:00 AM – 8:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" style={{ color: 'var(--color-accent)' }} />
              <span>First Floor, Gerrard St, London W1D 5PF</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
