import { motion } from 'framer-motion'
import portrait from '../assets/images/Portrait-me.webp'
import { SproutIcon, SolutionsSparks, HeroDoodle } from './Icons'
import TechIcon from './TechIcon'

const STACK = [
  { name: 'React.js', icon: 'react' },
  { name: 'Python', icon: 'python' },
  { name: 'PHP', icon: 'php' },
  { name: 'Supabase', icon: 'supabase' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'GitHub', icon: 'github' },
]

// extrait de code affiché dans la fenêtre « éditeur » (contenu issu du profil réel)
const CODE = [
  [['k', 'const'], ['v', ' enock'], ['p', ' = {']],
  [['p', '  '], ['a', 'role'], ['p', ': '], ['s', '"Développeur web"'], ['p', ',']],
  [['p', '  '], ['a', 'niveau'], ['p', ': '], ['s', '"L3 Génie logiciel"'], ['p', ',']],
  [['p', '  '], ['a', 'stack'], ['p', ': ['], ['s', '"React"'], ['p', ', '], ['s', '"Python"'], ['p', ', '], ['s', '"PHP"'], ['p', '],']],
  [['p', '  '], ['a', 'données'], ['p', ': '], ['s', '"Supabase"'], ['p', ',']],
  [['p', '}']],
]

export default function Hero() {
  return <section className="hero-white-card" id="about">
    <div className="hero-content-container">
      <motion.div className="hero-headline-wrap" initial={{opacity:0,y:35}} animate={{opacity:1,y:0}}><h1 className="hero-title">Je conçois des applications web<br />adaptées à vos besoins <SolutionsSparks /></h1></motion.div>
      <div className="hero-columns-grid">
        <motion.div className="hero-col hero-col-left" initial={{opacity:0,x:-35}} animate={{opacity:1,x:0}}><div className="hero-sprout-icon"><SproutIcon size={28} color="#c9f24b" /></div><p className="hero-left-desc">Je suis Blitto Enock, étudiant en L3 Génie logiciel. Je développe des applications web complètes, de la conception des fonctionnalités à leur mise en œuvre, avec une approche orientée vers les besoins de chaque client.</p><a href="#projects" className="hero-btn-innovate">Découvrir mes projets</a></motion.div>
        <motion.div className="hero-col hero-col-center" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}}><div className="hero-portrait-stage"><div className="hero-doodle-container"><HeroDoodle className="hero-doodle" /></div><div className="hero-img-mask"><img src={portrait} alt="Blitto Enock" className="hero-person-img" /></div><div className="hero-floating-capsule"><a href="#projects" className="capsule-btn-lime">Mes projets</a><a href="#contact" className="capsule-btn-ghost">Me contacter</a></div></div></motion.div>
        <motion.div className="hero-col hero-col-right" initial={{opacity:0,x:35}} animate={{opacity:1,x:0}}><div className="hero-experience-number">L3</div><div className="hero-experience-label">Génie logiciel</div>
          <div className="code-window" data-tilt aria-hidden="true">
            <div className="code-window-bar"><span /><span /><span /><em>profil.js</em></div>
            <pre className="code-window-body">{CODE.map((line, i) => (
              <span className="code-line" key={i} style={{ '--i': i }}>
                <b className="code-ln">{i + 1}</b>
                {line.map(([t, txt], j) => <span className={`tok-${t}`} key={j}>{txt}</span>)}
              </span>
            ))}<span className="code-line" style={{ '--i': CODE.length }}><b className="code-ln">{CODE.length + 1}</b><i className="code-caret" /></span></pre>
          </div>
        </motion.div>
      </div>
      <ul className="hero-stack" aria-label="Technologies maîtrisées">
        <li className="hero-stack-title">Ma stack</li>
        {STACK.map((t, i) => (
          <li className="hero-stack-chip" key={t.name} style={{ '--i': i }}><TechIcon name={t.icon} /><span>{t.name}</span></li>
        ))}
      </ul>
    </div>
  </section>
}
