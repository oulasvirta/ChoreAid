# Add Favicon Proposal

## Overview
Replace the default Vite favicon with the ChoreAid logo to improve brand recognition in browser tabs.

## Problem Statement
Currently, `index.html` references `/vite.svg` as the favicon, but this file doesn't exist, resulting in a broken/missing favicon. Users see either a broken image icon or a generic browser icon in their browser tabs, which doesn't reinforce the ChoreAid brand.

## Proposed Solution
Add a proper favicon using the existing ChoreAid logo (`choreaid-logo.svg`) to provide brand consistency across:
- Browser tabs and bookmarks
- Mobile home screens (when users add the site)
- Browser history listings
- Task switchers on mobile devices

### Implementation Approach
1. Use the existing `choreaid-logo.svg` from `src/assets/logo/` as the source
2. Generate multiple favicon formats for broad compatibility:
   - **SVG favicon**: Modern browsers (Chrome 80+, Firefox 41+, Safari 9+)
   - **PNG favicons**: Various sizes (32x32, 192x192, 512x512) for older browsers and mobile devices
   - **ICO file**: Legacy browser support (IE, old Edge)
   - **Apple Touch Icon**: iOS home screen (180x180)
3. Place favicon files in the `public/` directory so Vite serves them at the root
4. Update `index.html` with proper `<link>` tags for all favicon variants
5. Add Web App Manifest metadata for PWA-readiness (optional but recommended)

## User Impact
- **Positive**: Users will see the ChoreAid logo in browser tabs, making it easier to identify the site among multiple open tabs
- **Positive**: Professional appearance when users bookmark the site
- **Positive**: Better mobile experience when adding to home screen
- **No Breaking Changes**: This is purely additive; no existing functionality is affected

## Technical Considerations
- **Backwards Compatibility**: Including .ico and .png formats ensures support for all browsers back to IE11
- **Performance**: Favicon files are small (< 50KB total) and cached by browsers
- **Build Process**: Vite automatically copies files from `public/` to the root of the build output
- **Asset Organization**: Favicon files live in `public/` (not `src/assets/`) because they need to be served at the root path

## Alternatives Considered
1. **Create custom favicon design**: Rejected because the existing logo is already well-suited and maintains brand consistency
2. **SVG-only approach**: Rejected because older browsers and some mobile devices don't support SVG favicons
3. **Keep Vite default**: Rejected because it's currently broken and doesn't represent the ChoreAid brand

## Dependencies
- Existing `choreaid-logo.svg` in `src/assets/logo/`
- No new npm packages required
- May use online tools or CLI utilities to convert SVG to ICO/PNG if needed

## Validation
- [ ] Favicon displays correctly in Chrome, Firefox, Safari, Edge
- [ ] Mobile browsers show correct icon when adding to home screen
- [ ] Browser tabs show the logo icon, not a broken image
- [ ] Bookmarks display the logo
- [ ] No console errors related to missing favicon files
- [ ] Build process successfully copies favicon files to dist/

## Related Specs
- **landing-page**: This change enhances the brand identity requirement by extending favicon coverage
