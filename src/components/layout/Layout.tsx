import { Outlet, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

// Zvětšování obrázků se načte až po vykreslení stránky (rychlejší první zobrazení)
const ImageZoom = lazy(() => import("@/components/ImageZoom"));

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ImageZoom />
    </div>
  );
};


export default Layout;
