import { useState, useRef, useEffect } from 'react';
import { Palette, Check, Sparkles, X } from 'lucide-react';
import { useTheme, THEME_OPTIONS, ThemeId } from '../context/ThemeContext';

export default function ThemeSelector() {
  const { currentTheme, setTheme, themeOption } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      {/* Theme Icon Button */}
      <button
        type="button"
        id="theme-palette-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change color theme"
        aria-expanded={isOpen}
        className="group relative inline-flex items-center justify-center gap-2 h-10 px-3 rounded-xs border transition-all duration-200 cursor-pointer"
        style={{
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-card-subtle)',
          color: 'var(--color-text)',
        }}
        title={`Theme: ${themeOption.name} (Click to change)`}
      >
        <div className="relative flex items-center justify-center">
          <Palette className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" style={{ color: 'var(--color-accent)' }} />
          {/* Glowing dot representing current accent */}
          <span
            className="absolute -top-1 -right-1 w-2 h-2 rounded-full border border-black/20"
            style={{ backgroundColor: 'var(--color-accent)' }}
          />
        </div>
        <span className="hidden xl:inline text-[11px] uppercase tracking-wider font-semibold">
          {themeOption.name}
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          id="theme-palette-dropdown"
          className="absolute right-0 mt-2 w-72 sm:w-80 p-4 rounded-xs shadow-2xl border z-50 animate-fade-in-up"
          style={{
            backgroundColor: 'var(--color-card)',
            borderColor: 'var(--color-border)',
            color: 'var(--color-text)',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b mb-3" style={{ borderColor: 'var(--color-border)' }}>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
              <span className="text-xs uppercase tracking-[0.16em] font-semibold">
                Salon Aesthetic
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full opacity-70 hover:opacity-100 cursor-pointer"
              aria-label="Close theme picker"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs opacity-75 mb-3 leading-relaxed">
            Choose from 3 curated salon palettes — Noir & Rose, Warm Ivory, and Midnight Gold:
          </p>

          {/* Theme List */}
          <div className="space-y-2">
            {THEME_OPTIONS.map((theme) => {
              const isSelected = currentTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  id={`theme-option-${theme.id}`}
                  onClick={() => {
                    setTheme(theme.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xs border transition-all text-left cursor-pointer ${
                    isSelected
                      ? 'ring-1 shadow-sm'
                      : 'hover:opacity-90'
                  }`}
                  style={{
                    backgroundColor: theme.bgHex,
                    borderColor: isSelected ? theme.accentHex : 'rgba(128,128,128,0.25)',
                    color: theme.textHex,
                  }}
                >
                  <div className="flex items-center gap-3">
                    {/* Visual Color Swatches */}
                    <div className="flex items-center -space-x-1 shrink-0">
                      <span
                        className="w-5 h-5 rounded-full border border-white/20 shadow-xs"
                        style={{ backgroundColor: theme.bgHex }}
                        title="Background color"
                      />
                      <span
                        className="w-5 h-5 rounded-full border border-white/20 shadow-xs"
                        style={{ backgroundColor: theme.accentHex }}
                        title="Accent color"
                      />
                    </div>

                    <div>
                      <span className="text-xs font-semibold block tracking-wide">
                        {theme.name}
                      </span>
                      <span className="text-[10px] opacity-70 block">
                        {theme.subtitle}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        backgroundColor: theme.accentHex,
                        color: theme.isDark ? '#0C0A0D' : '#FAF8F5',
                      }}
                    >
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
