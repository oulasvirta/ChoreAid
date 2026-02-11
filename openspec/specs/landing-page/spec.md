# landing-page Specification

## Purpose
TBD - created by archiving change setup-initial-landing-page. Update Purpose after archive.
## Requirements
### Requirement: Landing Page Structure
The landing page SHALL provide clear navigation to the About page for users wanting to learn more about ChoreAid.

#### Scenario: Hero section with About CTA
- **WHEN** a user views the landing page hero section
- **THEN** they see a secondary call-to-action button labeled "Tutustu meihin"
- **AND** clicking the button navigates to the About page (`/meista`)
- **AND** the button has appropriate styling (secondary/outline style to complement primary CTA)
- **AND** the button has an aria-label for accessibility ("Lue lisää Chore Aidista")
- **AND** on mobile devices, CTA buttons stack vertically if space is limited
- **AND** hover effects indicate the button is interactive

#### Scenario: Footer section with About link
- **WHEN** a user scrolls to the footer
- **THEN** they see a "Pikalinkit" (Quick Links) section
- **AND** one of the links is labeled "Tietoa meistä"
- **AND** clicking "Tietoa meistä" navigates to the About page (`/meista`)
- **AND** the link is positioned logically among other footer links (after "Etusivu", before or after work category links)
- **AND** the link styling matches other footer navigation links
- **AND** the link is accessible via keyboard navigation

### Requirement: Responsive Design
The landing page SHALL be fully responsive and usable on mobile, tablet, and desktop devices.

#### Scenario: Mobile viewport
- **WHEN** the page is viewed on a mobile device (< 768px width)
- **THEN** all content is readable and accessible
- **AND** navigation and interaction elements are appropriately sized for touch
- **AND** the layout adapts to the smaller screen (stacked layout, adjusted spacing)

#### Scenario: Desktop viewport
- **WHEN** the page is viewed on a desktop device (≥ 1024px width)
- **THEN** content utilizes available space effectively
- **AND** the layout is optimized for larger screens (multi-column, wider spacing)

### Requirement: Accessibility
The landing page SHALL meet basic accessibility requirements for keyboard navigation and screen readers.

#### Scenario: Image accessibility
- **WHEN** a screen reader user accesses the page
- **THEN** all images (logo and feature images) have descriptive alt text
- **AND** the alt text clearly describes the image content
- **AND** decorative images are marked appropriately (empty alt="" or aria-hidden)

#### Scenario: Screen reader compatibility
- **WHEN** a screen reader user accesses the page
- **THEN** semantic HTML elements are used (header, main, footer, sections)
- **AND** images have appropriate alt text
- **AND** headings follow a logical hierarchy (h1, h2, h3)

#### Scenario: Keyboard navigation
- **WHEN** a user navigates the page using only the keyboard
- **THEN** all interactive elements are focusable
- **AND** focus indicators are visible
- **AND** the tab order is logical

### Requirement: Modern Visual Design
The landing page SHALL use modern design principles and Tailwind CSS for styling.

#### Scenario: Interactive elements indicate clickability
- **WHEN** a user hovers over a work category image
- **THEN** visual feedback indicates the element is clickable (cursor change, scale, shadow, etc.)
- **AND** the transition is smooth and professional
- **AND** keyboard focus shows clear visual indicators

### Requirement: Asset Management
Visual assets (logo and images) SHALL be organized in a structured directory within the project.

#### Scenario: Asset organization
- **WHEN** developers need to locate visual assets
- **THEN** logo files are stored in `src/assets/logo/`
- **AND** work example images are stored in `src/assets/images/`
- **AND** image files have descriptive names (e.g., `indoor-work-01.png`, `outdoor-work-01.png`)

#### Scenario: Image optimization
- **WHEN** images are added to the project
- **THEN** they are optimized for web usage (reasonable file sizes)
- **AND** they use appropriate formats (PNG/JPEG for photos, SVG for logos when available)
- **AND** they implement lazy loading where appropriate to improve performance

### Requirement: Favicon Asset Management
Favicon files SHALL be organized in the public directory and served at the root path.

#### Scenario: Favicon file organization
- **WHEN** developers need to locate favicon assets
- **THEN** all favicon files (SVG, PNG, ICO) are in the `public/` directory
- **AND** files follow standard naming conventions (favicon.svg, favicon-32x32.png, favicon.ico, apple-touch-icon.png, android-chrome-192x192.png, android-chrome-512x512.png)
- **AND** the manifest.json file is also in `public/`
- **AND** Vite's build process automatically copies these files to the dist/ root

#### Scenario: Favicon optimization
- **WHEN** favicon files are added to the project
- **THEN** PNG and ICO files are optimized for minimal file size (< 10KB each, except 512x512)
- **AND** SVG favicon uses the same choreaid-logo.svg source as the hero logo
- **AND** all favicon variants maintain visual consistency with the main logo

