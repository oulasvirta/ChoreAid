# Change: Add Work Category Pages

## Why
Landing page tarvitsee laajennuksen jossa käyttäjät voivat tutustua tarkemmin eri työkategorioihin (sisätyöt ja ulkotyöt). Ehdotukset.md-dokumentissa idea-tiimi on määritellyt, että käyttäjien pitää pystyä suodattamaan työtehtäviä sisä- ja ulkotöiden mukaan. Tämä muutos luo pohjan sille lisäämällä dedikoidut kategoriastä-sivut johon voidaan klikata etusivun "Esimerkkejä Töistä" -osion kuvista.

Tällä hetkellä sivustossa ei ole navigointia tai useita sivuja – se on single-page application pelkällä landing page -sisällöllä. Tämä muutos tuo routing-toiminnallisuuden ja luo kaksi uutta sivua.

## What Changes
- **Routing Infrastructure**: Lisätään React Router Dom mahdollistamaan usean sivun navigointi
- **Two New Pages**: Luodaan dedikoidut sivut:
  - `/sisatyot` - Sisätöiden kategoriasivulle (siivous, imurointi, kotityöt)
  - `/ulkotyot` - Ulkotöiden kategoriasivu (puutarhatyö, rengasvaihto, lumenluonti)
- **Navigation from Landing Page**: Features-komponentin "Esimerkkejä Töistä" -osion kuvat muutetaan klikkattaviksi linkeiksi jotka vievät kategoriasivuille
- **Category Page Content**: Jokaisella kategoriasvulla on:
  - Hero-osio kategorian otsikolla ja kuvalla
  - Kuvaus kategoriasta ja sen sisältämistä töistä
  - Placeholder tulevaa työlistaa varten ("tulossa pian")
  - Takaisin etusivulle -linkki
- **Consistent Navigation**: Footerin linkit päivitetään toimiviksi ja lisätään navigointi kategorioiden välillä

## Impact
- Affected specs: 
  - `landing-page` (navigoinnin lisäys Features-osioon)
  - `work-categories` (UUSI spec kahdelle kategoriasivulle)
- Affected code:
  - `package.json` (react-router-dom dependency)
  - `src/App.tsx` (routing setup)
  - `src/components/Features.tsx` (kuvat → linkit)
  - `src/components/Footer.tsx` (toimivat linkit)
  - UUSI: `src/pages/IndoorWork.tsx` (sisätyösivu)
  - UUSI: `src/pages/OutdoorWork.tsx` (ulkotyösivu) 
  - UUSI: `src/pages/Home.tsx` (nykyinen landing page omana sivuna)
- Dependencies: Lisätään `react-router-dom@^6.x`
- Breaking: URL-rakenne muuttuu (landing page `/` → `/`, kategoriat `/sisatyot` ja `/ulkotyot`)
