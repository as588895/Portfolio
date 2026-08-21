import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";
import "./Projects.css";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const getCardPosition = (index) => {
    const offset = (index - activeIndex + projects.length) % projects.length;

    if (offset === 0) return "is-active";
    if (offset === 1) return "is-right";
    return "is-left";
  };

  return (
    <section
      id="projects"
      className="projects-section bg-white dark:bg-slate-950 scroll-mt-24"
    >
      <div className="projects-container max-w-7xl mx-auto px-6">
        <h2 className="projects-heading text-4xl font-bold text-center">
          Featured Projects
        </h2>

        <p className="projects-intro text-center text-gray-500 dark:text-gray-400">
          Interactive full-stack experiences built with modern JavaScript,
          polished UI, and scalable backend architecture.
        </p>

        <div className="project-stage">
          {projects.map((project, index) => (
            <article
              key={index}
              className={`project-card ${getCardPosition(index)}`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-card__image"
              />

              <div className="project-card__body">
                <div>
                  <h3 className="project-card__title">{project.title}</h3>

                  <p className="project-card__category">
                    {project.tech.slice(0, 2).join(" / ")}
                  </p>
                </div>

                <p className="project-card__description">{project.desc}</p>

                <div className="project-card__tech">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-card__actions">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link project-card__link--primary"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link project-card__link--secondary"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="project-selector" aria-label="Project selector">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              className={index === activeIndex ? "is-selected" : ""}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${project.title}`}
            >
              {project.title.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}