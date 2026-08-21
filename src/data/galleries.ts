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
    slug: "redakce-fatal",
    title: "Redakce Fatal — skupina Tak uvidíme (2026)",
    description:
      "Fotografie z představení Redakce Fatal v podání divadelní skupiny Tak uvidíme.",
  },
  {
    slug: "husa-na-provazku",
    title: "Zájezd komorního divadla Galimatyáš do Husy na provázku (2026)",
    description:
      "Komorní divadlo Galimatyáš (My dvě) na zájezdu v brněnském Divadle Husa na provázku.",
  },
  {
    slug: "hleda-se-babicka",
    title: "Hledá se babička — skupina Kdo hraje, je frajerka (2026)",
    description:
      "Fotografie z představení Hledá se babička v podání skupiny Kdo hraje, je frajerka.",
  },
  {
    slug: "dcery-marie-terezie",
    title: "Dcery Marie Terezie — skupina Tvaroh(r)y (2026)",
    description:
      "Fotografie z představení Dcery Marie Terezie v podání skupiny Tvaroh(r)y.",
  },
  {
    slug: "zivot-a-dilo-basnika",
    title: "Život a dílo básníka (2026)",
    description: "Fotografie z představení Život a dílo básníka.",
  },
  {
    slug: "viktorie-musi-zemrit",
    title: "Viktorie musí zemřít — skupina Divadovádidlo (2026)",
    description:
      "Fotografie z představení Viktorie musí zemřít v podání skupiny Divadovádidlo.",
  },
  {
    slug: "antigona-diva-divy",
    title: "AntiGOna — skupina Diva Divy (2026)",
    description:
      "Fotografie z představení AntiGOna v podání divadelní skupiny Diva Divy.",
  },
  {
    slug: "julie-royal",
    title: "Julie Royal — skupina Tvaroh(r)y (2026)",
    description:
      "Fotografie z představení Julie Royal v podání divadelní skupiny Tvaroh(r)y.",
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
