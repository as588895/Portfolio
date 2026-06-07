import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Loading from './components/Loading'

export default function App(){
  const [loading, setLoading] = React.useState(true)
  React.useEffect(()=>{const t = setTimeout(()=>setLoading(false), 700); return ()=>clearTimeout(t)},[])

  return (
    <div className="min-h-screen bg-white dark:bg-secondary text-secondary dark:text-white transition-colors duration-300">
      <ScrollProgress />
      {loading ? <Loading /> : null}
      <Navbar />
      <main className="container mx-auto px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
