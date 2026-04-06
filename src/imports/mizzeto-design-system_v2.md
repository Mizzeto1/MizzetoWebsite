# Mizzeto Design System

Version 1.1 | April 2026

---

## Overview

This design system defines the visual language for Mizzeto's brand and digital products. It is informed by Material Design 3 principles but adapted for B2B web applications targeting healthcare executives.

**Brand personality:** Trustworthy, Premium, Innovative, Bold, Distinct

**Visual inspiration:** Severance (Apple TV+) — institutional confidence with deliberate design choices. Modern authority with an edge.

---

## Color System

### Primary Palette

| Token | Hex | RGB | Role |
|-------|-----|-----|------|
| `--mz-primary` | `#7da17e` | (125,161,126) | Main brand color. Sage green. Use for primary actions, key UI elements, brand moments. |
| `--mz-accent` | `#163f38` | (22,63,56) | Dark teal. Call-to-actions, links, highlights, interactive elements. Authority signal. |

### Neutral Palette

| Token | Hex | RGB | Role |
|-------|-----|-----|------|
| `--mz-surface` | `#f7f6f9` | (247,246,249) | Light gray. Primary background, cards, containers. Clean, not sterile. |
| `--mz-surface-dark` | `#163f38` | (22,63,56) | Dark teal (same as accent). Dark sections, footer, dark mode surfaces. |
| `--mz-on-surface` | `#1a1a1a` | (26,26,26) | Near-black. Primary text on light backgrounds. |
| `--mz-on-surface-variant` | `#5a5a5a` | (90,90,90) | Secondary text, muted labels, metadata. |
| `--mz-on-surface-dark` | `#FFFFFF` | (255,255,255) | Text on dark backgrounds. |

### Extended Palette

| Token | Hex | RGB | Role |
|-------|-----|-----|------|
| `--mz-primary-container` | `#98b6b0` | (152,182,176) | Muted sage. Backgrounds for primary-related elements, section backgrounds. |
| `--mz-accent-container` | `#d6e0e2` | (214,224,226) | Light teal. Backgrounds for accent-related elements. |
| `--mz-error` | `#BA1A1A` | (186,26,26) | Error states, destructive actions, validation messages. |
| `--mz-error-container` | `#FFDAD6` | (255,218,214) | Error background. |
| `--mz-success` | `#1B7D46` | (27,125,70) | Success states, confirmations. |
| `--mz-warning` | `#9E6C00` | (158,108,0) | Warning states, cautions. |

### Border Colors

| Token | Hex | Role |
|-------|-----|------|
| `--mz-border-color` | `#E5E5E5` | Default borders |
| `--mz-border-color-strong` | `#CCCCCC` | Emphasized borders |

### CSS Variables

```css
:root {
  /* Primary */
  --mz-primary: #7da17e;
  --mz-accent: #163f38;
  
  /* Surfaces */
  --mz-surface: #f7f6f9;
  --mz-surface-dark: #163f38;
  
  /* Text */
  --mz-on-surface: #1a1a1a;
  --mz-on-surface-variant: #5a5a5a;
  --mz-on-surface-dark: #FFFFFF;
  
  /* Containers */
  --mz-primary-container: #98b6b0;
  --mz-accent-container: #d6e0e2;
  
  /* Semantic */
  --mz-error: #BA1A1A;
  --mz-error-container: #FFDAD6;
  --mz-success: #1B7D46;
  --mz-warning: #9E6C00;
  
  /* Borders */
  --mz-border-color: #E5E5E5;
  --mz-border-color-strong: #CCCCCC;
}
```

---

## Typography

### Font Families

