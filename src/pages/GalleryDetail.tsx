import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { getGallery } from "@/data/galleries";

const GalleryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const gallery = slug ? getGallery(slug) : undefined;
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (!gallery) return;
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? null : (i + 1) % gallery.images.length));
      if (e.key === "ArrowLeft") setActive((i) => (i === null ? null : (i - 1 + gallery.images.length) % gallery.images.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, gallery]);

  if (!gallery) {
    return (
      <section className="container py-24">
        <h1 className="font-display text-3xl text-primary">Album nenalezeno</h1>
        <Link to="/fotogalerie" className="mt-4 inline-flex items-center gap-2 text-accent hover:underline">
          <ArrowLeft className="h-4 w-4" /> Zpět na fotogalerii
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="bg-hero">
        <div className="container py-12 md:py-16">
          <Link
            to="/fotogalerie"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Zpět na fotogalerii
          </Link>
          <div className="mt-6 max-w-3xl">
            <h1 className="font-display text-3xl font-bold text-primary md:text-5xl">
              {gallery.title}
            </h1>
            <p className="mt-4 text-muted-foreground md:text-lg">{gallery.description}</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {gallery.images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(i)}
                className="group aspect-[4/3] overflow-hidden rounded-xl bg-secondary"
                aria-label={`Otevřít fotku ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`${gallery.title} — fotka ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Zavřít"
            onClick={(e) => { e.stopPropagation(); setActive(null); }}
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Předchozí"
            onClick={(e) => { e.stopPropagation(); setActive((i) => (i === null ? null : (i - 1 + gallery.images.length) % gallery.images.length)); }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Další"
            onClick={(e) => { e.stopPropagation(); setActive((i) => (i === null ? null : (i + 1) % gallery.images.length)); }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <img
            src={gallery.images[active]}
            alt={`${gallery.title} — fotka ${active + 1}`}
            className="max-h-[90vh] max-w-[95vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70">
            {active + 1} / {gallery.images.length}
          </p>
        </div>
      )}
    </>
  );
};

export default GalleryDetail;
