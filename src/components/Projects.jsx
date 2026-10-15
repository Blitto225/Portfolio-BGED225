import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'

const hostOf = (url) => new URL(url).host

const GithubMark = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
  </svg>
)

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="team-header-row">
          <motion.h2
            className="team-title"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Mes <span className="team-lime-badge">projets</span>
          </motion.h2>
          <a href="#design" className="projects-jump">Voir mes designs ↓</a>
        </div>

        <div className="projects-list">
          {projects.map((p, i) => (
            <motion.article
              className={`project-card ${i % 2 ? 'is-reversed' : ''}`}
              data-spotlight
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                className="project-browser"
                data-tilt
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ouvrir le site ${p.name}`}
              >
                <div className="project-browser-bar" aria-hidden="true">
                  <span /><span /><span />
                  <em>{hostOf(p.demo)}</em>
                </div>
                <img src={p.image} alt={p.imageAlt} loading="lazy" width="1911" height="986" />
              </a>

              <div className="project-info">
                <p className="project-kind">{p.kind}</p>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-short">{p.short}</p>
                <p className="project-detail">{p.detail}</p>
                <ul className="project-tech" aria-label="Technologies utilisées">
                  {p.tech.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <div className="project-actions">
                  <a className="project-btn project-btn-lime" data-magnetic href={p.demo} target="_blank" rel="noreferrer">
                    Voir le site ↗
                  </a>
                  <a className="project-btn project-btn-ghost" href={p.repo} target="_blank" rel="noreferrer">
                    <GithubMark /> Code GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
