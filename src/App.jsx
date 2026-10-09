
import { useEffect, useState } from 'react'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProfileSummary from './components/ProfileSummary'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Services from './components/Services'
import Education from './components/Education'
import Certifications from './components/Certifications'
import DeveloperProfiles from './components/DeveloperProfiles'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(() => {
    try { const s = localStorage.getItem('theme'); if (s) return s === 'dark' } catch {}
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {}
  }, [dark])

  return (
    <>
      <Background />
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] btn-primary">Skip to content</a>
      <Navbar dark={dark} toggle={() => setDark((d) => !d)} />
      <main>
        <Hero />
        <ProfileSummary />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Education />
        <Certifications />
        <DeveloperProfiles />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
