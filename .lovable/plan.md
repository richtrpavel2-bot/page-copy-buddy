

# Plán: Přidání kruhového loga „Galimatyáš"

Nahraje se nahrané logo (kruhové, s notou a nápisem „Spolek Galimatyáš") do projektu a použije se v hlavičce, patičce a jako favicon. Textový nápis „Galimatyáš" vedle loga **odstraníme** — logo už text obsahuje, takže by se duplikoval.

## Kroky

1. **Uložení loga**
   - Zkopírovat `user-uploads://logo.png` → `src/assets/logo.png` (pro bundling v Header/Footer)
   - Zkopírovat také → `public/favicon.png` (pro favicon)
   - Smazat `public/favicon.ico`, pokud existuje (jinak přebije nový favicon)

2. **Header (`src/components/layout/Header.tsx`)**
   - Import: `import logo from "@/assets/logo.png"`
   - Nahradit textový `<Link>Galimatyáš</Link>` za `<Link><img src={logo} ... /></Link>`
   - Logo: výška ~48 px (mobil) / ~64 px (desktop), `rounded-full`, `alt="Spolek Galimatyáš"`

3. **Footer (`src/components/layout/Footer.tsx`)**
   - Stejný import
   - V první sloupci nahradit `<h3>Galimatyáš</h3>` za logo (výška ~72 px, `rounded-full`)
   - Pod logem zachovat krátký popis spolku

4. **Favicon (`index.html`)**
   - Přidat do `<head>`: `<link rel="icon" href="/favicon.png" type="image/png">`

## Co se nemění

- Všechny stránky, sekce, navigační odkazy, barvy, fonty zůstávají
- Aria-label tlačítka mobilního menu zůstává

