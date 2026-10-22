import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LogoIntro from './LogoIntro'
import logo from '../assets/logos/logo-bged-blanc.webp'
import { contact } from '../data/portfolio'

const LINKS = [
  { label: 'À propos', href: '#about', num: '01' },
  { label: 'Compétences', href: '#services', num: '02' },
  { label: 'Projets', href: '#projects', num: '03' },
  { label: 'Designs', href: '#design', num: '04' },
  { label: 'Contact', href: '#contact', num: '05' },
]

const LEFT = LINKS.slice(0, 3)
const RIGHT = LINKS.slice(3)

/* Liens desktop : une pilule lime glisse d'un lien à l'autre au survol,
   et le lien de la section visible reste marqué. */
function NavLinks({ links, active, hovered, setHovered }) {
  return links.map((l) => {
    const isHover = hovered === l.href
    const isActive = active === l.href
    return (
      <motion.a
        key={l.href}
        href={l.href}
        className={`nav-link ${isActive ? 'is-active' : ''} ${isHover ? 'is-hover' : ''}`}
        onMouseEnter={() => setHovered(l.href)}
        onMouseLeave={() => setHovered(null)}
        onFocus={() => setHovered(l.href)}
        onBlur={() => setHovered(null)}
        whileTap={{ scale: 0.94 }}
      >
        {isHover && (
          <motion.span
            layoutId="nav-hover-pill"
            className="nav-hover-pill"
            transition={{ type: 'spring', stiffness: 500, damping: 34 }}
          />
        )}
        <span className="nav-link-label"><span className="nav-link-roll" data-text={l.label}>{l.label}</span></span>
        {isActive && <motion.span layoutId="nav-active-dot" className="nav-active-dot" />}
      </motion.a>
    )
  })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [logoReady, setLogoReady] = useState(false)
  const logoRef = useRef(null)
  const [theme, setTheme] = useState('on-white') // 'on-white' | 'on-dark' | 'on-lime'
  const [hovered, setHovered] = useState(null)
  const [active, setActive] = useState('#about')

  // section visible -> lien actif
  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1))
    const onScroll = () => {
      const line = window.innerHeight * 0.35
      let current = '#about'
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = `#${id}`
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const windowHeight = window.innerHeight

      // If near the footer (which is bright lime)
      if (scrollY + windowHeight >= docHeight - 350) {
        setTheme('on-lime')
      }
      // If within the top hero section (white background)
      else if (scrollY < 460) {
        setTheme('on-white')
      }
      // Otherwise over the dark sections
      else {
        setTheme('on-dark')
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <LogoIntro targetRef={logoRef} onDone={() => setLogoReady(true)} />

      <header className={`navbar-fixed-container navbar-${theme}`}>
        <nav className="navbar-capsule">
          {/* Desktop Left Links */}
          <div className="nav-desktop-links nav-links-left">
            <NavLinks links={LEFT} active={active} hovered={hovered} setHovered={setHovered} />
          </div>

          {/* Center Brand Logo */}
          <motion.a
            href="#about"
            className="nav-brand-logo"
            aria-label="BGED — accueil"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <img
              ref={logoRef}
              src={logo}
              alt="Logo BGED"
              className="nav-logo-img"
              style={{ opacity: logoReady ? 1 : 0 }}
            />
          </motion.a>

          {/* Desktop Right Links */}
          <div className="nav-desktop-links nav-links-right">
            <NavLinks links={RIGHT} active={active} hovered={hovered} setHovered={setHovered} />
          </div>

          {/* Mobile High-Contrast Animated Hamburger Button */}
          <motion.button
            className={`nav-burger-btn ${open ? 'is-active' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
          >
            <div className="burger-icon-box">
              <motion.span
                className="burger-bar"
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              />
              <motion.span
                className="burger-bar"
                animate={open ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="burger-bar"
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              />
            </div>
          </motion.button>
        </nav>
      </header>

      {/* Jitter-Style Mobile Menu Modal Drawer */}
      <AnimatePresence>
        {open && (
          <div className="mobile-menu-backdrop" onClick={() => setOpen(false)}>
            <motion.div
              className="mobile-menu-drawer"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: -40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 340, damping: 28 }}
            >
              {/* Drawer Top Header */}
              <div className="drawer-header">
                <div className="drawer-logo">
                  <img src={logo} alt="Logo BGED" className="drawer-logo-img" />
                </div>
                <motion.button
                  className="drawer-close-btn"
                  onClick={() => setOpen(false)}
                  aria-label="Fermer le menu"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  &times;
                </motion.button>
              </div>

              {/* Drawer Links List with Staggered Jitter Entry */}
              <div className="drawer-nav-list">
                {LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="drawer-nav-item"
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 + i * 0.06,
                      type: 'spring',
                      stiffness: 300,
                      damping: 24,
                    }}
                    whileHover={{ x: 6, color: '#c9f24b' }}
                  >
                    <span className="drawer-item-num">{link.num}</span>
                    <span className="drawer-item-label">{link.label}</span>
                    <span className="drawer-item-arrow">&rarr;</span>
                  </motion.a>
                ))}
              </div>

              {/* Bottom CTA & Quick Contact */}
              <motion.div
                className="drawer-footer-actions"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
              >
                <motion.a
                  href="#projects"
                  className="drawer-cta-btn"
                  onClick={() => setOpen(false)}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Voir mes projets &rarr;
                </motion.a>

                <div className="drawer-meta-info">
                  <span className="drawer-email">Niveau licence · Génie logiciel</span>
                  <div className="drawer-socials">
                    <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
