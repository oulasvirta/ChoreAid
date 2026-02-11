# landing-page Specification Delta

## MODIFIED Requirements

### Requirement: Landing Page Structure
The landing page SHALL display a modern, professional interface that introduces Chore Aid and its purpose.

#### Scenario: Features section with navigable work category images
- **WHEN** a user scrolls down the landing page
- **THEN** they see a section explaining how the service works or its benefits
- **AND** they see an "Esimerkkejä Töistä" (Examples of Work) subsection displaying authentic work images
- **AND** the images show both indoor work (cleaning, vacuuming, housework) and outdoor work (gardening, tire change, snow shoveling)
- **AND** each image group is a clickable link that navigates to the respective category page
- **AND** the links have clear hover effects indicating they are interactive
- **AND** each image group has a descriptive caption in Finnish explaining the work types
- **AND** images are displayed in a responsive layout (stacked on mobile, side-by-side on tablet/desktop)

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
- **AND** the footer contains working navigation links to category pages and other sections

### Requirement: Modern Visual Design
The landing page SHALL use modern design principles and Tailwind CSS for styling.

#### Scenario: Interactive elements indicate clickability
- **WHEN** a user hovers over a work category image
- **THEN** visual feedback indicates the element is clickable (cursor change, scale, shadow, etc.)
- **AND** the transition is smooth and professional
- **AND** keyboard focus shows clear visual indicators
