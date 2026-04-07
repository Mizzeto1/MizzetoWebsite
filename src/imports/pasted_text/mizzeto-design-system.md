# Mizzeto Design System

Version 1.2 | April 2026

---

## Overview

This design system defines the visual language for Mizzeto's brand and digital products. It is informed by Material Design 3 principles but adapted for B2B web applications targeting healthcare executives.

**Brand personality:** Trustworthy, Premium, Innovative, Bold, Distinct

**Visual inspiration:** Classic navy blue palette — institutional trust with modern refinement. Clean, professional authority.

---

## Color System

### Primary Palette

| Token | Hex | RGB | Role |
|-------|-----|-----|------|
| `--mz-primary` | `#3F72AF` | (63,114,175) | Main brand color. Medium blue. Use for primary actions, key UI elements, brand moments. |
| `--mz-accent` | `#112D4E` | (17,45,78) | Deep navy. Call-to-actions, links, highlights, interactive elements. Authority signal. |

### Neutral Palette

| Token | Hex | RGB | Role |
|-------|-----|-----|------|
| `--mz-surface` | `#F9F7F7` | (249,247,247) | Off-white/cream. Primary background, cards, containers. Warm, not sterile. |
| `--mz-surface-dark` | `#112D4E` | (17,45,78) | Deep navy (same as accent). Dark sections, footer, dark mode surfaces. |
| `--mz-on-surface` | `#112D4E` | (17,45,78) | Deep navy. Primary text on light backgrounds. |
| `--mz-on-surface-variant` | `#3F72AF` | (63,114,175) | Medium blue. Secondary text, muted labels, metadata. |
| `--mz-on-surface-dark` | `#F9F7F7` | (249,247,247) | Off-white. Text on dark backgrounds. |

### Extended Palette

| Token | Hex | RGB | Role |
|-------|-----|-----|------|
| `--mz-primary-container` | `#DBE2EF` | (219,226,239) | Soft blue-gray. Backgrounds for primary-related elements, section backgrounds. |
| `--mz-accent-container` | `#DBE2EF` | (219,226,239) | Soft blue-gray. Backgrounds for accent-related elements. |
| `--mz-error` | `#BA1A1A` | (186,26,26) | Error states, destructive actions, validation messages. |
| `--mz-error-container` | `#FFDAD6` | (255,218,214) | Error background. |
| `--mz-success` | `#1B7D46` | (27,125,70) | Success states, confirmations. |
| `--mz-warning` | `#9E6C00` | (158,108,0) | Warning states, cautions. |

### Border Colors

| Token | Hex | Role |
|-------|-----|------|
| `--mz-border-color` | `#DBE2EF` | Default borders (soft blue-gray) |
| `--mz-border-color-strong` | `#3F72AF` | Emphasized borders (medium blue) |

### CSS Variables

```css
:root {
  /* Primary */
  --mz-primary: #3F72AF;
  --mz-accent: #112D4E;
  
  /* Surfaces */
  --mz-surface: #F9F7F7;
  --mz-surface-dark: #112D4E;
  
  /* Text */
  --mz-on-surface: #112D4E;
  --mz-on-surface-variant: #3F72AF;
  --mz-on-surface-dark: #F9F7F7;
  
  /* Containers */
  --mz-primary-container: #DBE2EF;
  --mz-accent-container: #DBE2EF;
  
  /* Semantic */
  --mz-error: #BA1A1A;
  --mz-error-container: #FFDAD6;
  --mz-success: #1B7D46;
  --mz-warning: #9E6C00;
  
  /* Borders */
  --mz-border-color: #DBE2EF;
  --mz-border-color-strong: #3F72AF;
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

---

## Border Radius (Shape)

| Token | Value | Use |
|-------|-------|-----|
| `--mz-radius-sm` | 4px | Inputs, small elements |
| `--mz-radius-md` | 8px | Buttons, tags, badges |
| `--mz-radius-lg` | 12px | Cards, containers |
| `--mz-radius-xl` | 16px | Modals, large containers |
| `--mz-radius-full` | 9999px | Pills, avatars, circular elements |

---

## Elevation (Shadows)

| Token | Value | Use |
|-------|-------|-----|
| `--mz-shadow-sm` | `0 1px 2px rgba(17,45,78,0.05)` | Subtle lift, buttons |
| `--mz-shadow-md` | `0 4px 6px rgba(17,45,78,0.07)` | Cards, dropdowns |
| `--mz-shadow-lg` | `0 10px 15px rgba(17,45,78,0.1)` | Modals, popovers |
| `--mz-shadow-xl` | `0 20px 25px rgba(17,45,78,0.15)` | Large modals, overlays |

---

## Components

### Buttons

**Primary Button**
- Background: `--mz-accent` (#112D4E)
- Text: white (#F9F7F7)
- Border radius: `--mz-radius-md` (8px)
- Padding: 12px 24px
- Hover: lighten 10%

**Secondary Button**
- Background: transparent
- Border: 1px solid `--mz-accent`
- Text: `--mz-accent`
- Hover: background `--mz-primary-container`

**Ghost Button**
- Background: transparent
- Text: `--mz-accent`
- Hover: background rgba(17, 45, 78, 0.1)

### Cards

- Background: white or `--mz-surface`
- Border: `--mz-border-default`
- Border radius: 12px
- Padding: 24px
- Shadow: `--mz-shadow-md` (optional)

---

## Quick Reference

### All CSS Variables

```css
:root {
  /* Colors */
  --mz-primary: #3F72AF;
  --mz-accent: #112D4E;
  --mz-surface: #F9F7F7;
  --mz-surface-dark: #112D4E;
  --mz-on-surface: #112D4E;
  --mz-on-surface-variant: #3F72AF;
  --mz-on-surface-dark: #F9F7F7;
  --mz-primary-container: #DBE2EF;
  --mz-accent-container: #DBE2EF;
  --mz-error: #BA1A1A;
  --mz-error-container: #FFDAD6;
  --mz-success: #1B7D46;
  --mz-warning: #9E6C00;
  --mz-border-color: #DBE2EF;
  --mz-border-color-strong: #3F72AF;
  
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
  --mz-shadow-sm: 0 1px 2px rgba(17,45,78,0.05);
  --mz-shadow-md: 0 4px 6px rgba(17,45,78,0.07);
  --mz-shadow-lg: 0 10px 15px rgba(17,45,78,0.1);
  --mz-shadow-xl: 0 20px 25px rgba(17,45,78,0.15);
}
```

---

## Color Palette Source

Color Hunt Palette: https://colorhunt.co/palette/f9f7f7dbe2ef3f72af112d4e

| Hex | Role in System |
|-----|----------------|
| `#F9F7F7` | Surface (background) |
| `#DBE2EF` | Primary/Accent Container |
| `#3F72AF` | Primary (brand color) |
| `#112D4E` | Accent (CTAs, text) |

---

## Changelog

- **v1.2** (April 2026): Updated to Color Hunt navy blue palette
- **v1.1** (April 2026): Updated to Figma sage/mint green
- **v1.0** (April 2026): Initial design system (Severance teal)

---

*Built for Mizzeto. Designed for healthcare executives who appreciate trust and authority.*