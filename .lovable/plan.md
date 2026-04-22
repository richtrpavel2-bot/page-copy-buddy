

# Plán: Nová stránka „Aktuálně"

Přidám do webu šestou stránku se seznamem aktuálních akcí, novinek a oznámení. Stránka bude statická — obsah (události) se bude editovat přímo v jednom datovém souboru, takže ty jako copywriter můžeš snadno přidávat/měnit položky bez zásahu do layoutu.

## Co vznikne

1. **Nová stránka** `/aktualne` — `src/pages/News.tsx`
   - Hero/úvod: nadpis „Aktuálně", krátký podtitul („Co se u nás právě děje")
   - Seznam karet (události/novinky) seřazený od nejnovější
   - Prázdný stav: pokud nic není, hezká hláška „Zatím nic nového, ale pracujeme na tom."

2. **Datový soubor** `src/data/news.ts`
   - Pole objektů s typem `NewsItem`:
     - `id` (string)
     - `title` (název akce/novinky)
     - `date` (datum konání nebo zveřejnění, ISO formát)
     - `category` ("Představení" | "Dílna" | "Novinka" | "Oznámení")
     - `location` (volitelné — město/místo)
     - `excerpt` (krátký popis, 1–3 věty)
     - `link` (volitelné — URL na FB událost / přihlášku)
   - Naplním 3–4 ukázkovými položkami jako placeholder (jasně označenými „PŘÍKLAD — uprav nebo smaž")

3. **Komponenta karty** `src/components/news/NewsCard.tsx`
   - Datum + barevný štítek kategorie nahoře
   - Nadpis, místo, popis
   - Tlačítko „Více info" (jen pokud je `link`)
   - Vzhled: zaoblená karta v duchu zbytku webu (krémové pozadí, jemný stín, hover efekt)

4. **Navigace**
   - Do `Header.tsx` (desktop i mobil) přidám položku **„Aktuálně"** mezi „Domů" a „O spolku" (logické místo — to nejdůležitější hned po úvodu)
   - Do `Footer.tsx` doplním stejný odkaz do seznamu navigace

5. **Routing**
   - V `App.tsx` přidám `<Route path="/aktualne" element={<News />} />` nad catch-all

## Vizuální detaily

- Karty v gridu: 1 sloupec na mobilu, 2 na tabletu, 3 na desktopu
- Štítky kategorií barevně odlišené (využijí stávající brand barvy — primární zelená, akcentní okrová, neutrální)
- Datum formátované česky („15. května 2026")
- Řazení automaticky od nejnovějšího data sestupně

## Co zůstane na tobě

- Po vygenerování otevřeš `src/data/news.ts` (nebo mi řekneš a udělám to já) a vyplníš skutečné akce
- Pro každou akci stačí 5 polí — žádný HTML, jen text

## Co se NEmění

- Žádná jiná stránka, layout, barvy ani fonty
- Žádný backend — vše statické, edituje se v jednom TS souboru

