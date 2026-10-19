import { Helmet } from "react-helmet-async";

const NotFound = () => (
  <div className="flex min-h-screen items-center justify-center bg-muted">
    <Helmet>
      <title>Stránka nenalezena | Galimatyáš</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <div className="text-center">
      <h1 className="mb-4 text-4xl font-bold">404</h1>
      <p className="mb-4 text-xl text-muted-foreground">Tato stránka neexistuje.</p>
      <a href="/" className="text-primary underline hover:text-primary/90">
        Zpět na úvodní stránku
      </a>
    </div>
  </div>
);

export default NotFound;
