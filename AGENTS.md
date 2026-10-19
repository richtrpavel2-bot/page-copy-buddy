# Project architecture rules
- Manage canonical and og:url per pathname through Helmet inside the router; keep static canonical out of index.html to avoid duplicate or homepage-only canonicals on subpages.

- Store optimized gallery photos (max 1400 px JPEG) as regular files in `src/assets/` loaded via `import.meta.glob`, because CDN asset pointer URLs failed to render in the editor preview.
