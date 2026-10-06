import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import Education from '../components/Education'
import Journal from '../components/Journal'
import Explorations from '../components/Explorations'
import Stats from '../components/Stats'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Journal />
        <Explorations />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
