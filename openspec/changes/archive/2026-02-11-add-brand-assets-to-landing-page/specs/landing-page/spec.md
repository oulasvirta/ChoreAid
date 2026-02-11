# landing-page Specification Delta

## MODIFIED Requirements

### Requirement: Landing Page Structure
The landing page SHALL display a modern, professional interface that introduces Chore Aid and its purpose.

#### Scenario: Hero section with logo
- **WHEN** a user visits the landing page
- **THEN** they see the ChoreAid logo prominently displayed in the hero section
- **AND** the logo appears alongside or above the "Chore Aid" text title
- **AND** the logo is properly sized and positioned
- **AND** the logo has appropriate alt text for screen readers ("ChoreAid logo")

#### Scenario: Hero section display
- **WHEN** a user visits the landing page
- **THEN** they see a prominent hero section with the ChoreAid brand identity (logo + title)
- **AND** a clear description of the service (connecting students with people needing help with chores)
- **AND** a call-to-action element (visual emphasis, no functional requirement yet)

#### Scenario: Features section with example images
- **WHEN** a user scrolls down the landing page
- **THEN** they see a section explaining how the service works or its benefits
- **AND** they see an "Esimerkkejä Töistä" (Examples of Work) subsection displaying authentic work images
- **AND** the images show both indoor work (cleaning, vacuuming, housework) and outdoor work (gardening, tire change, snow shoveling)
- **AND** each image group has a descriptive caption in Finnish explaining the work types
- **AND** images are displayed in a responsive layout (stacked on mobile, side-by-side on tablet/desktop)

#### Scenario: Features section
- **WHEN** a user scrolls down the landing page
- **THEN** they see a section explaining how the service works or its benefits
- **AND** the content is organized in a clear, readable format
- **AND** the section uses modern visual design (cards, icons, or similar)

#### Scenario: Footer section
- **WHEN** a user reaches the bottom of the landing page
- **THEN** they see a footer with basic information
- **AND** the footer includes appropriate content (copyright, links, or contact info placeholder)
- **AND** the copyright text displays the application version number from package.json in the format "© {year} Chore Aid v{version}. Kaikki oikeudet pidätetään."

### Requirement: Modern Visual Design
The landing page SHALL use modern design principles and Tailwind CSS for styling.

#### Scenario: Visual appearance with brand assets
- **WHEN** a user views the landing page
- **THEN** it uses a modern color scheme and typography
- **AND** it displays the official ChoreAid logo in the hero section
- **AND** it shows authentic, professional images of chores being performed
- **AND** spacing and layout follow contemporary design patterns
- **AND** the design is clean and professional
- **AND** Tailwind CSS utility classes are used for styling

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

## ADDED Requirements

### Requirement: Asset Management
Visual assets (logo and images) SHALL be organized in a structured directory within the project.

#### Scenario: Asset organization
- **WHEN** developers need to locate visual assets
- **THEN** logo files are stored in `src/assets/logo/`
- **AND** work example images are stored in `src/assets/images/`
- **AND** image files have descriptive names (e.g., `indoor-work.png`, `outdoor-work.png`)

#### Scenario: Image optimization
- **WHEN** images are added to the project
- **THEN** they are optimized for web usage (reasonable file sizes)
- **AND** they use appropriate formats (PNG/JPEG for photos, SVG for logos when available)
- **AND** they implement lazy loading where appropriate to improve performance
