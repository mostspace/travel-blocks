'use client';

import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import type { Theme } from './tokens';
import { themeToCSSVars } from './tokens';
import coastalLight from './themes/coastalLight';
import midnightCity from './themes/midnightCity';

type ThemeName = 'coastalLight' | 'midnightCity';

type ThemeContextType = {
  themeName: ThemeName;
  theme: Theme;
  setThemeName: (name: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themeMap: Record<ThemeName, Theme> = {
  coastalLight,
  midnightCity
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>('coastalLight');

  const value = useMemo(() => ({
    themeName,
    theme: themeMap[themeName],
    setThemeName
  }), [themeName]);

  // Write CSS variables to :root so Tailwind var colors work
  useEffect(() => {
    const vars = themeToCSSVars(themeMap[themeName]);
    const root = document.documentElement;
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
  }, [themeName]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
