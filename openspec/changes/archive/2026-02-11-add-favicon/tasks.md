# Implementation Tasks

## 1. Prepare Favicon Assets
- [x] 1.1 Copy `src/assets/logo/choreaid-logo.svg` to `public/favicon.svg`
- [x] 1.2 Generate 32x32 PNG favicon (favicon-32x32.png)
- [x] 1.3 Generate 192x192 PNG for Android (android-chrome-192x192.png)
- [x] 1.4 Generate 512x512 PNG for Android (android-chrome-512x512.png)
- [x] 1.5 Generate 180x180 PNG for Apple Touch Icon (apple-touch-icon.png)
- [ ] 1.6 Generate .ico file for legacy browsers (favicon.ico) - **SKIPPED**: Optional for modern browsers, PNG/SVG sufficient
- [x] 1.7 Verify all generated files are optimized and under 10KB each (except 512x512)
- [x] 1.8 Place all favicon files in `public/` directory

## 2. Update HTML Metadata
- [x] 2.1 Update `index.html` to replace `/vite.svg` reference with `/favicon.svg`
- [x] 2.2 Add `<link>` tag for 32x32 PNG: `<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />`
- [x] 2.3 Add `<link>` tag for Apple Touch Icon: `<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />`
- [ ] 2.4 Add legacy ICO fallback: `<link rel="icon" type="image/x-icon" href="/favicon.ico" />` - **SKIPPED**: No ICO file generated
- [x] 2.5 Verify link tags are ordered correctly (SVG first, then PNG, then ICO fallback)

## 3. Add Web App Manifest (Optional but Recommended)
- [x] 3.1 Create `public/manifest.json` with app metadata
- [x] 3.2 Add icons array with 192x192 and 512x512 references
- [x] 3.3 Set appropriate theme_color and background_color (use ChoreAid brand colors)
- [x] 3.4 Add manifest link to `index.html`: `<link rel="manifest" href="/manifest.json" />`
- [x] 3.5 Add theme-color meta tag: `<meta name="theme-color" content="#2563eb" />`

## 4. Browser-Specific Metadata
- [x] 4.1 Add Microsoft tile color: `<meta name="msapplication-TileColor" content="#2563eb" />`
- [x] 4.2 Add Microsoft tile image: `<meta name="msapplication-TileImage" content="/android-chrome-192x192.png" />`
- [ ] 4.3 Verify Safari mask-icon if needed (optional) - **SKIPPED**: Not required for initial implementation

## 5. Testing - Desktop Browsers
- [ ] 5.1 Test favicon display in Chrome (latest) - **MANUAL TEST REQUIRED**
- [ ] 5.2 Test favicon display in Firefox (latest) - **MANUAL TEST REQUIRED**
- [ ] 5.3 Test favicon display in Edge (latest) - **MANUAL TEST REQUIRED**
- [ ] 5.4 Test favicon display in Safari (if available) - **MANUAL TEST REQUIRED**
- [ ] 5.5 Verify favicon appears in browser tabs - **MANUAL TEST REQUIRED**
- [ ] 5.6 Verify favicon appears in bookmarks - **MANUAL TEST REQUIRED**
- [ ] 5.7 Verify no console errors about missing files - **MANUAL TEST REQUIRED**
- [ ] 5.8 Clear browser cache and retest - **MANUAL TEST REQUIRED**

## 6. Testing - Mobile Devices
- [ ] 6.1 Test on iOS Safari - Add to Home Screen - **MANUAL TEST REQUIRED**
- [ ] 6.2 Test on Android Chrome - Add to Home Screen - **MANUAL TEST REQUIRED**
- [ ] 6.3 Verify correct icon size and quality on home screen - **MANUAL TEST REQUIRED**
- [ ] 6.4 Test mobile browser tabs (iOS Safari, Android Chrome) - **MANUAL TEST REQUIRED**
- [ ] 6.5 Verify theme-color applies in mobile browser UI - **MANUAL TEST REQUIRED**

