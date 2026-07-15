import React, { useMemo } from "react";
import { motion } from "framer-motion";

import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";

import { SiExpress, SiJavascript, SiMongodb } from "react-icons/si";

import "./TechOrbit.css";

const techs = [
  {
    name: "React",
    icon: <FaReact size={34} color="#61DAFB" />,
    angle: 180,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={34} color="#68A063" />,
    angle: 240,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={34} color="#13AA52" />,
    angle: 300,
  },
  {
    name: "Express",
    icon: <SiExpress size={34} color="#83A7DB" />,
    angle: 0,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={34} color="#F7DF1E" />,
    angle: 60,
  },
  {
    name: "Git",
    icon: <FaGitAlt size={34} color="#F1502F" />,
    angle: 120,
  },
];

export default function TechOrbit() {
  const particles = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
      size: 2 + Math.random() * 4,
    }));
  }, []);

  return (
    <motion.div
      className="orbit-wrapper"
      whileHover={{
        rotateX: 8,
        rotateY: -8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
      }}
    >
      <div className="orbit-glow"></div>

      <div className="particles">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="particle"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.6, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: p.duration,
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <svg className="orbit-ring" width="520" height="520">
        <circle cx="260" cy="260" r="190" />
      </svg>

      <motion.div
        className="orbit"
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {techs.map((tech) => {
          return (
            <motion.div
              key={tech.name}
              className="orbit-item"
              style={{
                transform: `rotate(${tech.angle}deg) translate(230px) rotate(-${tech.angle}deg)`,
              }}
            >
              <motion.div
                className="icon-circle"
                whileHover={{
                  scale: 1.25,
                }}
              >
                <motion.div
                  className="icon"
                  animate={
                    tech.name === "React"
                      ? { rotate: 360 }
                      : tech.name === "MongoDB"
                        ? {
                            scale: [1, 1.25, 1],
                          }
                        : tech.name === "Node.js"
                          ? {
                              scale: [1, 1.12, 1],
                            }
                          : tech.name === "JavaScript"
                            ? {
                                y: [0, -8, 0],
                              }
                            : tech.name === "Git"
                              ? {
                                  rotate: [-12, 12, -12],
                                }
                              : tech.name === "Express"
                                ? {
                                    scale: [1, 1.15, 1],
                                  }
                                : {}
                  }
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  {tech.icon}
                </motion.div>

                <p>{tech.name}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Fixed Center */}

      <div className="center-circle">
        <motion.div
          className="center-content"
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          <h2>Full Stack</h2>

          <h3>Developer (MERN)</h3>

          <span>Building Scalable Applications</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
