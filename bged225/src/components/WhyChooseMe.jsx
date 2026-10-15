import { useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { collaboration, projects } from '../data/portfolio'
import { FourPointStar } from './Icons'

/* ------------------------------------------------------------------ */
/*  Vidéo optionnelle (aucun fichier n'existe pour l'instant).         */
/*  Déposez simplement ces fichiers, sans modifier le code :           */
/*    src/assets/videos/pourquoi-me-choisir.webm                       */
/*    src/assets/videos/pourquoi-me-choisir.mp4                        */
/*  Tant qu'ils sont absents, la séquence animée ci-dessous est utilisée. */
/* ------------------------------------------------------------------ */
const videoFiles = import.meta.glob('../assets/videos/pourquoi-me-choisir.{mp4,webm}', {
  eager: true,
  query: '?url',
  import: 'default',
})
const videoSrc = (ext) => Object.entries(videoFiles).find(([path]) => path.endsWith(`.${ext}`))?.[1]
const VIDEO = { webm: videoSrc('webm'), mp4: videoSrc('mp4') }
const HAS_VIDEO = Boolean(VIDEO.webm || VIDEO.mp4)

const SPRING = { type: 'spring', stiffness: 320, damping: 25 }
const EASE = [0.22, 1, 0.36, 1]
const STEP_MS = 5600 // durée d'une scène

const shot = (slug) => projects.find((p) => p.slug === slug)
const host = (url) => new URL(url).host

/* Apparition d'un élément dans une scène ; sans animation si mouvement réduit */
const pop = (reduce, delay = 0, from = { opacity: 0, y: 14 }) =>
  reduce
    ? { initial: false }
    : {
        initial: from,
        animate: { opacity: 1, y: 0, x: 0, scale: 1 },
        transition: { duration: 0.5, delay, ease: EASE },
      }

const grow = (reduce, delay = 0, duration = 0.8) =>
  reduce
    ? { initial: false }
    : { initial: { scaleX: 0 }, animate: { scaleX: 1 }, transition: { duration, delay, ease: EASE } }

const Check = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8.5l3.2 3.2L13 4.8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ----------------------------- Scènes ----------------------------- */

function SceneBrief({ reduce }) {
  const rows = ['Objectifs du projet', 'Fonctionnalités attendues', 'Contenus et visuels', 'Contraintes et délais']
  return (
    <div className="why-scene why-scene-brief">
      <motion.div className="why-doc" {...pop(reduce, 0)}>
        <div className="why-doc-head">Cahier des charges</div>
        <ul className="why-doc-rows">
          {rows.map((r, i) => (
            <motion.li key={r} {...pop(reduce, 0.35 + i * 0.45, { opacity: 0, x: -10 })}>
              <motion.span
                className="why-tick"
                {...(reduce
                  ? { initial: false }
                  : { initial: { scale: 0 }, animate: { scale: 1 }, transition: { delay: 0.7 + i * 0.45, type: 'spring', stiffness: 500, damping: 18 } })}
              >
                <Check />
              </motion.span>
              {r}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <motion.p className="why-bubble why-bubble-you" {...pop(reduce, 0.2, { opacity: 0, scale: 0.8 })}>
        Voici mon besoin.
      </motion.p>
      <motion.p className="why-bubble why-bubble-me" {...pop(reduce, 2.4, { opacity: 0, scale: 0.8 })}>
        Je vous écoute.
      </motion.p>
    </div>
  )
}

function SceneFraming({ reduce }) {
  const nodes = ['Cadrage', 'Conception', 'Développement', 'Livraison']
  return (
    <div className="why-scene why-scene-framing">
      <div className="why-timeline">
        <div className="why-timeline-track">
          <motion.span className="why-timeline-fill" {...grow(reduce, 0.3, 2.4)} />
        </div>
        {nodes.map((n, i) => (
          <motion.div className="why-node" key={n} {...pop(reduce, 0.3 + i * 0.75, { opacity: 0, scale: 0.6 })}>
            <span className="why-node-dot">{i === 0 ? <Check /> : i + 1}</span>
            <span className="why-node-label">{n}</span>
          </motion.div>
        ))}
      </div>
      <motion.p className="why-pill" {...pop(reduce, 3.2)}>
        <Check /> Étapes et calendrier définis ensemble
      </motion.p>
    </div>
  )
}

function SceneBuild({ reduce }) {
  const p = shot('canaan')
  const rows = [
    { label: 'Conception', fill: 1, delay: 0.4 },
    { label: 'Développement', fill: 0.72, delay: 1 },
    { label: 'Tests', fill: 0.38, delay: 1.6 },
  ]
  return (
    <div className="why-scene why-scene-build">
      <motion.div className="why-mini-browser" {...pop(reduce, 0)}>
        <div className="why-mini-bar" aria-hidden="true"><span /><span /><span /><em>{host(p.demo)}</em></div>
        <motion.img
          src={p.image}
          alt=""
          {...(reduce
            ? { initial: false }
            : { initial: { clipPath: 'inset(0 0 100% 0)' }, animate: { clipPath: 'inset(0 0 0% 0)' }, transition: { duration: 2.4, delay: 0.5, ease: 'easeInOut' } })}
        />
      </motion.div>
      <motion.div className="why-track-panel" {...pop(reduce, 0.2, { opacity: 0, x: 16 })}>
        <p className="why-track-title">Suivi du projet</p>
        {rows.map((r) => (
          <div className="why-track-row" key={r.label}>
            <span>{r.label}</span>
            <span className="why-track-bar">
              <motion.i
                style={{ width: `${r.fill * 100}%` }}
                {...grow(reduce, r.delay, 1.2)}
              />
            </span>
          </div>
        ))}
        <motion.p className="why-chip" {...pop(reduce, 2.6, { opacity: 0, scale: 0.85 })}>Point d’étape partagé</motion.p>
      </motion.div>
    </div>
  )
}

function SceneDelivery({ reduce }) {
  const cards = [shot('bged'), shot('canaan'), shot('convois')]
  return (
    <div className="why-scene why-scene-delivery">
      <div className="why-fan">
        {cards.map((p, i) => (
          <motion.div
            className={`why-fan-card why-fan-card-${i}`}
            key={p.slug}
            {...pop(reduce, 0.2 + i * 0.5, { opacity: 0, y: 30, scale: 0.92 })}
          >
            <div className="why-mini-bar" aria-hidden="true"><span /><span /><span /><em>{host(p.demo)}</em></div>
            <img src={p.image} alt="" />
          </motion.div>
        ))}
      </div>
      <motion.p className="why-pill" {...pop(reduce, 2, { opacity: 0, y: 12 })}>
        <Check /> Présenté et livré selon le calendrier convenu
      </motion.p>
    </div>
  )
}

function SceneResult({ reduce }) {
  const p = shot('bged')
  return (
    <div className="why-scene why-scene-result">
      <motion.div className="why-mini-browser why-mini-browser-lg" {...pop(reduce, 0)}>
        <div className="why-mini-bar" aria-hidden="true">
          <span /><span /><span /><em>{host(p.demo)}</em>
          <b className="why-live">EN LIGNE</b>
        </div>
        <img src={p.image} alt="" />
      </motion.div>
      <motion.div className="why-happy" {...pop(reduce, 1, { opacity: 0, scale: 0.4 })}>
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="24" r="22" fill="#c9f24b" />
          <circle cx="17" cy="19" r="2.4" fill="#0d0f11" />
          <circle cx="31" cy="19" r="2.4" fill="#0d0f11" />
          <path d="M14.5 28c2.2 5 6 7 9.5 7s7.3-2 9.5-7" stroke="#0d0f11" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      </motion.div>
      <motion.p className="why-pill why-pill-float" {...pop(reduce, 1.6, { opacity: 0, y: 10 })}>
        <Check /> Le site est en ligne
      </motion.p>
      <p className="why-scene-note">Illustration générique</p>
    </div>
  )
}

const SCENES = [SceneBrief, SceneFraming, SceneBuild, SceneDelivery, SceneResult]

/* --------------------------- Section --------------------------- */

export default function WhyChooseMe() {
  const reduce = useReducedMotion()
  const sectionRef = useRef(null)
  const seen = useInView(sectionRef, { amount: 0.25, once: true })
  const inView = useInView(sectionRef, { amount: 0.25 })

  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [videoFailed, setVideoFailed] = useState(false)

  const useVideo = HAS_VIDEO && !videoFailed
  const autoplay = !reduce && !useVideo
  const running = autoplay && playing && inView
  const Scene = SCENES[active]
  const step = collaboration[active]

  const next = () => setActive((i) => (i + 1) % collaboration.length)
  const bar = active === 2 ? host(shot('canaan').demo) : active === 4 ? host(shot('bged').demo) : 'Parcours de collaboration'

  return (
    <section className="section why-section" id="why" ref={sectionRef} aria-labelledby="why-title">
      <div className="container">
        <div className="why-header">
          <motion.h2
            id="why-title"
            className="why-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={SPRING}
          >
            Pourquoi me choisir ?
          </motion.h2>

          <motion.div
            className="why-intro"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ ...SPRING, delay: 0.1 }}
          >
            <p>
              Un bon site commence par une bonne écoute. Voici comment je travaille avec vous, de la
              première discussion jusqu’à la mise en ligne : un cahier des charges clair, des échanges
              réguliers et un travail soigné, dans le respect du calendrier convenu.
            </p>
          </motion.div>
        </div>

        <div className="why-layout">
          <motion.div
            className="why-stage-wrap"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={SPRING}
          >
            <div className="why-star" aria-hidden="true">
              <motion.div
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
              >
                <FourPointStar size={22} color="#c9f24b" />
              </motion.div>
            </div>

            <div className="why-stage" role="img" aria-label={`Illustration de l’étape ${active + 1} sur ${collaboration.length} : ${step.title}`}>
              {useVideo ? (
                <video
                  className="why-video"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  poster={shot('bged').image}
                  onError={() => setVideoFailed(true)}
                >
                  {VIDEO.webm && <source src={VIDEO.webm} type="video/webm" onError={() => setVideoFailed(true)} />}
                  {VIDEO.mp4 && <source src={VIDEO.mp4} type="video/mp4" onError={() => setVideoFailed(true)} />}
                </video>
              ) : (
                <div className="why-screen" aria-hidden="true">
                  <div className="why-screen-bar">
                    <span /><span /><span />
                    <div className="why-screen-address">{bar}</div>
                  </div>
                  <div className="why-screen-body">
                    {(seen || reduce) && (
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                          key={active}
                          className="why-scene-frame"
                          initial={reduce ? false : { opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={reduce ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ duration: reduce ? 0 : 0.25 }}
                        >
                          <Scene reduce={reduce} />
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="why-stage-foot">
              <p className="why-disclaimer">
                Illustration générique du parcours de collaboration. Les captures proviennent de mes
                projets réels.
              </p>
              {autoplay && (
                <button
                  type="button"
                  className="why-playpause"
                  onClick={() => setPlaying((v) => !v)}
                  aria-pressed={!playing}
                >
                  {playing ? 'Mettre en pause' : 'Reprendre'}
                </button>
              )}
            </div>
          </motion.div>

          <ol className="why-steps">
            {collaboration.map((s, i) => {
              const isActive = i === active
              const body = (
                <>
                  <span className="why-step-num" aria-hidden="true">{i + 1}</span>
                  <span className="why-step-body">
                    <strong>{s.title}</strong>
                    <span>{s.text}</span>
                  </span>
                </>
              )
              return (
                <li key={s.id} className={`why-step ${isActive && !useVideo ? 'is-active' : ''}`}>
                  {useVideo ? (
                    <div className="why-step-btn">{body}</div>
                  ) : (
                    <button
                      type="button"
                      className="why-step-btn"
                      onClick={() => setActive(i)}
                      aria-current={isActive ? 'step' : undefined}
                    >
                      {body}
                      {isActive && autoplay && (
                        <span
                          key={active}
                          className="why-step-progress"
                          style={{
                            animationDuration: `${STEP_MS}ms`,
                            animationPlayState: running ? 'running' : 'paused',
                          }}
                          onAnimationEnd={(e) => e.target === e.currentTarget && next()}
                        />
                      )}
                    </button>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
