import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

const root = document.getElementById("root");
if (root) {
  const app = <HelmetProvider><App /></HelmetProvider>;
  // Úvodní stránka je předvykreslená v HTML — React ji jen převezme, nepřekresluje
  if (root.firstElementChild) hydrateRoot(root, app);
  else createRoot(root).render(app);
}
