export type Theme = {
  color: {
    bg: string; surface: string; text: string; textMuted: string;
    primary: string; primaryText: string; border: string; overlay: string;
  };
  radius: { sm: string; md: string; xl: string };
  shadow: { sm: string; md: string; xl: string };
  space: (n: number) => string;
  font: {
    body: string; heading: string; mono: string;
    size: { xs: string; sm: string; md: string; lg: string; xl: string; display: string }
  };
};

export function themeToCSSVars(t: Theme): Record<string, string> {
  return {
    '--bg': t.color.bg,
    '--surface': t.color.surface,
    '--text': t.color.text,
    '--text-muted': t.color.textMuted,
    '--primary': t.color.primary,
    '--primary-text': t.color.primaryText,
    '--border': t.color.border,
    '--overlay': t.color.overlay,
    '--radius-sm': t.radius.sm,
    '--radius-md': t.radius.md,
    '--radius-xl': t.radius.xl,
    '--shadow-sm': t.shadow.sm,
    '--shadow-md': t.shadow.md,
    '--shadow-xl': t.shadow.xl,
    '--font-body': t.font.body,
    '--font-heading': t.font.heading,
    '--font-mono': t.font.mono
  };
}
