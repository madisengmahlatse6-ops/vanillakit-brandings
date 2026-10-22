# Vanilla Kit Branding Website

Plain HTML, CSS, and JavaScript website for Vanilla Kit Branding. Product and contact details are limited to the supplied business information.

## Preview locally

1. Install the Live Server extension in VS Code.
2. Open `index.html`.
3. Select **Open with Live Server**.

## Add product images

Place the five supplied images in the `images` folder using the filenames already referenced by `index.html`:

- `r280-tshirt-ad.jpg`
- `branding-contact-card.jpg`
- `beanie-ad.jpg`
- `cap-ad.jpg`
- `g5-luffy-collection.jpg`

Missing images display a labelled placeholder instead of another product image.

## Render deployment

`render.yaml` configures this project as a Render static site.

Use these settings if configuring it manually:

- Build command: `npm ci && npm run build`
- Publish directory: `dist`

The build script copies the complete plain website into `dist`. Push changes to GitHub, then create a Render Static Site or Blueprint from the repository. Orders are opened through WhatsApp; this site does not process payments or automatically store orders.
