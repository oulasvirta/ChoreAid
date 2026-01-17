# Project Context

## Purpose
Chore Aid on staattinen webbisivusto, joka yhdistää vapaana olevia opiskelijoita auttamaan kotitöissä tarvitsevia ihmisiä (esim. eläkeläisiä). Alkuvaiheessa sivusto on modernin näköinen esittelysivu ilman backend-toiminnallisuuksia. Tulevaisuudessa voidaan lisätä yhteystietojen keräämistä ja yhteydenottoa.

## Tech Stack
- **Frontend Framework**: React 18+ (moderni komponenttipohjainen UI-kirjasto)
- **Build Tool**: Vite (nopea kehitysympäristö ja optimoitu tuotantoversio)
- **CSS Framework**: Tailwind CSS (moderni utility-first CSS framework nopeaan tyylittelyyn)
- **Language**: TypeScript (tyyppiturvallisuus ja parempi kehityskokemus)
- **Package Manager**: npm tai pnpm
- **Deployment**: Staattinen hosting (esim. Netlify, Vercel, GitHub Pages) - React build voidaan exportata staattisena

**Valintaperusteet:**
- **React**: Laajalti käytetty, runsas ekosysteemi, komponenttipohjainen arkkitehtuuri, helppo skaalata
- **Vite**: Nopea HMR (Hot Module Replacement), optimoitu build-prosessi, hyvä React-tuki
- **TypeScript**: Parempi koodinlaatu, autocomplete, vähemmän bugeja, parempi ylläpito
- **Tailwind CSS**: Moderni ulkoasu nopeasti, responsiivinen suunnittelu, helppo ylläpito, pieni bundle-koko
- **Staattinen export**: React-sovellus voidaan buildata staattiseksi HTML/CSS/JS:ksi ilman backendia

## Project Conventions

### Code Style
- **TypeScript/JavaScript**: ES6+ syntax, camelCase muuttujille ja funktioille, PascalCase komponenteille
- **React Components**: Functional components, hooks (useState, useEffect, jne.), TypeScript interfaces props:ille
- **File Naming**: PascalCase komponenteille (esim. `ContactForm.tsx`), camelCase utility-funktioille
- **JSX**: Semantic HTML5 elementit, accessibility-ominaisuudet (ARIA-labels tarvittaessa)
- **CSS**: Tailwind utility-luokat, custom CSS vain tarvittaessa (CSS modules tai styled-components tulevaisuudessa)
- **Indentation**: 2 spaces
- **Naming**: Descriptive, selkeät nimet (esim. `ContactForm`, `handleSubmit`, `isLoading`)
- **Comments**: Suomeksi tai englanniksi selkeät kommentit monimutkaiselle logiikalle
- **Imports**: Organisoidut importit (React, kirjastot, komponentit, utilities, tyypit)

### Architecture Patterns
- **Spec-Driven Development**: Kaikki ominaisuudet OpenSpec-työnkautta (proposal → implementation → archive)
- **Component-Based Architecture**: React-komponentit, uudelleenkäytettävä koodi, single responsibility -periaate
- **Folder Structure**: 
  - `src/components/` - UI-komponentit
  - `src/pages/` - Sivut/routet
  - `src/hooks/` - Custom React hooks
  - `src/utils/` - Apufunktiot
  - `src/types/` - TypeScript-tyypit ja -interfacit
- **State Management**: React hooks (useState, useContext) alkuvaiheessa, Redux/Zustand tarvittaessa
- **Static Export**: React-sovellus buildataan staattiseksi HTML/CSS/JS:ksi (ei backend-riippuvuuksia alkuvaiheessa)
- **Mobile-First**: Responsiivinen suunnittelu mobiilista alkaen
- **Simplicity First**: Yksinkertaiset ratkaisut, monimutkaisuutta vain tarvittaessa

### Testing Strategy
- **Unit Tests**: React Testing Library + Vitest komponenttien testaamiseen
- **Component Tests**: Testataan komponenttien renderöintiä ja käyttäytymistä
- **E2E Tests**: Playwright/Cypress tulevaisuudessa kriittisille toiminnoille
- **Accessibility**: Testaus näppäimistönavigoinnilla, ruudunlukijalla, ja eslint-plugin-jsx-a11y
- **Cross-browser**: Testaus moderneilla selaimilla (Chrome, Firefox, Safari, Edge)
- **Responsive**: Testaus eri näyttöko'oilla (mobile, tablet, desktop)
- **Type Safety**: TypeScript varmistaa tyyppiturvallisuuden kääntämisvaiheessa

### Git Workflow
- **Branching**: Use feature branches for new capabilities (e.g., `feature/add-chore-tracking`)
- **Commits**: Write clear, descriptive commit messages
- **Pull Requests**: Required before merging to main branch
- **Change Management**: All significant changes must go through OpenSpec proposal process

## Domain Context
- **Opiskelijat**: Vapaana olevat opiskelijat, jotka haluavat auttaa kotitöissä
- **Tarvitsijat**: Ihmiset (esim. eläkeläiset), jotka tarvitsevat apua kotitöissä
- **Kotityöt**: Eri tyyppiset kotityöt (siivous, ruoanlaitto, kauppa, yms.)
- **Yhteystiedot**: Alkuvaiheessa staattinen esittely, tulevaisuudessa yhteydenottolomake
- **Sijainti**: Mahdollisesti alueellinen yhteys (esim. kaupungit, postinumerot)

## Important Constraints
- **Privacy**: Yksityisyys on tärkeää - ei kerätä henkilötietoja ilman suostumusta
- **Accessibility**: Sivusto on käytettävä kaikille (WCAG 2.1 AA-taso, näppäimistönavigointi, ruudunlukija)
- **Performance**: Nopea lataus (staattinen sivusto, optimoidut kuvat, minifioitu CSS/JS)
- **Browser Support**: Modernit selaimet (Chrome, Firefox, Safari, Edge - viimeiset 2 versiota)
- **Mobile-First**: Responsiivinen suunnittelu, toimii hyvin mobiililaitteilla
- **No Backend**: Alkuvaiheessa ei backend-toiminnallisuuksia (ei tietokantaa, ei API:a)

## External Dependencies
- **React**: UI-kirjasto komponenttipohjaiselle kehitykselle
- **Vite**: Kehitysympäristö ja build-työkalu
- **TypeScript**: Tyyppiturvallisuus ja parempi kehityskokemus
- **Tailwind CSS**: CSS-framework moderniin tyylittelyyn
- **React Router**: Sivujen navigointi (tarvittaessa)
- **OpenSpec**: Specifikaatioiden hallinta
- **Tulevaisuudessa mahdollisia**: 
  - Fontti-CDN (esim. Google Fonts)
  - Ikonit (esim. Heroicons, React Icons)
  - Form-kirjastot (esim. React Hook Form)
  - State management (esim. Zustand, Redux Toolkit)