| Role | Font | Source | Fallback |
|------|------|--------|----------|
| **Headlines** | Instrument Sans | [Google Fonts](https://fonts.google.com/specimen/Instrument+Sans) | system-ui, sans-serif |
| **Body** | Charter | [Practical Typography](https://practicaltypography.com/charter.html) | Georgia, serif |

### Type Scale

Based on Material Design 3 type roles, adapted for web.

| Token | Font | Size | Weight | Line Height | Use |
|-------|------|------|--------|-------------|-----|
| `--mz-display` | Instrument Sans | 56px | 600 | 1.1 | Hero headlines |
| `--mz-headline-lg` | Instrument Sans | 40px | 600 | 1.2 | Section titles |
| `--mz-headline-md` | Instrument Sans | 32px | 500 | 1.25 | Subsection titles |
| `--mz-headline-sm` | Instrument Sans | 24px | 500 | 1.3 | Card headers, H3 |
| `--mz-title` | Instrument Sans | 20px | 500 | 1.4 | Small headers, H4 |
| `--mz-body-lg` | Charter | 18px | 400 | 1.6 | Primary body copy |
| `--mz-body` | Charter | 16px | 400 | 1.6 | Secondary body copy |
| `--mz-body-sm` | Charter | 14px | 400 | 1.5 | Tertiary body, fine print |
| `--mz-label` | Instrument Sans | 14px | 500 | 1.4 | Buttons, nav, form labels |
| `--mz-label-sm` | Instrument Sans | 12px | 500 | 1.4 | Captions, metadata, tags |

### CSS Variables

```css
:root {
  /* Font families */
  --mz-font-headline: 'Instrument Sans', system-ui, sans-serif;
  --mz-font-body: 'Charter', Georgia, serif;
  
  /* Type scale */
  --mz-display-size: 56px;
  --mz-display-weight: 600;
  --mz-display-line-height: 1.1;
  
  --mz-headline-lg-size: 40px;
  --mz-headline-lg-weight: 600;
  --mz-headline-lg-line-height: 1.2;
  
  --mz-headline-md-size: 32px;
  --mz-headline-md-weight: 500;
  --mz-headline-md-line-height: 1.25;
  
  --mz-headline-sm-size: 24px;
  --mz-headline-sm-weight: 500;
  --mz-headline-sm-line-height: 1.3;
  
  --mz-title-size: 20px;
  --mz-title-weight: 500;
  --mz-title-line-height: 1.4;
  
  --mz-body-lg-size: 18px;
  --mz-body-lg-weight: 400;
  --mz-body-lg-line-height: 1.6;
  
  --mz-body-size: 16px;
  --mz-body-weight: 400;
  --mz-body-line-height: 1.6;
  
  --mz-body-sm-size: 14px;
  --mz-body-sm-weight: 400;
  --mz-body-sm-line-height: 1.5;
  
  --mz-label-size: 14px;
  --mz-label-weight: 500;
  --mz-label-line-height: 1.4;
  
  --mz-label-sm-size: 12px;
  --mz-label-sm-weight: 500;
  --mz-label-sm-line-height: 1.4;
}
```

### Font Loading

```html
<!-- Instrument Sans from Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Charter: self-hosted, download from https://practicaltypography.com/charter.html -->
```

---

## Spacing

Based on an 8px grid system.

| Token | Value | Use |
|-------|-------|-----|
| `--mz-space-xs` | 4px | Tight spacing, icon gaps |
| `--mz-space-sm` | 8px | Small gaps, inline elements |
| `--mz-space-md` | 16px | Default spacing, form gaps |
| `--mz-space-lg` | 24px | Section padding, card padding |
| `--mz-space-xl` | 32px | Large gaps between sections |
| `--mz-space-2xl` | 48px | Major section breaks |
| `--mz-space-3xl` | 64px | Page section spacing |
| `--mz-space-4xl` | 96px | Hero section padding |

### CSS Variables

```css
:root {
  --mz-space-xs: 4px;
  --mz-space-sm: 8px;
  --mz-space-md: 16px;
  --mz-space-lg: 24px;
  --mz-space-xl: 32px;
  --mz-space-2xl: 48px;
  --mz-space-3xl: 64px;
  --mz-space-4xl: 96px;
}
```

---

## Border Radius (Shape)

| Token | Value | Use |
|-------|-------|-----|
| `--mz-radius-sm` | 4px | Inputs, small elements |
| `--mz-radius-md` | 8px | Buttons, tags, badges |
| `--mz-radius-lg` | 12px | Cards, containers |
| `--mz-radius-xl` | 16px | Modals, large containers |
| `--mz-radius-full` | 9999px | Pills, avatars, circular elements |

### CSS Variables

```css
:root {
  --mz-radius-sm: 4px;
  --mz-radius-md: 8px;
  --mz-radius-lg: 12px;
  --mz-radius-xl: 16px;
  --mz-radius-full: 9999px;
}
```

---

## Elevation (Shadows)

| Token | Value | Use |
|-------|-------|-----|
| `--mz-shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift, buttons |
| `--mz-shadow-md` | `0 4px 6px rgba(0,0,0,0.07)` | Cards, dropdowns |
| `--mz-shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, popovers |
| `--mz-shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Large modals, overlays |

### CSS Variables

```css
:root {
  --mz-shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --mz-shadow-md: 0 4px 6px rgba(0,0,0,0.07);
  --mz-shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
  --mz-shadow-xl: 0 20px 25px rgba(0,0,0,0.15);
}
```

---

## Borders

| Token | Value | Use |
|-------|-------|-----|
| `--mz-border-default` | `1px solid #E5E5E5` | Default borders |
| `--mz-border-strong` | `1px solid #CCCCCC` | Emphasized borders |
| `--mz-border-focus` | `2px solid var(--mz-accent)` | Focus states |

### CSS Variables

```css
:root {
  --mz-border-color: #E5E5E5;
  --mz-border-color-strong: #CCCCCC;
  --mz-border-default: 1px solid var(--mz-border-color);
  --mz-border-strong: 1px solid var(--mz-border-color-strong);
  --mz-border-focus: 2px solid var(--mz-accent);
}
```

---

## Components

### Buttons

**Primary Button**
- Background: `--mz-accent` (#163f38)
- Text: white
- Border radius: `--mz-radius-md` (8px)
- Padding: 12px 24px
- Font: `--mz-label` (Instrument Sans, 14px, 500)
- Hover: lighten 10%
- Active: darken 5%

**Secondary Button**
- Background: transparent
- Border: 1px solid `--mz-accent`
- Text: `--mz-accent`
- Border radius: `--mz-radius-md`
- Padding: 12px 24px
- Hover: background `--mz-accent-container`

**Ghost Button**
- Background: transparent
- Border: none
- Text: `--mz-accent`
- Padding: 12px 24px
- Hover: background rgba(22, 63, 56, 0.1)

### Cards

- Background: white or `--mz-surface`
- Border: `--mz-border-default`
- Border radius: `--mz-radius-lg` (12px)
- Padding: `--mz-space-lg` (24px)
- Shadow: `--mz-shadow-md` (optional, for elevated cards)

### Inputs

- Background: white
- Border: `--mz-border-default`
- Border radius: `--mz-radius-sm` (4px)
- Padding: 12px 16px
- Font: `--mz-body` (Charter, 16px)
- Focus: `--mz-border-focus`
- Placeholder: `--mz-on-surface-variant`

### Navigation

- Background: white or `--mz-surface`
- Links: `--mz-on-surface` (default), `--mz-accent` (hover/active)
- Font: `--mz-label` (Instrument Sans, 14px, 500)
- Height: 64px (desktop), 56px (mobile)

---

## Layout

### Container Widths

| Token | Value | Use |
|-------|-------|-----|
| `--mz-container-sm` | 640px | Narrow content, forms |
| `--mz-container-md` | 768px | Blog posts, articles |
| `--mz-container-lg` | 1024px | Standard content |
| `--mz-container-xl` | 1280px | Wide content, dashboards |
| `--mz-container-2xl` | 1440px | Full-width sections |

### Breakpoints

| Token | Value | Use |
|-------|-------|-----|
| `--mz-breakpoint-sm` | 640px | Mobile landscape |
| `--mz-breakpoint-md` | 768px | Tablet |
| `--mz-breakpoint-lg` | 1024px | Desktop |
| `--mz-breakpoint-xl` | 1280px | Large desktop |
| `--mz-breakpoint-2xl` | 1536px | Extra large screens |

---

## Iconography

**Recommended:** Use Lucide Icons (https://lucide.dev/)

- Stroke width: 1.5px (default) or 2px (emphasis)
- Size: 16px (inline), 20px (buttons), 24px (standalone)
- Color: inherit from parent or `--mz-on-surface-variant`

---

## Motion

Keep animations subtle and purposeful. Healthcare executives don't want flashy — they want confident.

| Property | Duration | Easing |
|----------|----------|--------|
| Hover states | 150ms | ease-out |
| Transitions | 200ms | ease-in-out |
| Page transitions | 300ms | ease-in-out |
| Modals | 250ms | ease-out |

### CSS Variables

```css
:root {
  --mz-duration-fast: 150ms;
  --mz-duration-normal: 200ms;
  --mz-duration-slow: 300ms;
  --mz-easing-default: ease-in-out;
  --mz-easing-enter: ease-out;
  --mz-easing-exit: ease-in;
}
```

---

## Accessibility

- **Contrast:** All text meets WCAG AA (4.5:1 for body, 3:1 for large text)
- **Focus states:** Visible focus ring using `--mz-border-focus`
- **Touch targets:** Minimum 44x44px for interactive elements
- **Motion:** Respect `prefers-reduced-motion`

---

## Usage Guidelines

### Do

- Use `--mz-primary` (#7da17e) sparingly for brand moments and highlights
- Use `--mz-accent` (#163f38) for all interactive elements (buttons, links, CTAs)
- Use Charter (body font) for any text longer than a headline
- Use generous whitespace — this is a premium brand
- Keep UI clean and uncluttered

### Don't

- Don't use more than 2-3 colors in a single view
- Don't use Instrument Sans for long-form body text
- Don't use pure black (#000000) — use `--mz-on-surface`
- Don't use pure white (#FFFFFF) for backgrounds — use `--mz-surface`
- Don't use flashy animations or transitions

---

## Quick Reference

### All CSS Variables

```css
:root {
  /* Colors */
  --mz-primary: #7da17e;
  --mz-accent: #163f38;
  --mz-surface: #f7f6f9;
  --mz-surface-dark: #163f38;
  --mz-on-surface: #1a1a1a;
  --mz-on-surface-variant: #5a5a5a;
  --mz-on-surface-dark: #FFFFFF;
  --mz-primary-container: #98b6b0;
  --mz-accent-container: #d6e0e2;
  --mz-error: #BA1A1A;
  --mz-error-container: #FFDAD6;
  --mz-success: #1B7D46;
  --mz-warning: #9E6C00;
  --mz-border-color: #E5E5E5;
  --mz-border-color-strong: #CCCCCC;
  
  /* Typography */
  --mz-font-headline: 'Instrument Sans', system-ui, sans-serif;
  --mz-font-body: 'Charter', Georgia, serif;
  
  /* Spacing */
  --mz-space-xs: 4px;
  --mz-space-sm: 8px;
  --mz-space-md: 16px;
  --mz-space-lg: 24px;
  --mz-space-xl: 32px;
  --mz-space-2xl: 48px;
  --mz-space-3xl: 64px;
  --mz-space-4xl: 96px;
  
  /* Border Radius */
  --mz-radius-sm: 4px;
  --mz-radius-md: 8px;
  --mz-radius-lg: 12px;
  --mz-radius-xl: 16px;
  --mz-radius-full: 9999px;
  
  /* Shadows */
  --mz-shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --mz-shadow-md: 0 4px 6px rgba(0,0,0,0.07);
  --mz-shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
  --mz-shadow-xl: 0 20px 25px rgba(0,0,0,0.15);
  
  /* Motion */
  --mz-duration-fast: 150ms;
  --mz-duration-normal: 200ms;
  --mz-duration-slow: 300ms;
  --mz-easing-default: ease-in-out;
}
```

---

## Color Comparison (v1.0 → v1.1)

| Role | Old Hex (v1.0) | New Hex (v1.1) | Change |
|------|----------------|----------------|--------|
| Primary | #5A7A6A | #7da17e | Lighter, more sage |
| Secondary | #2D4A3E | (removed) | Consolidated into accent |
| Accent | #1E5A8A | #163f38 | Dark teal instead of blue |
| Surface | #F5F3EE | #f7f6f9 | Cooler gray |
| Primary Container | #D4E5DC | #98b6b0 | More saturated |
| Accent Container | #D6E8F5 | #d6e0e2 | Cooler, less blue |

---

## Changelog

- **v1.1** (April 2026): Updated color palette to match Figma brand colors
- **v1.0** (April 2026): Initial design system

---

*Built for Mizzeto. Inspired by Severance. Designed for healthcare executives who appreciate taste.*
