import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import DesignGallery from './components/DesignGallery'
import WhyChooseMe from './components/WhyChooseMe'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FxLayer from './components/FxLayer'

const technologies = [
  { name: 'HTML5', icon: 'html5' },
  { name: 'CSS3', icon: 'css3' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'React.js', icon: 'react' },
  { name: 'Python', icon: 'python' },
  { name: 'PHP', icon: 'php' },
  { name: 'Supabase', icon: 'supabase' },
  { name: 'XAMPP', icon: 'xampp' },
  { name: 'GitHub', icon: 'github' },
]

export default function App() {
  return (
    <>
      <FxLayer />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Marquee big items={['Concevoir', 'Développer', 'Apprendre']} showDivider />
        <Projects />
        <DesignGallery />
        <Marquee ribbon items={technologies} />
        <WhyChooseMe />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
