import { Outlet, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

// Zvětšování obrázků se načte až při prvním kliknutí na obrázek
const ImageZoom = lazy(() => import("@/components/ImageZoom"));

export const isZoomable = (target: EventTarget | null): target is HTMLImageElement => {
  const el = target as HTMLElement | null;
  if (!el || el.tagName !== "IMG") return false;
  const img = el as HTMLImageElement;
  if (img.closest("a, button, header, footer, [role='dialog'], [data-no-zoom]")) return false;
  return img.clientWidth >= 90 && img.clientHeight >= 90;
};

const Layout = () => {
  const { pathname } = useLocation();
  const [firstPhoto, setFirstPhoto] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  useEffect(() => {
    if (firstPhoto) return;
    const onClick = (event: MouseEvent) => {
      if (!isZoomable(event.target)) return;
      const img = event.target;
      event.preventDefault();
      event.stopPropagation();
      setFirstPhoto({ src: img.currentSrc || img.src, alt: img.alt });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [firstPhoto]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {firstPhoto && (
        <Suspense fallback={null}>
          <ImageZoom initialPhoto={firstPhoto} />
        </Suspense>
      )}
    </div>
  );
};

export default Layout;
