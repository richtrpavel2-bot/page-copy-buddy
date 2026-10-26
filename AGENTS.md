# Project architecture rules
- Manage canonical and og:url per pathname through Helmet inside the router; keep static canonical out of index.html to avoid duplicate or homepage-only canonicals on subpages.

- Store optimized gallery photos (max 1400 px JPEG) as regular files in `src/assets/` loaded via `import.meta.glob`, because CDN asset pointer URLs failed to render in the editor preview.
- Prerender the home route into dist/index.html at build time (entry-server.tsx + scripts/prerender.mjs) and hydrate it in main.tsx; an inline script empties #root on other paths so they render client-side, because the LCP text must not wait for JavaScript.
