import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeId = 'ivory-bronze' | 'noir-rose' | 'midnight-gold';

export interface ThemeOption {
  id: ThemeId;
  name: string;
  subtitle: string;
  bgHex: string;
  accentHex: string;
  textHex: string;
  isDark: boolean;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'noir-rose',
    name: 'Noir & Rose',
    subtitle: 'Black canvas with rose accent',
    bgHex: '#0C0A0E',
    accentHex: '#E2889E',
    textHex: '#FDF9FA',
    isDark: true,
  },
  {
    id: 'ivory-bronze',
    name: 'Warm Ivory',
    subtitle: 'Classic London salon aesthetic',
    bgHex: '#FAF8F5',
    accentHex: '#8C7355',
    textHex: '#1A1918',
    isDark: false,
  },
  {
    id: 'midnight-gold',
    name: 'Midnight Gold',
    subtitle: 'Deep charcoal & champagne gold',
    bgHex: '#0E0D0C',
    accentHex: '#D4AF37',
    textHex: '#FAF8F4',
    isDark: true,
  },
];

interface ThemeContextType {
  currentTheme: ThemeId;
  themeOption: ThemeOption;
  setTheme: (id: ThemeId) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeId>(() => {
    try {
      const saved = localStorage.getItem('shanghai_salon_theme') as ThemeId;
      if (saved && THEME_OPTIONS.some((t) => t.id === saved)) {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'ivory-bronze';
  });

  const themeOption = THEME_OPTIONS.find((t) => t.id === currentTheme) || THEME_OPTIONS[0];

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', currentTheme);
    if (themeOption.isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('shanghai_salon_theme', currentTheme);
    } catch {
      // ignore
    }
  }, [currentTheme, themeOption]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        themeOption,
        setTheme: setCurrentTheme,
        isDark: themeOption.isDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
