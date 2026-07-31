import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import About from "./pages/About";
import Offer from "./pages/Offer";
import OfferDetail from "./pages/OfferDetail";
import Studio from "./pages/Studio";
import StudioDetail from "./pages/StudioDetail";
import Limonada from "./pages/Limonada";
import BookDetail from "./pages/BookDetail";
import EshopOchranaSoukromi from "./pages/EshopOchranaSoukromi";
import EshopObchodniPodminky from "./pages/EshopObchodniPodminky";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import GalleryDetail from "./pages/GalleryDetail";
import People from "./pages/People";
import Partners from "./pages/Partners";
import Support from "./pages/Support";
import Sablony from "./pages/Sablony";
import SpolekGalimatyas from "./pages/SpolekGalimatyas";
import FestivalKoreny from "./pages/FestivalKoreny";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
