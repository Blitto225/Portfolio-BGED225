# Portfolio — Blitto Enock

Étudiant en licence de génie logiciel à l'UTA. Site vitrine React + Vite + Framer Motion.

## Lancer le projet

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # génère le site statique dans docs/
```

## Déployer sur GitHub Pages

Le site de ce dépôt est publié à l'adresse :

**https://blitto225.github.io/Portfolio-BGED225/**

GitHub Pages publie la racine de la branche `main`. La compilation est aussi conservée dans `/docs`. Pour reconstruire et publier depuis Windows :

```powershell
npm run deploy
```

Cette commande construit le site dans `docs/`, copie les fichiers compilés à la racine, puis pousse les changements sur `main`. GitHub Pages relance ensuite automatiquement la publication. Le domaine racine `https://blitto225.github.io` n'est pas l'adresse de ce dépôt ; il nécessite un dépôt distinct nommé `Blitto225.github.io`.

## Où modifier le contenu

Tout se trouve dans `src/data/portfolio.js` :

- `contact` : e-mail et WhatsApp (laissés vides : un champ vide n'est pas affiché sur le site)
- `projects` : nom, description, capture, lien Vercel (`demo`) et dépôt GitHub (`repo`)
- `designs` : affiches de `src/assets/images/design_graphic/`

## Structure

- `src/components/Projects.jsx` : projets avec aperçu du site, lien Vercel et GitHub
- `src/components/DesignGallery.jsx` : designs graphiques (formats d'origine, visionneuse plein écran)
- `src/index.css` : tout le style
