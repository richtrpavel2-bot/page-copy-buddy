# Project architecture rules

- Store optimized gallery photos (max 1400 px JPEG) as regular files in `src/assets/` loaded via `import.meta.glob`, because CDN asset pointer URLs failed to render in the editor preview.
