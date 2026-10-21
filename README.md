# vanillakit-brandings

A React + TypeScript + Vite starter for a clothing and creative branding business. Product, project, price, and contact details in this build are demonstrations only and should be replaced with confirmed brand information.

## Run the site

1. Install the current Node.js LTS version from nodejs.org. npm is included with Node.js.
2. Open this project folder in VS Code.
3. Open **Terminal → New Terminal** and run:

   ```powershell
   npm install
   npm run dev
   ```

4. Open the local address printed in the terminal (usually `http://localhost:5173`).
5. To make a production build, run `npm run build`.

## Deploy on Render

This project is configured as a Render static site in `render.yaml`.

1. Push the project to a GitHub repository.
2. In Render, choose **New → Blueprint** and connect that repository.
3. Review the detected `vanillakit-brandings` static site and deploy it.
4. Render will run `npm ci && npm run build` and publish the `dist` folder. When deployment finishes, use the `onrender.com` URL Render provides.

You can also create a **Static Site** manually with build command `npm ci && npm run build` and publish directory `dist`.

The site has no server-side runtime or secret environment variables. Its shopping cart and forms are still demonstrations: hosting does not enable real payments, order handling, or message delivery.

## Replace the placeholders

- Brand colors and typography: `src/styles.css` at the top, in `:root`.
- Sample products, prices, sizes and product photos: `src/data.ts` in `products`.
- Service and portfolio examples: `src/data.ts` in `services` and `projects`. They are not real client work.
- Contact email and social destinations: `src/App.tsx`; replace the clearly marked demo details with real ones.
- Put your logo and approved images in `public/assets`, then update the image paths in `src/data.ts` and `src/App.tsx` to point to those local files.

All displayed product/project content is sample content. The cart is a browser-only demonstration: it does not check stock, submit orders, or process payments. Contact and enquiry forms validate in the browser and show a demo confirmation, but do not send messages. Connect a trusted commerce provider or form backend before accepting real orders or enquiries.

The photo URLs currently point to Unsplash as replaceable visual placeholders and require an internet connection. Download or replace them with assets you have permission to use before publishing. No logo or brand artwork was present in the project when this starter was prepared, so the wordmark is editable text rather than a recreated logo.
