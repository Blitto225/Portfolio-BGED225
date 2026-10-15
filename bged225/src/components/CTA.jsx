import { motion } from 'framer-motion'
import portrait from '../assets/images/profil-me.webp'
import { contact } from '../data/portfolio'

const SPRING = { type: 'spring', stiffness: 340, damping: 25 }

export default function CTA() {
  return (
    <section className="section cta-section" id="contact">
      <div className="container">
        <div className="cta-grid-layout">
          <motion.div
            className="cta-text-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={SPRING}
          >
            <h2 className="cta-headline">Parlons de votre projet</h2>
            <p className="cta-subtext">
              Vous avez un projet d’application web ou une idée à concrétiser ?
              Parlons de vos besoins. Retrouvez aussi mes réalisations sur GitHub.
            </p>

            <div className="cta-actions">
              {contact.email && (
                <a className="cta-submit-btn" data-magnetic href={`mailto:${contact.email}`}>Écrire un e-mail</a>
              )}
              {contact.whatsapp && (
                <a
                  className="cta-submit-btn" data-magnetic
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              )}
              <a
                className={contact.email || contact.whatsapp ? 'cta-ghost-btn' : 'cta-submit-btn'}
                data-magnetic
                href={contact.github}
                target="_blank"
                rel="noreferrer"
              >
                Voir mon GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            className="cta-visual-col"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ ...SPRING, delay: 0.1 }}
          >
            <motion.div
              className="cta-cutout-wrapper"
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img src={portrait} alt="Blitto Enock" className="cta-cutout-img" loading="lazy" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
