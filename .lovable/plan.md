## Plán: Přidat logo Hudebniny Nový Malín

Uživatel poslal dvě loga:
- `Ag_Logo.bmp` — grafické logo (BMP formát)
- `logo_hudebniny_malin.png` — textové logo "HUDEBNINY NOVÝ MALÍN"

### Otázka před realizací
Které logo použít na stránce **Podporují nás**? Karta má formát 3:2 a v ní bývá kompaktní značka.

Doporučuji **`Ag_Logo.bmp`** (grafické logo se lépe hodí do čtvercové karty), převedu ho na JPG pro kompatibilitu prohlížečů (BMP je velké a některé prohlížeče ho nezobrazí ideálně).

### Kroky
1. Převést `Ag_Logo.bmp` → JPG (nebo použít PNG textové logo, pokud chceš)
2. Nahrát přes `lovable-assets` → `src/assets/loga/hudebniny_malin.jpg.asset.json`
3. V `src/data/partners.ts` doplnit `logo` k položce `Hudebniny Nový Malín`

Pokud chceš raději textové PNG logo (širší, bude působit jinak vedle ostatních), řekni a použiji to.
