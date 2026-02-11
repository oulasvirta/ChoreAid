# Implementation Tasks

## 1. Project Configuration
- [x] 1.1 Update `package.json`: version `0.4.0` → `0.5.0`
- [x] 1.2 Verify React Router is properly configured in App.tsx
- [ ] 1.3 Run `npm install` to ensure dependencies are current

## 2. Create About Page Component
- [x] 2.1 Create `src/pages/About.tsx` file
- [x] 2.2 Set up basic page structure with semantic HTML
- [x] 2.3 Add `useEffect` hook to update document.title to "Tietoa meistä - Chore Aid"
- [x] 2.4 Import Footer component
- [x] 2.5 Export default About component

## 3. Implement Hero Section (About Page)
- [x] 3.1 Create hero section with gradient background (matching landing page style)
- [x] 3.2 Add animated blob decorations for visual interest
- [x] 3.3 Display main slogan: "For every Chore there is Aid"
- [x] 3.4 Display Finnish translation: "Jokaiseen askareeseen apua"
- [x] 3.5 Add back link to home page ("← Takaisin etusivulle")
- [x] 3.6 Include wave separator SVG at bottom (consistent with landing page)
- [x] 3.7 Ensure responsive sizing (mobile, tablet,desktop)

## 4. Implement Story & Mission Section
- [x] 4.1 Create "Tarinamme" subsection
  - [x] Heading: "Tarinamme"
  - [x] Body text explaining Etu-Töölö Upper Secondary School entrepreneurship course origin
  - [x] Placeholder team image (can use stock photo or illustration)
  - [x] Image alt text: "ChoreAid-tiimi - neljä opiskelijaa yhteistyössä"
- [x] 4.2 Create "Tavoitteemme" subsection
  - [x] Heading: "Tavoitteemme"
  - [x] List four mission points:
    - "Yhdistämme opiskelijat ja kotitöihin tarvitsevat ihmiset"
    - "Mahdollistamme opiskelijoille lisäansioita"
    - "Helpotamme arkea niille, jotka tarvitsevat apua"
    - "Rakennamme vahvempaa ja auttavaisempaa yhteisöä"
  - [x] Use icon bullets or checkmarks for visual appeal
- [x] 4.3 Use 2-column layout on desktop, stack vertically on mobile
- [x] 4.4 Apply consistent spacing and typography

## 5. Implement Contact & Social Section
- [x] 5.1 Create "Ota yhteyttä" heading
- [x] 5.2 Build contact form UI (placeholder, non-functional):
  - [x] Name input field (type="text", required)
  - [x] Email input field (type="email", required)
  - [x] Message textarea (rows=5, required)
  - [x] Submit button with Tailwind styling
  - [x] Form validation styling (show required state)
  - [x] Optional: Add note "Lomake tulee pian toiminnalliseksi" if non-functional
