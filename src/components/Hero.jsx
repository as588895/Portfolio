import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from './Typewriter'

export default function Hero(){
  return (
    <section id="home" className="pt-16 pb-12 animated-bg">
      <div className="grid gap-6 lg:grid-cols-2 items-center">
        <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{duration:0.6}}>
          <div className="max-w-2xl">
            <div className="text-sm text-muted mb-4">&gt; Aman Singh | MERN Stack Developer</div>
            <h1 className="hero-title-large font-extrabold">Hii I'm <span className="text-primary">AMAN SINGH</span></h1>
            <p className="mt-5 text-2xl leading-tight text-secondary dark:text-white max-w-2xl">Building Scalable Web Applications & Solving Real-World Problems Through Code.</p>
            <div className="mt-5 text-lg text-muted"><Typewriter words={["MERN Stack Developer","DSA Enthusiast","Backend & Frontend Specialist"]} /></div>
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="mailto:as588895@gmail.com" className="btn-outline">Hire Me</a>
              <a href="https://linkedin.com/in/aman-singh-222364298/" target="_blank" rel="noreferrer" className="btn-outline">LinkedIn</a>
              <a href="https://drive.google.com/drive/folders/1Di_gj0KIESJ4gRS_mJiIWjB77EO_HvSj" download className="btn-outline">Resume</a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="card-box p-5">
                <div className="text-sm text-muted">Location</div>
                <div className="mt-2 font-semibold">Ghaziabad, India</div>
              </div>
              <div className="card-box p-5">
                <div className="text-sm text-muted">Experience</div>
                <div className="mt-2 font-semibold">MERN Stack, Full Stack Apps</div>
              </div>
              <div className="card-box p-5">
                <div className="text-sm text-muted">Focus</div>
                <div className="mt-2 font-semibold">Problem Solving & UI/UX</div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{duration:0.6}} className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="rounded-full bg-gradient-to-r from-primary/10 to-accent/10 p-12 flex items-center justify-center">
              <img src="/profile.svg" alt="Aman Singh profile" className="w-64 h-64 rounded-full object-cover shadow-lg" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
