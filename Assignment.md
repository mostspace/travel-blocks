# Take-Home: Themeable Travel "Blocks" (React/Next.js + TypeScript)

Timebox: Aim for 2-4 hours. Hard cap: 4 hours  
Goal: Build 1–2 reusable blocks for a travel blog/site-builder with a strong emphasis on visual design, UX polish, and themeability. Data can be mocked; no real backend required.
Be sure to read the Deliverables section below carefully.

---

## Context

You're building a component for a shopify-style site builder targeted towards travel and experience operators (think companies that run yacht charters or walking tours). Your role in this is both designer and front-end engineer.

## What you'll build

Note: the ambiguity in this assignment is intentional - make sensible calls and document your choices briefly in the README.

### 1 - Trip Teaser (required)

A hero/teaser block that advertises a trip/post.

- Content (loose): title, short summary, hero image (or fallback), 1–3 tags, primary CTA (e.g., "Read guide" or "Book Now"), optional secondary CTA, meta (author/date/est. read time).
- Behavior (loose): responsive layout, tasteful hover/tap states, visible keyboard focus, reasonable image handling.
- Themeability: reads all colors/typography from a theme and looks good in at least two distinct themes.

### 2 - Itinerary Grid (optional)

A grid of "day cards" or "stop cards."

- Content (loose): for each item: title, short description, optional image/icon, optional metadata (duration, cost, rating).
- Behavior (loose): responsive grid, a small hover/focus reveal micro-interaction, keyboard-friendly cards.
- Themeability: same as above.

---

## Tech requirements

- Next.js + TypeScript - any version/router is fine, but the latest is included (with app router) in the starter.
- Styling: You can use the provided starter’s Tailwind setup or your preferred approach
- State/data: Your choice. Keep data handling simple - mocks are OK
- Auth: unneeded for this exercise
- Design originality: No off-the-shelf page templates. Components should be your own visual work

---

## Data & mocks

- You may use simple in-memory mocks or a tiny route/handler. The basics have been included in the starter, feel free to edit them.

---

## Acceptance criteria

### Trip Teaser (required)

- Uses the theme for visual decisions (colors, typography, etc.).
- Works in two distinct themes without one-off overrides.
- Responsive from mobile to desktop.
- Robust handling for long/short titles.
- Image behavior preserves aspect ratio and avoids layout shift. Has a "no image" fallback.
- Interactive states: hover/active + visible keyboard focus.
- Handles loading (with latency) and a simple error state.

### Itinerary Grid (optional)

- Keyboard reachable; focus reveal mirrors hover behavior.
- Responsive grid; resilient to uneven content (missing image, varied text lengths).
- Small, tasteful micro-interaction (motion should be subtle and not required to understand the UI).

---

## What we’re evaluating

- UX polish
- Code quality
- Accessibility
- Performance
- Completeness
- Docs

---

## Deliverables

1. This git repo with your commits included. Please do not post publicly; just archive it and send it to us. Please delete the `node_modules` and any other build artifacts folders before sending in order to keep the archive small.
2. Edit the README.md file with any notes that are relevant to the evaluator.
3. Include a short video (5 minutes or so is plenty) walking through the design you came up with and the reasoning behind your decisions.
4. Maintain compatibility - we should be able to run the application locally with an `npm install` and `npm run dev`.

Please include in README:

- Time spent
- What you built
- Design intent & tradeoffs
- Theme system (how it works and how to add a new theme)

Originality: Visual design must be your own. Commit history with small, meaningful commits is encouraged.

---

## Starter

This repo is a bare-bones starter to prevent you from having to spend time on getting the skeleton set up:

```bash
npm i
npm run dev
# open http://localhost:3000
```

- A minimal (and inadequate) theme setup and mock endpoint with simulated latency is included - feel free to tweak data models or create your own mocks. Please make sure to include the simulated latency when submitting (either leave it in place or don't forget to put it back in).

- You can keep Tailwind or swap styling approaches if you prefer.
