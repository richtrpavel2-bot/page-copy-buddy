## Co udělám

### 1. Loga sponzorů (oprava + přidání)
- Znovu nahraju **Hudebniny Nový Malín** — přes `lovable-assets` z `logo_hudebniny_malin-2.png` (současný `hudebniny_malin.jpg` 23 kB je nekvalitní, nový PNG je ostrý). Přepíšu `src/data/partners.ts`, aby ukazoval na nový asset.
- Přidám nového sponzora **Ag** (`Ag_Logo-2.bmp`) — převedu BMP na PNG (BMP prohlížeče neumí spolehlivě), nahraju přes `lovable-assets`, doplním do `corporatePartners`.

### 2. Co nabízíme — přepsat `src/data/offer.ts` podle nového textu
- **Pro děti** — aktualizovat úvodní text a kontakty (spolek.galimatyas@seznam.cz, 732 921 452 Lucie, 605 173 410 Tereza).
- Kurzy — upravit názvy, věkové skupiny, časy („den a čas bude upřesněn“ tam, kde je to potřeba), texty:
  - **Připravit k odletu RAZ DVA TŘI!** — MŠ a 1.–2. třída (5–8 let).
  - **KDO (SI) HRAJE, NEZLOBÍ!** — nový kurz, 3.–5. třída (8–10 let).
  - **KDO HRAJE, JE FRAJER(KA)!** — 7.–9. třída (11–15 let), plná.
  - **PRVOH(O)RY** — 6.–9. třída (10–15 let).
  - **TVAROH(R)Y** — 7.–9. ZŠ a 1. SŠ (13–16 let), zmínka o postupu na Dětskou scénu 3× + hledá nové členy.
  - **DIVADOVÁDIDLO** — plná; doplnit vítězství Otevřeno Kolín 2026 + Jiráskův Hronov.
  - **DIVA DIVY** — 9. ZŠ a SŠ (15–19 let), 8 let.
  - **Odstranit** samostatnou položku *SÓLOVÝ ZPĚV* (přesune se pod ZPĚV).
- **Pro dospělé** — text kurzu **TAK UVIDÍME!** upravit, doplnit kontakty.
- **Nová sekce Zpěv** — doplnit dva kurzy jako samostatnou stránku nebo jako podsekci uvnitř *Pro dospělé/Pro děti*. Nejjednodušší je založit novou položku offer **„Zpěv"** (group `volny-cas`) s kurzy:
  - **(NA)HLAS** — individuální výuka, děti i dospělí, dle domluvy.
  - **Ženský sbor ŠuŠuŽEŠ** — ženy, středa 18:00–19:00.
- **Prázdninové akce** — nahradit intro větou „V současné době tábory nepořádáme. Zde naleznete jen malou vzpomínku…" a ponechat editions jako vzpomínkovou galerii. Odstranit duplicity typu „Z archivu táborů" jinde.
- **Pro veřejnost** — přepsat anotace a doplnit 4 nová představení (Rybářova žena premiéra 27.9.2025, repríza 22.11.2025; Kam se poděla betlémská hvězda 14.12.2025; Domov je tam, kde koště mám 7.3.2026). Odstranit tábory a zmínku „DÁT PRYČ".

### 3. Rozšiřitelnost
Aktuálně už jsou stránky snadno rozšiřitelné přes datové soubory (`src/data/news.ts`, `offer.ts`, `galleries.ts`). Nic strukturálního neměním — jen potvrdím, že přidání další stránky = přidat položku do příslušného `data/*.ts`. E-shop (`Limonada.tsx`) je připravený, obsah se dá přidávat postupně později.

### 4. Lovable
V uživatelsky viditelném kódu žádné zmínky nejsou (index.html, README, UI). Zbývá jen `lovable-tagger` v `vite.config.ts` / `package.json` — to je build-plugin platformy, nutný pro chod editoru; nemažu.

### 5. Co ještě potřebuji od tebe
- **Plakáty k veřejným akcím** — v příloze nejsou (přišel jen `Z_emailu.docx`, portréty a loga). Až je pošleš, doplním je ke konkrétním představením v „Pro veřejnost".
- **Fotky divadelních skupin** — počkám na úschovnu, pak přiřadím ke kurzům v „Pro děti"/„Pro dospělé"/„Zpěv".

## Technické poznámky
- Nový sponzor Ag = BMP; převedu na PNG přes ImageMagick (`convert Ag_Logo-2.bmp -resize 600x -strip Ag.png`), pak `lovable-assets create`.
- `hudebniny_malin.jpg.asset.json` starý pointer smažu (`lovable-assets delete`), nahradím novým z PNG.
- Ověření: `bun run build` + vizuální kontrola stránek `/co-nabizime/pro-deti`, `/o-nas/podporuji-nas`.
