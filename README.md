# Travel Blocks

A themeable component library for travel booking sites, built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Time Spent

About 3.5 hours total:
- Component implementation and refactoring: ~1.5 hours
- Responsive design and animations: ~1 hour  
- Accessibility and polish: ~45 minutes
- Theme system: ~30 minutes
- Documentation: ~45 minutes

## What I Built

### Trip Teaser Component (Required)

A hero block for travel posts/trips with the following:

**Content:**
- Title, summary, and hero image
- Up to 4 tags
- Author info with avatar
- Date and read time
- Primary and optional secondary CTA buttons

**Features:**
- Responsive layout (mobile stacks vertically, desktop shows side-by-side)
- Text overflow handling with line clamping
- Image zoom on hover
- Loading and error states
- Keyboard accessible with proper focus indicators

### Itinerary Grid Component (Optional)

Responsive grid of day cards:

**Content:**
- Day number badge
- Title and description
- Optional image (with fallback)
- Duration, cost, and rating

**Features:**
- 1-3 column responsive grid
- Expandable cards (click to read full description)
- Smooth hover animations (lift effect, image zoom)
- Keyboard navigation (Tab, Enter, Space)
- Focus states match hover states

### UI Components

**Button** - Polymorphic component that renders as button or anchor tag depending on props. Two variants (primary/ghost), three sizes.

**Tag** - Simple badge component for categories/labels.

## Design Decisions

I went for a clean, minimal aesthetic with subtle animations. The goal was to make everything feel polished without being overly flashy.

**Responsive approach:**
Mobile-first design. Content reflows naturally - images stack on top on mobile, move to the side on desktop. Used Tailwind's responsive utilities heavily.

**Interactions:**
Kept animations subtle (300-500ms). The card lift effect and image zoom feel nice without being distracting. Made sure keyboard focus states are clearly visible.

**Accessibility:**
- Semantic HTML (article, header, time, etc.)
- ARIA labels where helpful
- All interactive elements keyboard accessible
- Focus indicators use rings instead of default browser styles

**Text handling:**
Used line-clamp CSS to prevent layout issues with long titles. Better than truncating with ellipsis since you can see more content.

### Tradeoffs

**What I prioritized:**
- Polish over adding more components
- Accessibility (proper semantics, keyboard nav)
- Performance (lazy loading, optimized images)
- Making the theme system actually work

**What I skipped:**
- Additional blocks (could have done more but focused on quality)
- Animation libraries (used plain CSS transitions to keep bundle small)
- Advanced features like bookmarking or sharing
- Unit tests (time constraint)

**Technical choices:**
- Tailwind classes over styled-components (better tree-shaking)
- Inline SVGs instead of an icon library (fewer dependencies)
- Polymorphic Button over separate Link component (more flexible)
- Local state for card expansion (simpler than URL-based)

## Theme System

The theme system uses CSS variables as the source of truth. Here's how it works:

1. Theme objects defined in `src/lib/theme/themes/` as TypeScript
2. ThemeProvider injects theme values as CSS variables
3. Tailwind config references these CSS variables  
4. Components use Tailwind classes

This means switching themes just updates CSS variables and everything re-renders automatically.

### Current Themes

**Coastal Light** - Light theme with blue primary color and serif headings

**Midnight City** - Dark theme with cyan primary and sans-serif headings

### Adding a New Theme

1. Create a new file `src/lib/theme/themes/yourTheme.ts`:

```typescript
import type { Theme } from '../tokens'

const yourTheme: Theme = {
  color: {
    bg: '#f5f5f5',
    surface: '#ffffff',
    text: '#1a1a1a',
    textMuted: '#6b7280',
    primary: '#8b5cf6',
    primaryText: '#ffffff',
    border: '#e5e7eb',
    overlay: 'rgba(0,0,0,0.5)',
  },
  radius: { 
    sm: '6px',
    md: '12px',
    xl: '20px'
  },
  shadow: {
    sm: '0 1px 3px rgba(0,0,0,0.08)',
    md: '0 6px 16px rgba(0,0,0,0.12)',
    xl: '0 20px 40px rgba(0,0,0,0.16)'
  },
  space: (n) => `${n * 4}px`,
  font: {
    body: 'Inter, sans-serif',
    heading: 'Montserrat, sans-serif',
    mono: 'Fira Code, monospace',
    size: { 
      xs: '12px', sm: '14px', md: '16px', 
      lg: '18px', xl: '22px', display: '48px' 
    }
  }
};

export default yourTheme;
```

2. Register it in `src/lib/theme/ThemeProvider.tsx`:

```typescript
import yourTheme from './themes/yourTheme'

const THEMES = {
  coastalLight,
  midnightCity,
  yourTheme,
} as const
```

That's it. All components will work with the new theme automatically.

**Note on colors:** Make sure text on surface has at least 4.5:1 contrast ratio (WCAG AA). primaryText on primary should also meet this.

## Project Structure

```
src/
├── app/
│   ├── api/posts/          # Mock API endpoint (has simulated latency)
│   ├── page.tsx            # Main demo page
│   ├── layout.tsx          # Root layout with ThemeProvider
│   └── globals.css         # Global styles and CSS variable definitions
├── components/
│   ├── blocks/
│   │   ├── TripTeaser/     # Hero component
│   │   └── ItineraryGrid/  # Day cards grid
│   └── ui/                 # Reusable primitives
│       ├── Button.tsx
│       ├── Tag.tsx
│       ├── ThemeToggle.tsx
│       └── ...
└── lib/
    ├── data/               # Mock data and types
    ├── theme/              # Theme system
    └── util/               # Helper functions
```

## Acceptance Criteria

### Trip Teaser
- Uses theme variables for all colors/spacing
- Works in both themes without overrides
- Responsive (mobile → desktop)
- Handles long/short titles gracefully
- Image preserves aspect ratio, has fallback
- Hover, focus, and active states on all interactive elements
- Loading and error states implemented

### Itinerary Grid  
- Cards are keyboard accessible
- Focus states mirror hover behavior
- Responsive grid (1 → 2 → 3 columns)
- Handles missing images and varied content
- Subtle animations (lift, zoom, expand/collapse)

## Tech Stack

- Next.js 15 (App Router)
- TypeScript (strict mode)
- Tailwind CSS v4
- React 19

## Performance Notes

- Using Next.js Image component with proper sizes attribute
- Hero images load with priority, grid images lazy load
- CSS transforms for animations (hardware accelerated)
- Tailwind purges unused classes in production

## Notes

- Simulated API latency (400-1000ms) is intentionally included
- All visual design is original (no templates or UI kits)
- Custom line-clamp utilities added for Tailwind v4 compatibility
