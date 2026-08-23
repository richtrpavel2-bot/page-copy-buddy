import zapisDivadlo from "@/assets/news/zapis-divadlo-2026.jpg";
import zapisZpev from "@/assets/news/zapis-zpev-2026.jpg";
import patyDen from "@/assets/news/paty-den.jpg";
import ctvrtyDen from "@/assets/news/ctvrty-den.jpg";
import tretiDen from "@/assets/news/treti-den.jpg";
import staleDruhyDen from "@/assets/news/stale-druhy-den.jpg";
import druhyDen from "@/assets/news/druhy-den.png";
import prvniDen from "@/assets/news/prvni-den.jpg";

/** Plakáty aktualit 01.jpg – 52.jpg (01 = nejstarší) */
const posterModules = import.meta.glob<string>("../assets/aktuality/*.jpg", {
  eager: true,
  import: "default",
});

const poster = (n: number): string => {
  const key = Object.keys(posterModules).find((k) =>
    k.endsWith(`/${String(n).padStart(2, "0")}.jpg`),
  );
  return key ? posterModules[key] : "";
};

export type NewsCategory = "Představení" | "Dílna" | "Novinka" | "Oznámení";

export interface NewsItem {
  id: string;
  title: string;
  /** ISO datum, např. "2026-05-15" */
  date: string;
  category: NewsCategory;
  location?: string;
  excerpt: string;
  image: string;
  /** Volitelný delší text pro detailní stránku (Markdown / prostý text). Když chybí, zobrazí se jen excerpt. */
  body?: string;
}

/**
 * Aktuality a akce spolku – řazené od nejnovější (nahoře) k nejstarší.
 * Pro přidání nové položky stačí zkopírovat jeden objekt na začátek seznamu.
 */
