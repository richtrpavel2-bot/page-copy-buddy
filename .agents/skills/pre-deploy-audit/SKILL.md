---
name: pre-deploy-audit
description: Kompletní kontrola webu před publikováním ve smyčce audit → diagnóza → oprava → re-test → porovnání; opravuje jen nalezené problémy bez redesignu, končí verdiktem READY FOR DEPLOY.
---

# /pre-deploy-audit

## Účel

Provést kompletní kontrolu webu před publikováním, najít skutečné problémy, bezpečně opravit ty, které lze opravit bez rizika, a po každé opravě ověřit výsledek.

Cílem není web redesignovat ani zbytečně refaktorovat.

Cílem je dostat projekt do stavu:

**READY FOR DEPLOY**

bez kritických chyb a bez regresí.

---

## Základní princip

Pracuj v opakované smyčce:

**AUDIT → DIAGNÓZA → OPRAVA → RE-TEST → POROVNÁNÍ**

Nikdy nepovažuj opravu za úspěšnou pouze proto, že byla provedena.

Po každé opravě musí následovat nové ověření.

---

# 1. AUDIT

Zkontroluj:

## SEO
- title
- meta description
- canonical
- H1–H3
- sitemap.xml
- robots.txt
- indexovatelnost
- interní odkazy
- Open Graph
- favicon
- Schema.org
- lokální SEO

## AI discoverability
Ověř, zda lze jednoznačně zjistit:

- kdo web provozuje
- co nabízí
- kde působí
- pro koho je služba určena
- jak jej kontaktovat

Důležité informace musí být dostupné jako skutečný HTML text.

---

## Mobilní UX
Kontroluj minimálně:

- 360 px
- 390 px
- 768 px
- desktop

Ověř:

- menu
- CTA
- formuláře
- horizontální overflow
- velikost ovládacích prvků
- texty
- obrázky
- hero
- footer
- sticky/fixed prvky

---

## Výkon

Kontroluj zejména:

- LCP
- velikost obrázků
- JavaScript bundle
- unused JavaScript
- unused CSS
- načítání fontů
- počet font weights
- lazy loading
- third-party skripty
- render-blocking resources
- CLS
- zbytečné knihovny

---

## Přístupnost

Kontroluj:

- alt texty
- kontrast
- semantic HTML
- heading hierarchy
- keyboard navigation
- focus state
- formulářové labely
- ARIA
- language attribute

---

## Funkčnost

Otestuj:

- navigaci
- interní odkazy
- externí odkazy
- formuláře
- CTA
- mailto
- tel
- PDF/download odkazy
- 404
- routování

---

## Technická kontrola

Kontroluj:

- build
- console errors
- runtime errors
- hydration errors
- HTTPS
- redirects
- env variables
- exposed secrets
- production URL
- sitemap
- robots
- analytics
- manifest

---

## Bezpečnost

Kontroluj:

- zranitelné dependencies
- zastaralé kritické balíčky
- exposed secrets
- nebezpečné HTML injection
- externí skripty
- nečekané databázové změny
- příliš široká oprávnění

---

# 2. KLASIFIKACE

Každý nález označ:

### PASS
Bez relevantního problému.

### WARNING
Web funguje, ale existuje smysluplné zlepšení.

### FAIL
Problém musí být vyřešen před publikováním.

U každého WARNING/FAIL uveď:

- kde problém je
- co je špatně
- proč je to problém
- doporučenou opravu
- riziko opravy
- zda ji lze bezpečně provést automaticky

---

# 3. AUTOMATICKÁ OPRAVA

Automaticky oprav pouze změny, které jsou:

- lokální
- jasně odůvodněné
- reverzibilní
- nízkorizikové

Typicky lze automaticky opravit:

- chybějící alt
- špatnou heading hierarchy
- broken internal link
- mobilní overflow
- špatný breakpoint
- příliš velký obrázek
- chybějící label
- metadata
- drobnou accessibility chybu
- zbytečné načítání zdroje

---

# 4. ZAKÁZANÉ AUTOMATICKÉ ZÁSAHY

Bez výslovného schválení nikdy:

- neměň DNS
- nepřeváděj doménu
- nemaž produkční data
- neměň billing
- neměň autentizaci
- neprováděj destruktivní migrace
- nemaž celý projekt
- neměň hosting
- neměň zásadně framework
- nepublikuj nevratné změny

---

# 5. CHANGE-SCOPE PROTECTION

Opravuj vždy pouze nejmenší nutnou část.

Příklad:

Mobilní CTA přetéká.

Správně:
- upravit CTA nebo příslušný breakpoint

Špatně:
- přestavět celou stránku

Nefunkční H1:

Správně:
- opravit H1

Špatně:
- přepsat celý obsah stránky

---

# 6. RE-TEST

Po každé opravě proveď znovu relevantní kontrolu.

Ověř:

- původní chyba zmizela
- nevznikla nová chyba
- desktop stále funguje
- mobil stále funguje
- build stále prochází
- SEO se nezhoršilo
- výkon se nezhoršil

---

# 7. POROVNÁNÍ PŘED / PO

Pokud jsou dostupná původní data, porovnej například:

- LCP před / po
- bundle před / po
- unused JS před / po
- velikost obrázků před / po
- počet console errors před / po
- accessibility issues před / po
- broken links před / po

Oprava nesmí být považována za úspěšnou, pokud pouze přesune problém jinam.

---

# 8. OPAKOVACÍ SMYČKA

Pokud po re-testu stále existuje FAIL:

1. znovu diagnostikuj příčinu
2. proveď další bezpečnou opravu
3. znovu otestuj

Neopakuj bezhlavě stejné řešení.

Pokud problém nelze bezpečně vyřešit automaticky, zastav opravu a označ:

**REQUIRES HUMAN APPROVAL**

---

# 9. STOP PODMÍNKY

Audit skončí, když:

- nejsou žádné FAIL
- všechny automaticky provedené opravy byly znovu ověřeny
- nevznikla významná regrese
- projekt se úspěšně sestaví

Potom lze vydat:

**READY FOR DEPLOY**

---

# 10. FINÁLNÍ REPORT

Výstup musí být stručný.

## PRE-DEPLOY AUDIT

### Celkový stav
PASS / WARNING / FAIL / READY FOR DEPLOY

### Opraveno automaticky
Co bylo změněno a proč.

### Zbývající FAIL
Pouze kritické problémy.

### WARNING
Doporučená, ale neblokující zlepšení.

### Výkon
Klíčové hodnoty a případné regrese.

### SEO + AI
Výsledek kontroly.

### Mobil
Výsledek kontroly.

### Přístupnost
Výsledek kontroly.

### Bezpečnost
Výsledek kontroly.

### Finální verdikt
READY FOR DEPLOY / NOT READY / REQUIRES HUMAN APPROVAL

---

# Hlavní pravidlo

Neoptimalizuj web „pro jistotu“.

Neprováděj redesign.

Neprováděj rozsáhlý refactoring, pokud jej audit nevyžaduje.

**Najdi konkrétní problém → oprav nejmenší možnou část → znovu ověř výsledek.**