

# Plán: Funkční sekce „Co nabízíme" s podstránkami

## Problém
Karty na `/co-nabizime` nejsou klikatelné — jsou to jen `<Card>` bez `<Link>`. Na původním webu ale pod „Co nabízíme" byly **dvě skupiny po několika podstránkách** s texty a fotkami.

## Struktura podle původního webu

```text
CO NABÍZÍME
├── Volnočasové aktivity
│   ├── Pro děti
│   ├── Pro dospělé
│   └── Prázdninové akce
└── Vzdělávací a kulturní akce
    ├── Pro pedagogické pracovníky
    └── Pro veřejnost
```

## Co se změní

### 1. Přepsaná stránka `/co-nabizime`
Místo 5 nesouvisejících karet bude přehled **2 skupin × jejich podstránek** (5 klikatelných karet vedoucích na detail). Každá karta = obrázek 4:5 + nadpis + krátký popis + šipka „Více". Sjednocený design s Aktuálně / LIMONÁDA / Studio.

### 2. Nových 5 podstránek
Vzniknou skutečné stránky s obsahem a fotkami převzatými z původního webu:

| Cesta | Obsah |
|---|---|
| `/co-nabizime/pro-deti` | Hudebně-dramatická přípravka „Raz dva tři!", „Kdo hraje, je frajer(ka)!" + další kroužky, rozvrhy, fotky |
| `/co-nabizime/pro-dospele` | Aktivity pro dospělé (texty + foto z původního webu) |
| `/co-nabizime/prazdninove-akce` | Tábory a prázdninové programy |
| `/co-nabizime/pro-pedagogy` | Semináře a vzdělávání pro učitele |
| `/co-nabizime/pro-verejnost` | Komponované večery, kulturní akce |

### 3. Datový soubor `src/data/offer.ts`
Jeden zdroj pravdy — typ `OfferItem` se slug, title, group ("volny-cas" / "vzdelavani"), shortText, image, body (rich obsah: nadpisy, odstavce, obrázky). Snadno editovatelné.

### 4. Šablona `src/pages/OfferDetail.tsx`
Jedna komponenta pro všech 5 podstránek (čte slug, vyrendruje obsah). Konzistentní layout s `NewsDetail` a `BookDetail`.

### 5. Routing v `App.tsx`
Přidá se `<Route path="/co-nabizime/:slug" element={<OfferDetail />} />`.

### 6. Asset management
Stáhnu dostupné obrázky z původního webu do `src/assets/offer/` (Pro děti je dostupné, Pro veřejnost má hero, ostatní 3 stránky jsou v JS — tam dám placeholder a doplníš později nebo se pokusím přes Wayback). U podstránek bez obsahu vytvořím kostru s krátkým úvodem a poznámkou „obsah se připravuje" — strukturu nasadíme, texty doplníš.

## Co zůstane

- Hero sekce stránky `/co-nabizime` (texty zachovány)
- CTA „Máte konkrétní představu?" dole
- Header / Footer / barvy / fonty beze změny

## Otevřená otázka pro fázi implementace
3 z 5 stránek originálu se nedaly stáhnout (JavaScript). Pro ně buď:
- (A) zkusím Wayback Machine
- (B) nasadím kostru s placeholderem, texty pošleš
- (C) zkopíruji obsah z `Pro děti` jako dočasnou výplň

Rozhodneme až po pokusu o Wayback — nemusíš se k tomu teď vyjadřovat.

