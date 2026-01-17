# Chore Aid

Chore Aid on webbisivusto, joka yhdistää vapaana olevia opiskelijoita auttamaan kotitöissä tarvitsevia ihmisiä (esim. eläkeläisiä).

## Tech Stack

- **React 18+** - Moderni UI-kirjasto
- **TypeScript** - Tyyppiturvallisuus
- **Vite** - Nopea build-työkalu ja kehitysympäristö
- **Tailwind CSS** - Utility-first CSS-framework
- **GitHub Pages** - Hostaus

## Kehitysympäristön asennus

### Vaatimukset

- Node.js 20+ 
- npm tai pnpm

### Asennus

1. Asenna riippuvuudet:
```bash
npm install
```

tai

```bash
pnpm install
```

## Kehitys

### Kehityspalvelin

Käynnistä kehityspalvelin:

```bash
npm run dev
```

Sovellus on saatavilla osoitteessa `http://localhost:5173`

### Build

Luo tuotantoversio:

```bash
npm run build
```

Build-tiedostot luodaan `dist/`-kansioon.

### Preview

Esikatsele tuotantoversiota:

```bash
npm run preview
```

## Testaus paikallisesti

### 1. Asenna riippuvuudet

```bash
npm install
```

### 2. Käynnistä kehityspalvelin

```bash
npm run dev
```

Avaa selaimessa: `http://localhost:5173`

### 3. Testaa build

```bash
npm run build
```

Tarkista, että `dist/`-kansio luodaan onnistuneesti.

### 4. Testaa preview

```bash
npm run preview
```

Tämä käynnistää paikallisen palvelimen, jossa voit testata tuotantoversiota.

### 5. Tarkista TypeScript

```bash
npx tsc --noEmit
```

Tämä tarkistaa TypeScript-virheet ilman tiedostojen luomista.

## GitHub Pages -deployment

Sovellus deployataan automaattisesti GitHub Pages:lle, kun koodi pushataan `main`-branchiin.

### Manuaalinen deployment

1. Varmista, että GitHub Pages on aktivoitu repositoryn asetuksissa
2. Pushaa koodi `main`-branchiin
3. GitHub Actions workflow hoitaa buildin ja deploymentin automaattisesti

### GitHub Pages URL

Sivusto on saatavilla osoitteessa:
`https://[käyttäjänimi].github.io/ChoreAid/`

## Projektirakenne

```
ChoreAid/
├── src/
│   ├── components/      # React-komponentit
│   │   ├── Hero.tsx     # Hero-osa
│   │   ├── Features.tsx # Features-osa
│   │   └── Footer.tsx  # Footer
│   ├── App.tsx         # Pääkomponentti
│   ├── main.tsx        # Entry point
│   └── index.css       # Päätyylit
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions workflow
├── index.html          # HTML-pohja
├── package.json        # Riippuvuudet
├── vite.config.ts      # Vite-konfiguraatio
├── tsconfig.json       # TypeScript-konfiguraatio
└── tailwind.config.js  # Tailwind CSS -konfiguraatio
```

## Lisenssi

Kaikki oikeudet pidätetään.
