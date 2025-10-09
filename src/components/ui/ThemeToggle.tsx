'use client'
import React from 'react'
import { useTheme } from '@/lib/theme/ThemeProvider'
import { VisuallyHidden } from './VisuallyHidden'

export const ThemeToggle: React.FC = () => {
  const { themeName, setThemeName } = useTheme()
  const other = themeName === 'coastalLight' ? 'midnightCity' : 'coastalLight'
  return (
    <button
      onClick={() => setThemeName(other)}
      className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-text hover:bg-surface/80 focus-visible:ring-2 ring-primary"
    >
      <VisuallyHidden>Switch theme</VisuallyHidden>
      <span aria-hidden>{themeName === 'coastalLight' ? '🌙 Midnight' : '🌤️ Coastal'}</span>
    </button>
  )
}
