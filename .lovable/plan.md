

# Plán: Doplnit fotky z původního webu do celé sekce „Co nabízíme"

## Co se stalo
Při minulé migraci jsem nasadil jen hero obrázky a 4 fotky ke kurzu „KDO HRAJE". Zbylé fotky z původního webu zůstaly nedotažené. Z Wayback Machine jsem teď ověřil, **kde fotky reálně byly**:

| Podstránka | Počet fotek na originále | Stav teď |
|---|---|---|
| Pro děti | **8** (přípravka + různé kroužky) | jen 4 u jednoho kurzu |
| Pro dospělé | 0 (text-only) | OK |
| Prázdninové akce | **6** (různé tábory + vystoupení) | máme 5 různých, doplním |
| Pro pedagogy | 0 (text-only) | OK |
| Pro veřejnost | 0 (text-only) | máme plakát Člověče — OK |

**Reálná práce je tedy ve dvou sekcích: Pro děti a Prázdninové akce.**

## Co udělám

### 1. Stáhnu fotky z Wayback Machine
Z URL ve formátu `web.archive.org/.../wp-content/uploads/...` stáhnu plné rozlišení (bez `-450x300` suffixu). Uložím do `src/assets/offer/` s čitelnými názvy:
- `deti-preprava-1.jpg` až `deti-preprava-8.jpg` (sekce Pro děti)
- `tabor-galerie-1.jpg` až `tabor-galerie-6.jpg` (sekce Tábory)

### 2. Pro děti — doplním galerie ke kurzům
Fotky rozdělím do galerií u jednotlivých kurzů podle obsahu (přípravka MŠ, starší skupiny, vystoupení). Každý kurz dostane 2–4 fotky. Použiju existující pole `images` na `OfferCourse`.

### 3. Prázdninové akce — přidám obecnou galerii pod úvod
Nové pole `gallery?: string[]` na `OfferItem` pro fotky, které nepatří ke konkrétnímu ročníku. Pod intro před archiv ročníků se zobrazí mřížka 3 sloupců.

### 4. Šablona `OfferDetail.tsx`
- Vykreslím `item.gallery` jako mřížku přímo pod hero (pokud existuje)
- Galerie u kurzů už funguje — beze změny

### 5. Kontrola kvality
Po stažení projdu každou fotku — žádné okraje prohlížeče, žádná lišta Windows, čisté JPG. Pokud něco nesedí, ořežu přes ImageMagick.

## Co NEsahám
- Pro dospělé / Pro pedagogy / Pro veřejnost — na originále fotky neměly, zůstává jak je
- Hero obrázky 5 hlavních karet — beze změny
- Texty, routing, layout — beze změny

## Otevřená otázka
Fotky z Wayback nemají popisky — rozdělím je ke kurzům podle vlastního odhadu (věková skupina, scéna). Pokud po nasazení uvidíš, že nějaká fotka patří jinam, řekneš a přesunu. Souhlas?

