import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'WanderNest - Travel & Accommodation Booking Platform',
    desc: 'Full-stack travel & accommodation booking platform with authentication, reviews, ratings, image uploads and REST APIs.',
    tech: 'Node.js, Express.js, MongoDB, EJS, Bootstrap, Passport.js, Cloudinary',
    live: 'https://wandernest-travel-accommodation-platform.onrender.com/',
    repo: 'https://github.com/as588895/WanderNest-Travel-Accommodation-Platform',
    image: '/wandernest.png'
  },
  {
    title: 'Spotify Clone',
    desc: 'Spotify-inspired music streaming web app with playback controls, playlists and responsive UI.',
    tech: 'HTML, CSS, JavaScript',
    live: 'https://spotify-clone-theta-silk.vercel.app/',
    repo: 'https://github.com/as588895/Web-Technology-Program/tree/main/CSS/Project(CSS)',
    image: '/spotify.png'
  }
]

function ProjectCard({p}){
  return (
    <motion.div whileHover={{scale:1.02}} className="card-box overflow-hidden">
      <img src={p.image || 'https://picsum.photos/800/400'} alt={p.title} className="project-img" />
      <div className="p-5">
        <h3 className="font-semibold text-lg">{p.title}</h3>
        <p className="text-sm mt-2 text-muted">{p.desc}</p>
        <p className="text-xs mt-2"><strong>Tech:</strong> {p.tech}</p>
        <div className="mt-4 flex gap-3">
          <a href={p.live} target="_blank" rel="noreferrer" className="px-3 py-2 bg-primary text-white rounded">Live Demo</a>
          <a href={p.repo} target="_blank" rel="noreferrer" className="px-3 py-2 border border-primary text-primary rounded">GitHub</a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects(){
  return (
    <section id="projects" className="py-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <p className="text-muted mt-2 max-w-2xl">Interactive full-stack experiences built with modern JavaScript, polished UI, and scalable backend architecture.</p>
        </div>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {projects.map(p=> <ProjectCard key={p.title} p={p} />)}
      </div>
    </section>
  )
}
