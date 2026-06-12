import React from 'react'
import { motion } from 'framer-motion'

const progressSkills = [
  {title:'Java', level:85},
  {title:'JavaScript', level:90},
  {title:'React.js', level:88},
  {title:'Node.js', level:80},
]

// const categoryCards = [
//   {title:'Frontend', items:['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'Tailwind CSS']},
//   {title:'Backend', items:['Node.js', 'Express.js', 'REST APIs']},
//   {title:'Databases', items:['MongoDB', 'MySQL', 'Oracle']},
//   {title:'Tools', items:['Git', 'GitHub', 'VS Code']},
//   {title:'Core Subjects', items:['Data Structures & Algorithms', 'Object-Oriented Programming', 'DBMS', 'Operating Systems', 'Computer Networks']}
// ]

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
} from "react-icons/si";

const categoryCards = [
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
    ],
  },
];



function SkillProgress({title,level}){
  return (
    <motion.div whileHover={{y:-4}} className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-muted">{level}%</div>
      </div>
      <div className="mt-4 h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
        <motion.div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" initial={{width:0}} animate={{width:`${level}%`}} transition={{duration:1}} />
      </div>
    </motion.div>
  )
}

export default function Skills(){
  return (
    <section id="skills" className="py-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Skills</h2>
          <p className="text-muted mt-2">Technical Skills</p>
        </div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {progressSkills.map(skill=> <SkillProgress key={skill.title} {...skill} />)}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {categoryCards.map(card => (
          <div key={card.title} className="card-box p-5">
            <div className="font-semibold mb-3">{card.title}</div>
            {/* <div className="grid gap-2 text-sm text-muted">
              {card.items.map(item => <div key={item}>• {item}</div>)}
            </div> */}

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
