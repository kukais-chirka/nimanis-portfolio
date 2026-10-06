# Chii Agency

Marketing site for Chii Agency (Chii Aģentūra). Astro, no UI framework.

- Latvian is the default locale, served from `/`
- English is served from `/en/`
- All copy for both locales lives in `src/i18n/content.ts`
- The page itself is `src/components/Home.astro`, rendered by the two thin files in `src/pages/`

## Local

```
npm install
npm run dev     # http://localhost:4340
npm run build   # outputs to dist/
```

## Brand

`public/brand/` holds the Chii wordmark as SVG plus PNG exports in dark, light
and accent, at 1600px and 512px.
