import React from "react";
import { motion } from "framer-motion";

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
import "./Skills.css";

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
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-heading">
        <div>
          <span className="skills-eyebrow">Tools of the trade</span>
          <h2>Technical Skills</h2>
          <p>Technologies I use to turn ideas into reliable products.</p>
        </div>
        <div className="skills-index">05 <span>/ STACK</span></div>
      </div>

      <div className="skills-layout">
        <div className="skills-feature">
          <div className="skills-feature__label">Full-stack toolkit</div>
          <div className="skills-feature__code">&lt;/&gt;</div>
          <h3>Build. Ship. Improve.</h3>
          <p>
            A practical stack across frontend, backend, databases and the tools
            that keep development moving.
          </p>
          <div className="skills-feature__line" />
          <span className="skills-feature__status"><i /> Available for projects</span>
        </div>

        <div className="skills-categories">
          {categoryCards.map((card, categoryIndex) => (
            <div key={card.title} className="skills-category">
              <div className="skills-category__heading">
                <span>0{categoryIndex + 1}</span>
                <h3>{card.title}</h3>
              </div>
              <div className="skills-category__items">
                {card.items.map((item, index) => (
                  <div key={`${card.title}-${index}`} className="skills-tile">
                    <span className="skills-tile__icon">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
