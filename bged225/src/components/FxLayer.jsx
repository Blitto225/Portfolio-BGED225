import { useEffect, useRef } from 'react'

/**
 * Couche d'effets globale (aucune dépendance) :
 *  - barre de progression de lecture en haut de page
 *  - halo qui suit le curseur sur les éléments [data-spotlight]
 *  - inclinaison 3D sur les éléments [data-tilt]
 *  - effet magnétique sur les boutons [data-magnetic]
 * Tout est désactivé si l'utilisateur demande de réduire les mouvements
 * et sur les écrans tactiles (pas de survol).
 */
export default function FxLayer() {
  const barRef = useRef(null)

  useEffect(() => {
    const bar = barRef.current
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        const p = max > 0 ? Math.min(1, window.scrollY / max) : 0
        if (bar) bar.style.transform = `scaleX(${p})`
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    let cleanupPointer = () => {}

    if (!reduce && canHover) {
      const onMove = (e) => {
        const spot = e.target.closest?.('[data-spotlight]')
        if (spot) {
          const r = spot.getBoundingClientRect()
          spot.style.setProperty('--mx', `${e.clientX - r.left}px`)
          spot.style.setProperty('--my', `${e.clientY - r.top}px`)
        }
        const tilt = e.target.closest?.('[data-tilt]')
        if (tilt) {
          const r = tilt.getBoundingClientRect()
          const px = (e.clientX - r.left) / r.width - 0.5
          const py = (e.clientY - r.top) / r.height - 0.5
          tilt.style.setProperty('--rx', `${(-py * 5).toFixed(2)}deg`)
          tilt.style.setProperty('--ry', `${(px * 6).toFixed(2)}deg`)
        }
        const mag = e.target.closest?.('[data-magnetic]')
        if (mag) {
          const r = mag.getBoundingClientRect()
          const dx = e.clientX - (r.left + r.width / 2)
          const dy = e.clientY - (r.top + r.height / 2)
          mag.style.setProperty('--tx', `${(dx * 0.22).toFixed(1)}px`)
          mag.style.setProperty('--ty', `${(dy * 0.3).toFixed(1)}px`)
        }
      }
      const onOut = (e) => {
        const el = e.target.closest?.('[data-tilt],[data-magnetic]')
        if (!el || el.contains(e.relatedTarget)) return
        el.style.setProperty('--rx', '0deg')
        el.style.setProperty('--ry', '0deg')
        el.style.setProperty('--tx', '0px')
        el.style.setProperty('--ty', '0px')
      }
      document.addEventListener('pointermove', onMove, { passive: true })
      document.addEventListener('pointerout', onOut, { passive: true })
      cleanupPointer = () => {
        document.removeEventListener('pointermove', onMove)
        document.removeEventListener('pointerout', onOut)
      }
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cleanupPointer()
    }
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span ref={barRef} />
    </div>
  )
}
