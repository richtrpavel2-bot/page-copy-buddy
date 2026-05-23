
# Úpravy navigace, kontaktů a obsahu

## 1. Hlavní menu (Header + Footer)

Nové horní menu:
- Domů
- Aktuálně
- O spolku  ← pod ní (na podstránce O spolku) přesunout odkaz "Co nabízíme"
- **Fotogalerie**  (nahrazuje "Co nabízíme" v hlavním menu)
- **Komorní divadlo**  (přejmenované Studio My Dvě)
- **E-shop**  (přejmenované Nakladatelství LIMONÁDA)
- Kontakt

Routy zůstanou stejné (`/studio-my-dve`, `/nakladatelstvi-limonada`) — jen popisky se změní, aby neutrpěly stávající odkazy. Stejné změny popisků promítnu i do Footeru.

## 2. Stránka O spolku (`/o-nas`)

V dlaždicích "Prozkoumejte další":
- **Fotogalerie → nahradit "Co nabízíme"** (odkaz `/co-nabizime`)
- **Projekt Šablony → nahradit "Festival Zpátky ke kořenům"**

Festival zatím nemá vlastní stránku — vytvořím `src/pages/FestivalKoreny.tsx` jako jednoduchou placeholder stránku ve stejném stylu jako ostatní podstránky (nadpis, perex, kontakt), s routou `/o-nas/festival-zpatky-ke-korenum`. Obsah doplníš později.

Stránku Projekt Šablony (`/o-nas/sablony`) ponechám dostupnou, jen ji odeberu z dlaždic.

## 3. Stránka Domů

**Hero** (dvě tlačítka „Co nabízíme" + „O spolku"):
- odstranit tlačítko **Co nabízíme**
- ponechat jen **O spolku** (případně doplnit druhý CTA — viz otázka níže)

**Spodní CTA blok** („Pojďte si s námi hrát"):
- ponechat tlačítko **Napište nám**
- místo **Studio My Dvě** odkaz na **Fotogalerii** (`/fotogalerie`)

## 4. Kontakty (Footer + stránka Kontakt)

Aktualizovat všude:
- Telefon: **+420 605 173 410**
- Sídlo: **Sadová 158/4, Šumperk**
- Provozovna: **Starobranská 16, Šumperk 787 01**
- Kontakt na e-shop: **+420 605 173 410**
- Číslo účtu: **KB 107-1746420217/0100**
- Facebook: https://www.facebook.com/SpolekGalimatyas1/
- Instagram: https://www.instagram.com/spolekgalimatyas/  (přidat novou ikonu vedle Facebooku)

E-mail (`info@spolekgalimatyas.cz`) ponechám — pokud chceš jiný, napiš.

## Technické detaily

- `src/components/layout/Header.tsx` — upravit `navItems`
- `src/components/layout/Footer.tsx` — popisky odkazů, kontakty, Instagram
- `src/pages/About.tsx` — pole `subpages` (Fotogalerie → Co nabízíme, Šablony → Festival)
- `src/pages/Home.tsx` + `src/components/home/Hero.tsx` — úprava CTA
- `src/pages/Contact.tsx` — telefon, adresy, účet, FB/IG
- nová stránka `src/pages/FestivalKoreny.tsx` + route v `src/App.tsx`

## Otázky před implementací

1. **Hero na Domů**: Mám nechat jen jedno tlačítko **O spolku**, nebo druhé nahradit (např. **Fotogalerie** nebo **E-shop**)?
2. **„Komorní divadlo"** — chceš změnit i URL na `/komorni-divadlo`, nebo nechat `/studio-my-dve` (kvůli již sdíleným odkazům)?
3. **„E-shop"** — totéž, nechat `/nakladatelstvi-limonada` nebo změnit na `/e-shop`? A má e-shop zůstat jako přehled knih Limonády, nebo přepracovat na obecný e-shop (zatím obsahově stejný, jen přejmenovaný)?