export const news: NewsItem[] = [
  {
    id: "zapis-literarne-dramaticke-dilny-2026-2027",
    title: "Zápis do literárně-dramatických dílen Galimatyáš 2026/2027",
    date: "2026-09-03",
    category: "Oznámení",
    location: "Starobranská 16, Šumperk 787 01",
    excerpt:
      "Čtvrtek 3. 9. a pátek 4. 9. 2026, 15:00–17:00. Kreativita, hravost, spolupráce, tvorba i divadelní soutěže. Kontakt: 605 173 410, spolek.galimatyas@seznam.cz.",
    image: zapisDivadlo,
  },
  {
    id: "zapis-centrum-zdraveho-hlasu-2026-2027",
    title: "Zápis do Centra zdravého hlasu Galimatyáš 2026/2027",
    date: "2026-09-03",
    category: "Oznámení",
    location: "Starobranská 16, Šumperk 787 01",
    excerpt:
      "Ženský sbor nebo sólová výuka. Čtvrtek 3. 9. a pátek 4. 9. 2026, 15:00–17:00. Kontakt: 732 921 452, spolek.galimatyas@seznam.cz.",
    image: zapisZpev,
  },
  {
    id: "galimatyas-misto-kde-se-potkavaji-pribehy",
    title: "Galimatyáš – místo, kde se potkávají příběhy",
    date: "2026-08-09",
    category: "Novinka",
    excerpt:
      "Ohlédnutí za uplynulou sezónou v jedné velké mozaice tváří, objetí, potlesků a společných okamžiků.",
    image: poster(52),
  },
  {
    id: "komorni-divadlo-2017-2026",
    title: "Komorní divadlo v letech 2017–2026",
    date: "2026-08-08",
    category: "Novinka",
    excerpt:
      "Každý rok jedna inscenace, jeden příběh. A co přinese rok 2026? To je zatím naše tajemství.",
    image: poster(51),
  },
  {
    id: "jiraskuv-hronov-2026-pametni-list",
    title: "Jiráskův Hronov 2026 – pamětní list pro Divadovádidlo",
    date: "2026-08-05",
    category: "Novinka",
    location: "Hronov",
    excerpt:
      "Z 96. ročníku celostátní mezidruhové přehlídky amatérského divadla si Divadovádidlo přiváží pamětní list za představení Viktorie musí zemřít.",
    image: poster(50),
  },
  {
    id: "divadovadidlo-miri-na-jiraskuv-hronov",
    title: "Divadovádidlo míří na Jiráskův Hronov",
    date: "2026-08-04",
    category: "Oznámení",
    location: "Hronov",
    excerpt:
      "4. srpna 2026 hrajeme Viktorie musí zemřít! na Jiráskově Hronově. A jedeme dodávkou :-)",
    image: poster(49),
  },
  {
    id: "divadelni-uspechy-deti-2025-2026",
    title: "Divadelní úspěchy dětí ve školním roce 2025/2026",
    date: "2026-06-30",
    category: "Novinka",
    excerpt:
      "Postup na Dětskou scénu 2026, doporučení na Mladou scénu i nominace na celostátní přehlídku nonverbálního divadla. Přehled všeho, co se letos povedlo.",
    image: poster(48),
  },
  {
    id: "otevreno-kolin-2026",
    title: "Otevřeno Kolín – přehlídka pantomimy a nonverbálního divadla",
    date: "2026-06-26",
    category: "Oznámení",
    location: "Kolín",
    excerpt:
      "Celostátní přehlídka pod záštitou České komise pro UNESCO, na kterou jsme letos získali nominaci.",
    image: poster(47),
  },
  {
    id: "zapis-skolni-rok-2026-2027",
    title: "Zápis na školní rok 2026/2027",
    date: "2026-06-24",
    category: "Oznámení",
    location: "Starobranská 16, Šumperk",
    excerpt:
      "Ve středu 24. 6. 2026 od 15:00 do 17:00 se u nás zapisuje do literárně-dramatických dílen Galimatyáš.",
    image: poster(45),
  },
  {
    id: "archivace-vykopavek",
    title: "Archivace vykopávek – pouliční zpěv a tanec",
    date: "2026-06-19",
    category: "Představení",
    location: "Galimatyáš, Starobranská 16",
    excerpt:
      "Přijměte pozvání k pouličnímu zpěvu a tanci v podání žáků pěveckého oddělení Galimatyáš.",
    image: poster(46),
  },
  {
    id: "detska-scena-2026-level-3",
    title: "Dětská scéna: level 3 – zase Svitavy",
    date: "2026-06-16",
    category: "Novinka",
    location: "Svitavy",
    excerpt:
      "Tři roky, tři levely, jedno místo. Cíl letošního: rozjet to ve stodole a další den ráno se postavit na jeviště.",
    image: poster(43),
  },
  {
    id: "detska-scena-2026-svitavy",
    title: "Dětská scéna 2026 ve Svitavách",
    date: "2026-06-12",
    category: "Představení",
    location: "Svitavy",
    excerpt:
      "54. celostátní přehlídka dětského divadla, 12.–16. června 2026, a my jsme byli součástí.",
    image: poster(44),
  },
  {
    id: "zivot-a-dilo-basnika",
    title: "Život a dílo básníka – Divadovádidlo a hosté",
    date: "2026-06-15",
    category: "Představení",
    location: "Divadlo Šumperk",
    excerpt:
      "Divadlo poezie inspirované Divadlem Járy Cimrmana a surrealistickou poezií Vítězslava Nezvala. 15. června v 15:45.",
    image: poster(37),
  },
  {
    id: "redakce-fatal",
    title: "Redakce Fatal – skupina Tak uvidíme",
    date: "2026-06-13",
    category: "Představení",
    location: "Divadlo Šumperk",
    excerpt:
      "Mafiánská komedie o tom, jak taky může vypadat Femme fatal. 13. června 2026 ve 20 hodin.",
    image: poster(38),
  },
  {
    id: "viktorie-musi-zemrit",
    title: "Viktorie musí zemřít! – Divadovádidlo",
    date: "2026-06-13",
    category: "Představení",
    location: "Divadlo Šumperk",
    excerpt:
      "Absurdní tragikomedie o naší společnosti na motivy románu Frankenstein. 13. června 2026 v 19 hodin.",
    image: poster(36),
  },
  {
    id: "antigona-diva-divy",
    title: "Anti(GO)na – Diva Divy",
    date: "2026-06-13",
    category: "Představení",
    location: "Divadlo Šumperk",
    excerpt:
      "Antigona a Sophie Scholl ve jednom příběhu o odvaze říct ne. 13. června 2026 v 17:30.",
    image: poster(40),
  },
  {
    id: "survivor-prezij-jindricha-viii",
    title: "Survivor: Přežij Jindřicha VIII. – Kdo hraje, je frajer(ka)",
    date: "2026-06-13",
    category: "Představení",
    location: "Divadlo Šumperk",
    excerpt:
      "Šest žen Jindřicha VIII. v soutěži o přežití, s medieval covery populárních písní.",
    image: poster(41),
  },
  {
    id: "ronja-dcera-loupezníka",
    title: "Ronja, dcera loupežníka – Připravit k odletu",
    date: "2026-06-13",
    category: "Představení",
    location: "Divadlo Šumperk",
    excerpt:
      "Představení na motivy knihy Astrid Lindgrenové v podání našich nejmladších.",
    image: poster(39),
  },
  {
    id: "certovska-polepsovna",
    title: "Čertovská polepšovna – Prvoh(o)ry",
    date: "2026-06-13",
    category: "Představení",
    location: "Divadlo Šumperk",
    excerpt:
      "Divadelní groteska volně inspirovaná pohádkou Jana Wericha Až opadá listí z dubu.",
    image: poster(42),
  },
  {
    id: "julie-royal",
    title: "Julie Royal – Tvaroh(r)y",
    date: "2026-06-13",
    category: "Představení",
    location: "Divadlo Šumperk",
    excerpt:
      "Hra zrcadlící postavení žen od Shakespeara po současnost. Na Poděsu 2026 získala přímou nominaci na Dětskou scénu.",
    image: poster(35),
  },
  {
    id: "prehlidka-galimatyas-casobeh",
    title: "Divadelní přehlídka Galimatyáš: Časoběh – Ulov si svůj poklad",
    date: "2026-06-13",
    category: "Představení",
    location: "Divadlo Šumperk",
    excerpt:
      "Celý den plný divadla našich skupin – od Julie Royal přes Čertovskou polepšovnu až po Život a dílo básníka.",
    image: poster(34),
  },
  {
    id: "ponorim-ruce-do-hliny",
    title: "Ponořím ruce do hlíny – beseda o archeologii",
    date: "2026-06-07",
    category: "Představení",
    location: "Galimatyáš, Starobranská 16",
    excerpt:
      "Povídání o detektorářích, archeologii, povrchovém sběru a keramice s Davidem Kučerou, Stanislavem Kučerou a Evou Pšenčíkovou.",
    image: poster(33),
  },
  {
    id: "cerven-2026-lovci-pokladu",
    title: "Červen 2026: Lovci pokladů",
    date: "2026-06-01",
    category: "Novinka",
    excerpt:
      "Šesté číslo Novin Alfréda Schönberga a červnový program festivalu Zpátky ke kořenům.",
    image: poster(32),
  },
  {
    id: "detsky-den-na-provazku",
    title: "Dětský den na Provázku – Člověče, nezlob se na nás!",
    date: "2026-05-30",
    category: "Představení",
    location: "Divadlo Husa na provázku, Brno",
    excerpt:
      "30. května 2026 od 14 hodin otevíráme Dětský den na Provázku naším představením.",
    image: poster(31),
  },
  {
    id: "o-male-vidni-u-velkeho-piva",
    title: "O malé Vídni u velkého piva",
    date: "2026-05-23",
    category: "Představení",
    location: "Galimatyáš, Starobranská 16",
    excerpt:
      "Beseda o šumperské „malé Vídni“ s Lucií Kučerovou, Veronikou Šubrtovou a hudebním doprovodem.",
    image: poster(29),
  },
  {
    id: "hleda-se-babicka",
    title: "Hledá se babička – Malé podoby velkých žen",
    date: "2026-05-18",
    category: "Představení",
    location: "Divadlo Šumperk (Hrádek)",
    excerpt:
      "Představení na motivy života slavné automobilové závodnice Elišky Junkové. 18. května 2026 v 18 hodin.",
    image: poster(26),
  },
  {
    id: "most-pres-minulost",
    title: "Most přes minulost – koncert pěvecké třídy",
    date: "2026-05-13",
    category: "Představení",
    location: "klášterní kostel, Šumperk",
    excerpt:
      "Koncert žáků pěvecké třídy umělecké platformy Galimatyáš. 13. května 2026 v 18 hodin.",
    image: poster(28),
  },
  {
    id: "dny-ukazkovych-hodin",
    title: "Dny ukázkových hodin",
    date: "2026-05-04",
    category: "Dílna",
    location: "Starobranská 16, Šumperk",
    excerpt:
      "Od 4. do 7. května 2026 můžete nakouknout do našich dílen – od nejmenších dětí až po skupinu žen.",
    image: poster(30),
  },
  {
    id: "rybarova-zena-na-ulici",
    title: "Rybářova žena – pouliční představení",
    date: "2026-05-01",
    category: "Představení",
    location: "ulice Starobranská, Šumperk",
    excerpt:
      "Modernizace lidové pohádky o rybáři a jeho ženě pro děti i dospělé. 1. května 2026 v 11 hodin.",
    image: poster(27),
  },
  {
    id: "kveten-2026-sumperk-mala-viden",
    title: "Květen 2026: Šumperk – malá Vídeň",
    date: "2026-05-01",
    category: "Novinka",
    excerpt:
      "Páté číslo Novin Alfréda Schönberga vás zve do doby, kdy se ze Šumperka stávala malá Vídeň.",
    image: poster(25),
  },
  {
    id: "tam-kde-zari-hvezda",
    title: "Tam, kde září hvězda – synagoga Loštice",
    date: "2026-04-26",
    category: "Představení",
    location: "Synagoga Loštice",
    excerpt:
      "Netradiční návštěva synagogy s programem na téma židovských svátků a ochutnávkou tradičních jídel.",
    image: poster(19),
  },
  {
    id: "kdo-hraje-je-frajerka-doporuceni",
    title: "Kdo hraje, je frajer(ka) s doporučením na Dětskou scénu 2026",
    date: "2026-04-19",
    category: "Novinka",
    location: "Olomouc",
    excerpt:
      "Z krajské přehlídky Poděs 2026 si skupina odváží doporučení na celostátní přehlídku Dětská scéna.",
    image: poster(24),
  },
  {
    id: "tvarohry-nominace-detska-scena",
    title: "Tvaroh(r)y s nominací na Dětskou scénu 2026",
    date: "2026-04-18",
    category: "Novinka",
    location: "Olomouc",
    excerpt:
      "Julie Royal získala na Poděsu 2026 přímou nominaci na celostátní přehlídku dětského divadla.",
    image: poster(23),
  },
  {
    id: "podes-2026-olomouc",
    title: "Poděs 2026 v Olomouci",
    date: "2026-04-18",
    category: "Představení",
    location: "ZUŠ „Žerotín“ Olomouc",
    excerpt:
      "Postupová přehlídka dětských divadel Olomouckého kraje, kde hrály Tvaroh(r)y, Prvoh(o)ry i Kdo hraje, je frajer(ka).",
    image: poster(22),
  },
  {
    id: "punkovy-pisecek-viktorie",
    title: "Punkový Píseček: Viktorie musí zemřít! v Praze",
    date: "2026-04-12",
    category: "Představení",
    location: "KD Mlejn, Praha",
    excerpt:
      "Přehlídka studentského a alternativního divadla, neděle 12. dubna 2026.",
    image: poster(20),
  },
  {
    id: "punkovy-pisecek-antigona",
    title: "Punkový Píseček: Anti(GO)na v Praze",
    date: "2026-04-11",
    category: "Představení",
    location: "KD Mlejn, Praha",
    excerpt:
      "Diva Divy na přehlídce studentského a alternativního divadla, sobota 11. dubna 2026.",
    image: poster(21),
  },
  {
    id: "literarni-soutez-davno-nebo-vcera",
    title: "1. ročník literární soutěže Dávno nebo včera?",
    date: "2026-04-02",
    category: "Oznámení",
    excerpt:
      "Alfréd Schönberg, mecenáš města Šumperka, vyhlašuje literární soutěž v rámci dubnového čísla festivalu.",
    image: poster(18),
  },
  {
    id: "duben-2026-davno-nebo-vcera",
    title: "Duben 2026: Dávno nebo včera?",
    date: "2026-04-01",
    category: "Novinka",
    excerpt:
      "Čtvrté číslo Novin Alfréda Schönberga – cesta vydlážděná kameny zmizelých vede do vzpomínek.",
    image: poster(17),
  },
  {
    id: "vysledky-malych-jevistnich-forem",
    title: "Vyhráli a postoupili – výsledky Malých jevištních forem",
    date: "2026-03-22",
    category: "Novinka",
    location: "Valašské Meziříčí",
    excerpt:
      "Divadovádidlo si z 46. setkání divadel odváží doporučení na celostátní přehlídku Mladá scéna.",
    image: poster(16),
  },
  {
    id: "oceneni-lektorskeho-sboru",
    title: "Ocenění lektorského sboru pro Život a dílo básníka",
    date: "2026-03-22",
    category: "Novinka",
    location: "Valašské Meziříčí",
    excerpt:
      "Naše divadlo poezie získalo na Malých jevištních formách doporučení na Mladou scénu.",
    image: poster(15),
  },
  {
    id: "divadelni-souteze-2026",
    title: "Divadelní soutěže 2026 – držte nám palce",
    date: "2026-03-10",
    category: "Oznámení",
    excerpt:
      "Valašské Meziříčí, Punkový Píseček v Praze a Poděs v Olomouci. Kompletní jízdní plán našich skupin.",
    image: poster(14),
  },
  {
    id: "v-rytmu-rytmu",
    title: "V rytmu rytmu",
    date: "2026-03-28",
    category: "Představení",
    location: "Galimatyáš, Starobranská 16",
    excerpt:
      "Odpoledne s hudbou a rytmem. 28. března 2026 v 15 hodin, vstupné dobrovolné.",
    image: poster(13),
  },
  {
    id: "vystava-obrazu-terezy-filipove",
    title: "Výstava obrazů Terezy Filipové",
    date: "2026-03-23",
    category: "Novinka",
    location: "Galimatyáš, Starobranská 16",
    excerpt:
      "Obrazy Terezy Filipové si můžete prohlédnout ve vypsaných dnech koncem března.",
    image: poster(12),
  },
  {
    id: "nerusit-tvorim",
    title: "Nerušit, tvořím! – vernisáž obrazů Terezy Filipové",
    date: "2026-03-14",
    category: "Představení",
    location: "Galimatyáš, Starobranská 16",
    excerpt:
      "Vernisáž a beseda s hostkou o tom, jak žít ve svém světě. 14. března 2026 v 17 hodin.",
    image: poster(11),
  },
  {
    id: "domov-je-tam-kde-koste-mam",
    title: "Domov je tam, kde koště mám!",
    date: "2026-03-07",
    category: "Představení",
    location: "Galimatyáš, Starobranská 16",
    excerpt:
      "Divadelní představení pro děti i dospělé o čarodějce, která se bála udělat krok. 7. března 2026 v 15 hodin.",
    image: poster(10),
  },
  {
    id: "brezen-2026-abrakadabraka",
    title: "Březen 2026: Abrakadabraka už není v módě",
    date: "2026-03-01",
    category: "Novinka",
    excerpt:
      "Třetí číslo Novin Alfréda Schönberga o čarodějnických procesech a křivdách, které se nad Šumperkem stále vznáší.",
    image: poster(9),
  },
  {
    id: "kam-az-sahaji-nase-koreny",
    title: "Kam až sahají naše kořeny? – beseda",
    date: "2026-02-28",
    category: "Představení",
    location: "Galimatyáš, Starobranská 16",
    excerpt:
      "Beseda s Petrem Vepřkem o cestovatelské vášni k Řecku a historických střípcích. 28. února 2026 v 17 hodin.",
    image: poster(8),
  },
  {
    id: "hejbni-bockem-na-recky-zpusob",
    title: "Hejbni bočkem na řecký způsob",
    date: "2026-02-14",
    category: "Dílna",
    location: "Komín – tělocvična SVČ Doris, Šumperk",
    excerpt:
      "Setkání v řeckém stylu s tancem a hudbou. 14. února 2026 v 15 hodin.",
    image: poster(7),
  },
  {
    id: "unor-2026-opa-aneb-recka-party",
    title: "Únor 2026: Opá aneb Řecká párty",
    date: "2026-02-01",
    category: "Novinka",
    excerpt:
      "Druhé číslo Novin Alfréda Schönberga se ptá: kde mám své kořeny? Tady, nebo tam?",
    image: poster(6),
  },
  {
    id: "vystava-fotografii-jana-barancika",
    title: "Výstava fotografií Jana Barančíka",
    date: "2026-01-23",
    category: "Novinka",
    location: "Galimatyáš, Starobranská 16",
    excerpt:
      "Fotografie Jeseníků z ptačí perspektivy si můžete prohlédnout ve vypsaných dnech od 23. ledna.",
    image: poster(5),
  },
  {
    id: "komponovany-vecer-hudby-a-prednesu",
    title: "Jeseníky – Ráj na zemi: komponovaný pořad přednesu a hudby",
    date: "2026-01-30",
    category: "Představení",
    location: "klášterní kostel, Šumperk",
    excerpt:
      "Komponovaný pořad přednesu a hudby v podání dětí i dospělých z pěvecké a literárně-dramatické třídy. 30. ledna 2026 v 17 hodin.",
    image: poster(4),
  },
  {
    id: "vylet-po-stopach-alfreda-schonberga",
    title: "Zastávka na znamení: Stanice Horské služby Červenohorské sedlo",
    date: "2026-01-17",
    category: "Představení",
    location: "Červenohorské sedlo",
    excerpt:
      "Srdečně zveme všechny městem přesycené na společný výlet na Stanici Horské služby. 17. ledna 2026.",
    image: poster(3),
  },
  {
    id: "brany-jeseniku-se-oteviraji",
    title: "Brány Jeseníků se otevírají – vernisáž fotografií",
    date: "2026-01-10",
    category: "Představení",
    location: "Galimatyáš, Starobranská 16",
    excerpt:
      "Nevšední pohledy z ptačí perspektivy a všední pohledy horskoslužebníků v Jeseníkách. 10. ledna 2026 v 17 hodin.",
    image: poster(2),
  },
  {
    id: "zpatky-ke-korenum",
    title: "Leden 2026: Jeseníky – Ráj na zemi",
    date: "2026-01-01",
    category: "Novinka",
    excerpt:
      "První číslo Novin Alfréda Schönberga a zahájení celoročního festivalu Zpátky ke kořenům.",
    image: poster(1),
  },
  {
    id: "paty-divadelni-vanocni-den",
    title: "Pátý divadelní vánoční den",
    date: "2025-12-31",
    category: "Představení",
    excerpt:
      "A vše zakončíme skupinou Divadovádidlo a jejich prvními monology v doprovodu dospělých zpěváků 🙂",
    image: patyDen,
  },
  {
    id: "ctvrty-divadelni-vanocni-den",
    title: "Čtvrtý divadelní vánoční den",
    date: "2025-12-30",
    category: "Představení",
    excerpt:
      "Ve čtvrtém dnu naše oblíbené Kdo hraje, je frajerka a jejich první divadlo poezie 🙂",
    image: ctvrtyDen,
  },
  {
    id: "treti-divadelni-vanocni-den",
    title: "Třetí divadelní vánoční den",
    date: "2025-12-29",
    category: "Představení",
    excerpt:
      "A ve středu je prostor pro naše nejmenší, však divadelně již velmi zkušené. Připravit k odletu raz dva tři a jejich František Hrubín 🙂",
    image: tretiDen,
  },
  {
    id: "stale-druhy-divadelni-vanocni-den",
    title: "Stále druhý divadelní vánoční den",
    date: "2025-12-28",
    category: "Představení",
    excerpt:
      "A v druhé půlce tohoto našlapaného dne uvidíte Tak uvidíme ženy a jejich vánoční ohlédnutí za partnerskými vztahy 🙂",
    image: staleDruhyDen,
  },
  {
    id: "druhy-divadelni-vanocni-den",
    title: "Druhý divadelní vánoční den",
    date: "2025-12-28",
    category: "Představení",
    excerpt:
      "V první části našeho druhého dne se vám představí skupina Prvohory a skupina Diva Divy 🙂",
    image: druhyDen,
  },
  {
    id: "prvni-divadelni-vanocni-den",
    title: "První divadelní vánoční den",
    date: "2025-12-27",
    category: "Představení",
    excerpt:
      "V prvním dnu se vám představí skupina Tvarohry a dětská část zpěváků ❤️",
    image: prvniDen,
  },
];
