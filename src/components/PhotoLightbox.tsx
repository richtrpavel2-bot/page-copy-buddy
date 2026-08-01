import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type Photo = {
  src: string;
  alt: string;
};

type PhotoLightboxProps = {
  photos: Photo[];
  currentIndex: number | null;
  onChange: (index: number | null) => void;
};

const PhotoLightbox = ({ photos, currentIndex, onChange }: PhotoLightboxProps) => {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onChange(null);
      if (event.key === "ArrowLeft") {
        onChange((currentIndex - 1 + photos.length) % photos.length);
      }
      if (event.key === "ArrowRight") {
        onChange((currentIndex + 1) % photos.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, onChange, photos.length]);

  if (currentIndex === null || !photos[currentIndex]) return null;

  const photo = photos[currentIndex];
  const previous = () => onChange((currentIndex - 1 + photos.length) % photos.length);
  const next = () => onChange((currentIndex + 1) % photos.length);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 p-3 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Velký náhled fotografie"
      onClick={() => onChange(null)}
    >
      <Button
        type="button"
        variant="secondary"
        size="icon"
        className="absolute right-4 top-4 z-10 rounded-full"
        aria-label="Zavřít fotografii"
        onClick={() => onChange(null)}
      >
        <X className="h-5 w-5" />
      </Button>

      {photos.length > 1 && (
        <>
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full md:left-6"
            aria-label="Předchozí fotografie"
            onClick={(event) => {
              event.stopPropagation();
              previous();
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full md:right-6"
            aria-label="Další fotografie"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      <figure className="flex h-full max-h-[92vh] w-full max-w-6xl flex-col items-center justify-center gap-3">
        <img
          src={photo.src}
          alt={photo.alt}
          loading="eager"
          decoding="async"
          className="max-h-[84vh] max-w-full object-contain"
          onClick={(event) => event.stopPropagation()}
        />
        <figcaption className="text-sm text-background">
          {currentIndex + 1} / {photos.length}
        </figcaption>
      </figure>
    </div>
  );
};

export default PhotoLightbox;