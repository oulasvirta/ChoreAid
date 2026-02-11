# Add About Page Proposal

## Why
ChoreAid currently lacks a dedicated "About" page that tells the story behind the service, explains our mission, and provides a way for users to learn more about the team and get in touch. According to [Ehdotukset.md](../../Ehdotukset.md), users want to see:
- Information about who we are and why we created ChoreAid
- What we aim to achieve
- Company slogan
- Social media links  
- A way to contact us

This is a common expectation for any web service, especially one building trust between students and people needing help with chores.

## What Changes

### New About Page (`/meista`)
Create a new standalone route `/meista` with a modern 3-section layout:

**1. Hero Section**
- Slogan: "For every Chore there is Aid" (English) / "Jokaiseen askareeseen apua" (Finnish)
- Eye-catching design matching ChoreAid brand (#2563eb primary color)
- Call-to-action encouraging users to explore services or get in touch

**2. Our Story & Mission Section**
- **Origin Story**: Born from Etu-Töölö Upper Secondary School's entrepreneurship course
- **Mission Statement**: Our core goals:
  - Connect students with people needing help with household chores (e.g., elderly)
  - Enable students to earn extra income
  - Make everyday life easier for those who need assistance
  - Build a stronger, more helpful community
- **Team Image**: Placeholder for team photo (4 students working together)

**3. Contact & Social Section**
- **Contact Form**: Visual placeholder form (fields: Name, Email, Message, Submit button)
  - Note: Non-functional initially (no backend), but proper UI ready for future integration
  - Could use `mailto:` as interim solution or leave as visual-only
- **Social Media Links**: Instagram and Facebook icons with placeholder links
- **Copyright/Legal**: Brief note about the project being part of educational work

### Navigation Updates

**Footer Component**
- Add new link "Tietoa meistä" pointing to `/meista`
- Position: Place between "Etusivu" and work category links

**Hero Component (Landing Page)**
- Add secondary CTA button: "Tutustu meihin" → `/meista`
- Complements existing CTA, provides clear path to learn more

### Version Bump
- Update `package.json`: `0.4.0` → `0.5.0` (minor version bump for new feature)

## User Impact
- **Positive**: Users can learn about ChoreAid's mission, building trust and transparency
- **Positive**: Clear contact path (even if initially non-functional) sets expectations
- **Positive**: Social media presence visible, encouraging community building
- **Positive**: Professional appearance with dedicated About page
- **No Breaking Changes**: Purely additive feature, existing routes unchanged

##Technical Considerations

**Static Site Limitations**
- Contact form will be visual-only (no email sending backend)
- Social media links will be placeholders until actual accounts are created
- Consider future integration with form services (Formspree, Netlify Forms, EmailJS) for functional contact form

**Responsive Design**
- 3-section layout stacks vertically on mobile
- Team image scales appropriately across devices
- Form fields touch-friendly on mobile

**Accessibility**
- Semantic HTML (`<main>`, `<section>`, `<article>`)
- Proper heading hierarchy (H1 for page title, H2 for sections)
- Form labels and ARIA attributes
- Social media icons with descriptive alt text and aria-labels

**SEO & Metadata**
- Page title: "Tietoa meistä - Chore Aid"
- Meta description highlighting the educational project and mission
- Helps with discovery and legitimacy

## Alternatives Considered

1. **Add About section to landing page instead of separate page**
   - Rejected: Landing page is already focused on showcasing services; dedicated page provides better structure and room for expansion

2. **Functional contact form from day one**
   - Rejected: Requires backend integration (email service, serverless function, or third-party API); adds complexity beyond current scope; placeholder demonstrates intent

3. **Omit social media links until accounts exist**
   - Rejected: Including placeholders provides complete design and encourages team to create actual social media presence

4. **Multiple about-related pages (Team, Mission, Contact as separate routes)**
   - Rejected: Over-engineering for current needs; single cohesive page is simpler and sufficient for initial launch

## Dependencies
- React Router (already in project from work category pages)
- No new npm packages required
- Placeholderteam image (can use stock photo or illustration initially)
- Future: Form submission service (Formspree, EmailJS, etc.) if functional contact is desired

## Validation
- [ ] About page accessible at `/meista`
- [ ] Slogan displayed prominently
- [ ] Story and mission sections readable and well-formatted
- [ ] Contact form UI present (even if non-functional)
- [ ] Social media icons visible with placeholder links
- [ ] Footer link "Tietoa meistä" navigates correctly
- [ ] Hero CTA "Tutustu meihin" navigates correctly
- [ ] Page responsive on mobile, tablet, desktop
- [ ] No console errors
- [ ] Build successful, version bumped to 0.5.0

## Related Specs
- **landing-page**: Modified to add Hero CTA button linking to About page
- **about**: New spec for the About page functionality

## Implementation Notes
This fulfills the "Esittely sivu" requirement from [Ehdotukset.md](../../Ehdotukset.md):
- [x] Information about us (tietoa) ✓
- [x] What we want to achieve ✓
- [x] Email (placeholder contact form) ✓  
- [x] Social media links ✓
- [x] Slogan ✓
- [x] Why we created the website ✓
