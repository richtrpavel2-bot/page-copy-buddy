// Načtení všech fotek z adresářů pomocí Vite import.meta.glob.
// Každý adresář v src/assets/galerie/<slug>/ = jedno album.

const imageModules = import.meta.glob("@/assets/galerie/**/*.{jpg,JPG,jpeg,png}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export type Gallery = {
  slug: string;
  title: string;
  description: string;
  images: string[];
  cover: string;
};

type GalleryMeta = Omit<Gallery, "images" | "cover">;

const meta: GalleryMeta[] = [
  {
    slug: "cloveche-nezlob-se",
    title: "Člověče, nezlob se na nás!",
    description:
      "Divadelní představení na motivy čtyř světových pohádek: O Měsíci a Slunci (indiánská), Okřídlená žena (australská), Kráska s půlměsícem (africká), Hadač osudu (arabská).",
  },
  {
    slug: "co-jsme-napekli",
    title: "Co jsme za rok napekli, to si s Vámi sníme",
    description:
      "Přehlídka divadelních výstupů dětí z divadelně-dramatických dílen 2018.",
  },
  {
    slug: "krtnik-a-medved",
    title: "Krtník a Medvěd",
    description:
      "Krtník žije v horách, kde zpívá vodopádu a povídá si s kamínky. Než potká Medvěda z města a pozná hodnotu přátelství. Divadelní představení o tom, jak důležité je přátelství a jak se může smutek stát nebezpečným.",
  },
  {
    slug: "dilna-okolo",
    title: "Divadelní dílna k inscenaci Okolo",
    description:
      "Dílna navazující na inscenaci Okolo pomáhá dětem lépe vstřebat zážitky a zamyslet se nad závažnějšími i méně závažnými tématy hravou a zábavnou formou.",
  },
  {
    slug: "stati-malo",
    title: "Divadlo aneb Stačí málo… (8. 1. 2018)",
    description:
      "Holky z literárně divadelní dílny Divadovádidlo II. připravily sérii obrazů, jejichž situace vám jistě nebudou cizí. V jaké pozici se dnes cítíte vy?",
  },
  {
    slug: "tabor-svetadily",
    title: "Tábor Cestou necestou za pohádkami světadílů",
    description:
      "Léto 2017 — hudebně dramatický tábor inspirovaný pohádkami Afriky, Oceánie, Japonska a dalších zemí. Cesta necesta určená jen pro odvážné.",
  },
  {
    slug: "den-otevrenych-dveri",
    title: "Den otevřených dveří HDC Galimatyáš — Studio My dvě",
    description:
      "Dne 2. 9. 2017 proběhl v prostorách Hudebně-dramatického centra Galimatyáš Den otevřených dveří s inscenací Studia My dvě Okolo na motivy knížky Olgy Masiukové Jak voní týden.",
  },
  {
    slug: "noc-s-andersenem",
    title: "Noc s Andersenem (31. 3. 2017)",
    description:
      "Poslední březnovou noc roku 2017 — první zkouška nových prostor v bývalém domě dětí a mládeže u radnice na nám. Míru, kde od nového školního roku odstartoval každodenní chod HDC Galimatyáš.",
  },
  {
    slug: "mesic-v-barvach",
    title: "Výstava Měsíc v barvách (březen 2017)",
    description:
      "Výstava obrázků dětí z výtvarných kroužků SVČ a ZpDVPP Doris inspirovaná Barevnými písničkami Terezy Karlíkové a Petra Vočky. K vidění v Informačním centru na Hlavní třídě 6.–31. března 2017.",
  },
];

function loadAlbum(slug: string): string[] {
  const prefix = `/src/assets/galerie/${slug}/`;
  return Object.entries(imageModules)
    .filter(([path]) => path.includes(prefix))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, url]) => url);
}

export const galleries: Gallery[] = meta
  .map((m) => {
    const images = loadAlbum(m.slug);
    return { ...m, images, cover: images[0] ?? "" };
  })
  .filter((g) => g.images.length > 0);

export const getGallery = (slug: string): Gallery | undefined =>
  galleries.find((g) => g.slug === slug);
