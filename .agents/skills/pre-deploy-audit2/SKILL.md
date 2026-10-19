---
name: pre-deploy-audit2
description: Rozšířená kontrola webu před zveřejněním (verze 2) s baseline, kontrolou tajných klíčů, opravami, re-testem, rollbackem a historií auditů. Použij při žádosti o kontrolu před nasazením verze 2.
---

# /pre-deploy-audit

Proveď poslední kontrolu projektu před produkčním nasazením.

Tento audit je **blokující kontrola**.

Nevytvářej nové funkce ani redesign.

Neprováděj žádné změny bez mého souhlasu.

Vycházej z pravidel `/web-quality-audit`, ale zaměř se pouze na věci, které mohou způsobit problém po nasazení.

---

# 1. BUILD

Spusť nebo ověř produkční build.

Kontroluj:

- build errors,
- TypeScript errors,
- závažné warnings,
- chybějící soubory,
- nefunkční importy,
- neexistující routes.

Výsledek:

**PASS / WARNING / FAIL**

Pokud build selže:

**DEPLOY = FAIL**

---

# 2. BEZPEČNOST – POVINNÁ KONTROLA

Zjisti:

- framework,
- verzi frameworku,
- React verzi,
- hlavní závislosti.

Prověř známé bezpečnostní problémy.

Zkontroluj:

- zastaralé balíčky,
- zranitelné závislosti,
- neudržované balíčky,
- package.json,
- lockfile.

## API klíče a tajné údaje

Povinně prohledej klientský kód a repozitář.

Hledej:

- API keys,
- secrets,
- access tokens,
- passwords,
- private keys,
- service-role keys,
- databázová hesla,
- citlivé environment proměnné.

Zvlášť kontroluj:

- `.env`,
- `.env.local`,
- `.env.production`,
- zdrojové soubory,
- config soubory,
- historii omylem vložených hodnot, pokud je dostupná.

Pokud je skutečně tajný klíč dostupný klientovi:

**DEPLOY = FAIL**

Nestačí klíč pouze odstranit z aktuálního souboru.

Pokud byl zveřejněn, upozorni, že může být nutné jej také zneplatnit a vytvořit nový.

---

# 3. SEO

Před nasazením ověř:

- title,
- description,
- H1,
- canonical,
- robots.txt,
- sitemap,
- indexovatelnost,
- Open Graph,
- favicon.

Zvlášť ověř, že produkční web není omylem nastaven jako:

`noindex`

Pokud je produkční web `noindex` bez jasného důvodu:

**SEO = FAIL**

---

# 4. OBRÁZKY

Zkontroluj:

- chybějící obrázky,
- špatné cesty,
- zbytečně obří soubory,
- alt texty,
- lazy loading.

Hlavní LCP obrázek:

- nesmí být zbytečně lazy-loaded,
- musí mít vhodnou velikost,
- nesmí blokovat hlavní obsah.

---

# 5. FONTY

Prověř:

- počet fontů,
- počet řezů,
- WOFF2,
- `font-display`,
- blokování renderu.

Pokud fonty výrazně zhoršují první vykreslení, označ:

**WARNING**

---

# 6. MOBILNÍ KONTROLA

Povinně zkontroluj nejdůležitější stránky na mobilním viewportu.

Hledej:

- horizontální scroll,
- překryté prvky,
- příliš malé texty,
- příliš malé klikací plochy,
- rozbité menu,
- špatné modální okno,
- formuláře mimo viewport,
- překryté CTA.

---

# 7. FORMULÁŘE

Otestuj všechny důležité formuláře.

Prověř:

- povinná pole,
- chyby formuláře,
- validaci,
- potvrzení o odeslání,
- nefunkční submit,
- ochranu proti opakovanému odeslání.

Pokud hlavní kontaktní formulář nefunguje:

**DEPLOY = FAIL**

---

# 8. ODKAZY A ROUTING

Zkontroluj:

- hlavní navigaci,
- CTA,
- interní odkazy,
- externí odkazy,
- 404,
- přímé otevření podstránek.

U SPA ověř, že přímé otevření URL funguje také po deployi.

Například:

`/sluzby`

musí fungovat i při přímém otevření nebo reloadu.

---

# 9. VÝKON

Porovnej projekt s poslední známou baseline.

Sleduj:

- LCP,
- CLS,
- INP,
- TBT,
- JavaScript bundle,
- unused JS,
- obrázky,
- fonty.

Nepovažuj malou změnu Lighthouse skóre za problém sama o sobě.

Sleduj hlavně skutečné metriky.

---

# 10. REGRESE

Porovnej s posledním auditem nebo produkční verzí.

Výslovně označ:

- horší LCP,
- horší CLS,
- větší bundle,
- více unused JS,
- nové console chyby,
- nové SEO chyby,
- nové bezpečnostní problémy.

Každou regresi označ:

**REGRESE**

---

# 11. HISTORIE ÚSPĚŠNOSTI OPRAV

Aktualizuj:

**HISTORIE AUDITŮ → ÚSPĚŠNOST OPRAV → VÝVOJ VÝKONU WEBU**

Pro každou dříve doporučenou opravu zjisti:

- byla provedena?
- problém skutečně zmizel?
- zlepšila se metrika?
- nezpůsobila jiný problém?

Výsledek:

- ÚSPĚŠNÁ,
- ČÁSTEČNĚ ÚSPĚŠNÁ,
- NEÚSPĚŠNÁ,
- REGRESE.

---

# 12. FINÁLNÍ ROZHODNUTÍ

Na konci vrať pouze jedno hlavní rozhodnutí:

## ✅ DEPLOY

Web lze nasadit.

nebo

## ⚠️ DEPLOY S UPOZORNĚNÍM

Web lze nasadit, ale existují problémy, které nejsou blokující.

nebo

## ❌ NENASAZOVAT

Existuje problém, který musí být před produkčním nasazením opraven.

---

# 13. SHRNUTÍ

Nakonec vytvoř:

### BLOKERY

Pouze skutečné blokery nasazení.

### REGRESE

Co se oproti předchozí verzi zhoršilo.

### OPRAVIT POZDĚJI

Neblokující problémy.

### NEJDŮLEŽITĚJŠÍ DALŠÍ KROK

Vyber právě **jeden** další krok s nejvyšším přínosem.

Nevytvářej desítky doporučení bez priority.