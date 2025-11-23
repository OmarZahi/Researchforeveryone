# Research for Everyone - Enhanced with Motion One

This project has been enhanced with Motion One animations and follows Astro best practices for code organization.

## Key Improvements

### 🎨 Motion One Integration

- **Modern Animations**: Replaced custom scroll animations with Motion One library for better performance
- **Multiple Animation Types**: 
  - `fade-up`: Subtle fade in with upward movement
  - `slide-left/right`: Directional slide animations
  - `scale-up`: Growing scale effect
  - `stagger`: Sequential animation of child elements
  - `fade-in`: Simple opacity transitions

### 🏗️ Modular Architecture

#### CSS Organization
- **`base.css`**: Variables, fonts, and foundational styles
- **`header.css`**: Navigation and header-specific styles
- **`hero.css`**: Hero section and background animations
- **`buttons.css`**: Button components and interactions
- **`components.css`**: Feature grids, metrics, team layouts
- **`footer.css`**: Footer-specific styles
- **`styles.css`**: Main file that imports all modules

#### JavaScript Organization
- **`navigation.js`**: Mobile menu toggling and navigation logic
- **`faq.js`**: FAQ collapsible functionality with accessibility
- **`typewriter.js`**: Hero typewriter effect
- **`forms.js`**: AJAX form submission handling
- **`hero-canvas.js`**: Interactive canvas background
- **`main.js`**: Coordination of all modules

### 🧩 Component-Based Approach

#### New Astro Components
- **`Hero.astro`**: Reusable hero section with Motion One animations
- **`MotionWrapper.astro`**: Wrapper for applying different animation types
- **`Counter.astro`**: Animated number counters for metrics
- **`FeatureGrid.astro`**: Flexible grid layout for features

### 📱 Enhanced Accessibility

- **Reduced Motion**: Respects `prefers-reduced-motion` settings
- **Keyboard Navigation**: Enhanced focus states and keyboard support
- **ARIA Labels**: Proper ARIA attributes for interactive elements
- **Screen Reader Support**: Improved semantic markup

### ⚡ Performance Optimizations

- **Lazy Loading**: Images load only when needed
- **Modular Scripts**: JavaScript splits into focused modules
- **Efficient Animations**: Hardware-accelerated transforms
- **CSS Imports**: Better caching with modular CSS

## Usage Examples

### Adding Motion to Sections

```astro
<!-- Basic fade-up animation -->
<MotionWrapper animation="fade-up" threshold={0.3}>
  <section>
    <h2>Your Content</h2>
  </section>
</MotionWrapper>

<!-- Stagger animation for lists -->
<MotionWrapper animation="stagger" threshold={0.2}>
  <div class="features">
    <div class="feature">Item 1</div>
    <div class="feature">Item 2</div>
    <div class="feature">Item 3</div>
  </div>
</MotionWrapper>
```

### Using Feature Grids

```astro
---
const features = [
  { title: 'Title 1', description: 'Description 1' },
  { title: 'Title 2', description: 'Description 2' }
];
---

<FeatureGrid features={features} columns={3} />
```

### Adding Counters

```astro
<Counter target={100} label="Students" duration={2} suffix="+" />
```

## Animation Types

- **`fade-up`**: Elements fade in while moving up (default)
- **`fade-in`**: Simple opacity transition
- **`slide-left`**: Elements slide in from the left
- **`slide-right`**: Elements slide in from the right  
- **`scale-up`**: Elements scale up while fading in
- **`stagger`**: Child elements animate sequentially

## File Structure

```
src/
├── components/
│   ├── animations/
│   │   └── MotionWrapper.astro
│   ├── Hero.astro
│   ├── Counter.astro
│   ├── FeatureGrid.astro
│   ├── Header.astro
│   └── Footer.astro
├── layouts/
│   └── BaseLayout.astro
└── pages/
    └── index.astro

assets/
├── css/
│   ├── base.css
│   ├── header.css
│   ├── hero.css
│   ├── buttons.css
│   ├── components.css
│   ├── footer.css
│   └── styles.css
└── js/
    ├── navigation.js
    ├── faq.js
    ├── typewriter.js
    ├── forms.js
    ├── hero-canvas.js
    └── main.js
```

## Browser Support

- Modern browsers with ES6+ support
- Graceful degradation for older browsers
- Respects user motion preferences

## Dependencies

- **Motion One**: Animation library
- **Astro**: Static site generator
- **TypeScript**: Type safety (development)

## Development

```bash
npm install        # Install dependencies
npm run dev        # Start development server
npm run build      # Build for production
```

The codebase now follows modern best practices with clear separation of concerns, better maintainability, and enhanced user experience through smooth animations.

## Deployment (GitHub Pages)

This project is configured to deploy from this repository using GitHub Pages.

- Build tool: Astro
- Output path: `research_site/dist`
- GitHub Actions workflow: `.github/workflows/deploy.yml`
- Production URL: https://omarzahi.github.io/Researchforeveryone/

To deploy:
1. Push to the `main` branch.
2. The workflow will install, build, and publish the site to GitHub Pages automatically.
3. First deploy may take ~1–2 minutes. Check Actions tab for status.
