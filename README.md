# Ashlesa Behera: Portfolio

React + Vite + Tailwind CSS + Framer Motion + Lucide React.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Before you publish
1. **Photo:** in `src/data/portfolioData.js` replace `MY_IMAGE_URL` with your photo URL. It is used only in the Professional Summary section (`ProfileSummary.jsx`).
2. **Resume:** put your PDF at `public/resume.pdf`.
3. **Project links:** replace the GitHub (and add `demo`) URLs per project in `portfolioData.js`. A Live Demo button appears only when `demo` is set.
4. **Contact form:** it validates and shows a success message but does not send email. Connect EmailJS, Formspree or your own API in `Contact.jsx` (`submit`).
5. **Open Graph image:** add `og:image` and `og:url` to `index.html` once deployed.

All content lives in `src/data/portfolioData.js`. Deploy `dist/` to Vercel, Netlify or GitHub Pages.
