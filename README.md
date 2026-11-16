# Ali AliAkbari — personal site

Astro static site. Content in `src/data/site.ts`.

## Local

```bash
npm install
npm run dev
```

## Live URL at https://ali-aliakbari.github.io/ (no `/ali-akbari-site` in the path)

GitHub only serves the **root** `username.github.io` URL from a repo named **`Ali-AliAkbari.github.io`**.

On GitHub: **Repository → Settings → General → Repository name** → rename  
`ali-akbari-site` → **`Ali-AliAkbari.github.io`**

After renaming, keep **Settings → Pages → Source** on **GitHub Actions** and only `.github/workflows/deploy.yml`.

Until you rename, the site is at: https://ali-aliakbari.github.io/ali-akbari-site/

## Deploy

Push to `main`. Use a single Pages workflow (no duplicate `astro.yml`).