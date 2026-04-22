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
import Studio from "./pages/Studio";
import Limonada from "./pages/Limonada";
import BookDetail from "./pages/BookDetail";
import Contact from "./pages/Contact";
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
            <Route path="/co-nabizime" element={<Offer />} />
            <Route path="/studio-my-dve" element={<Studio />} />
            <Route path="/nakladatelstvi-limonada" element={<Limonada />} />
            <Route path="/nakladatelstvi-limonada/:slug" element={<BookDetail />} />
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
