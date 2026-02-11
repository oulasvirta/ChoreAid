# about Specification

## Purpose
The About page provides transparency and builds trust by explaining ChoreAid's origin story, mission, and values. It offers users a way to learn more about the service, the team behind it, and how to get in touch (initially via placeholder contact form). This page fulfills the "Esittely sivu" requirement from stakeholder needs.

## ADDED Requirements

### Requirement: About Page Routing
The About page SHALL be accessible via a dedicated route and properly integrated into site navigation.

#### Scenario: Direct URL access
- **WHEN** a user navigates to `/meista` in their browser
- **THEN** the About page loads successfully
- **AND** the page displays the ChoreAid About content
- **AND** the browser tab title shows "Tietoa meistä - Chore Aid"
- **AND** no console errors occur

#### Scenario: Navigation from landing page
- **WHEN** a user clicks the "Tutustu meihin" button on the landing page hero
- **OR** clicks the "Tietoa meistä" link in the footer
- **THEN** they are navigated to the About page (`/meista`)
- **AND** the page loads smoothly without full page refresh (React Router SPA behavior)
- **AND** browser history is updated correctly

#### Scenario: Return navigation
- **WHEN** a user is on the About page
- **AND** clicks the "Takaisin etusivulle" back link
- **THEN** they are navigated back to the landing page (`/`)
- **AND** any footer link navigation works as expected

### Requirement: Hero Section with Slogan
The About page hero section SHALL prominently display the ChoreAid slogan in both English and Finnish, establishing brand identity.

