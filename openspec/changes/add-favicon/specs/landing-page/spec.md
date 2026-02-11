# landing-page Spec Delta

This change adds favicon support to enhance the ChoreAid brand identity in browser tabs and bookmarks.

## MODIFIED Requirements

### Requirement: Landing Page Structure
The landing page SHALL display consistent ChoreAid branding including browser-level icons (favicon) across all platforms and devices.

#### Scenario: Favicon display in browser tabs
- **WHEN** a user opens the Chore Aid website in a browser tab
- **THEN** they see the ChoreAid logo as the favicon in the browser tab
- **AND** the favicon is clearly visible and recognizable even at small sizes (16x16, 32x32)
- **AND** the favicon uses the ChoreAid brand colors (blue shield with white elements)
- **AND** no broken image icon appears in the tab

#### Scenario: Favicon in bookmarks and browser history
- **WHEN** a user bookmarks the Chore Aid website
- **THEN** the bookmark displays the ChoreAid logo as its icon
- **AND** the logo appears in browser history listings
- **AND** the icon helps users quickly identify the site among other bookmarks

#### Scenario: Mobile Add to Home Screen
- **WHEN** a mobile user adds the site to their home screen (iOS Safari or Android Chrome)
- **THEN** the home screen icon displays a high-resolution ChoreAid logo (180x180 or higher)
- **AND** the icon has appropriate padding and clear visual design
- **AND** the icon background color matches the ChoreAid primary brand color (#2563eb)
- **AND** iOS users see the logo without any default Safari UI elements overlaid

#### Scenario: Multiple favicon format support
- **WHEN** any browser requests the favicon
- **THEN** the HTML provides multiple format options (SVG, PNG, ICO)
- **AND** modern browsers prefer the SVG format for crisp scaling
- **AND** older browsers fall back to ICO or PNG formats
- **AND** all formats use the same ChoreAid logo design for consistency

#### Scenario: Web App Manifest for PWA readiness
- **WHEN** a browser checks for PWA capabilities
- **THEN** a valid manifest.json file exists at the root
- **AND** the manifest includes icon definitions (192x192, 512x512)
- **AND** the manifest specifies theme_color matching ChoreAid primary blue (#2563eb)
- **AND** the manifest includes a descriptive app name and short_name

#### Scenario: Browser theme color on mobile
- **WHEN** a user visits the site on a mobile browser
- **THEN** the browser's address bar/toolbar adopts the ChoreAid theme color (#2563eb)
- **AND** the color creates a cohesive branded experience
- **AND** the theme color is specified via meta tag in index.html

## ADDED Requirements

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
