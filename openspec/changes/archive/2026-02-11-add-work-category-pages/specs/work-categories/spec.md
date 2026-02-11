# work-categories Specification Delta

## ADDED Requirements

### Requirement: Category Page Structure
Each work category page SHALL display a dedicated view for a specific type of work.

#### Scenario: Indoor work category page
- **WHEN** a user navigates to `/sisatyot`
- **THEN** they see a page dedicated to indoor work
- **AND** the page has a hero section with the title "Sisätyöt"
- **AND** the page displays a description of indoor work types covered by the service
- **AND** the page lists examples of work types (e.g., "Siivous, Imurointi, Kotityöt, Sängyn petaus")
- **AND** the page includes a placeholder for future job listings ("Tulossa pian")
- **AND** the page includes a footer with navigation and copyright information

#### Scenario: Outdoor work category page
- **WHEN** a user navigates to `/ulkotyot`
- **THEN** they see a page dedicated to outdoor work
- **AND** the page has a hero section with the title "Ulkotyöt"
- **AND** the page displays a description of outdoor work types covered by the service
- **AND** the page lists examples of work types (e.g., "Puutarhatyöt, Rengasvaihto, Lumenluonti")
- **AND** the page includes a placeholder for future job listings ("Tulossa pian")
- **AND** the page includes a footer with navigation and copyright information

### Requirement: Navigation Between Pages
Users SHALL be able to navigate between the landing page and category pages, and between category pages.

#### Scenario: Navigate from landing page to category
- **WHEN** a user clicks on a work category image on the landing page
- **THEN** they are navigated to the corresponding category page (either `/sisatyot` or `/ulkotyot`)
- **AND** the URL in the browser updates to reflect the new page
- **AND** the browser back button returns them to the landing page

#### Scenario: Navigate from category back to home
- **WHEN** a user is viewing a category page
- **THEN** they see a clear "Takaisin etusivulle" (Back to Home) link or button
- **AND** clicking it navigates them back to the landing page (`/`)
- **AND** the navigation maintains browser history

#### Scenario: Navigate between categories via footer
- **WHEN** a user is viewing any page
- **THEN** they see footer links to both category pages
- **AND** clicking a footer link navigates to the respective category page
- **AND** the active page is visually distinguished in the navigation (if applicable)

#### Scenario: Direct URL access
- **WHEN** a user enters `/sisatyot` or `/ulkotyot` directly in the browser address bar
- **THEN** the corresponding category page loads correctly
- **AND** the page displays all expected content
- **AND** navigation to other pages works correctly

### Requirement: Consistent Visual Design
Category pages SHALL maintain visual consistency with the landing page and follow the established design system.

#### Scenario: Visual consistency
- **WHEN** a user views a category page
- **THEN** it uses the same color palette as the landing page (primary blues)
- **AND** it uses consistent typography (font families, sizes, weights)
- **AND** it uses similar spacing and layout patterns
- **AND** interactive elements have consistent hover and focus styles
- **AND** the overall design feels cohesive with the rest of the site

#### Scenario: Hero section styling
- **WHEN** a user views a category page hero section
- **THEN** it uses a gradient background similar to the landing page hero
- **AND** the hero includes relevant imagery (category-specific or abstract)
- **AND** text is clearly readable against the background
- **AND** the section is responsive across device sizes

### Requirement: Responsive Category Pages
Category pages SHALL be fully responsive and usable on mobile, tablet, and desktop devices.

#### Scenario: Mobile viewport
- **WHEN** a category page is viewed on a mobile device (< 640px width)
- **THEN** all content is readable and accessible
- **AND** navigation elements are appropriately sized for touch
- **AND** the layout adapts to the smaller screen (single column, adjusted spacing)
- **AND** images (if any) scale appropriately

#### Scenario: Desktop viewport
- **WHEN** a category page is viewed on a desktop device (≥ 1024px width)
- **THEN** content utilizes available space effectively
- **AND** the layout is optimized for larger screens
- **AND** navigation is easily accessible

### Requirement: Accessibility for Category Pages
Category pages SHALL meet basic accessibility requirements for keyboard navigation and screen readers.

#### Scenario: Keyboard navigation
- **WHEN** a user navigates a category page using only the keyboard
- **THEN** all interactive elements (links, buttons) are focusable
- **AND** focus indicators are clearly visible
- **AND** the tab order is logical (hero → content → footer)
- **AND** Enter or Space activates focused links/buttons

#### Scenario: Screen reader compatibility
- **WHEN** a screen reader user accesses a category page
- **THEN** semantic HTML elements are used (header, main, nav, section, footer)
- **AND** headings follow a logical hierarchy (h1 for page title, h2 for sections)
- **AND** links have descriptive text (not "click here")
- **AND** the page purpose is clear from the title and heading

#### Scenario: Page title updates
- **WHEN** a user navigates to a category page
- **THEN** the browser document title updates to reflect the page (e.g., "Sisätyöt - Chore Aid")
- **AND** screen readers announce the new page title
- **AND** bookmarks and browser tabs show appropriate titles

### Requirement: Future Job Listing Placeholder
Category pages SHALL include placeholders indicating that job listings will be added in the future.

#### Scenario: Job listing placeholder display
- **WHEN** a user views a category page
- **THEN** they see a section labeled or indicating job listings
- **AND** the section contains a "Tulossa pian" (Coming Soon) message
- **AND** the message encourages users to check back later or expresses the platform's future goals
- **AND** the placeholder section has appropriate styling (not looking broken or incomplete)

### Requirement: Error Handling
The routing system SHALL handle invalid URLs gracefully.

#### Scenario: Invalid route access
- **WHEN** a user navigates to a non-existent route (e.g., `/invalid-page`)
- **THEN** the system either displays a 404 page OR redirects to the home page
- **AND** the user is not shown a blank screen or browser error
- **AND** navigation remains functional from the error state
