import bgedImg from '../assets/images/projets-site/bged-immobilier.webp'
import canaanImg from '../assets/images/projets-site/canaan-shop.webp'
import convoisImg from '../assets/images/projets-site/convois-cmci.webp'

import affichePrestation from '../assets/images/design_graphic/affiche_prestation.jpeg'
import papos from '../assets/images/design_graphic/design_bdge-lpa-recto.jpeg'
import pacques from '../assets/images/design_graphic/affiche-resto-ed.jpeg'
import mondial from '../assets/images/design_graphic/affiche_evenement-can.jpeg'

/* ------------------------------------------------------------------ */
/*  Coordonnées — à compléter.                                         */
/*  Un champ vide n'est pas affiché sur le site (aucun faux lien).     */
/*  email    : 'prenom@exemple.com'                                    */
/*  whatsapp : '2250701412173'  (indicatif pays + numéro, sans « + »)  */
/* ------------------------------------------------------------------ */
export const contact = {
  github: 'https://github.com/enockblitto',
  email: '',
  whatsapp: '2250701412173',
  phone: '+225 07 01 41 21 73',
}

export const profile = {
  name: 'Blitto Enock',
  level: 'Licence · Génie logiciel',
}

export const skills = [
  { title: 'Frontend', description: 'Développement d’applications web structurées, responsives et interactives.', items: ['HTML5', 'CSS3', 'JavaScript', 'React.js'] },
  { title: 'Programmation & données', description: 'Développement des fonctionnalités et gestion des données d’application.', items: ['Python', 'PHP', 'Supabase'] },
  { title: 'Environnement de développement', description: 'Mise en place et outils de développement, test et collaboration.', items: ['XAMPP', 'Docker', 'Git', 'GitHub'] },
  { title: 'Création graphique', description: 'Réalisation de visuels et supports de communication.', items: ['PixelLab'] },
]

export const projects = [
  {
    slug: 'canaan',
    name: 'Canaan Shop',
    kind: 'E-commerce · Mode & accessoires',
    short: 'Une boutique en ligne de mode et d’accessoires pour femmes, avec commande via WhatsApp.',
    detail:
      'Boutique en ligne pensée pour présenter une sélection mode et beauté, avec livraison à Abidjan et prise de commande directe sur WhatsApp.',
    tech: ['React.js', 'Supabase'],
    image: canaanImg,
    imageAlt: 'Page d’accueil de Canaan Shop : « Votre style, votre signature. »',
    demo: 'https://canaan-shop.vercel.app/',
    repo: 'https://github.com/enockblitto/canaan-shop',
  },
  {
    slug: 'bged',
    name: 'BGED Immobilier',
    kind: 'Location de logements · Côte d’Ivoire',
    short: 'Une application pour trouver une maison à louer auprès de sociétés immobilières ivoiriennes.',
    detail:
      'Recherche de logements par ville (Abidjan, Bouaké, Yamoussoukro…), avec des biens publiés par des sociétés immobilières partenaires, sans intermédiaire informel.',
    tech: ['React.js', 'Supabase'],
    image: bgedImg,
    imageAlt: 'Page d’accueil de BGED Immobilier : « Un chez-vous, quelque part entre lagune et ville »',
    demo: 'https://bged-immobilier.vercel.app/',
    repo: 'https://github.com/enockblitto/BGED_immobilier',
  },
  {
    slug: 'convois',
    name: 'CMCI Convois',
    kind: 'Organisation communautaire · Croisades',
    short: 'Un outil de réservation et de suivi des convois pour les déplacements des croisades.',
    detail:
      'Réservation d’une place dans un car, paiement en Mobile Money et reçu instantané, avec un suivi des convois par les responsables.',
    tech: ['React.js', 'Supabase'],
    image: convoisImg,
    imageAlt: 'Page d’accueil de CMCI Convois : « Voyagez ensemble vers la croisade. »',
    demo: 'https://convois-cmci.vercel.app/',
    repo: 'https://github.com/enockblitto/convois-cmci',
  },
]

export const designs = [
  { slug: 'soundcloud', title: 'Soundcloud Nostalgie', kind: 'Affiche d’événement', image: affichePrestation, alt: 'Affiche « Soundcloud Nostalgie » au Montego Lounge, le 14 février 2026' },
  { slug: 'papos', title: 'Les Papos d’Anyama', kind: 'Visuel Press Media', image: papos, alt: 'Visuel « Press Media — Les Papos d’Anyama »' },
  { slug: 'paques', title: 'Spécial fête de Pâques', kind: 'Affiche restauration', image: pacques, alt: 'Affiche « Spécial fête de Pâques » à la Plage Eau Douce' },
  { slug: 'mondial', title: 'Suivez le mondial', kind: 'Affiche d’événement', image: mondial, alt: 'Affiche « Suivez le mondial à Ebimpé Village »' },
]

export const steps = [
  { title: 'Comprendre le besoin', text: 'Identifier le contexte et le problème à résoudre avant de construire.' },
  { title: 'Concevoir la solution', text: 'Définir les fonctionnalités et la structure adaptées au projet.' },
  { title: 'Développer', text: 'Construire les fonctionnalités avec les technologies appropriées.' },
  { title: 'Tester & améliorer', text: 'Vérifier le résultat, ajuster l’expérience puis mettre en ligne lorsque prévu.' },
]

/* ------------------------------------------------------------------ */
/*  Section « Pourquoi me choisir ? » — parcours de collaboration.     */
/*  Illustration générique : aucun client, contrat, citation ni chiffre */
/*  réel n'est représenté. Les captures viennent de `projects`.        */
/* ------------------------------------------------------------------ */
export const collaboration = [
  { id: 'besoin', title: 'Je vous écoute', text: 'Vous présentez votre besoin et votre cahier des charges. Je prends le temps de bien comprendre le contexte.' },
  { id: 'cadrage', title: 'Nous cadrons ensemble', text: 'Le projet est cadré, les étapes et le calendrier sont définis avec vous avant de commencer.' },
  { id: 'dev', title: 'Je conçois et développe', text: 'Le site est conçu et développé avec soin, avec des échanges réguliers pour un suivi clair.' },
  { id: 'livraison', title: 'Je présente et je livre', text: 'Le projet vous est présenté puis livré selon le calendrier convenu ensemble.' },
  { id: 'resultat', title: 'Vous découvrez le résultat', text: 'Vous découvrez le site en ligne et vous pouvez demander les ajustements utiles.' },
]