#### Scenario: Slogan display
- **WHEN** a user views the About page
- **THEN** they see the hero section with ChoreAid branding
- **AND** the main slogan "For every Chore there is Aid" is displayed prominently
- **AND** the Finnish translation "Jokaiseen askareeseen apua" is also visible
- **AND** the hero uses ChoreAid brand colors (primary blue #2563eb gradient)
- **AND** decorative elements (animated blobs, wave separator) match landing page style

#### Scenario: Hero responsiveness
- **WHEN** the About page is viewed on different screen sizes
- **THEN** the hero section scales appropriately
- **AND** slogan text remains readable on mobile devices
- **AND** spacing and padding adjust for optimal visibility

### Requirement: Story & Mission Section
The About page SHALL explain ChoreAid's origin story and mission clearly and engagingly.

#### Scenario: Origin story display
- **WHEN** a user scrolls to the Story section
- **THEN** they see a "Tarinamme" heading
- **AND** body text explains the project originated from Etu-Töölö Upper Secondary School's entrepreneurship course
- **AND** a team image is displayed (placeholder or actual photo)
- **AND** the image has descriptive alt text: "ChoreAid-tiimi - neljä opiskelijaa yhteistyössä"
- **AND** the content is formatted in a readable, visually appealing layout

#### Scenario: Mission statement display
- **WHEN** a user scrolls to the Mission section
- **THEN** they see a "Tavoitteemme" heading
- **AND** four mission points are listed:
  - "Yhdistämme opiskelijat ja kotitöihin tarvitsevat ihmiset"
  - "Mahdollistamme opiskelijoille lisäansioita"
  - "Helpotamme arkea niille, jotka tarvitsevat apua"
  - "Rakennamme vahvempaa ja auttavaisempaa yhteisöä"
- **AND** each point is visually emphasized (icons, checkmarks, or bullet styling)
- **AND** the list is easy to scan and understand

#### Scenario: Two-column layout on desktop
- **WHEN** the About page is viewed on a desktop (≥ 1024px width)
- **THEN** the Story and Mission sections are displayed in a two-column layout
- **AND** the team image is on one side, text content on the other (or vice versa)
- **AND** whitespace and alignment are balanced

#### Scenario: Stacked layout on mobile
- **WHEN** the About page is viewed on a mobile device (< 640px width)
- **THEN** the Story and Mission sections stack vertically
- **AND** the team image appears above or below the text (logical reading order)
- **AND** all content remains readable and accessible

### Requirement: Contact & Social Media Section
The About page SHALL provide a way for users to express intent to contact (via placeholder form) and find ChoreAid on social media.

#### Scenario: Contact form UI display
- **WHEN** a user scrolls to the Contact section
- **THEN** they see an "Ota yhteyttä" heading
- **AND** a contact form is displayed with:
  - Name input field (labeled, required)
  - Email input field (labeled, type="email", required)
  - Message textarea (labeled, required, multi-line)
  - Submit button styled with ChoreAid branding
- **AND** form fields have proper labels and placeholder text
- **AND** the form is visually polished and accessible

#### Scenario: Placeholder form behavior (non-functional)
- **WHEN** the contact form is initially implemented without backend
- **THEN** the form may be non-functional (no actual email sending)
- **AND** there is a note or indication that the form is "coming soon" or placeholder
- **OR** the submit button is disabled with an explanation
- **OR** clicking submit shows a "This feature is coming soon" message
- **AND** the form UI serves as a design preview for future functionality

#### Scenario: Social media links
- **WHEN** a user views the Contact & Social section
- **THEN** they see a "Seuraa meitä" heading or similar
- **AND** social media icons for Instagram and Facebook are displayed
- **AND** each icon is a clickable link (even if placeholder)
- **AND** Instagram link has aria-label "Seuraa meitä Instagramissa"
- **AND** Facebook link has aria-label "Seuraa meitä Facebookissa"
- **AND** icons have hover effects indicating interactivity
- **AND** placeholder links are clearly marked if social accounts don't yet exist (e.g., link to # or a placeholder URL)

### Requirement: Responsive Design
The About page SHALL be fully responsive and usable on mobile, tablet, and desktop devices.

#### Scenario: Mobile viewport (< 640px)
- **WHEN** the About page is viewed on a mobile device
- **THEN** all sections stack vertically
- **AND** text remains readable (appropriate font sizes)
- **AND** images scale to fit screen width
- **AND** form fields are touch-friendly (large enough for fingers)
- **AND** buttons and links are easily tappable
- **AND** no horizontal scrolling is required

#### Scenario: Tablet viewport (640px - 1024px)
- **WHEN** the About page is viewed on a tablet
- **THEN** layout adapts to medium screen size
- **AND** some sections may use two-column layouts if space allows
- **AND** images and text are balanced
- **AND** navigation remains intuitive

#### Scenario: Desktop viewport (≥ 1024px)
- **WHEN** the About page is viewed on a desktop
- **THEN** content utilizes available space effectively
- **AND** multi-column layouts are used where appropriate
- **AND** maximum content width is capped for readability (e.g., max-w-7xl)
- **AND** whitespace enhances visual appeal

### Requirement: Accessibility
The About page SHALL meet basic accessibility requirements for keyboard navigation, screen readers, and visual clarity.

#### Scenario: Semantic HTML structure
- **WHEN** a screen reader user accesses the About page
- **THEN** the page uses semantic HTML5 elements (`<main>`, `<section>`, `<article>`, `<header>`, `<footer>`)
- **AND** headings follow a logical hierarchy (H1 for page title, H2 for major sections, H3 for subsections)
- **AND** landmarks are properly defined for navigation

#### Scenario: Image accessibility
- **WHEN** images are displayed on the About page
- **THEN** all images have descriptive alt text
- **AND** decorative images (if any) are marked with empty alt="" or aria-hidden="true"
- **AND** alt text clearly describes the content (e.g., "ChoreAid-tiimi - neljä opiskelijaa yhteistyössä")

#### Scenario: Form accessibility
- **WHEN** a user interacts with the contact form
- **THEN** all form fields have associated `<label>` elements
- **AND** required fields are marked with `required` attribute and visual indicator
- **AND** form inputs have appropriate `type`, `name`, and `id` attributes
- **AND** screen readers can navigate and understand the form structure

#### Scenario: Link and button accessibility
- **WHEN** a user navigates the About page via keyboard
- **THEN** all interactive elements (links, buttons) are focusable via Tab key
- **AND** focus indicators are clearly visible (outline or other styling)
- **AND** links have descriptive text or aria-labels
- **AND** Enter key activates focused links/buttons

#### Scenario: Color contrast
- **WHEN** text is displayed on the About page
- **THEN** color contrast between text and background meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- **AND** interactive elements remain distinguishable even for users with color blindness

### Requirement: Visual Consistency
The About page SHALL maintain visual consistency with the rest of the ChoreAid site, using the established design system.

#### Scenario: Brand color usage
- **WHEN** the About page is rendered
- **THEN** primary brand color (#2563eb - blue) is used consistently
- **AND** gradient styles match the landing page hero
- **AND** accent colors complement the primary blue

#### Scenario: Typography consistency
- **WHEN** text is displayed on the About page
- **THEN** the Inter font family (already used site-wide) is applied
- **AND** heading sizes and weights match landing page conventions
- **AND** body text is readable and consistent with other pages

#### Scenario: Component reuse
- **WHEN** shared components (Footer, back links) are used on the About page
- **THEN** they render identically to other pages
- **AND** styling and behavior are consistent

### Requirement: SEO & Metadata
The About page SHALL include appropriate metadata for search engines and social sharing.

#### Scenario: Page title
- **WHEN** the About page is loaded
- **THEN** the browser tab title is set to "Tietoa meistä - Chore Aid"
- **AND** the title is updated dynamically via React (useEffect + document.title)

#### Scenario: Meta description (optional but recommended)
- **WHEN** search engines or social media platforms scrape the About page
- **THEN** a meta description is available summarizing the page content
- **AND** the description mentions ChoreAid, the educational project, and the mission
- **AND** the description is concise (< 160 characters for optimal display)
