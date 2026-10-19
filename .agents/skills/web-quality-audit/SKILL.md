---
name: web-quality-audit
description: Kompletní audit kvality webu (SEO, výkon, UX/UI, přístupnost, bezpečnost, technická kvalita) s baseline, prioritami a historií. Použij při žádosti o audit kvality webu; bez souhlasu nic neměnit.
---

# /web-quality-audit

Proveď kompletní audit kvality aktuálního webového projektu.

Cílem je najít skutečné problémy v oblastech:

1. SEO
2. výkon
3. UX/UI
4. přístupnost
5. bezpečnost
6. technická kvalita kódu

Neprováděj žádné změny bez mého výslovného souhlasu.

Nejdříve vytvoř audit a seřaď problémy podle priority.

---

## 1. BASELINE

Nejdříve zaznamenej současný stav projektu.

Uveď:

- framework a jeho verzi,
- React verzi,
- build nástroj,
- hlavní závislosti,
- velikost výsledného JavaScript bundle,
- LCP,
- CLS,
- INP,
- TBT, pokud je dostupný,
- počet nebo velikost nepoužitého JavaScriptu,
- způsob načítání fontů,
- způsob načítání obrázků.

Pokud některý údaj nelze změřit, napiš:

**NEMĚŘENO**

Nevymýšlej hodnoty.

Baseline uchovej pro pozdější porovnání.

---

# 2. SEO AUDIT

Zkontroluj všechny důležité stránky.

Kontroluj zejména:

- unikátní `<title>`,
- meta description,
- právě jedno hlavní H1,
- správnou hierarchii H1–H3,
- canonical URL,
- robots.txt,
- sitemap.xml,
- indexovatelnost,
- interní odkazy,
- nefunkční odkazy,
- URL strukturu,
- duplicitní metadata,
- Open Graph metadata,
- sociální náhledy.

## Obrázkové SEO

Zkontroluj:

- `alt` texty,
- popisné názvy souborů,
- rozměry obrázků,
- WebP/AVIF,
- správný lazy loading,
- zda hlavní LCP obrázek není lazy-loaded,
- zda významové obrázky nejsou zbytečně pouze CSS background.

## Strukturovaná data

Prověř, zda dává smysl použít schema.org, například:

- LocalBusiness,
- Organization,
- Person,
- Service,
- Article,
- BreadcrumbList,
- FAQPage.

Nevytvářej strukturovaná data s nepravdivými údaji.

---

# 3. VÝKON

Zaměř se především na mobilní zařízení.

## Core Web Vitals

Kontroluj:

- LCP,
- CLS,
- INP.

Dále kontroluj:

- TBT,
- velikost bundle,
- nepoužitý JavaScript,
- velké knihovny,
- zbytečné komponenty,
- dlouhé hlavní vlákno,
- blokující skripty,
- načítání fontů,
- obrázky,
- lazy loading,
- caching.

## JavaScript

Najdi:

- knihovny používané jen kvůli jednoduché funkci,
- mrtvý kód,
- nepotřebné importy,
- zbytečné závislosti,
- komponenty způsobující nadměrné re-renderování.

Preferuj:

**jednoduché React/CSS řešení před další knihovnou.**

---

# 4. UX/UI

Posuzuj web především na mobilu.

Kontroluj:

- čitelnost,
- velikost písma,
- kontrast,
- velikost tlačítek,
- vzdálenosti mezi ovládacími prvky,
- navigaci,
- formuláře,
- viditelnost CTA,
- hierarchii obsahu,
- délku textových bloků,
- horizontální scroll,
- modální okna,
- cookie lištu,
- sticky prvky,
- animace.

Preferuj:

- čistý design,
- velké prvky,
- jednoduché ovládání,
- moderní vzhled,
- minimum vizuálního šumu.

Každý problém popiš z pohledu skutečného uživatele.

---

# 5. PŘÍSTUPNOST

Zkontroluj zejména:

- ovládání klávesnicí,
- focus states,
- kontrast,
- formulářové labely,
- ARIA pouze tam, kde je potřebná,
- alt texty,
- správné použití tlačítek a odkazů,
- pořadí nadpisů,
- velikost ovládacích prvků.

Nepoužívej ARIA jako náhradu za správné HTML.

---

# 6. BEZPEČNOST

Zjisti:

- použitý framework,
- jeho verzi,
- verze důležitých závislostí.

Zkontroluj:

- známé zranitelnosti,
- zastaralé balíčky,
- neudržované knihovny,
- problematické závislosti,
- `package.json`,
- lockfile.

## Tajné údaje

Povinně zkontroluj, zda klientský kód nebo repozitář neobsahuje:

- privátní API klíče,
- access tokeny,
- hesla,
- service-role klíče,
- soukromé JWT,
- databázová hesla,
- citlivé `.env` hodnoty.

Rozlišuj mezi:

- veřejným klientským klíčem, který je určený pro frontend,
- skutečným tajným klíčem, který ve frontendu být nesmí.

Nález tajného klíče označ jako:

**KRITICKÉ**

---

# 7. TECHNICKÁ KVALITA

Zkontroluj:

- duplicity komponent,
- zbytečně složitý kód,
- mrtvý kód,
- nevyužité importy,
- TypeScript chyby,
- build warnings,
- console chyby,
- chybějící error handling.

Nenavrhuj rozsáhlý refactoring pouze kvůli estetice kódu.

Prioritu mají změny s reálným přínosem.

---

# 8. PRIORITY

Každý problém zařaď do jedné z kategorií:

🔴 **KRITICKÉ**
- bezpečnost,
- nefunkční web,
- ztráta dat,
- zásadní SEO chyba.

🟠 **VYSOKÁ**
- výrazný dopad na výkon,
- LCP,
- UX,
- indexaci.

🟡 **STŘEDNÍ**
- vhodné opravit,
- ale web může fungovat bez okamžitého zásahu.

⚪ **NÍZKÁ**
- kosmetické nebo dlouhodobé zlepšení.

---

# 9. VÝSTUP

Na konci vytvoř stručnou tabulku:

| Oblast | Stav | Skóre | Hlavní problém |
|---|---|---:|---|
| SEO | PASS/WARNING/FAIL | 0–100 | ... |
| Výkon | PASS/WARNING/FAIL | 0–100 | ... |
| UX/UI | PASS/WARNING/FAIL | 0–100 | ... |
| Přístupnost | PASS/WARNING/FAIL | 0–100 | ... |
| Bezpečnost | PASS/WARNING/FAIL | 0–100 | ... |

Skóre nepoužívej jako náhradu odborného hodnocení.

Potom vypiš:

### OPRAVIT HNED

Maximálně 5 nejdůležitějších problémů.

### DALŠÍ KROK

Vyber **jediný zásah**, který má nyní nejlepší poměr:

**přínos / riziko / čas práce**

---

# 10. HISTORIE AUDITŮ

Pokud existuje předchozí audit, porovnej výsledky.

Sleduj:

**HISTORIE AUDITŮ → ÚSPĚŠNOST OPRAV → VÝVOJ VÝKONU WEBU**

U každé opravy zaznamenej:

- problém,
- původní hodnotu,
- provedenou změnu,
- novou hodnotu,
- výsledek.

Výsledek označ:

- ZLEPŠENÍ,
- BEZE ZMĚNY,
- REGRESE.

Pokud oprava způsobila regresi, výslovně na ni upozorni.

Nikdy nepovažuj opravu za úspěšnou pouze proto, že byl změněn kód.

**Úspěšná oprava musí být ověřena novým měřením nebo kontrolou.**