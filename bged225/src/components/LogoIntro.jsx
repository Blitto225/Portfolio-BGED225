import { useEffect, useLayoutEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import logo from '../assets/logos/logo-bged-blanc.webp'

const RATIO = 800 / 383 // largeur / hauteur du logo
const EASE = [0.76, 0, 0.24, 1]
const SETTLE = [0.22, 1, 0.36, 1]

/**
 * Le logo est découpé en 8 composants à partir de la même image (aucun nouvel
 * asset) : les 4 quadrants du pictogramme (avec leur coin de cadre) et les
 * 4 lettres B · G · E · D. Chaque pièce est une copie de l'image masquée par
 * un clip-path en pourcentages, donc le découpage suit la taille du logo.
 *
 * clip = [haut, droite, bas, gauche] en % (inset), x/y = point de départ
 * en % de la taille du logo, r = rotation de départ.
 */
const PIECES = [
  // pictogramme : coupé au centre (x ≈ 24,9 % · y ≈ 49,9 % de l'image)
  { id: 'tl', clip: [0, 75, 50, 0], from: { x: '-70%', y: '-90%', r: -24 }, delay: 0.1 },
  { id: 'tr', clip: [0, 50, 50, 25], from: { x: '70%', y: '-90%', r: 24 }, delay: 0.22 },
  { id: 'bl', clip: [50, 75, 0, 0], from: { x: '-70%', y: '90%', r: 24 }, delay: 0.34 },
  { id: 'br', clip: [50, 50, 0, 25], from: { x: '70%', y: '90%', r: -24 }, delay: 0.46 },
  // lettres : coupées dans les espaces entre B | G | E | D
  { id: 'b', clip: [0, 34.7, 0, 52.5], from: { x: '60%', y: '120%', r: 0 }, delay: 0.7 },
  { id: 'g', clip: [0, 21.8, 0, 65.3], from: { x: '40%', y: '120%', r: 0 }, delay: 0.8 },
  { id: 'e', clip: [0, 12.2, 0, 78.2], from: { x: '20%', y: '120%', r: 0 }, delay: 0.9 },
  { id: 'd', clip: [0, 0, 0, 87.8], from: { x: '0%', y: '120%', r: 0 }, delay: 1.0 },
]

const clipOf = ([t, r, b, l]) => `inset(${t}% ${r}% ${b}% ${l}%)`

/**
 * Intro : les composants du logo arrivent de part et d'autre, s'assemblent au
 * centre de l'écran, puis le logo complet voyage jusqu'à sa place dans la
 * navbar (targetRef). Quand il y est, l'overlay disparaît et le vrai logo de
 * la navbar prend le relais.
 */
export default function LogoIntro({ targetRef, onDone }) {
  const reduce = useReducedMotion()
  const [phase, setPhase] = useState('in') // in (assemblage) -> fly -> done
  const [geo, setGeo] = useState(null)

  // mesure la position de départ (centre) pour éviter tout saut
  useLayoutEffect(() => {
    const w = Math.min(window.innerWidth * 0.7, 360)
    const h = w / RATIO
    setGeo({ w, h, x: (window.innerWidth - w) / 2, y: (window.innerHeight - h) / 2 })
  }, [])

  // sans animation si l'utilisateur a demandé de réduire les mouvements
  useEffect(() => {
    if (reduce) { setPhase('done'); onDone() }
  }, [reduce, onDone])

  // assemblage (≈1,7 s) + court temps d'arrêt sur le logo complet, puis envol
  useEffect(() => {
    if (phase !== 'in' || reduce) return
    const t = setTimeout(() => setPhase('fly'), 2300)
    return () => clearTimeout(t)
  }, [phase, reduce])

  if (reduce || phase === 'done' || !geo) return null

  const target = phase === 'fly' && targetRef.current ? targetRef.current.getBoundingClientRect() : null
  const flying = phase === 'fly' && target

  return (
    <motion.div
      className="logo-intro"
      aria-hidden="true"
      initial={{ backgroundColor: 'rgba(10,11,13,1)' }}
      animate={{ backgroundColor: flying ? 'rgba(10,11,13,0)' : 'rgba(10,11,13,1)' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <motion.div
        className="logo-intro-img"
        initial={{ x: geo.x, y: geo.y, width: geo.w, height: geo.h }}
        animate={
          flying
            ? { x: target.left, y: target.top, width: target.width, height: target.height }
            : { x: geo.x, y: geo.y, width: geo.w, height: geo.h }
        }
        transition={flying ? { duration: 0.95, ease: EASE } : { duration: 0 }}
        onAnimationComplete={() => {
          if (phase === 'fly') {
            onDone()
            setPhase('done')
          }
        }}
      >
        {PIECES.map((p) => (
          <motion.img
            key={p.id}
            src={logo}
            alt=""
            draggable={false}
            className="logo-intro-piece"
            style={{ clipPath: clipOf(p.clip) }}
            initial={{ x: p.from.x, y: p.from.y, rotate: p.from.r, opacity: 0, scale: 0.6, filter: 'blur(6px)' }}
            animate={{ x: '0%', y: '0%', rotate: 0, opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.75, delay: p.delay, ease: SETTLE }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
