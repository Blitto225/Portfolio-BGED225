import { motion } from 'framer-motion'
import logo from '../assets/logos/logo-bged-noir.webp'
import { projects, contact, profile } from '../data/portfolio'

const NAV = [
  ['À propos', '#about'],
  ['Compétences', '#services'],
  ['Projets', '#projects'],
  ['Designs', '#design'],
  ['Contact', '#contact'],
]
const SKILLS = ['HTML5 & CSS3', 'JavaScript & React.js', 'Python & PHP', 'XAMPP & Supabase', 'Git & GitHub', 'Docker']

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <motion.div
        className="footer-lime-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="footer-top-header">
          <div className="footer-brand-logo">
            <img src={logo} alt="Logo BGED" className="footer-logo-img" />
          </div>
          <p className="footer-tagline">
            {profile.name} conçoit et développe des applications web adaptées aux besoins de ses clients, du développement des fonctionnalités à leur mise en ligne.
          </p>
        </div>

        <div className="footer-columns-grid">
          <div className="footer-nav-col">
            <h4 className="footer-col-title">NAVIGATION</h4>
            <ul className="footer-links-list">
              {NAV.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-title">SITES EN LIGNE</h4>
            <ul className="footer-links-list">
              {projects.map((p) => (
                <li key={p.slug}><a href={p.demo} target="_blank" rel="noreferrer">{p.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-title">CODE SOURCE</h4>
            <ul className="footer-links-list">
              {projects.map((p) => (
                <li key={p.slug}><a href={p.repo} target="_blank" rel="noreferrer">{p.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-title">COMPÉTENCES</h4>
            <ul className="footer-links-list">
              {SKILLS.map((item) => <li key={item}><a href="#services">{item}</a></li>)}
            </ul>
          </div>

          <div className="footer-nav-col footer-newsletter-col">
            <h4 className="footer-col-title">CONTACT</h4>
            <ul className="footer-links-list">
              {contact.email && <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>}
              {contact.whatsapp && (
                <li><a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp · {contact.phone}</a></li>
              )}
              <li><a href={contact.github} target="_blank" rel="noreferrer">GitHub · enockblitto</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <span className="footer-copyright">
            &copy; 2026 {profile.name}. Tous droits réservés.
          </span>

          <div className="footer-social-icons">
            <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
