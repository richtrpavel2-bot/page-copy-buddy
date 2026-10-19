---
name: post-deploy-audit
description: Kontrola webu po skutečném nasazení do produkce — ověření nasazené verze, stránek, mobilu, formulářů, SEO, strukturovaných dat, obrázků, fontů, Core Web Vitals, bundle, sítě, cache a hosting (Netlify/WEDOS), porovnání s předchozím auditem, registrace regrese a finální verdikt PRODUKCE V POŘÁDKU / S VÝHRADAMI / KRITICKÝ PROBLÉM. Použij při /post-deploy-audit nebo žádosti o kontrolu po nasazení.
---

# /post-deploy-audit

Proveď kontrolu webu po skutečném nasazení do produkce.

Cílem je ověřit, že nasazená verze funguje správně a že se po deployi neobjevily nové chyby, regrese nebo problémy s výkonem.

Neprováděj žádné změny bez mého výslovného souhlasu.

Vycházej z výsledků:

`/web-quality-audit`

a

`/pre-deploy-audit`

Pokud předchozí výsledky nejsou dostupné, vytvoř novou baseline.

---

# 1. OVĚŘ PRODUKČNÍ VERZI

Zkontroluj:

- zda web skutečně běží,
- zda je nasazena očekávaná verze,
- zda funguje HTTPS,
- zda nedochází k redirect loop,
- zda je správná hlavní doména,
- zda funguje varianta `www` / bez `www`,
- zda nejsou viditelné chyby serveru.

Výsledek:

**PASS / WARNING / FAIL**

---

# 2. HLAVNÍ STRÁNKY

Otevři a zkontroluj všechny důležité stránky.

Minimálně:

- homepage,
- hlavní služby,
- kontakt,
- důležité podstránky,
- 404 stránku.

Kontroluj:

- správné načtení,
- rozbitý layout,
- chybějící obrázky,
- nefunkční komponenty,
- console chyby,
- chyby v routingu.

---

# 3. MOBILNÍ KONTROLA

Zkontroluj produkční web na mobilním viewportu.

Hledej:

- horizontální scroll,
- špatné zalamování,
- malé texty,
- překryté prvky,
- nefunkční menu,
- problémy s formuláři,
- špatně umístěná CTA,
- příliš velké fixed/sticky prvky.

---

# 4. FORMULÁŘE

Otestuj skutečné produkční formuláře.

Prověř:

- odeslání,
- validaci,
- potvrzení po odeslání,
- error stav,
- spam ochranu,
- správnou cílovou adresu nebo backend.

Pokud hlavní kontaktní formulář nefunguje:

**POST-DEPLOY = FAIL**

---

# 5. SEO PO NASAZENÍ

Ověř na živém webu:

- `<title>`,
- meta description,
- H1,
- canonical,
- robots.txt,
- sitemap.xml,
- indexovatelnost,
- Open Graph metadata,
- favicon.

Zkontroluj, zda produkce není omylem:

`noindex`

nebo blokovaná přes `robots.txt`.

Pokud ano:

**SEO = FAIL**

---

# 6. STRUKTUROVANÁ DATA

Pokud web používá schema.org, zkontroluj:

- zda jsou data skutečně přítomná,
- zda odpovídají obsahu stránky,
- zda neobsahují falešné nebo zastaralé údaje.

---

# 7. OBRÁZKY

Na živém webu zkontroluj:

- nefunkční obrázky,
- 404 obrázky,
- velikost souborů,
- WebP/AVIF,
- `alt`,
- lazy loading,
- LCP obrázek,
- správné rozměry.

Hlavní obrázek nad přehybem nesmí být zbytečně lazy-loaded.

---

# 8. FONTY

Prověř:

- zda se fonty načítají,
- zda nedochází k FOIT/FOUT problémům,
- zda se nestahují zbytečné řezy,
- zda fonty neblokují render,
- zda nejsou chyby v síťových požadavcích.

---

# 9. CORE WEB VITALS

Změř nebo získej dostupné hodnoty:

- LCP,
- CLS,
- INP,
- TBT,
- případně FCP a Speed Index.

Zvlášť sleduj mobil.

Výsledky porovnej s:

- baseline,
- posledním `/pre-deploy-audit`,
- předchozí produkční verzí.

---

# 10. JAVASCRIPT A BUNDLE

Zkontroluj:

- velikost JS bundle,
- unused JS,
- zbytečně velké knihovny,
- nové skripty třetích stran,
- chyby v konzoli,
- dlouhé tasky.

Každé výrazné zhoršení označ:

**REGRESE**

---

# 11. SÍŤOVÉ POŽADAVKY

Zkontroluj:

- 404,
- 500,
- blokované requesty,
- CORS chyby,
- nefunkční API endpointy,
- pomalé requesty,
- zbytečné third-party skripty.

---

# 12. CACHE A HEADERS

Pokud je možné zjistit, prověř:

- cacheování statických souborů,
- kompresi,
- cache-control,
- bezpečnostní hlavičky,
- případné CDN chování.

---

# 13. NETLIFY / WEDOS KONTROLA

Pokud je web na Netlify, zkontroluj:

- produkční deploy,
- deploy log,
- build warningy,
- redirects,
- functions,
- environment variables,
- případné runtime chyby.

Pokud je web na WEDOS, zkontroluj:

- správně nahrané soubory,
- hlavní index,
- routování,
- HTTPS,
- cesty k assetům,
- případné rozdíly oproti lokálnímu buildu.

---

# 14. REGRESE PO DEPLOYI

Porovnej s předchozí verzí.

Sleduj zejména:

- horší LCP,
- horší CLS,
- vyšší TBT,
- větší bundle,
- více unused JS,
- nové console chyby,
- chyby formulářů,
- SEO problémy,
- nefunkční obrázky,
- chyby routingu.

Každou změnu klasifikuj:

- ZLEPŠENÍ
- BEZE ZMĚNY
- REGRESE

---

# 15. HISTORIE AUDITŮ

Aktualizuj:

**HISTORIE AUDITŮ → ÚSPĚŠNOST OPRAV → VÝVOJ VÝKONU WEBU**

U každé dříve provedené opravy zaznamenej:

- co se měnilo,
- jaký byl očekávaný přínos,
- jaký je skutečný výsledek,
- zda se objevila regrese.

Opravu nepovažuj za úspěšnou bez ověření na produkčním webu.

---

# 16. FINÁLNÍ VÝSTUP

Na konci vrať jedno z těchto rozhodnutí:

## ✅ PRODUKCE V POŘÁDKU

Web funguje správně a nebyla nalezena významná regrese.

## ⚠️ PRODUKCE FUNGUJE S VÝHRADAMI

Web funguje, ale existují problémy, které je vhodné opravit.

## ❌ PRODUKCE MÁ KRITICKÝ PROBLÉM

Existuje problém, který vyžaduje rychlou opravu nebo rollback.

---

# 17. SHRNUTÍ

Nakonec zobraz pouze:

### KRITICKÉ PROBLÉMY
Maximálně 5.

### REGRESE
Pouze skutečně nové nebo zhoršené věci.

### CO SE ZLEPŠILO
Významná zlepšení oproti předchozí verzi.

### NEJDŮLEŽITĚJŠÍ DALŠÍ KROK
Vyber právě jeden krok s nejvyšším přínosem.
