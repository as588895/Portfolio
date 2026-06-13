import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="py-12">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="flex justify-center">
          <img src="/aman.png" alt="Aman Singh profile" className="w-full max-w-[550px] h-auto rounded-xl shadow-xl object-cover" />
        </div>
        <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
          <h2 className="text-2xl font-bold">About Me</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="card-box p-5">
              <div className="text-sm text-muted">Education</div>
              <div className="mt-2 text-lg font-semibold">B.Tech Information Technology</div>
              <div className="text-sm text-muted mt-1">IMS Engineering College, Ghaziabad</div>
              <div className="mt-3 font-semibold">CGPA 7.67</div>
            </div>
            <div className="card-box p-5">
  <div className="text-sm text-muted">Currently</div>
  <div className="mt-2 text-lg font-semibold">
    Building Production-Ready MERN Applications
  </div>
  <p className="text-sm text-muted mt-3">
    Developing scalable full-stack platforms inspired by real-world products like Airbnb, with secure authentication, REST APIs, database optimization, and responsive user experiences.
  </p>
</div>
          </div>
          <p className="mt-6 text-muted text-lg leading-relaxed">
  Information Technology Undergraduate at IMSEC (Class of 2027) specializing in MERN Stack Development. Proficient in building full-stack web applications, designing RESTful APIs, and managing databases. Actively seeking opportunities to apply technical skills, contribute to impactful projects, and grow as a Software Developer.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="p-5 border border-solid border-slate-200 rounded-3xl bg-slate-50 dark:bg-slate-900 dark:border-slate-700">
              <h3 className="font-semibold">Core Foundations</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>• Data Structures & Algorithms</li>
                <li>• Object Oriented Programming</li>
                <li>• DBMS</li>
                <li>• Operating Systems</li>
                <li>• Computer Networks</li>
              </ul>
            </div>
            <div className="p-5 border border-solid border-slate-200 rounded-3xl bg-slate-50 dark:bg-slate-900 dark:border-slate-700">
              <h3 className="font-semibold">What I value</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>• Clean, maintainable code</li>
                <li>• Responsive, accessible UI</li>
                <li>• Reliable backend systems</li>
                <li>• Continuous learning</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
