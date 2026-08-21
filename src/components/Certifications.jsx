import { useState } from "react";
import { certs } from "../data/certificates";
import "./Projects.css";

export default function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const backgroundPositions = [
    ["-38vw", "150px", "-10deg"],
    ["-29vw", "112px", "-8deg"],
    ["-20vw", "72px", "-6deg"],
    ["-11vw", "38px", "-4deg"],
    ["11vw", "38px", "4deg"],
    ["20vw", "72px", "6deg"],
    ["29vw", "112px", "8deg"],
    ["38vw", "150px", "10deg"],
  ];

  const getCardPosition = (index) => {
    const offset = (index - activeIndex + certs.length) % certs.length;

    if (offset === 0) return "is-active";
    return "is-background";
  };

  return (
    <section
      id="certifications"
      className="projects-section certification-section bg-gray-50 dark:bg-slate-900 scroll-mt-24"
    >
      <div className="projects-container max-w-7xl mx-auto px-6">
        <h2 className="projects-heading text-4xl font-bold text-center">
          Certifications
        </h2>

        <p className="projects-intro text-center text-gray-500 dark:text-gray-400">
          Professional certifications earned through continuous learning.
        </p>

        <div className="project-stage">
          {certs.map((cert, index) => (
            <article
              key={cert.title}
              className={`project-card certification-card ${getCardPosition(index)}`}
              style={
                getCardPosition(index) === "is-background"
                  ? {
                      "--cert-x": backgroundPositions[
                        index < activeIndex ? index : index - 1
                      ][0],
                      "--cert-y": backgroundPositions[
                        index < activeIndex ? index : index - 1
                      ][1],
                      "--cert-angle": backgroundPositions[
                        index < activeIndex ? index : index - 1
                      ][2],
                    }
                  : undefined
              }
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="project-card__image certification-card__image"
              />

              <div className="project-card__body">
                <div>
                  <p className="project-card__category">{cert.org}</p>
                  <h3 className="project-card__title">{cert.title}</h3>
                  <p className="certification-card__year">{cert.year}</p>
                </div>

                <div className="project-card__tech">
                  {cert.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-card__actions">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link project-card__link--primary"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="project-selector" aria-label="Certification selector">
          {certs.map((cert, index) => (
            <button
              key={cert.title}
              type="button"
              className={index === activeIndex ? "is-selected" : ""}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${cert.title}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
