## Plán úprav

### 1. Hlavní stránka E-shop (`src/pages/Limonada.tsx`)
Smazat dosavadní obsah (knihy, kontakty) a nechat jen tři dlaždice / odkazy:
- **Internetový obchod** — placeholder „Připravujeme" (zatím bez odkazu)
- **Pravidla ochrany soukromí** → `/nakladatelstvi-limonada/ochrana-soukromi`
- **Obchodní podmínky** → `/nakladatelstvi-limonada/obchodni-podminky`

Hero ponechat ve stylu webu, nadpis „E-shop".

### 2. Podstránky E-shopu (nové)
- `src/pages/EshopOchranaSoukromi.tsx` — nadpis + místo pro text, odkaz „← Zpět na E-shop"
- `src/pages/EshopObchodniPodminky.tsx` — stejně
- Registrovat v `src/App.tsx` jako podstránky pod `/nakladatelstvi-limonada/...`

### 3. Sjednocení „Zpět na O spolku" na všech podstránkách `/o-nas/*`
- `SpolekGalimatyas.tsx` — opravit „Zpět na O nás" → „Zpět na O spolku"
- `People.tsx`, `Partners.tsx`, `Support.tsx`, `Sablony.tsx` — přidat odkaz „← Zpět na O spolku" do hero sekce
- `FestivalKoreny.tsx` — už má, ponechat

### 4. Odstranit veřejné zmínky o Lovable
- `README.md` — přepsat na popis projektu Spolek Galimatyáš
- `index.html` — odebrat `og:image` s `lovable.dev` (nahradím vlastním obrázkem / favicon)

*Poznámka: `lovable-tagger` v `package.json` a `vite.config.ts` je interní vývojový nástroj, který návštěvník webu nevidí — nechávám, jinak se rozbije editace projektu.*

### 5. Návrat na úvodní stránku
Logo v hlavičce už vede na `/` a hlavička je všude přes `Layout.tsx`. Není potřeba nic přidávat.

### Soubory
**Nové:** `EshopOchranaSoukromi.tsx`, `EshopObchodniPodminky.tsx`
**Upravené:** `Limonada.tsx`, `App.tsx`, `SpolekGalimatyas.tsx`, `People.tsx`, `Partners.tsx`, `Support.tsx`, `Sablony.tsx`, `README.md`, `index.html`