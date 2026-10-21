# AI for Work HQ

Web de nínxol: eines d'IA i productivitat (anglès) + afiliació.
Veure `PLAN.md` a l'arrel del projecte per a l'estratègia completa.

## Estructura

```
aiforworkhq/
├── PLAN.md          # estratègia, títols, checklist 30 dies
├── site/            # el web (estàtic, 0 dependències)
│   ├── index.html
│   ├── css/style.css
│   └── articles/    # articles (HTML)
└── content/         # esborranys en markdown (opcional)
```

## Desplegament

1. Repository a GitHub
2. Cloudflare Pages → connectar repo → build: *cap* (estàtic) → output: `site/`
3. Domini `aiforworkhq.com` connectat a Cloudflare

## Previsualització local

Obre `site/index.html` al navegador, o bé:

```powershell
cd site
python -m http.server 8080
```
