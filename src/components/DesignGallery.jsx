import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { designs } from '../data/portfolio'

export default function DesignGallery() {
  const [current, setCurrent] = useState(null) // index de l'affiche ouverte

  const close = useCallback(() => setCurrent(null), [])
  const step = useCallback(
    (d) => setCurrent((i) => (i === null ? i : (i + d + designs.length) % designs.length)),
    [],
  )

  useEffect(() => {
    if (current === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [current, close, step])

  const open = current === null ? null : designs[current]

  return (
    <section className="section design-section" id="design">
      <div className="container">
        <div className="team-header-row design-header">
          <motion.h2
            className="team-title"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Mes <span className="team-lime-badge">designs</span>
          </motion.h2>
          <p className="design-intro">
            Affiches et visuels réalisés avec PixelLab, présentés dans leur format d’origine.
          </p>
        </div>

        <div className="design-grid">
          {designs.map((d, i) => (
            <motion.figure
              className="design-item"
              data-spotlight
              key={d.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                className="design-open"
                data-label="Agrandir"
                onClick={() => setCurrent(i)}
                aria-label={`Agrandir : ${d.title}`}
              >
                <img src={d.image} alt={d.alt} loading="lazy" />
              </button>
              <figcaption>
                <strong>{d.title}</strong>
                <span>{d.kind}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={open.title}
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button type="button" className="lightbox-close" onClick={close} aria-label="Fermer">×</button>
            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              onClick={(e) => { e.stopPropagation(); step(-1) }}
              aria-label="Design précédent"
            >←</button>
            <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
              <img key={open.slug} src={open.image} alt={open.alt} />
              <figcaption>{open.title} · {open.kind}</figcaption>
            </figure>
            <button
              type="button"
              className="lightbox-nav lightbox-next"
              onClick={(e) => { e.stopPropagation(); step(1) }}
              aria-label="Design suivant"
            >→</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
