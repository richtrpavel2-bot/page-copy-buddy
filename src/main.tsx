import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

const root = document.getElementById("root");
if (root) createRoot(root).render(<HelmetProvider><App /></HelmetProvider>);
