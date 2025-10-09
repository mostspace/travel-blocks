import type { Theme } from '../tokens'

const midnightCity: Theme = {
  color: {
    bg: '#0b0c0e',
    surface: '#14161b',
    text: '#e6e9ef',
    textMuted: '#a0a6ad',
    primary: '#06b6d4',
    primaryText: '#071317',
    border: '#2a2f36',
    overlay: 'rgba(0,0,0,0.7)',
  },
  radius: { sm: '8px', md: '14px', xl: '22px' },
  shadow: {
    sm: '0 2px 6px rgba(0, 0, 0, 0.25)',
    md: '0 10px 24px rgba(0,0,0,0.35)',
    xl: '0 24px 48px rgba(0,0,0,0.5)'
  },
  space: (n) => `${n * 4}px`,
  font: {
    body: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
    heading: 'Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    size: { xs:'12px', sm:'14px', md:'16px', lg:'18px', xl:'22px', display:'40px' }
  }
};

export default midnightCity;