- [x] 5.3 Style form with consistent ChoreAid branding
- [x] 5.4 Add social media link section:
  - [x] "Seuraa meitä" heading
  - [x] Instagram icon + link (placeholder: #instagram or https://instagram.com)
  - [x] Facebook icon + link (placeholder: #facebook or https://facebook.com)
  - [x] SVG icons with hover effects
  - [x] aria-labels for accessibility ("Seuraa meitä Instagramissa", "Seuraa meitä Facebookissa")
- [x] 5.5 Ensure section is responsive and accessible

## 6. Update App.tsx Routing
- [x] 6.1 Import About component: `import About from './pages/About'`
- [x] 6.2 Add new route: `<Route path="/meista" element={<About />} />`
- [x] 6.3 Verify route order (place after home and work category routes)
- [ ] 6.4 Test route navigation manually

## 7. Update Footer Component
- [x] 7.1 Add "Tietoa meistä" link to "Pikalinkit" section
- [x] 7.2 Update link: `<Link to="/meista">Tietoa meistä</Link>`
- [x] 7.3 Position between "Etusivu" and work category links
- [x] 7.4 Ensure styling matches existing footer links
- [ ] 7.5 Test footer navigation from all pages

## 8. Update Hero Component (Landing Page)
- [x] 8.1 Add secondary CTA button below or next to primary CTA
- [x] 8.2 Button text: "Tutustu meihin"
- [x] 8.3 Wrap in React Router Link: `<Link to="/meista">`
- [x] 8.4 Style as secondary button (outline or alternative color scheme)
- [x] 8.5 Add appropriate aria-label: "Lue lisää Chore Aidista"
- [x] 8.6 Ensure responsive layout (buttons stack on mobile if needed)
- [ ] 8.7 Test button navigation

## 9. Asset Preparation (Optional)
- [ ] 9.1 Find or create placeholder team image
- [ ] 9.2 Optimize image for web (< 500KB)
- [ ] 9.3 Place in `src/assets/images/team-photo.png` or similar
- [ ] 9.4 Update About.tsx import if real image is used
- [ ] 9.5 Add descriptive alt text

## 10. Styling & Visual Polish
- [ ] 10.1 Ensure About page matches ChoreAid brand colors (#2563eb primary blue)
- [ ] 10.2 Use consistent typography (Inter font family)
- [ ] 10.3 Apply hover effects to links and buttons
- [ ] 10.4 Add smooth transitions and animations where appropriate
- [ ] 10.5 Verify spacing and padding match landing page style
- [ ] 10.6 Test dark mode compatibility (if applicable)

## 11. Responsive Design Testing
- [ ] 11.1 Test About page on mobile (< 640px)
  - [ ] Hero stacks properly
  - [ ] Story/mission sections stack vertically
  - [ ] Contact form is touch-friendly
  - [ ] Social icons are appropriately sized
- [ ] 11.2 Test on tablet (640px - 1024px)
  - [ ] Two-column layouts work as expected
  - [ ] Images scale correctly
- [ ] 11.3 Test on desktop (≥ 1024px)
  - [ ] Full layout displays properly
  - [ ] No excessive whitespace
  - [ ] Content is centered and readable

## 12. Accessibility Validation
- [ ] 12.1 Run accessibility audit (Lighthouse or axe DevTools)
- [ ] 12.2 Verify semantic HTML structure
- [ ] 12.3 Ensure all images have alt text
- [ ] 12.4 Check form labels and ARIA attributes
- [ ] 12.5 Test keyboard navigation (Tab, Enter)
- [ ] 12.6 Verify focus indicators on interactive elements
- [ ] 12.7 Test with screen reader (NVDA or VoiceOver)
- [ ] 12.8 Check color contrast ratios (WCAG AA minimum)

## 13. Navigation Flow Testing
- [ ] 13.1 Test: Home → Footer "Tietoa meistä" → About page
- [ ] 13.2 Test: Home → Hero CTA "Tutustu meihin" → About page
- [ ] 13.3 Test: About page → "Takaisin etusivulle" → Home
- [ ] 13.4 Test: About page → Footer links → Other pages
- [ ] 13.5 Test: Direct URL access: `/meista`
- [ ] 13.6 Test: Browser back/forward buttons
- [ ] 13.7 Verify all routes work correctly

## 14. Content Validation
- [ ] 14.1 Proofread all Finnish text for spelling and grammar
- [ ] 14.2 Verify slogan displays correctly (both English and Finnish)
- [ ] 14.3 Ensure story text accurately reflects Etu-Töölö lukio origin
- [ ] 14.4 Check that all four mission points are clear and correct
- [ ] 14.5 Verify social media placeholders are clearly marked if non-functional
- [ ] 14.6 Test contact form placeholder messaging (if non-functional)

## 15. SEO & Metadata
- [x] 15.1 Set page title: "Tietoa meistä - Chore Aid"
- [ ] 15.2 Add meta description (optional, but recommended): "Lue lisää ChoreAid-palvelusta ja siitä, miten yhdistämme opiskelijat kotitöihin tarvitseviin ihmisiin. Etu-Töölön lukion yrityskurssin projekti."
- [ ] 15.3 Ensure Open Graph tags exist for social sharing (optional)

## 16. Build & Deployment Validation
- [x] 16.1 Run `npm run build` successfully
- [x] 16.2 Verify no TypeScript or compilation errors
- [ ] 16.3 Check bundle size increase is reasonable (< 50KB added)
- [ ] 16.4 Test production build with `npm run preview`
- [ ] 16.5 Verify `/meista` route works in production build
- [ ] 16.6 Test all navigation paths in preview server
- [ ] 16.7 Check console for errors or warnings

## 17. OpenSpec Validation
- [ ] 17.1 Create spec deltas:
  - [ ] `specs/landing-page/spec.md` (Modified: Hero CTA, Footer link)
  - [ ] `specs/about/spec.md` (New spec)
- [ ] 17.2 Run `openspec validate add-about-page --strict`
- [ ] 17.3 Fix any validation errors
- [ ] 17.4 Confirm all scenarios pass
- [ ] 17.5 Update tasks.md with lessons learned

## 18. Documentation
- [ ] 18.1 Update this tasks.md with implementation notes
- [ ] 18.2 Document any deviations from original plan
- [ ] 18.3 Note future enhancements (e.g., functional contact form)
- [ ] 18.4 Update Ehdotukset.md:
  - [ ] Mark "Esittely sivu" as [x] completed
  - [ ] Mark "slogan näkyviin" as [x] completed
  - [ ] Mark "somet ja linkit niihin" as [x] completed
- [ ] 18.5 Optional: Add note about About page to README.md

## 19. Edge Cases & Error Handling
- [ ] 19.1 Verify 404 behavior if user accesses invalid routes
- [ ] 19.2 Test with JavaScript disabled (graceful degradation)
- [ ] 19.3 Test slow network conditions (image loading)
- [ ] 19.4 Verify no memory leaks on repeated navigation
- [ ] 19.5 Check browser compatibility (Chrome, Firefox, Safari, Edge)

## 20. Final Review
- [ ] 20.1 Code review: Check for code quality and consistency
- [ ] 20.2 Visual review: Compare against design mockups or requirements
- [ ] 20.3 User testing: Have someone unfamiliar with the site navigate
- [ ] 20.4 Verify all Ehdotukset.md requirements met
- [ ] 20.5 Prepare for archiving change once approved

## Optional Enhancements (Future Consideration)
- [ ] 21.1 Integrate functional contact form (Formspree, EmailJS, Netlify Forms)
- [ ] 21.2 Add actual social media accounts and update links
- [ ] 21.3 Replace placeholder team image with real photo
- [ ] 21.4 Add animations for section transitions (e.g., fade-in on scroll)
- [ ] 21.5 Implement testimonials section (if users provide feedback)
- [ ] 21.6 Add FAQ section to About page
