

# Plán: Nový web pro Spolek Galimatyáš (inspirace + redesign)

Vytvoříme moderní, statický vícestránkový web inspirovaný současným galimatyas.cz. Bude svěží, hravý, čistý — odpovídající poslání spolku (hudba, divadlo, děti, fantazie). Texty z původního webu použijeme jako základ a ty je můžeš dál upravovat.

## Struktura webu (5 stránek)

1. **Domů** (`/`) — hero, krátké představení, 3 pilíře (Divadlo, Volný čas, Vzdělávání), CTA
2. **O spolku** (`/o-nas`) — kdo jsme, poslání, hodnoty, výroční zpráva
3. **Co nabízíme** (`/co-nabizime`) — divadelní představení, dílny, volnočasové aktivity, semináře, kulturní akce na míru
4. **Studio My Dvě** (`/studio-my-dve`) — placeholder sekce pro dopolední představení pro MŠ/ZŠ/SŠ
5. **Kontakt** (`/kontakt`) — telefon, adresa Šumperk, e-maily, č. účtu, FB odkaz, mapa

Všechny stránky sdílí navigaci (sticky header s logem „Galimatyáš") a patičku (kontakt + sociální sítě + © spolek).

## Vizuální koncept (redesign, ne kopie)

- **Barevnost**: teplá, hravá, ale kultivovaná — krémový podklad (#fcfbf8), tmavě zelená/baklažán jako primární, oranžovo-okrová akcentní (asociace s divadelní oponou, knihami, podzimem v Šumperku). Vše jako HSL tokeny v `index.css`.
- **Typografie**: výrazný serifový display font na nadpisy (např. Fraunces / Playfair) + čistý sans (Inter) na text. Styl hravý, ale čitelný.
- **Hero**: velký nadpis „Galimatyáš" s jemnou animací písmen (odkaz na rozsypaná písmena z originálu), podtitul „Hudebně-dramatické centrum", krátký claim a 2 CTA tlačítka.
- **Sekce**: vzdušné, zaoblené karty, jemné stíny, dekorativní ilustrace (notové klíče, masky, knížky) — buď SVG nebo placeholder.svg, dokud nedodáš fotky.
- **Responzivita**: mobile-first, hamburger menu pod 768 px.

## Technické detaily

- **Stack**: stávající React + Vite + Tailwind + shadcn/ui (už v projektu).
- **Routing**: rozšířit `App.tsx` o nové `<Route>` pro `/o-nas`, `/co-nabizime`, `/studio-my-dve`, `/kontakt`.
- **Nové soubory**:
  - `src/pages/Home.tsx` (přepíše Index)
  - `src/pages/About.tsx`
  - `src/pages/Offer.tsx`
  - `src/pages/Studio.tsx`
  - `src/pages/Contact.tsx`
  - `src/components/layout/Header.tsx` (nav s mobilním menu)
  - `src/components/layout/Footer.tsx`
  - `src/components/layout/Layout.tsx` (wrapper s Header + Outlet + Footer)
  - `src/components/home/Hero.tsx`, `PillarsSection.tsx`
- **Design tokeny**: rozšířit `src/index.css` o brand barvy (HSL) a `tailwind.config.ts` o brand color tokeny + custom fonty z Google Fonts (přes `<link>` v `index.html`).
- **SEO**: aktualizovat `index.html` — title „Spolek Galimatyáš — hudebně-dramatické centrum", description, og:title.
- **Obsah**: použijeme texty stažené z webu (O spolku, nabídka, kontakt). Tam, kde se obsah nepodařilo načíst (Studio My Dvě, detail aktivit), dáme jasné placeholder bloky s poznámkou „doplň text" — ty jako copywriter snadno přepíšeš.
- **Statické**: žádné API, žádný backend, žádná Lovable Cloud. Kontaktní formulář bude vizuální (s `mailto:` jako fallback), abychom dodrželi „statické stránky".

## Co zůstane na tobě

- Finální texty (jsi copywriter — necháme prostor pro tvůj styl)
- Skutečné fotky / ilustrace (zatím placeholdery)
- Případné logo ve vektoru (zatím jen typografické „Galimatyáš")

