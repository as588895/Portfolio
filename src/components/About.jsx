import { motion } from "framer-motion";
import TechOrbit from "./TechOrbit";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex items-center justify-center min-h-[500px]">
          <TechOrbit />
        </div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="about-heading">
            <span>01 / PROFILE</span>
            <h2>About <em>me.</em></h2>
          </div>

          <div className="about-summary-grid">
            <div className="about-summary-card">
              <div className="about-summary-card__label">Education</div>
              <div className="about-summary-card__title">B.Tech Information Technology</div>
              <div className="about-summary-card__muted">IMS Engineering College, Ghaziabad</div>
              <div className="about-summary-card__value">Current CGPA: 7.79</div>
            </div>
            <div className="about-summary-card about-summary-card--accent">
              <div className="about-summary-card__label">Currently</div>
              <div className="about-summary-card__title">Building Production-Ready MERN Applications</div>
              <p className="about-summary-card__muted">
                Scalable platforms with secure authentication, REST APIs, optimized databases, and responsive experiences.
              </p>
            </div>
          </div>

          <p className="about-lead">
            Information Technology Undergraduate at IMSEC (Class of 2027) specializing in MERN Stack Development. I build full-stack web applications, design RESTful APIs, and manage databases with a focus on useful, reliable products.
          </p>

          <div className="about-values-grid">
            <div className="about-list-card">
              <h3>Core Foundations <span>01</span></h3>
              <ul>
                <li>Data Structures &amp; Algorithms</li>
                <li>Object Oriented Programming</li>
                <li>DBMS &amp; Operating Systems</li>
                <li>Computer Networks</li>
              </ul>
            </div>
            <div className="about-list-card">
              <h3>What I value <span>02</span></h3>
              <ul>
                <li>Clean, maintainable code</li>
                <li>Responsive, accessible UI</li>
                <li>Reliable backend systems</li>
                <li>Continuous learning</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
