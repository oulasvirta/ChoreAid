# Implementation Tasks

## 1. Project Setup & Dependencies
- [x] 1.1 Install react-router-dom: `npm install react-router-dom@^6`
- [x] 1.2 Install TypeScript types: `npm install -D @types/react-router-dom`
- [x] 1.3 Verify package.json updated correctly
- [x] 1.4 Run `npm install` to ensure lock file is updated

## 2. Create Page Structure
- [x] 2.1 Create `src/pages/` directory
- [x] 2.2 Create `src/pages/Home.tsx` - move current landing page content here
- [x] 2.3 Create `src/pages/IndoorWork.tsx` - indoor work category page
- [x] 2.4 Create `src/pages/OutdoorWork.tsx` - outdoor work category page

## 3. Implement Home Page
- [x] 3.1 Create Home.tsx component that renders Hero + Features + Footer
- [x] 3.2 Import necessary components (Hero, Features, Footer)
- [x] 3.3 Maintain existing layout structure and styling
- [x] 3.4 Export default Home component

## 4. Implement Indoor Work Category Page
- [x] 4.1 Create IndoorWork.tsx with basic page structure
- [x] 4.2 Add Hero section with:
  - [x] Title: "Sisätyöt"
  - [x] Description: explanation of indoor work types
  - [x] Background: use indoor work image or gradient
- [x] 4.3 Add content section with:
  - [x] List of work types: Siivous, Imurointi, Kotityöt, Sängyn petaus
  - [x] "Tulossa pian" placeholder for job listings
  - [x] Call-to-action encouraging users to check back
- [x] 4.4 Add back navigation link to home
- [x] 4.5 Include Footer component
- [x] 4.6 Style consistently with landing page (Tailwind classes)

## 5. Implement Outdoor Work Category Page
- [x] 5.1 Create OutdoorWork.tsx with basic page structure
- [x] 5.2 Add Hero section with:
  - [x] Title: "Ulkotyöt"
  - [x] Description: explanation of outdoor work types
  - [x] Background: use outdoor work image or gradient
- [x] 5.3 Add content section with:
  - [x] List of work types: Puutarhatyöt, Rengasvaihto, Lumenluonti
  - [x] "Tulossa pian" placeholder for job listings
  - [x] Call-to-action encouraging users to check back
- [x] 5.4 Add back navigation link to home
- [x] 5.5 Include Footer component
- [x] 5.6 Style consistently with landing page (Tailwind classes)

## 6. Setup Routing in App.tsx
- [x] 6.1 Import BrowserRouter, Routes, Route from react-router-dom
- [x] 6.2 Import page components (Home, IndoorWork, OutdoorWork)
- [x] 6.3 Wrap app content with <BrowserRouter>
- [x] 6.4 Define routes:
  - [x] `/` → Home
  - [x] `/sisatyot` → IndoorWork
  - [x] `/ulkotyot` → OutdoorWork
- [x] 6.5 Remove old App.tsx content (Hero, Features direct rendering)
- [x] 6.6 Test that routes render correctly

## 7. Update Features Component for Navigation
- [x] 7.1 Import Link from react-router-dom
- [x] 7.2 Wrap indoor work image card with <Link to="/sisatyot">
- [x] 7.3 Wrap outdoor work image card with <Link to="/ulkotyot">
- [x] 7.4 Ensure hover styles still work on Link wrapper
- [x] 7.5 Add cursor-pointer class to indicate clickability
- [x] 7.6 Update accessibility: add aria-label to links
- [x] 7.7 Test keyboard navigation (Tab + Enter should work)

## 8. Update Footer Component
- [x] 8.1 Import Link from react-router-dom
- [x] 8.2 Update "Pikalinkit" section with real routes:
  - [x] "Etusivu" → Link to="/"
  - [x] "Sisätyöt" → Link to="/sisatyot"
  - [x] "Ulkotyöt" → Link to="/ulkotyot"
- [x] 8.3 Ensure Link styling matches existing <a> tag styling
- [x] 8.4 Test footer navigation from all pages

## 9. Vite Configuration Updates (if needed)
- [x] 9.1 Check if vite.config.ts needs base path updates for routing
- [x] 9.2 Verify that GitHub Pages deployment will work with client-side routing
- [ ] 9.3 Add 404.html or .htaccess if needed for SPA routing on GitHub Pages
- [x] 9.4 Test build output structure

## 10. Page Metadata & SEO
- [x] 10.1 Update document title for each route (useEffect + document.title)
- [ ] 10.2 Add meta descriptions for category pages in index.html or via Helmet
- [ ] 10.3 Ensure meta tags are appropriate for each page

## 11. Accessibility Enhancements
- [x] 11.1 Add semantic HTML (nav, main, article) to new pages
- [x] 11.2 Ensure focus management on route changes
- [ ] 11.3 Add skip links for keyboard users on category pages
- [ ] 11.4 Test with screen reader (NVDA or VoiceOver)
- [x] 11.5 Verify all links have descriptive text
- [x] 11.6 Check color contrast on new pages

## 12. Responsive Design Testing
- [ ] 12.1 Test category pages on mobile (< 640px)
- [ ] 12.2 Test category pages on tablet (640px - 1024px)
- [ ] 12.3 Test category pages on desktop (≥ 1024px)
- [ ] 12.4 Verify images scale correctly
- [ ] 12.5 Check navigation menu works on all screen sizes
- [ ] 12.6 Test touch interactions on mobile

## 13. Navigation Flow Testing
- [ ] 13.1 Test: Home → Sisätyöt → back to Home
- [ ] 13.2 Test: Home → Ulkotyöt → back to Home
- [ ] 13.3 Test: Sisätyöt → Ulkotyöt (via footer link)
- [ ] 13.4 Test: Browser back button functionality
- [ ] 13.5 Test: Browser forward button functionality
- [ ] 13.6 Test: Direct URL access (/sisatyot, /ulkotyot)
- [ ] 13.7 Test: Invalid URL handling (should show 404 or redirect to home)

## 14. Build & Deployment Validation
- [x] 14.1 Run `npm run build` successfully
- [ ] 14.2 Test production build with `npm run preview`
- [ ] 14.3 Verify all routes work in production build
- [x] 14.4 Check bundle size (should not increase significantly)
- [ ] 14.5 Test GitHub Pages deployment with routing
- [ ] 14.6 Add SPA fallback for GitHub Pages (404.html → index.html redirect)

## 15. Documentation & OpenSpec
- [ ] 15.1 Update README.md with new routes (if applicable)
- [ ] 15.2 Document routing structure for future developers
- [x] 15.3 Validate OpenSpec proposal: `openspec validate add-work-category-pages --strict`
- [x] 15.4 Cross-check against Ehdotukset.md:
  - [x] Suodattaminen (pohja tehty, kategoriasivut valmiit)
  - [x] Navigointi kategorioiden välillä

## 16. Edge Cases & Error Handling
- [ ] 16.1 Handle 404 routes (non-existent paths)
- [ ] 16.2 Test with JavaScript disabled (graceful degradation)
- [ ] 16.3 Test with slow network (loading states if needed)
- [x] 16.4 Verify no console errors on route changes
- [ ] 16.5 Check memory leaks on repeated navigation
