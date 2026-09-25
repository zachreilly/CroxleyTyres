# Croxley Tyres website

React + Vite site for Croxley Tyres, Croxley Green. Hosted on Namecheap as static files, with a small PHP script for the contact form.

## Deploying

Every push to `main` is built by GitHub Actions and uploaded to Namecheap by FTP (`.github/workflows/deploy.yml`). Progress and errors show in the repo's **Actions** tab. To re-deploy without changing code: Actions → "Build and deploy to Namecheap" → **Run workflow**.

Repo secrets needed (Settings → Secrets and variables → Actions): `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, and optionally `FTP_DIR` (defaults to `public_html/`).

## Building by hand (optional)

Needs Node.js 20+ (https://nodejs.org).

```
npm install
npm run build
```

This creates a `dist/` folder. `npm run dev` runs a local preview while editing. The contact form won't send from the preview because it needs PHP.

## Manual upload (only if not using auto-deploy)

1. cPanel → File Manager → `public_html` (clear out any old files first).
2. Upload **everything inside** `dist/`, including the hidden `.htaccess` file. In File Manager, turn on Settings → "Show Hidden Files" to check it's there.
3. Visit the site and send a test message from the Contact page.

## Contact form

`client/public/contact.php` emails enquiries to `croxleytyres@gmail.com`. To change the address, edit `$TO_EMAIL` at the top of that file and rebuild.
It sends from `noreply@<your-domain>`. If messages end up in spam, set up SPF/DKIM for the domain in cPanel → Email Deliverability.

## Files

- `client/src/pages`: Home, Services, Tyres, Contact
- `client/src/components`: header, footer, hero, slideshow, contact form
- `attached_assets`: photos and logo
- `client/public`: copied as-is into the build (`contact.php`, `.htaccess`)
