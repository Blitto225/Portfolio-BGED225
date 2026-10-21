---
name: aquilasdev-design-system
description: >-
  Système de design, composants UI/UX, typographie, palette de couleurs et taxonomie de compétences (stack fullstack) inspirés du portfolio aquilasdev (aquidev.com). À utiliser pour concevoir des sites web, applications et portfolios au rendu tech moderne haut de gamme.
---

# Skill : AquilasDev Design System & Skills Reference

Ce guide fournit l'ensemble des règles graphiques, choix typographiques, composants d'interface et la grille de compétences inspirés de **aquilasdev (aquidev.com)**. Activez ce skill dès que l'utilisateur souhaite créer un projet, une page ou un composant adoptant l'esthétique et la structure technique d'Aquilas.

---

## 1. Identité et Direction Artistique

- **Concept** : Alliance d'une ingénierie logicielle rigoureuse (*Software Engineer*) et d'un univers créatif tech moderne (*Tech Creator*).
- **Ambiance visuelle** : *Dark-mode first*, surfaces sombres profondes, bordures subtiles luminescentes, typographie éditoriale contrastée, animations fluides (Framer Motion) et disposition en Bento Grid.
- **Cible & Ton** : Professionnel, audacieux, orienté performance, conversion et clarté architecturale.

---

## 2. Palette de Couleurs & Tokens CSS

```css
:root {
  /* Arrière-plans & Surfaces */
  --aq-bg-root: #08090b;             /* Toile de fond ultra-sombre */
  --aq-bg-surface: #0f1115;          /* Cartes et sections */
  --aq-bg-surface-elevated: #16181e; /* Cartes survolées ou modales */
  --aq-bg-glass: rgba(15, 17, 21, 0.75); /* Navigation flottante avec backdrop-filter */

  /* Bordures */
  --aq-border-subtle: rgba(255, 255, 255, 0.07);
  --aq-border-glow: rgba(255, 255, 255, 0.16);

  /* Couleurs d'accentuation */
  --aq-accent-primary: #3b82f6;      /* Bleu tech électrique ou émeraude */
  --aq-accent-emerald: #10b981;      /* Vert disponible / statut en ligne */
  --aq-accent-lime: #c9f24b;         /* Optionnel : touche dynamique */
  --aq-accent-amber: #f59e0b;        /* Badges de formation / créateur */

  /* Textes & Contraste */
  --aq-text-main: #f3f4f6;           /* Titres et textes majeurs */
  --aq-text-secondary: #9ca3af;      /* Paragraphes explicatifs */
  --aq-text-muted: #6b7280;          /* Labels secondaires, dates */

  /* Rayons de courbure */
  --aq-radius-pill: 9999px;
  --aq-radius-card: 20px;
  --aq-radius-subcard: 14px;
}
```

---

## 3. Typographie Trio-Font (Signature AquilasDev)

L'atout visuel majeur du site provient de l'association de 3 polices Google Fonts complémentaires :

```html
<!-- Import Google Fonts officiel -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Instrument+Serif:ital,wght@0,400;1,400&family=Bricolage+Grotesque:opsz,wght@12..96,400..800&display=swap" rel="stylesheet" />
```

1. **`Plus Jakarta Sans`** (Corps de texte, boutons, navigation, tags) :
   - Moderne, lisibilité chirurgicale, géométrie neutre.
   - `font-family: 'Plus Jakarta Sans', sans-serif;`

2. **`Instrument Serif`** (Mots-clés éditoriaux dans les titres) :
   - Utilisé en **italique** sur des mots-clés spécifiques au sein des grands titres (ex: *"Je conçois des architectures robustes et des applications web <span class="italic font-serif">sur mesure</span>"*).
   - Apporte une dimension humaine, raffinée et haut de gamme.
   - `font-family: 'Instrument Serif', Georgia, serif; font-style: italic;`

3. **`Bricolage Grotesque`** (Grands titres, chiffres de statistiques, sections d'impact) :
   - Police neo-grotesque expressive à largeur variable.
   - `font-family: 'Bricolage Grotesque', sans-serif;`

---

## 4. Composants Clés & Motifs d'Interface (UI Patterns)

### A. Badge de statut (Pill Status)
```jsx
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs text-neutral-300">
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
  </span>
  <span>Disponible pour nouveaux projets & consultations</span>
</div>
```

### B. Cartes Bento Grid
Disposition asymétrique regroupant :
- Aperçu en direct d'un projet phare avec tag de stack (ex: `Next.js + NestJS`).
- Boîte à outils interactive classée par catégories.
- Statistiques d'impact (chiffres en `Bricolage Grotesque`).
- Citation ou vision produit.

### C. Effet de survol Spotlight (Suivi du curseur)
Chaque carte capture la position de la souris `(--mx, --my)` pour afficher un halo radial discret :
```css
.card-spotlight {
  position: relative;
  background: var(--aq-bg-surface);
  border: 1px solid var(--aq-border-subtle);
  border-radius: var(--aq-radius-card);
  overflow: hidden;
}
.card-spotlight::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgba(255, 255, 255, 0.06), transparent 70%);
  pointer-events: none;
}
```

---

## 5. Taxonomie Complète des Compétences (Skills Matrix)

Lors de la création de portfolios ou d'espaces de présentation, structurer les compétences selon la matrice d'AquilasDev :

### 1. Frontend Architecture
- **Frameworks & Libs** : React, Next.js (SSR / SSG / Server Actions), Angular, Vue.js
- **Langages** : TypeScript, JavaScript moderne (ESNext)
- **Styling & UI** : Tailwind CSS, Sass, CSS Modules, Bootstrap, Framer Motion
- **Mobile** : Flutter, Dart
- **Tooling** : Vite, Turbopack, Webpack

### 2. Backend & API Engineering
- **Écosystème Node.js** : Node.js, Express, NestJS (Architecture orientée domaine / modules)
- **Écosystème PHP** : Laravel, PHP 8+
- **Écosystème Java** : Java, Spring Boot
- **Écosystème Python** : Python, FastAPI, Django

### 3. Données & Cloud BaaS
- **Bases relationnelles** : PostgreSQL, MySQL, SQLite
- **Bases NoSQL** : MongoDB
- **Backend-as-a-Service** : Supabase (Auth, RLS, Realtime, Storage), Firebase

### 4. DevOps, Infrastructure & Outillage
- **Conteneurs** : Docker, Kubernetes
- **Serveurs & Déploiement** : Nginx, Linux, Vercel, VPS
- **Collaboration & Versioning** : Git, GitHub, GitLab, pipelines CI/CD

### 5. Conception Produit & Création Tech
- **Product Design** : Figma (Wireframing, maquettes haute fidélité, design tokens)
- **Développement assisté par IA** : Prompt engineering, agents IA, *vibe coding*, automatisation
- **Transmission** : Formations pratiques, workshops tech, rédaction d'articles techniques

---

## 6. Checklist de Réalisation pour les Futurs Projets

Lorsque vous développez un nouveau projet dans ce style :
1. ✅ Appliquer le fond ultra-sombre (`#08090b`) avec scroll fluide (`html.scroll-smooth`).
2. ✅ Importer les 3 polices Google Fonts (`Plus Jakarta Sans`, `Instrument Serif`, `Bricolage Grotesque`).
3. ✅ Intégrer les touches éditoriales en italique serif dans les titres percutants.
4. ✅ Structurer la section compétences selon les 5 piliers décrits ci-dessus.
5. ✅ Utiliser des cartes Bento Grid avec bordures fines à 7-10% d'opacité et effets de survol réactifs.

