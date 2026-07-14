import React from "react";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section id="home" className="pt-6 pb-10 animated-bg">
      <div className="grid gap-6 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
            {/* <div className="text-sm text-muted mb-4">
              &gt; Aman Singh | Full Stack Developer (MERN)
            </div> */}
            <h1 className="hero-title-large font-extrabold">
              Hi I'm <span className="text-primary">AMAN SINGH</span>
            </h1>
            <p className="mt-5 text-2xl leading-tight text-secondary dark:text-white max-w-2xl">
              Full Stack Developer (MERN)| Problem Solver
            </p>
            <div className="mt-5 text-lg text-muted">
              <Typewriter words={["Full Stack MERN Developer"]} />
            </div>
            <div className="mt-5 text-lg text-muted">
              <Typewriter words={["Building Scalable Web Applications"]} />
            </div>
            <div className="mt-5 text-lg text-muted">
              <Typewriter words={["DSA & Problem Solving Enthusiast"]} />
            </div>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a
                href="https://linkedin.com/in/aman-singh-222364298/"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                LinkedIn
              </a>
              <a
                href="https://leetcode.com/u/amansingh0522/"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                LeetCode
              </a>
              <a
                href="https://github.com/as588895"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                GitHub
              </a>
              <a
                href="https://drive.google.com/drive/folders/1Di_gj0KIESJ4gRS_mJiIWjB77EO_HvSj?usp=sharing"
                download
                className="btn-primary"
              >
                Resume
              </a>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="card-box p-2">
                <div className="text-sm text-muted">Location</div>
                <div className="mt-2 font-semibold">Ghaziabad, India</div>
              </div>
              <div className="card-box p-2">
                <div className="text-sm text-muted">Role</div>
                <div className="mt-2 font-semibold">
                  Full Stack MERN Developer
                </div>
                <p className="text-sm text-muted mt-2">
                  Passionate about building scalable and responsive web
                  applications.
                </p>
              </div>

              <div className="card-box p-2">
                <div className="text-sm text-muted">Internship Experience</div>
                <div className="mt-2 font-semibold">
                  Java Full Stack Development Virtual Intern
                </div>
                <p className="text-sm text-muted mt-2">
                  Built responsive web applications, developed REST APIs,
                  integrated databases, and worked on real-world full-stack
                  projects.
                </p>
              </div>

              <div className="card-box p-2">
                <div className="text-sm text-muted">Focus</div>
                <div className="mt-2 font-semibold">
                  Full Stack Development, REST APIs, Data Structures &
                  Algorithms, Database Design
                </div>
              </div>
              
              <div className="card-box p-2">
                <div className="text-sm text-muted">Tech Stack</div>
                <div className="mt-2 font-semibold">MERN Stack</div>
                <p className="text-sm text-muted mt-2">
                  MongoDB, Express.js, React.js, Node.js, JavaScript, Git,
                  GitHub, Postman
                </p>
              </div>
              
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          {/* <div className="w-full max-w-md">
            <div className="rounded-full bg-gradient-to-r from-primary/10 to-accent/10 p-12 flex items-center justify-center">
              <img src="https://img.sanishtech.com/u/ce9f9bbe97e9eebc1d9baa4fe8c6e534.png" alt="Aman Singh profile" className="w-82 h-82 rounded-full object-cover shadow-lg" />
            </div>
          </div> */}

          <div className="w-full max-w-md">
            <div className="rounded-full bg-gradient-to-r from-primary/10 to-accent/10 p-12 flex items-center justify-center">
              <img
                src="/aman.png"
                alt="Aman Singh profile"
                className="w-85 h-85 rounded-full object-cover object-center shadow-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
