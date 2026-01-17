# Change: Add Version Number to Footer

## Why
Users and developers need to see the current version of the application displayed in the footer. This helps with debugging, support, and transparency about which version is deployed. The version number should be automatically sourced from `package.json` to ensure consistency and avoid manual updates.

## What Changes
- Footer copyright text will include the application version number after "Chore Aid"
- Version number will be read from `package.json` at build time
- Format: "© 2026 Chore Aid v0.1.0. Kaikki oikeudet pidätetään." (example with version 0.1.0)

## Impact
- Affected specs: `landing-page` (footer requirement modification)
- Affected code: `src/components/Footer.tsx` (read version from package.json and display it)
- Build process: May need to configure Vite to expose package.json version to the frontend
