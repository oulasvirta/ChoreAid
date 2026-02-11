# landing-page Spec Delta

This change adds navigation links to the new About page from both the Hero section and Footer.

## MODIFIED Requirements

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
