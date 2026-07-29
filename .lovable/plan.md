## Cíl
Do stránky **Jak nás můžete podpořit** (`/o-nas/jak-podporit`) přidat:
1. **QR kód pro platbu 200 Kč** (obrázek `Pink_Watercolor_Thank_You_Greeting_Card_1.png`) s číslem účtu `107-1746420217/0100`.
2. **Odkaz na Darujme.cz** — https://www.darujme.cz/projekt/1212855 (dočasně, do listopadu 2026).

## Kroky
1. Nahrát QR obrázek přes `lovable-assets` do `src/assets/qr-podpora.png.asset.json`.
2. Upravit `src/pages/Support.tsx` — přidat novou sekci nad/pod stávající kartičky:
   - Blok s QR kódem (obrázek), textem „Líbí se vám naše práce…", částkou 200 Kč a číslem účtu.
   - Blok „Darujme.cz" s tlačítkem odkazujícím na projekt.
3. Do dlaždice **Finanční dar** doplnit i zmínku o QR/Darujme, ať to spolu ladí.

## Poznámka
Odkaz na Darujme je časově omezený (do listopadu). Označím ho v kódu komentářem, aby se dal později snadno odstranit.
