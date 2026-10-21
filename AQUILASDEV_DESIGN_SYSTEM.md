# 🎨 AquilasDev Design System & Skills Reference
> Référence complète de design, typographie, composants UI et structure de compétences issue de [aquidev.com](https://aquidev.com) (*Christoin Aquilas / aquilasdev*).

Ce document consigne l'ensemble des règles graphiques, des patterns d'interface et des technologies à réutiliser pour tous nos futurs projets communs.

---

## 🌟 1. Identité de Marque & Positionnement

- **Positionnement** : Double profil alliant **Software Engineer** (rigueur logicielle, architectures scalables et performantes) et **Tech Creator** (création de contenu, vulgarisation, ateliers pratiques sur l'IA et le développement web).
- **Philosophie d'expérience (UX)** :
  - Fluidité maximale (*smooth scroll*, micro-interactions).
  - Éléments de preuve concrets : architectures réelles, projets déployés avec métriques, live previews.
  - Clarté immédiate de la valeur : proposition axée sur la performance, la conversion utilisateur et l'accélération d'affaires.

---

## 🎭 2. Direction Visuelle & Tokens de Design

### A. Palette de Couleurs (Dark Theme Premium)

| Token CSS | Code Couleur | Utilisation |
| :--- | :--- | :--- |
| `--bg-root` | `#08090b` | Fond principal ultra-sombre |
| `--bg-surface` | `#0f1115` | Fond des cartes Bento, modules et panneaux |
| `--bg-surface-elevated` | `#16181e` | Éléments surélevés, cartes actives, modales |
| `--border-subtle` | `rgba(255, 255, 255, 0.07)` | Délimitation discrète des cartes |
| `--border-active` | `rgba(255, 255, 255, 0.18)` | Bordure en état de survol ou focus |
| `--text-primary` | `#f3f4f6` | Titres principaux et texte fort |
| `--text-secondary` | `#9ca3af` | Descriptions, sous-titres, paragraphes |
| `--text-muted` | `#6b7280` | Métadonnées, tags d'états |
| `--accent-emerald` | `#10b981` | Pastille de disponibilité (*Open to work / consulting*) |
| `--accent-blue` | `#3b82f6` | Liens d'action et touches technologiques |
| `--accent-amber` | `#f59e0b` | Badges de formation et initiatives communautaires |

---

### B. Typographie Signature (Trio Google Fonts)

Le style distinctif de `aquidev.com` repose sur une harmonie entre **3 polices de caractères** :

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Instrument+Serif:ital,wght@0,400;1,400&family=Bricolage+Grotesque:opsz,wght@12..96,400..800&display=swap" rel="stylesheet" />
```

1. **`Plus Jakarta Sans`** : Police sans-serif moderne, nette et ultra-lisible.
   - *Rôle* : Corps de texte, boutons, navigation, tags techniques.
2. **`Instrument Serif`** : Police avec empattements, d'inspiration éditoriale.
   - *Rôle* : Insérée en **italique** sur certains mots-clés au sein des grands titres pour donner une signature haut de gamme et humaine (*ex: « applications web sur mesure »*).
3. **`Bricolage Grotesque`** : Police neo-grotesque à fort caractère.
   - *Rôle* : Titres de sections majeurs, grands chiffres statistiques.

---

## 🧩 3. Patterns d'Interface & Composants Réutilisables

### 1. La Navigation Flottante (*Floating Glass Dock*)
- Position fixée en haut avec léger décalage (`top-4`).
- Effet verre dépoli : `background: rgba(15, 17, 21, 0.75); backdrop-filter: blur(16px);`.
- Liens avec indicateurs d'état actif souples (glissement de pilule via Framer Motion `layoutId`).

### 2. Le Bento Grid Modulaire
- Grille asymétrique (`grid grid-cols-1 md:grid-cols-3 gap-4`).
- Regroupe dans un même champ de vision :
  - Une carte principale mettant en avant le produit ou projet vedette.
  - Une carte interactive pour explorer la stack technique.
  - Une carte statistique d'impact.
  - Une carte d'engagement direct (contact / calendrier de consultation).

### 3. Effet Interactif Spotlight sur les Cartes
- Traitement au survol où un halo lumineux blanc discret suit le curseur :
  ```css
  background: radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgba(255, 255, 255, 0.06), transparent 70%);
  ```

### 4. Badge de Disponibilité Clignotant
- Pastille animée avec un anneau d'impulsion vert émeraude (`animate-ping`) indiquant la disponibilité immédiate pour de nouveaux projets.

---

## 🛠️ 4. Matrice Complète des Compétences (*Skills Matrix*)

Voici la structure de compétences complète déployée par Christoin Aquilas, organisée par piliers technologiques :

```
├── 1. FRONTEND ARCHITECTURE
│   ├── Frameworks & Librairies : React, Next.js (App Router, SSR, SSG), Angular, Vue.js
│   ├── Langages : TypeScript, JavaScript (ESNext)
│   ├── UI & Styling : Tailwind CSS, Sass, CSS Modules, Bootstrap, Framer Motion
│   ├── Mobile : Flutter, Dart
│   └── Outils de Build : Vite, Turbopack, Webpack
│
├── 2. BACKEND & API ENGINEERING
│   ├── Node.js : Express, NestJS (Architectures modulaires, TypeScript)
│   ├── PHP : Laravel, PHP 8+
│   ├── Java : Java, Spring Boot
│   └── Python : Python, FastAPI, Django
│
├── 3. BASES DE DONNÉES & CLOUD BAAS
│   ├── SGBD Relationnels : PostgreSQL, MySQL, SQLite
│   ├── Bases NoSQL : MongoDB
│   └── Backend-as-a-Service : Supabase (Auth, RLS, Storage, Realtime), Firebase
│
├── 4. DEVOPS, INFRASTRUCTURE & COLLABORATION
│   ├── Conteneurisation : Docker, Kubernetes
│   ├── Serveurs & Web : Nginx, environnements Linux, Vercel, VPS
│   └── Versioning & CI/CD : Git, GitHub, GitLab, workflows d'intégration continue
│
└── 5. PRODUCT DESIGN & CRÉATION TECH
    ├── UI/UX & Prototypage : Figma (Wireframing, Design Systems, maquettes interactives)
    ├── Modern AI Workflows : Développement assisté par IA, Prompt Engineering, Vibe Coding
    └── Transmission : Formations, ateliers pratiques, partage de veille technique
```

---

## 🚀 5. Comment l'utiliser dans nos prochains projets

Lorsque nous démarrerons un nouveau projet, vous pourrez simplement me dire :
- *"Utilise le design system AquilasDev pour ce projet"*
- *"Applique la typographie et les couleurs de aquidev.com"*
- *"Organise les compétences et la section projets comme sur AquilasDev"*

L'agent chargera directement ce skill et appliquera automatiquement ces standards.

