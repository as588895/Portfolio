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
            <h1 className="hero-title-large font-extrabold">Hi I'm <span className="text-primary">AMAN SINGH</span></h1>
            <p className="mt-5 text-2xl leading-tight text-secondary dark:text-white max-w-2xl">MERN Stack Developer | Problem Solver</p>
            <div className="mt-5 text-lg text-muted"><Typewriter words={["MERN Stack Developer"]} /></div>
            <div className="mt-5 text-lg text-muted"><Typewriter words={["Backend & Frontend Specialist"]} /></div>
             <div className="mt-5 text-lg text-muted"><Typewriter words={["DSA Enthusiast",]} /></div>
          
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="https://linkedin.com/in/aman-singh-222364298/" target="_blank" rel="noreferrer" className="btn-primary">LinkedIn</a>
              <a href="https://leetcode.com/u/amansingh0522/" target="_blank" rel="noreferrer" className="btn-primary">LeetCode</a>
              <a href="https://github.com/as588895" target="_blank" rel="noreferrer" className="btn-primary">GitHub</a>
              <a href="https://drive.google.com/drive/folders/1Di_gj0KIESJ4gRS_mJiIWjB77EO_HvSj?usp=sharing" download className="btn-primary">Resume</a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="card-box p-5">
                <div className="text-sm text-muted">Location</div>
                <div className="mt-2 font-semibold">Ghaziabad, India</div>
              </div>
              <div className="card-box p-5">
                <div className="text-sm text-muted">Experience</div>
                <div className="mt-2 font-semibold">MERN Stack Developer | Building Scalable Full-Stack Web Applications</div>
              </div>

              <div className="card-box p-5">
                  <div className="text-sm text-muted">Internship Experience</div>
                  <div className="mt-2 font-semibold">Java Full Stack Development Virtual Intern</div>
                  <p className="text-sm text-muted mt-2">
                    Built responsive web applications, developed REST APIs, integrated databases, and worked on real-world full-stack projects.
                  </p>
              </div>

              <div className="card-box p-5">
                <div className="text-sm text-muted">Focus</div>
                <div className="mt-2 font-semibold">Data Structures & Algorithms, Frontend & Backend Web Development</div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{duration:0.6}} className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="rounded-full bg-gradient-to-r from-primary/10 to-accent/10 p-12 flex items-center justify-center">
              <img src="https://img.sanishtech.com/u/ce9f9bbe97e9eebc1d9baa4fe8c6e534.png" alt="Aman Singh profile" className="w-82 h-82 rounded-full object-cover shadow-lg" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
