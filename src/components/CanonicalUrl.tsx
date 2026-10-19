import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export const canonicalUrl = (pathname: string) =>
  `https://galimatyas-sumperk.cz${pathname === "/" ? "/" : pathname.replace(/\/+$/, "")}`;

export default function CanonicalUrl() {
  const { pathname } = useLocation();
  const url = canonicalUrl(pathname);
  return (
    <Helmet>
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
}