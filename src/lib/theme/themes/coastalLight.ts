import type { Theme } from '../tokens'

const coastalLight: Theme = {
  color: {
    bg: '#f6fbff',
    surface: '#ffffff',
    text: '#0f1b2d',
    textMuted: '#5b6a7a',
    primary: '#1e90ff',
    primaryText: '#ffffff',
    border: '#d7e3ef',
    overlay: 'rgba(15,27,45,0.55)',
  },
  radius: { sm: '8px', md: '14px', xl: '22px' },
  shadow: {
    sm: '0 2px 6px rgba(0, 51, 102, 0.05)',
    md: '0 10px 24px rgba(0, 51, 102, 0.10)',
    xl: '0 24px 48px rgba(0, 51, 102, 0.16)'
  },
  space: (n) => `${n * 4}px`,
  font: {
    body: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif',
    heading: 'ui-serif, Charter, Georgia, serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    size: { xs:'12px', sm:'14px', md:'16px', lg:'18px', xl:'22px', display:'40px' }
  }
};

export default coastalLight;
