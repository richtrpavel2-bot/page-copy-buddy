import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

// Ostatní stránky se načítají až při vstupu na trasu (menší první načtení)
const News = lazy(() => import("./pages/News"));
const NewsDetail = lazy(() => import("./pages/NewsDetail"));
const About = lazy(() => import("./pages/About"));
const Offer = lazy(() => import("./pages/Offer"));
const OfferDetail = lazy(() => import("./pages/OfferDetail"));
const Studio = lazy(() => import("./pages/Studio"));
const StudioDetail = lazy(() => import("./pages/StudioDetail"));
const Limonada = lazy(() => import("./pages/Limonada"));
const BookDetail = lazy(() => import("./pages/BookDetail"));
const EshopOchranaSoukromi = lazy(() => import("./pages/EshopOchranaSoukromi"));
const EshopObchodniPodminky = lazy(() => import("./pages/EshopObchodniPodminky"));
const Contact = lazy(() => import("./pages/Contact"));
const Gallery = lazy(() => import("./pages/Gallery"));
const GalleryDetail = lazy(() => import("./pages/GalleryDetail"));
const People = lazy(() => import("./pages/People"));
const Partners = lazy(() => import("./pages/Partners"));
const Support = lazy(() => import("./pages/Support"));
const Sablony = lazy(() => import("./pages/Sablony"));
const SpolekGalimatyas = lazy(() => import("./pages/SpolekGalimatyas"));
const FestivalKoreny = lazy(() => import("./pages/FestivalKoreny"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="container flex min-h-[50vh] items-center justify-center py-24">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-accent" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/aktualne" element={<News />} />
              <Route path="/aktualne/:slug" element={<NewsDetail />} />
              <Route path="/o-nas" element={<About />} />
              <Route path="/o-nas/spolek" element={<SpolekGalimatyas />} />
              <Route path="/o-nas/lide" element={<People />} />
              <Route path="/o-nas/podporuji-nas" element={<Partners />} />
              <Route path="/o-nas/jak-nas-podporit" element={<Support />} />
              <Route path="/o-nas/sablony" element={<Sablony />} />
              <Route path="/o-nas/festival-zpatky-ke-korenum" element={<FestivalKoreny />} />
              <Route path="/co-nabizime" element={<Offer />} />
              <Route path="/co-nabizime/:slug" element={<OfferDetail />} />
              <Route path="/studio-my-dve" element={<Studio />} />
              <Route path="/studio-my-dve/:slug" element={<StudioDetail />} />
              <Route path="/nakladatelstvi-limonada" element={<Limonada />} />
              <Route path="/nakladatelstvi-limonada/ochrana-soukromi" element={<EshopOchranaSoukromi />} />
              <Route path="/nakladatelstvi-limonada/obchodni-podminky" element={<EshopObchodniPodminky />} />
              <Route path="/nakladatelstvi-limonada/:slug" element={<BookDetail />} />
              <Route path="/fotogalerie" element={<Gallery />} />
              <Route path="/fotogalerie/:slug" element={<GalleryDetail />} />
              <Route path="/kontakt" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
