# Implementation Tasks

## 1. Asset Organization
- [x] 1.1 Create directory structure `src/assets/logo/` and `src/assets/images/`
- [x] 1.2 Copy ChoreAid logo to `src/assets/logo/choreaid-logo.svg` (or .png based on provided file)
- [x] 1.3 Move existing working images to organized structure:
  - [x] Move `src/working-1.png` to `src/assets/images/indoor-work-01.png` (3 sisätyökuvaa)
  - [x] Move `src/working-2.png` to `src/assets/images/outdoor-work-01.png` (3 ulkotyökuvaa)
- [x] 1.4 Remove old unused image from `src/` root (logo-blue-text.png only; keep working-*.png until moved)

## 2. Hero Component Updates
- [x] 2.1 Import logo to `src/components/Hero.tsx`
- [x] 2.2 Add logo image element above or beside the "Chore Aid" text title
- [x] 2.3 Add responsive sizing for logo (mobile: small h-12, desktop: larger h-20)
- [x] 2.4 Add appropriate alt text for logo: "ChoreAid logo"
- [x] 2.5 Maintain visual balance and spacing in Hero section with logo + text combination
- [x] 2.6 Keep gradient background and wave separator intact

## 3. Features Component Updates
- [x] 3.1 Import both work images to `src/components/Features.tsx`
- [x] 3.2 Create new "Esimerkkejä Töistä" section after "How It Works" section
- [x] 3.3 Implement responsive layout for 2 images:
  - [x] Mobile (< 640px): stacked vertically (1 column)
  - [x] Tablet/Desktop (≥ 640px): side-by-side (2 columns)
- [x] 3.4 Add image cards with:
  - [x] Image element with proper sizing and object-fit (cover)
  - [x] Caption/description for each image type
  - [x] Subtle border/shadow for card styling
  - [x] Hover effect (scale or shadow enhancement)
  - [x] Rounded corners for modern look
- [x] 3.5 Add Finnish descriptions for each image:
  - [x] "Sisätyöt: Siivousta, imurointia ja kotitöitä" (working-1/indoor)
  - [x] "Ulkotyöt: Puutarhatöitä, rengasvaihtoa ja lumenluontia" (working-2/outdoor)
- [x] 3.6 Optimize images for web (lazy loading, appropriate resolution)

## 4. Accessibility & Performance
- [x] 4.1 Add descriptive alt text to all images
- [x] 4.2 Ensure semantic HTML structure (figure, figcaption if appropriate)
- [x] 4.3 Test keyboard navigation (images should not interfere with tab order)
- [x] 4.4 Verify color contrast for image labels/captions
- [x] 4.5 Add loading="lazy" attribute for feature images (performance)
- [x] 4.6 Check image file sizes (optimize if > 200KB each)

## 5. Validation & Testing
- [x] 5.1 Test build locally (`npm run build`)
- [x] 5.2 Test dev-server (`npm run dev`)
- [x] 5.3 Verify logo displays correctly alongside the title
- [x] 5.4 Verify both work images (indoor/outdoor) load correctly
- [x] 5.5 Test responsive layout behavior (resize browser window)
- [x] 5.6 Test on mobile device or mobile emulator
- [x] 5.7 Check page load performance (images should not slow down significantly)
- [x] 5.8 Validate HTML with browser DevTools (no accessibility warnings)
- [x] 5.9 Cross-check against Ehdotukset.md requirements:
  - [x] Logo näkyy nettisivuilla ✓
  - [x] Selkeästi tietoa ja kuvat ✓
