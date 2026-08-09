import { useEffect, useState } from "react";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Globální zvětšování obrázků: kliknutím na jakýkoli obrázek na webu
 * se otevře velký náhled (kromě log v hlavičce/patičce, odkazů a vlastních galerií).
 */
const ImageZoom = () => {
  const [photo, setPhoto] = useState<{ src: string; alt: string } | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target || target.tagName !== "IMG") return;
      const img = target as HTMLImageElement;

      // vynechat: navigační odkazy, hlavičku/patičku, vlastní lightboxy a označené obrázky
      if (img.closest("a, button, header, footer, [role='dialog'], [data-no-zoom]")) return;
      // vynechat malé ikonky a loga
      if (img.clientWidth < 90 || img.clientHeight < 90) return;

      event.preventDefault();
      event.stopPropagation();
      setScale(1);
      setPhoto({ src: img.currentSrc || img.src, alt: img.alt });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (!photo) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPhoto(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [photo]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-auto bg-foreground/95 p-3 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Zvětšený obrázek"
      onClick={() => setPhoto(null)}
    >
      <div className="absolute right-4 top-4 z-10 flex gap-2">
        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="rounded-full"
          aria-label="Zmenšit"
          onClick={(event) => {
            event.stopPropagation();
            setScale((s) => Math.max(1, s - 0.5));
          }}
        >
          <ZoomOut className="h-5 w-5" />
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="rounded-full"
          aria-label="Zvětšit"
          onClick={(event) => {
            event.stopPropagation();
            setScale((s) => Math.min(4, s + 0.5));
          }}
        >
          <ZoomIn className="h-5 w-5" />
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="rounded-full"
          aria-label="Zavřít"
          onClick={() => setPhoto(null)}
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <img
        data-no-zoom
        src={photo.src}
        alt={photo.alt}
        loading="eager"
        decoding="async"
        style={{ transform: `scale(${scale})` }}
        className="max-h-[90vh] max-w-full origin-center cursor-zoom-in object-contain transition-transform duration-200"
        onClick={(event) => {
          event.stopPropagation();
          setScale((s) => (s >= 4 ? 1 : s + 0.5));
        }}
      />
    </div>
  );
};

export default ImageZoom;
