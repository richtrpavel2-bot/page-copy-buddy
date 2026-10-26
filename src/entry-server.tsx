// Předvykreslení úvodní stránky do HTML při sestavení (jen trasa "/")
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { AppRoutes } from "./App";

export function render(url: string) {
  return renderToString(
    <HelmetProvider context={{}}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>,
  );
}
