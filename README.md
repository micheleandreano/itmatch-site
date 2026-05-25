# performa-site — migrazione WordPress → Astro

Sito performahrm.com ricostruito in **Astro** (deploy previsto su **Netlify**).

## Stato attuale

✅ **93 articoli** del blog migrati e pubblicabili, alla **radice** (`/slug/`) con URL identici a WordPress → **SEO preservata, zero redirect sugli articoli**
✅ **13 webinar** importati ma marcati `draft: true` (erano solo video+poco testo: da riscrivere o accorpare prima di pubblicare)
✅ `trailingSlash: 'always'` + `site` configurati → URL e canonical identici all'originale
✅ Sitemap generata automaticamente (`/sitemap-index.xml`)
✅ `_redirects` Netlify pronto (gestisce i webinar in bozza)
✅ Build pulito: 95 pagine

## Struttura

```
src/
  content/blog/          → 106 articoli .md (93 pubblicati + 13 draft)
  content.config.ts      → schema della collection
  layouts/Layout.astro   → <head>, SEO, canonical, Open Graph
  pages/
    index.astro          → homepage (DA RIDISEGNARE)
    [...slug].astro      → routing articoli alla radice
    blog/index.astro     → indice del blog
public/
  _redirects             → redirect Netlify
```

## Comandi

```bash
cd ~/Desktop/performa-site
npm run dev      # sviluppo locale
npm run build    # build di produzione in dist/
```

## PROSSIMI PASSI

### Design (la parte che vuoi rifare)
- [ ] Ridisegnare `index.astro` (homepage)
- [ ] Definire l'aesthetic del sito (font, colori, layout)
- [ ] Assegnare le **copertine nuove** agli articoli (campo `cover` nel frontmatter)
- [ ] Immagini nel corpo: vedi `immagini-da-rifare.csv` nel backup (42 articoli, 92 immagini)

### Contenuti
- [ ] Decidere sorte dei 13 webinar (riscrivere / accorpare / lasciare draft)
- [ ] Ricreare le pagine statiche (chi siamo, prodotti, contatti) — 40 pagine nel vecchio sito
- [ ] Verificare i link interni negli articoli (puntano ancora a performahrm.com/...)

### Deploy
- [ ] Collegare il repo a Netlify
- [ ] Build command: `npm run build`, publish dir: `dist`
- [ ] Puntare il DNS quando pronto

## Note SEO
- Gli articoli NON cambiano URL → niente perdita di posizionamento
- I 25 tag in 404 del vecchio sito: già morti, ignorati
- Le immagini negli articoli puntano ancora agli URL WordPress originali:
  funzionano finché il vecchio sito è online, poi vanno sostituite con le nuove
