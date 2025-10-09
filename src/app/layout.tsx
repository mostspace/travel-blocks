import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/lib/theme/ThemeProvider'

export const metadata: Metadata = {
  title: 'Travel Blocks — Starter',
  description: 'Starter repo for take-home assignment: themeable travel blocks in Next.js + Tailwind + TS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
