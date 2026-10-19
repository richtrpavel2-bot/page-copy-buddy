# Oprava chyby 404 na galimatyas-sumperk.cz

## Co vyfotit v Netlify (stačí 2 snímky)
1. Přihlaste se na app.netlify.com a klikněte na web galimatyas-sumperk.cz. Vyfoťte celou úvodní stránku webu. Na ní je vidět, odkud se web bere (například „Deploys from GitHub“ nebo ruční nahrání).
2. Klikněte nahoře na **Deploys** a vyfoťte seznam posledních nasazení.

Ze snímků poznám, jestli si Netlify web stahuje samo, nebo ho někdo nahrává ručně.

## Oprava (připravím hned po schválení)
- Do webu přidám malý soubor s pravidlem pro Netlify: když někdo otevře přímo podstránku, Netlify mu ukáže web místo chyby 404.
- Vzhled, obsah, adresa domény ani verze v Lovable se nezmění.

## Co pak uděláte vy
- **Když se web do Netlify stahuje sám (GitHub):** nemusíte dělat nic, oprava se nasadí sama.
- **Když se web nahrává ručně:** nahrajte novou verzi stejně jako minule. Soubor s pravidlem už v ní bude.

## Ověření
Přímo otevřu Kontakt, Fotogalerii a další podstránky. Musí se zobrazit stránka, ne 404. Vymyšlená adresa musí dál ukázat stránku „nenalezeno“.

## Technické detaily
- Soubor `public/_redirects` s pravidlem `/*  /index.html  200`. Lovable hosting ho nepoužívá, takže tam nic nezmění.
