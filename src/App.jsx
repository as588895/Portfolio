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
import Loading from './components/Loading'

export default function App(){
  const [loading, setLoading] = React.useState(true)
  const pageRef = React.useRef(null)

  React.useEffect(() => {
    const page = pageRef.current
    if (!page) return undefined

    let frameId = 0
    const handlePointerMove = (event) => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(() => {
        page.style.setProperty('--page-mouse-x', `${event.clientX}px`)
        page.style.setProperty('--page-mouse-y', `${event.clientY}px`)
      })
    }

    page.addEventListener('pointermove', handlePointerMove)
    return () => {
      cancelAnimationFrame(frameId)
      page.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])
  React.useEffect(()=>{const t = setTimeout(()=>setLoading(false), 700); return ()=>clearTimeout(t)},[])

  return (
    <div ref={pageRef} className="site-shell min-h-screen bg-white dark:bg-secondary text-secondary dark:text-white transition-colors duration-300">
      <div className="page-cursor-glow" aria-hidden="true" />
      <ScrollProgress />
      {loading ? <Loading /> : null}
      <Navbar />
      {/* <main className="container mx-auto px-6 lg:px-8"> */}
        {/* <main className="max-w-7xl mx-auto px-6 lg:px-8"> */}
        {/* <main className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </main> */}
      <main className="w-full">
  <div className="w-[98%] mx-auto">
    <Hero />
    <About />
    <Skills />
    <Education />
    <Projects />
    <Achievements />
    <Certifications />
    <Contact />
  </div>
</main>
      <Footer />
    </div>
  )
}
