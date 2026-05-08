# Nikhil Bisht Portfolio

Static personal portfolio website built with plain HTML, CSS, and JavaScript.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

## Project Structure

- `codebase/portfolio/index.html` - Main page content and SEO metadata
- `codebase/portfolio/styles.css` - Styling and theme design
- `codebase/portfolio/script.js` - Theme toggle, mobile nav, scroll-to-top behavior
- `codebase/portfolio/robots.txt` - Search engine crawl rules
- `codebase/portfolio/sitemap.xml` - Sitemap for indexing

## Run Locally

This is a static site, so no build step is required.

Option 1:
- Open `codebase/portfolio/index.html` directly in your browser.

Option 2 (recommended for local testing):
- Start a simple HTTP server from project root:
  - `python3 -m http.server 8000`
- Open:
  - `http://localhost:8000/codebase/portfolio/`

## Deployment

Deploy the contents of `codebase/portfolio` to any static hosting provider:

- Cloudflare Pages
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront

Make sure your custom domain points correctly and HTTPS is enabled.

## Cloudflare Pages Setup

This project is deployed as a static site from `codebase/portfolio`.

### One-time setup

1. Go to **Cloudflare Dashboard -> Workers & Pages -> Create application -> Pages -> Connect to Git**.
2. Select this repository.
3. Configure build settings:
   - **Framework preset**: `None`
   - **Production branch**: `master` (or `main`, whichever your repo uses)
   - **Build command**: leave empty (or set `echo "no build"`)
   - **Build output directory**: `codebase/portfolio`
4. Save and deploy.

Note: do not use `npx wrangler deploy` for this static Pages setup.

### How builds are triggered

Cloudflare Pages automatically triggers a deployment when you push to the production branch.

- `git push origin master`

If your default branch is `main`, use `main` instead of `master`.

### Add a custom domain in Cloudflare Pages

1. Open Cloudflare Dashboard -> **Workers & Pages** -> your Pages project.
2. Go to **Custom domains**.
3. Click **Set up a custom domain** and enter your domain (for example, `nikhilbisht.com`).
4. Add `www` as a second custom domain if needed (for example, `www.nikhilbisht.com`).
5. Follow Cloudflare DNS instructions:
   - If your DNS is already on Cloudflare, it can auto-create required records.
   - If DNS is external, create the DNS records exactly as shown in Cloudflare.
6. Wait for domain verification and SSL certificate provisioning.

Recommended DNS behavior:

- Use one hostname as primary (usually apex domain like `nikhilbisht.com`).
- Redirect the other hostname (`www`) to the primary using a Cloudflare redirect rule.
- Keep SSL/TLS mode as `Full` (or `Full (strict)` if your origin cert setup supports it).

### Trigger a build without code changes

Use an empty commit to trigger deployment:

- `git commit --allow-empty -m "chore: trigger deployment"`
- `git push origin master`

### Common build failure and fix

If build logs show:

- `Could not detect a directory containing static files`
- while running `npx wrangler deploy`

it means Worker deploy flow was used instead of Pages static deploy.

Fix by using the Pages build settings above, or deploy the static directory explicitly:

- `npx wrangler pages deploy codebase/portfolio --project-name <your-pages-project-name>`

## SEO

The site currently includes:

- Meta title and description
- Open Graph and Twitter metadata
- Canonical URL
- JSON-LD structured data (`Person`)
- `robots.txt`
- `sitemap.xml`

## Contact

- Email: `nikhilbisht.dev@gmail.com`
- GitHub: [nbisht30](https://github.com/nbisht30)
- LinkedIn: [nikhilbisht](https://linkedin.com/in/nikhilbisht)
