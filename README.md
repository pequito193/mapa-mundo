# Mapa Mundo – Donation Website

A simple static website for the **Mapa Mundo** festival project (Gestão Cultural).
It presents the cause (supporting families in Palestine) and shows an MB WAY number for donations.

No build step, no dependencies: just HTML, CSS and JavaScript.

## Files

- `index.html` – page content
- `style.css` – styling
- `script.js` – MB WAY number config, amount selector, copy button

## Setup

1. Open `script.js` and edit the `CONFIG` block at the top:
   - `mbwayNumber`: the real MB WAY phone number
   - `holderName`: the name of the account holder
2. Open `index.html` in a browser to preview it.

## Free hosting with GitHub Pages

1. Create a GitHub repository and push these files to the `main` branch.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

Alternatives (also free): Netlify, Cloudflare Pages, Vercel. Drag and drop the folder or connect the repo.

## Custom domain (optional)

The document mentions `festivalmapamundo.com`. A domain is not free (about 10–15 €/year),
but GitHub Pages supports custom domains under **Settings → Pages → Custom domain**.
