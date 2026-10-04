import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { projects } from "../data/projects";
import "./Projects.css";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPreviousProject = () => {
    setActiveIndex(
      (currentIndex) =>
        (currentIndex - 1 + projects.length) % projects.length
    );
  };

  const showNextProject = () => {
    setActiveIndex(
      (currentIndex) => (currentIndex + 1) % projects.length
    );
  };

  const getCardPosition = (index) => {
    const offset =
      (index - activeIndex + projects.length) % projects.length;

    if (offset === 0) return "is-active";
    if (offset === 1) return "is-right";
    if (offset === projects.length - 1) return "is-left";

    return "is-hidden";
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
          <button
            type="button"
            className="carousel-arrow carousel-arrow--previous"
            onClick={showPreviousProject}
            aria-label="Show previous project"
            title="Previous project"
          >
            <FaChevronLeft aria-hidden="true" />
          </button>

          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`project-card ${getCardPosition(index)}`}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-card__image"
              />

              <div className="project-card__body">
                <div>
                  <h3 className="project-card__title">
                    {project.title}
                  </h3>

                  <p className="project-card__category">
                    {project.tech.slice(0, 2).join(" / ")}
                  </p>

                  {project.status && (
                    <p className="project-card__category">
                      Status: {project.status}
                    </p>
                  )}
                </div>

                <p className="project-card__description">
                  {project.desc}
                </p>

                <div className="project-card__tech">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-card__actions">
                  {project.live &&
                    !project.live.includes("YOUR_LIVE_LINK_HERE") && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link project-card__link--primary"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <FaExternalLinkAlt aria-hidden="true" />
                        Live
                      </a>
                    )}

                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link project-card__link--secondary"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <FaGithub aria-hidden="true" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}

          <button
            type="button"
            className="carousel-arrow carousel-arrow--next"
            onClick={showNextProject}
            aria-label="Show next project"
            title="Next project"
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>

        <div className="project-selector" aria-label="Project selector">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              className={index === activeIndex ? "is-selected" : ""}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${project.title}`}
              aria-pressed={index === activeIndex}
            >
              {project.title.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
