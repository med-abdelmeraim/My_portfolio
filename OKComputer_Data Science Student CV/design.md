# Portfolio Design Style Guide

## Design Philosophy

**Visual Language**: Modern editorial aesthetic inspired by leading tech publications like Wired and The Verge. Clean, sophisticated, and data-driven design that reflects your technical expertise in data science.

**Color Palette**: 
- Primary: Deep Navy (#1a2332) - Professional, trustworthy
- Secondary: Warm Gray (#6b7280) - Neutral, balanced  
- Accent: Electric Blue (#3b82f6) - Tech-forward, energetic
- Background: Off-white (#fafafa) - Clean, readable
- Text: Charcoal (#374151) - High contrast, accessible

**Typography**:
- Display Font: "Playfair Display" - Bold serif for headings, creates strong visual hierarchy
- Body Font: "Inter" - Clean sans-serif for excellent readability
- Code Font: "JetBrains Mono" - For technical content and code snippets

## Visual Effects & Styling

**Background Effects**:
- Subtle animated gradient mesh using CSS and Anime.js
- Floating geometric shapes representing data points
- Particle system background using p5.js for dynamic visual interest

**Text Effects**:
- Typewriter animation for main heading using Typed.js
- Color cycling emphasis on key skills and technologies
- Split-by-letter stagger animations for section reveals
- Gradient text animation for hero section

**Interactive Elements**:
- Smooth hover transitions with 3D tilt effects
- Animated filter buttons with morphing backgrounds  
- Project cards with depth shadows and scale transforms
- Radar chart with smooth data point animations using ECharts.js

**Image Treatment**:
- Hero image with Ken Burns pan/zoom effect
- Project thumbnails with overlay gradients on hover
- Infinite image scroller for technology stack visualization
- Glitch effect for tech-forward aesthetic on select elements

## Layout & Structure

**Grid System**: CSS Grid with 12-column responsive layout
**Spacing**: 8px base unit system for consistent rhythm
**Breakpoints**: Mobile-first responsive design
**Navigation**: Fixed header with smooth scroll navigation
**Sections**: Full-width hero, contained content areas

## Animation Strategy

**Scroll Animations**: 
- Reveal animations trigger at 50% viewport entry
- Staggered delays for card grids and lists
- Parallax effects limited to ±8% translation

**Hover Effects**:
- 3D perspective transforms on cards
- Color morphing on interactive elements  
- Shadow expansion for depth perception
- Smooth 300ms transitions throughout

**Loading States**:
- Skeleton screens for content areas
- Progressive image loading with blur-to-sharp
- Animated progress indicators for data visualizations