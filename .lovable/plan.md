# Plán: Obrázek do úvodu stránky O nás

## Co udělám
V současné hero sekci na `/o-nas` je jen text na světlém pozadí. Přidám napravo od textu výrazný obrázek, aby úvod ožil.

## Layout
Hero sekci přepracuju z jednosloupcového textu (`max-w-3xl`) na **dvousloupcový grid** na desktopu:

```text
┌─────────────────────┬──────────────────┐
│ O spolku            │                  │
│ Kdo je Galimatyáš   │   [ obrázek ]    │
│ úvodní text…        │                  │
└─────────────────────┴──────────────────┘
```

- Mobil: obrázek pod textem, plná šířka
- Desktop: text vlevo (3/5), obrázek vpravo (2/5), zaoblené rohy, jemný stín
- Aspect ratio přibližně 4:3, `object-cover`

## Výběr obrázku
Použiju existující fotku ze složky `src/assets/galerie/` — atmosférický záběr ze spolkového života. Tři kandidáti, ze kterých vyberu:

1. **`dilna-okolo/IMG_5723.jpg`** — divadelní dílna, společná práce (sedí k textu „spojujeme generace")
2. **`stati-malo/IMG_5654.jpg`** — záběr z představení
3. **`tabor-svetadily/2_(13).jpg`** — táborová akce

Půjdu s **dílnou Okolo**, protože nejlépe vystihuje poslání („potkávají se profesionálové, dobrovolníci, děti"). Pokud se ti nebude líbit, snadno vyměním.

## Soubory ke změně
- `src/pages/About.tsx` — úprava hero sekce (řádky 22–37): přidat grid, `<img>` s importem assetu

## Co NEsahám
- Sekce „Naše poslání", „Hodnoty", „Prozkoumejte další" — beze změny
- Texty v úvodu — beze změny
- Žádné nové fotky neimportuju, použiju existující asset