## 7. Build & Deployment Validation
- [x] 7.1 Run `npm run build` successfully
- [x] 7.2 Verify all favicon files are copied to `dist/` directory
- [x] 7.3 Check `dist/index.html` contains correct favicon references
- [x] 7.4 Test production build with `npm run preview`
- [x] 7.5 Verify favicon loads correctly in preview server
- [x] 7.6 Check file sizes in build output (should be minimal impact)

## 8. Documentation
- [x] 8.1 Update this tasks.md with any lessons learned
- [x] 8.2 Document favicon generation process if custom tools were used
- [ ] 8.3 Add note to README.md about favicon files location (optional)

## 9. OpenSpec Validation
- [x] 9.1 Create spec delta for landing-page in `specs/landing-page/spec.md`
- [x] 9.2 Run `openspec validate add-favicon --strict`
- [x] 9.3 Fix any validation errors
- [x] 9.4 Confirm all scenarios pass

## Optional Enhancements (Future Consideration)
- [ ] 10.1 Add favicon generator to build process
- [ ] 10.2 Create dark mode variant of favicon
- [ ] 10.3 Add animated favicon for notifications (advanced feature)

## Tools & Resources
- **Online converter**: https://realfavicongenerator.net/ (can generate all formats from SVG)
- **CLI tool**: `npm install -g sharp-cli` (for PNG generation from SVG)
- **Validation**: https://realfavicongenerator.net/favicon_checker
- **Icon optimization**: https://tinypng.com/ or `imageoptim`

---

## Implementation Notes & Lessons Learned

### Favicon Generation Process
We used **sharp** (installed as dev dependency) to generate PNG favicons from the SVG source:

```bash
npm install --save-dev sharp
```

Created a Node.js script (`generate-favicons.cjs`) to automate PNG generation:
- Input: `public/favicon.svg` (copy of `src/assets/logo/choreaid-logo.svg`)
- Output: 4 PNG files at different sizes (32x32, 180x180, 192x192, 512x512)
- Used `.cjs` extension because project uses ES modules (`"type": "module"` in package.json)

All generated PNGs are well optimized:
- favicon-32x32.png: 736 bytes
- apple-touch-icon.png: 3,557 bytes  
- android-chrome-192x192.png: 3,870 bytes
- android-chrome-512x512.png: 12,177 bytes

### ICO File Decision
We **skipped** generating a `.ico` file because:
1. Modern browsers (Chrome 80+, Firefox 41+, Safari 9+, Edge) all support SVG and PNG favicons
2. PNG fallbacks provide sufficient legacy support
3. The complexity of ICO generation (attempted with `png-to-ico` but had API issues) outweighs benefits
4. GitHub Pages deployment primarily targets modern browsers

### Base Path Handling
The project uses `/ChoreAid/` as the base path (configured in `vite.config.ts`) for GitHub Pages deployment:
- Vite automatically transforms `href` attributes in `<link>` tags during build
- Meta tag `content` attributes are **not** transformed, so we manually included `/ChoreAid/` in the `msapplication-TileImage` path
- All favicon files are correctly served from the root in both dev and production

### Web App Manifest
Created `public/manifest.json` with:
- App name, description, and theme colors matching ChoreAid branding (#2563eb)
- Icon references for 192x192 and 512x512 PNGs
- `start_url: "/ChoreAid/"` for proper PWA initialization
- `purpose: "any maskable"` for flexible icon display on different platforms

### File Sizes
Total favicon assets added: ~20KB (uncompressed)
- Negligible impact on bundle size
- All files cached by browsers after first load

### Testing Recommendations
For manual testing:
1. Open http://localhost:4173/ChoreAid/ in various browsers
2. Check browser tab for ChoreAid logo
3. Bookmark the page and verify icon appears
4. On mobile: Add to home screen and check icon quality
5. Verify no 404 errors in browser console for favicon files
