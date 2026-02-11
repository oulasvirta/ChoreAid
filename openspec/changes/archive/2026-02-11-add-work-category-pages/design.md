# Technical Design: Work Category Pages

## Architecture Decision: React Router Implementation

### Why React Router?
- Industry standard for React SPAs with multiple views
- Declarative routing matches React's component model
- Browser history support (back/forward buttons work)
- Lazy loading potential for future pages
- TypeScript support

### Routing Structure

```
/ (root)
├── / → Home page (current landing page)
├── /sisatyot → Indoor work category
└── /ulkotyot → Outdoor work category
```

**Future expansion:**
- `/meista` - About page (Ehdotukset.md requirement)
- `/tyot/:id` - Individual work detail pages
- `/profiili/:id` - User profiles

### Component Architecture

```
App.tsx (Router setup)
├── Routes
│   ├── / → <Home /> (wrapper for Hero + Features + Footer)
│   ├── /sisatyot → <IndoorWork />
│   └── /ulkotyot → <OutdoorWork />
```

**Shared Components:**
- `<Footer />` - Rendered on all pages
- Layout consistency maintained via Tailwind classes

**Page-specific Components:**
- `Home.tsx` - Wraps Hero + Features (current landing page)
- `IndoorWork.tsx` - Indoor work category page
- `OutdoorWork.tsx` - Outdoor work category page

### Data Flow (Current - Static)

```
Features.tsx
  ↓ (user clicks image)
Link to /sisatyot or /ulkotyot
  ↓
Router navigates
  ↓
Category page renders with static content
```

**Future (with backend):**
```
Category page
  ↓ useEffect
API call to fetch category jobs
  ↓
Display job listings
```

### Page Layout Pattern

All category pages follow consistent structure:

```tsx
<div className="min-h-screen flex flex-col">
  {/* Hero section */}
  <section className="hero-with-category-image">
    <h1>Category Title</h1>
    <p>Category Description</p>
  </section>

  {/* Content section */}
  <section className="job-listings-area">
    {/* Future: job cards */}
    {/* Current: "Tulossa pian" placeholder */}
  </section>

  {/* Footer */}
  <Footer />
</div>
```

### Navigation Implementation

**From Landing Page (Features.tsx):**
```tsx
import { Link } from 'react-router-dom';

// Before: <div className="image-card">
// After:  <Link to="/sisatyot" className="image-card">
```

**From Category Pages (Back to home):**
```tsx
<Link to="/" className="btn-back">
  ← Takaisin etusivulle
</Link>
```

**Footer Navigation:**
```tsx
<Link to="/">Etusivu</Link>
<Link to="/sisatyot">Sisätyöt</Link>
<Link to="/ulkotyot">Ulkotyöt</Link>
```

### Styling Consistency

- Use existing Tailwind theme (primary-* colors)
- Match landing page hero gradient style
- Maintain responsive breakpoints: sm: md: lg:
- Reuse hover effects and transitions from existing components

### Performance Considerations

**Current:**
- All pages bundled together (small app, acceptable)
- Images already optimized (lazy loading in place)

**Future optimization:**
- Code splitting with `React.lazy()` when app grows
- Route-based chunks
- Prefetch category pages on landing page hover

### TypeScript Types

```typescript
// Future: src/types/work.ts
export interface WorkCategory {
  id: 'indoor' | 'outdoor';
  title: string;
  description: string;
  route: string;
  image: string;
}

export interface WorkListing {
  id: string;
  category: WorkCategory['id'];
  title: string;
  description: string;
  location: string;
  price: number;
  // ... more fields later
}
```

### Accessibility

- Semantic HTML: `<nav>`, `<main>`, `<article>`
- Links have descriptive text (not "click here")
- Focus management on route change (React Router handles this)
- Skip links for keyboard users
- Announce route changes to screen readers (via route titles)

### SEO Considerations

**Now:**
- Update page titles per route
- Add meta descriptions for category pages

**Future:**
- Server-side rendering (SSR) consideration
- Dynamic meta tags based on category
- Structured data for work listings

### Testing Strategy

**Manual testing:**
1. Navigate from home → category pages via images
2. Back button returns to home
3. Footer links work correctly
4. Direct URL access works (/sisatyot, /ulkotyot)
5. 404 handling (fall back to home or 404 page)

**Future automated tests:**
- Route rendering tests with React Testing Library
- Navigation flow tests
- Link target validation

### Migration Path

**Phase 1 (This change):**
- Add routing infrastructure
- Create static category pages
- Make images clickable

**Phase 2 (Future):**
- Add backend API
- Fetch real job listings
- Implement filtering/search

**Phase 3 (Future):**
- User authentication
- Job posting
- User profiles

### Alternative Approaches Considered

**1. Hash-based routing (`#/sisatyot`)**
- ❌ Rejected: Less SEO-friendly, looks unprofessional

**2. Accordion/tabs on landing page (no routing)**
- ❌ Rejected: Doesn't scale well, URL can't be shared

**3. Modal overlays for categories**
- ❌ Rejected: Poor UX for content-heavy pages, no deep linking

**4. React Router ✓ Selected**
- ✅ Industry standard
- ✅ Scales well
- ✅ Best UX with browser history
- ✅ Shareable URLs
