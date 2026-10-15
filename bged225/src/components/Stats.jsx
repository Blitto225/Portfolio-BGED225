import { useEffect, useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'

const STATS = [
  { to: 3, suffix: '', label: 'projets présentés' },
  { to: 4, suffix: '', label: 'technologies frontend' },
  { to: 2, suffix: '', label: 'outils backend & données' },
  { to: 4, suffix: '', label: 'designs graphiques présentés' },
]

function Counter({ to, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toLocaleString('en-US') + suffix
      },
    })
    return () => controls.stop()
  }, [inView, to, suffix])

  return <span ref={ref}>0{suffix}</span>
}

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <motion.div
          className="stats-card-container"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {STATS.map((s, idx) => (
            <div className="stats-col-item" key={s.label}>
              <h3 className="stats-col-num">
                <Counter to={s.to} suffix={s.suffix} />
              </h3>
              <p className="stats-col-label">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
