# Change: Add Brand Assets to Landing Page

## Why
Landing page tarvitsee visuaalisen identiteetin vahvistamista lisäämällä virallinen ChoreAid-logo ja autenttisia kuvia palvelusta. Ehdotukset.md-dokumentissa idea-tiimi on määritellyt, että nettisivuille halutaan logo näkyville ja selkeästi tietoa ja kuvia. Tällä hetkellä sivulla on vain abstrakteja ikoneita ja gradientteja, mutta ei todellista brändi-identiteettiä tai konkreettisia esimerkkejä palvelun toiminnasta.

## What Changes
- **Logo Integration**: ChoreAid-logo lisätään Hero-osioon sivun yläosaan vahvistamaan brändi-identiteettiä (näkyy tekstiotsikon "Chore Aid" yhteydessä tai välittömästi sen yläpuolella)
- **Feature Images**: 2 olemassa olevaa ryhmäkuvaa (working-1.png ja working-2.png) lisätään Features-osioon:
  - working-1.png: 3 sisätöiden kuvaa samassa (siivous, imurointi, sängyn petaus)
  - working-2.png: 3 ulkotöiden kuvaa samassa (puutarhatyö, rengasvaihto, lumilapio)
- **Asset Organization**: Kuvat organisoidaan rakenteellisesti `src/assets/` kansioon (logo ja images)
- **Content Enhancement**: Lisätään visuaalista sisältöä etusivulle vastaamaan Ehdotukset.md vaatimuksia ("selkeästi tietoa ja kuvat")

## Impact
- Affected specs: `landing-page` (Hero section ja Features section modifikaatiot)
- Affected code: 
  - `src/components/Hero.tsx` (logo-integraatio)
  - `src/components/Features.tsx` (feature-kuvien lisäys)
  - Uusi hakemistorakenne: `src/assets/logo/` ja `src/assets/images/`
- Assets: 3 kuvatiedostoa (1 uusi logo + 2 siirrettyä olemassa olevaa kuvaa)
