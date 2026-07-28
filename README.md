# christianhoimes.com

Personal site with three tabs: **Home** (bio), **Projects** (case studies), and
**Writing** (Substack mirrored via RSS, filterable by Tech / Medicine & Biotech /
Physics). Built with Next.js (static export) and deployed to GitHub Pages.

## Stack

- **Next.js 14** (App Router), static export (`output: "export"`) → plain HTML in `out/`
- **rss-parser**: Substack feed is fetched **at build time**
- **GitHub Pages** hosting with custom domain `christianhoimes.com`

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # generates static site in ./out
npx serve out      # preview the exact static output
```

## How Writing stays current

The Substack feed (`https://christianhoimes.substack.com/feed`) is pulled during
`npm run build`. New posts therefore appear whenever the site is rebuilt. The
GitHub Actions workflow (`.github/workflows/deploy.yml`) rebuilds on every push
**and** on a daily cron, so new posts show up without a manual push.

Posts are bucketed into **Tech / Medicine & Biotech / Physics** in
`src/lib/categories.ts`:

1. Substack `<category>` tags are matched against keyword lists.
2. Anything untagged/ambiguous falls back to `Tech`.
3. To force a specific bucket for a post, add its slug to `SLUG_OVERRIDES`
   (the slug is the last path segment of the Substack URL).

## Editing content

- **Bio:** `src/app/page.tsx`
- **Projects:** `src/lib/projects.ts` (the draft copy; refine wording/metrics/links)
- **Resume:** replace `public/resume.pdf`
- **Headshot:** replace `public/headshot_2.jpeg` (renders at 148px, cropped square). If
  the file is missing, the Home page falls back to a "CH" placeholder.
- **Site metadata / accent color:** `src/lib/config.ts` and `src/app/globals.css`

## First-time deploy (one-time setup)

1. Create a GitHub repo and push this project to the `main` branch.
2. Repo **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. Add the custom domain `christianhoimes.com` (the `public/CNAME` file already
   pins it).
4. At your DNS registrar, point the apex domain at GitHub Pages:
   - `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
     `185.199.111.153`
   - `CNAME` for `www` → `ChristianH22.github.io`
5. Push to `main`, and the workflow builds and deploys automatically.
