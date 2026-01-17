# Change: Setup Initial Landing Page with GitHub Pages Deployment

## Why
Projekti tarvitsee perusinfrastruktuurin ja ensimmäisen version etusivusta, jotta se voidaan hostata GitHub Pages -palvelussa. Tämä mahdollistaa nopean käyttöönoton ja automaattisen deploymentin jokaisen commitin jälkeen.

## What Changes
- **BREAKING**: Projektin alustus React + Vite + TypeScript + Tailwind CSS -stackilla
- GitHub Pages -konfiguraatio ja deployment-workflow
- Ensimmäinen versio etusivusta (landing page) modernilla ulkoasulla
- Automaattinen build ja deploy GitHub Actions -workflowlla

## Impact
- **Affected specs**: Uudet capabilities: `deployment` ja `landing-page`
- **Affected code**: 
  - Uusi projektirakenne (package.json, vite.config.ts, tsconfig.json, jne.)
  - GitHub Actions workflow (`.github/workflows/deploy.yml`)
  - React-komponentit etusivulle
- **Infrastructure**: GitHub Pages -sivusto aktivoituu repositoryssa
