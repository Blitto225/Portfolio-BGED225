# Portfolio — Blitto Enock

Étudiant en L3 Génie logiciel à l'UTA. Site vitrine React + Vite + Framer Motion.

## Lancer le projet

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # génère dist/ (Vercel le fait automatiquement)
```

## Où modifier le contenu

Tout se trouve dans `src/data/portfolio.js` :

- `contact` : e-mail et WhatsApp (laissés vides : un champ vide n'est pas affiché sur le site)
- `projects` : nom, description, capture, lien Vercel (`demo`) et dépôt GitHub (`repo`)
- `designs` : affiches de `src/assets/images/design_graphic/`

## Structure

- `src/components/Projects.jsx` : projets avec aperçu du site, lien Vercel et GitHub
- `src/components/DesignGallery.jsx` : designs graphiques (formats d'origine, visionneuse plein écran)
- `src/index.css` : tout le style
