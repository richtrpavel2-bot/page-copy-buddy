## Změny na webu

### 1. Stránka „Lidé" (`/o-nas/lide`) — přepsat externí tým
Nahradit stávající seznam externích kolegů novým seznamem podle dodaného textu. Ke každému člověku jméno, role a „přezdívka" (podtitul). U 9 osob přiložené fotky, u posledních dvou fotka není.

Nový seznam:
- **Soňa Vávrová** — organizátorka festivalu Zpátky ke kořenům / *hnací síla Galimatyáše*
- **Zuzana Hošková** — propagace, finanční záležitosti / *vlídná tvář Galimatyáše*
- **Jana Hrochová** — technická spolupráce / *selský rozum Galimatyáše* (fotka společná s Pavlem Skyvou)
- **Pavel Skyva** — mistr technik / *vždy rychlá záchrana Galimatyáše* (fotka společná s Janou)
- **Eva Pšenčíková** — kreativní sektor / *tichá a klidná náruč Galimatyáše*
- **Anna Muratidisová** — kreativní sektor / *humor a spříznění Galimatyáše*
- **Stanislav Kučera** — technická spolupráce / *pole zkušeností Galimatyáše*
- **Veronika Šubrtová** — kreativní sektor / *krásná tvář Galimatyáše*
- **Alfréd Schönberg** — mecenáš a podporovatel festivalu Zpátky ke kořenům (fotka židle s cedulkou)

Pod seznam přidat větu: „…a další dospělí a děti, kteří nejsou tolik vidět, ale jsou s námi :)"

Zakladatelky Tereza a Lucie zůstávají beze změny.

Fotky nahrát z uploadů jako lovable assets (Jana+Pavel sdílí jednu fotku — zobrazit u obou nebo jako jednu společnou kartu; navrhuji **jednu společnou kartu** „Jana Hrochová & Pavel Skyva" se dvěma řádky role/přezdívky, aby fotka nebyla duplikovaná).

### 2. Stránka „Domů" — nové texty
- Hero claim: „**GALIMATYÁŠ** — …místo, kde se potkávají příběhy… …divadlo, hudba, festival, autorská čtení, besedy, výstavy, obchůdek Drzá opička… **Kulturní akce, které spojují.**"
- Tři pilíře přepsat:
  1. **Divadlo** — autorská divadelní představení pro veřejnost i třídní kolektivy, u nás i venku, zájezdní představení
  2. **Volnočasové aktivity** — široká nabídka divadelních skupin i hodin zpěvu, účast na celostátních divadelních přehlídkách
  3. **Zpátky ke kořenům** — kulturní festival určený široké veřejnosti, představení, besedy, koncerty, výstavy

### 3. Stránka „O spolku" (`/o-nas`) — nové texty
- Nadpis + úvod: „**Kdo je Galimatyáš?** Jsme uskupení lidí, kteří stále hledají krásu v umění. Divadlo, hudba, mluvený projev, obrazy, pohyb, světlo. Prostřednictvím našich kulturních akcí nacházíme pospolitost a klid. A s notnou dávkou radosti sdružujeme jedny z nejkreativnějších jedinců našeho města Šumperk i okolí."
- Vyměnit hero obrázek za nově nahraný `O_spolku.jpg` (domeček s prádelní šňůrou) — nahrát jako lovable asset.
- **Naše poslání** — přepsat na nový text (bezpečný prostor pro tvorbu, děti/dospělé, diváky + odstavec o kultuře).
- **Hodnoty** — přejmenovat a přepsat:
  - **S lehkostí** — „Vše, co děláme nám působí radost a pohání nás to dál – k vám i do výšin umělecké tvorby."
  - **Společně** — „Jsme tým, ve kterém se navzájem obohacujeme. Nezávisle na věku či profesním zaměření. Všichni na jednom krásném velkém jevišti světa."
  - **Hravě** — „Fantazie nás zavede daleko ve smýšlení i nazírání na vlastní život. Každá velká věc začíná v myšlence. A divadlo je plné těchto myšlenek."
- Rozcestník „Prozkoumejte další" — přidat/zajistit proklik na **Spolek GALIMATYÁŠ** (`/o-nas/spolek`). Dnes tam už je, ověřím pořadí.

### 4. Stránka „Spolek GALIMATYÁŠ" — mikroúprava
V sekci „Nabízíme" → **Divadelní představení a dílny** změnit odkaz „Studio My Dvě" na **Komorní divadlo** (text a cíl na `/studio-my-dve`, popisek „v záložce Komorní divadlo").

### 5. Stránka „Podporují nás" (`/o-nas/podporuji-nas`)
- Odstranit loga: **Ministerstvo kultury ČR**, **Národní plán obnovy**, **Evropská unie — NextGenerationEU**.
- Přidat firemního partnera: **Hudebniny Nový Malín**. Logo přijde v příloze — v plánu počítám s doplněním; do doby doručení použiji textovou kartu bez loga (placeholder), přepnu na logo hned, jak ho pošleš.

### 6. Stránka „Jak nás můžete podpořit" (`/o-nas/jak-nas-podporit`)
Upravit položku „Nakupujte v obchůdku" na text:
> **Nakupujte v obchůdku DRZÁ OPIČKA** — Každý nákup nás podpoří.

### Technické detaily
- Fotky lidí přes `lovable-assets create` z `/mnt/user-uploads/` → JSON pointery v `src/assets/lide/` → import v `src/data/team.ts`.
- Obrázek `O_spolku.jpg` stejným způsobem → nahradit `heroAbout` v `src/pages/About.tsx`.
- Datový model `ExternalMember` v `src/data/team.ts` rozšířit o pole `tagline` (přezdívka „…Galimatyáše"). Karta v `src/pages/People.tsx` bude zobrazovat jméno + role + tagline (kurzívou).
- Jana Hrochová + Pavel Skyva: společná karta (dvě jména, dvě role, dvě taglines, jedna fotka).
- Alfréd Schönberg: jen jedna role (bez taglinu), fotka židle.

### Otevřené otázky (nebrání plánu — vyřeším při implementaci pokud nebudou včas):
- Logo **Hudebniny Nový Malín** — použiji textovou dlaždici do doby doručení.
- Jana + Pavel jako společná karta ✅ (můžeš ještě korigovat po nasazení).
