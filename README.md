# VOKMO

Situs & platform infrastruktur email enterprise (Next.js App Router, Cloudflare Pages + D1).

## Pengembangan

```bash
npm install
npm run dev
```

## Homepage (14 section)

Blueprint section ada di `src/data/homepage-content.ts`. Set `ready: true` per section lalu implementasi komponen di `src/components/pages/home/`.

## Deploy

Target: **Cloudflare Pages** (`@cloudflare/next-on-pages`).
