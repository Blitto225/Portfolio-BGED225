import { useState } from 'react'
import { motion } from 'framer-motion'
import { ServiceDoodle } from './Icons'
import TechIcon from './TechIcon'
import portrait from '../assets/images/profil-me.webp'

const SPRING_FAST = { type: 'spring', stiffness: 420, damping: 24 }

const SERVICES = [
  { n: '01', t: 'HTML5 & CSS3', icons: ['html5', 'css3'] },
  { n: '02', t: 'JavaScript & React.js', icons: ['javascript', 'react'] },
  { n: '03', t: 'Python & PHP', icons: ['python', 'php'] },
  { n: '04', t: 'XAMPP & Supabase', icons: ['xampp', 'supabase'] },
  { n: '05', t: 'Git & GitHub', icons: ['git', 'github'] },
  { n: '06', t: 'Docker', icons: ['docker'] },
]

export default function Services() {
  const [activeService, setActiveService] = useState('01')

  return (
    <section className="section services-section-wrap" id="services">
      <div className="container">
        {/* Main Services Dark Card Container */}
        <motion.div
          className="services-main-card"
          data-spotlight
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 280, damping: 26 }}
        >
          {/* Vertical Lime Ribbon Tag on the Left with spring hover */}
          <motion.div
            className="services-vertical-tag"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            transition={SPRING_FAST}
          >
            <span>COMPÉTENCES</span>
          </motion.div>

          {/* Section Header */}
          <div className="services-card-header">
            <h2 className="services-title">
              Mes <span className="services-lime-badge">outils</span>
            </h2>
            <p className="services-subtitle">
              Les technologies et outils que j’utilise au quotidien pour donner vie à vos projets.
            </p>
          </div>

          {/* Two-Column Grid Content */}
          <div className="services-card-grid">
            {/* Left Column: Technology and tool pills with interactive selection */}
            <div className="services-pills-list">
              {SERVICES.map((s, i) => {
                const isActive = activeService === s.n
                return (
                  <motion.div
                    key={s.n}
                    className={`service-pill-row ${isActive ? 'is-active' : ''}`}
                    onClick={() => setActiveService(s.n)}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25, delay: i * 0.08 }}
                    whileHover={{ x: 8, scale: 1.015 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="pill-number">{s.n}</span>
                    <span className="pill-title">{s.t}</span>
                    <span className="pill-icons" aria-hidden="true">
                      {s.icons.map((ic) => <TechIcon key={ic} name={ic} />)}
                    </span>
                    <motion.span
                      className="pill-arrow"
                      animate={{ x: isActive ? 4 : 0 }}
                      transition={SPRING_FAST}
                    >
                      &rarr;
                    </motion.span>
                  </motion.div>
                )
              })}
            </div>

            {/* Right Column: Photo with Diagram + 2 Action Cards */}
            <div className="services-visuals-col">
              {/* Photo with Doodle Overlay */}
              <motion.div
                className="services-photo-wrapper"
                whileHover={{ scale: 1.02 }}
                transition={SPRING_FAST}
              >
                <motion.div
                  className="services-doodle-container"
                  animate={{ rotate: [0, 3, 0, -3, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ServiceDoodle className="services-doodle-svg" />
                </motion.div>
                <img
                  src={portrait}
                  alt="Blitto Enock"
                  className="services-photo-img"
                />
              </motion.div>

              {/* Stacked 2 Action Cards on the Right */}
              <div className="services-side-cards-stack">
                {/* Dark Card with spring lift */}
                <motion.div
                  className="service-side-card service-side-dark"
                  whileHover={{ y: -5, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={SPRING_FAST}
                >
                  <p className="side-card-prompt">Du besoin à une application web fonctionnelle.</p>
                  <a href="#projects" className="side-card-action">
                    <span>Mes projets</span>
                    <motion.div
                      className="side-card-arrow-circle"
                      whileHover={{ rotate: 45 }}
                      transition={SPRING_FAST}
                    >
                      ↗
                    </motion.div>
                  </a>
                </motion.div>

                {/* Bright Lime Card with spring lift */}
                <motion.div
                  className="service-side-card service-side-lime"
                  whileHover={{ y: -5, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={SPRING_FAST}
                >
                  <p className="side-card-prompt">Création graphique mobile avec PixelLab.</p>
                  <a href="#design" className="side-card-action">
                    <span>Mes designs</span>
                    <motion.div
                      className="side-card-arrow-circle dark-circle"
                      whileHover={{ rotate: 45 }}
                      transition={SPRING_FAST}
                    >
                      ↗
                    </motion.div>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
