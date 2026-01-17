# Design: Initial Landing Page and GitHub Pages Deployment

## Context
Projekti on tyhjä repository, joka tarvitsee perusinfrastruktuurin React-sovellukselle ja automaattisen deploymentin GitHub Pages -palveluun. Ensimmäinen versio on staattinen etusivu ilman backend-toiminnallisuuksia.

## Goals / Non-Goals

### Goals
- Moderni React + TypeScript + Vite + Tailwind CSS -projektirakenne
- Automaattinen build ja deploy GitHub Pages -palveluun
- Responsiivinen, modernin näköinen etusivu
- Helppo kehittää ja ylläpitää
- Nopea lataus ja hyvä suorituskyky

### Non-Goals
- Backend-toiminnallisuudet (tulevaisuudessa)
- Tietokanta tai API
- Monisivuinen navigaatio (vain etusivu alkuun)
- Yhteydenottolomake (tulevaisuudessa)

## Decisions

### Decision: Vite base path -konfiguraatio GitHub Pages:lle
**Rationale**: GitHub Pages hostaa sivuston repository-nimen mukaiseen polkuun (esim. `/ChoreAid/`), joten Vite tarvitsee `base`-asetuksen. Tämä varmistaa, että kaikki assetit ladataan oikeista poluista.

**Alternatives considered**:
- Custom domain: Yksinkertaisempi, mutta vaatii domainin hankinnan
- Vite base: "/": Toimisi vain custom domainilla

### Decision: GitHub Actions workflow build- ja deploy-vaiheisiin
**Rationale**: Automaattinen deployment jokaisen pushin jälkeen main-branchiin. Workflow buildaa projektin ja deployaa `dist/`-kansion GitHub Pages:lle.

**Alternatives considered**:
- Manuaalinen deploy: Ei automaattista, työläs
- GitHub Actions: Automaattinen, helppo ylläpitää

### Decision: React Router ei tarvita alkuvaiheessa
**Rationale**: Vain yksi sivu (etusivu), joten React Router on turha. Lisätään tulevaisuudessa tarvittaessa.

**Alternatives considered**:
- React Router: Turha yksi sivulle
- Ilman routeria: Yksinkertaisempi, riittää alkuun

### Decision: Tailwind CSS CDN vs npm
**Rationale**: Tailwind CSS asennetaan npm:llä ja konfiguroidaan Vite-pluginilla. Tämä mahdollistaa optimoinnin ja tree-shakingin.

**Alternatives considered**:
- CDN: Nopeampi alku, mutta isompi bundle ja vähemmän optimointia
- npm + plugin: Optimoitu, parempi kehityskokemus

## Risks / Trade-offs

### Risk: GitHub Pages base path -ongelmat
**Mitigation**: Vite `base`-asetus konfiguroidaan oikein, testataan deploymentin jälkeen

### Risk: Build-ongelmat GitHub Actionsissa
**Mitigation**: Testataan workflow paikallisesti ensin, lisätään error handling

### Trade-off: Yksinkertainen vs. laajennettava rakenne
**Decision**: Aloitetaan yksinkertaisella rakenteella, mutta projektirakenne on laajennettavissa tulevaisuudessa

## Migration Plan
Ei migrationia - tämä on ensimmäinen versio.

## Open Questions
- Tarvitaanko favicon alkuun? (Voidaan lisätä myöhemmin)
- Tarvitaanko Google Analytics tai muita analytics-työkaluja? (Ei alkuun)
