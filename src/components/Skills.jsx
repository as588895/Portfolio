import React from 'react'
import { motion } from 'framer-motion'

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiVisualstudiocode,
  SiPostman,
  SiRender,
  SiVercel,
} from "react-icons/si";

import { FaJava, FaPython } from "react-icons/fa";
import { SiC } from "react-icons/si";

const categoryCards = [
  {
  title: "Programming Languages",
  items: [
    { name: "C", icon: "💻" },
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Python", icon: <FaPython /> },
  ],
},
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs", icon: "🔗" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Oracle", icon: <SiOracle /> },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <SiVisualstudiocode /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Render", icon: <SiRender /> },
      { name: "Vercel", icon: <SiVercel  /> },
    ],
  },
]; 





export default function Skills(){
  return (
    <section id="skills" className="py-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Skills</h2>
          <p className="text-muted mt-2">Technical Skills</p>
        </div>
      </div>
      
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {categoryCards.map(card => (
          <div key={card.title} className="card-box p-5">
            <div className="font-semibold mb-3">{card.title}</div>
            

            <div className="skills-container">
  {card.items.map((item, index) => (
    <div key={index} className="skill-card">
      <div className="skill-icon">{item.icon}</div>
      <p>{item.name}</p>
    </div>
  ))}
</div>

          </div>
        ))}
      </div>
    </section>
  )
}
