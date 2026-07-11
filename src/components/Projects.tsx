import { useEffect, useState } from "react";
import projects from "../data/projects";
import "./Projects.css";

type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
};

function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  const getProjectIcon = (title: string) => {
    if (title.includes("Task Management")) return "📋";
    if (title.includes("Blackjack")) return "🎮";
    if (title.includes("QR Code")) return "▣";
    if (title.includes("Automotive Service")) return "🚗";
    if (title.includes("Personal Portfolio")) return "💻";
    if (title.includes("Inductive Metal Detector")) return "🧲";

    return "📁";
  };

  const closeModal = () => {
    setSelected(null);
  };

  useEffect(() => {
    if (!selected) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>A selection of web, embedded and software projects I have built.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            key={project.title}
            className="project-card"
            role="button"
            tabIndex={0}
            onClick={() => setSelected(project)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setSelected(project);
              }
            }}
          >
            <div className="project-icon" aria-hidden="true">
              {getProjectIcon(project.title)}
            </div>

            <div className="project-body">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              {project.technologies.length > 0 && (
                <div className="tech-list">
                  {project.technologies.map((technology) => (
                    <span
                      className="tech-badge"
                      key={`${project.title}-${technology}`}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              )}

              <span className="project-cta">View Project</span>
            </div>
          </article>
        ))}
      </div>

      {selected && (
        <div
          className="project-modal-overlay"
          onClick={closeModal}
          role="presentation"
        >
          <div
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={closeModal}
              aria-label="Close project details"
            >
              ×
            </button>

            <div className="project-modal-icon" aria-hidden="true">
              {getProjectIcon(selected.title)}
            </div>

            <h3 id="project-modal-title">{selected.title}</h3>

            <p className="project-modal-description">
              {selected.description}
            </p>

            <div className="modal-tech-list">
              {selected.technologies.map((technology) => (
                <span
                  className="tech-badge"
                  key={`${selected.title}-${technology}`}
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="modal-actions">
              {selected.url && selected.url !== "#" ? (
                <a
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-repository-button"
                >
                  View Repository
                </a>
              ) : (
                <p className="repository-unavailable">
                  Repository not available publicly.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;