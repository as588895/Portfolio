import React from 'react'
// use native smooth scroll
import ThemeToggle from './ThemeToggle'

export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 bg-white/60 dark:bg-secondary/60 backdrop-blur-md">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-xl font-semibold text-primary">Aman Singh</div>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#home" className="cursor-pointer" onClick={(e)=>{e.preventDefault(); document.getElementById('home')?.scrollIntoView({behavior:'smooth'})}}>Home</a>
          <a href="#about" className="cursor-pointer" onClick={(e)=>{e.preventDefault(); document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}}>About</a>
          <a href="#skills" className="cursor-pointer" onClick={(e)=>{e.preventDefault(); document.getElementById('skills')?.scrollIntoView({behavior:'smooth'})}}>Skills</a>
          <a href="#projects" className="cursor-pointer" onClick={(e)=>{e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}}>Projects</a>
          <a href="#certifications" className="cursor-pointer" onClick={(e)=>{e.preventDefault(); document.getElementById('certifications')?.scrollIntoView({behavior:'smooth'})}}>Certifications</a>
          <a href="#contact" className="cursor-pointer" onClick={(e)=>{e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}}>Contact</a>
          <ThemeToggle />
        </nav>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
