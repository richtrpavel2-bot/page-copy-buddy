

# Plán: Naplnění stránky „Aktuálně" obsahem ze starého webu

Přepíšu placeholdery v `src/data/news.ts` skutečnými 9 aktualitami ze stávajícího webu spolekgalimatyas.cz/aktualne. Layout, komponenty ani routing se nemění — pouze data.

## Co se přidá (9 položek, řazení automaticky od nejnovějšího)

Všechny mají kategorii **„Představení"** nebo **„Novinka"** (akce jsou divadelní/hudební události, oznámení o festivalu) a kde to dává smysl, doplním odkaz na detail na původním webu, aby měl návštěvník odkud čerpat víc info.

| Datum | Kategorie | Název |
|---|---|---|
| 3. 1. 2026 | Představení | Komponovaný večer hudby a přednesu |
| 3. 1. 2026 | Představení | Náš první společný výlet po stopách Alfréda Schönberga |
| 3. 1. 2026 | Představení | Brány Jeseníků se otevírají |
| 3. 1. 2026 | Novinka | Zpátky ke kořenům aneb Jeseníky – Ráj na Zemi |
| 27. 12. 2025 | Představení | Pátý divadelní vánoční den |
| 27. 12. 2025 | Představení | Čtvrtý divadelní vánoční den |
| 27. 12. 2025 | Představení | Třetí divadelní vánoční den |
| 27. 12. 2025 | Představení | Stále druhý divadelní vánoční den |
| 27. 12. 2025 | Představení | Druhý divadelní vánoční den |
| 27. 12. 2025 | Představení | První divadelní vánoční den |

(Pozn.: na starém webu je 9 položek vánočních dnů + 4 lednové; první položku „První divadelní vánoční den" jsem zahrnul také — celkem tedy 10.)

## Detaily implementace

- **Soubor**: pouze `src/data/news.ts` — přepíšu pole `news` všemi 10 položkami
- **Pole `excerpt`**: použiju krátké popisky doslovně z původního webu (1–2 věty každý)
- **Pole `location`**: většinou prázdné (na starém webu místo není uvedené); u „Komponovaného večera" doplním „klášterní kostel, Šumperk" (zmíněno v textu)
- **Pole `link`**: u každé položky odkaz na odpovídající detail na `spolekgalimatyas.cz/...` (slug z URL)
- **Pole `id`**: česká slug-verze názvu (např. `komponovany-vecer`, `prvni-divadelni-den`)
- **Datum**: ISO formát (`2026-01-03`, `2025-12-27`) — komponenta to už formátuje česky

## Co se NEmění

- `News.tsx`, `NewsCard.tsx`, navigace, routing, design
- Žádné nové fotky se nestahují — texty mluví samy za sebe (kategorie+datum+popis)
- Pokud bys později chtěl skutečné fotky z akcí, zařídíme zvlášť (přidáme pole `image` do typu)

## Poznámka pro tebe

Texty jsou převzaté doslovně z původního webu. Jako copywriter je můžeš v `src/data/news.ts` snadno přepsat — každá položka je jeden objekt s 5–6 poli, žádné HTML.

