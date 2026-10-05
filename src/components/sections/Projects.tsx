import { useState } from "react";
import projects, { type Project } from "../../data/projects";
import Modal from "../ui/Modal";
import SectionHeader from "../ui/SectionHeader";
import TechBadge from "../ui/TechBadge";
import "./Projects.css";

function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  const closeModal = () => {
    setSelected(null);
  };

  return (
    <section id="projects" className="projects-section">
      <SectionHeader
        title="My Projects"
        description="Turning ideas into practical solutions through code and experimentation."
      />

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
            <div className="project-body">
              <h3>{project.title}</h3>

              <p>{project.shortDescription}</p>

              {project.technologies.length > 0 && (
                <div className="tech-list">
                  {project.technologies.map((technology) => (
                    <TechBadge
                      key={`${project.title}-${technology}`}
                      label={technology}
                    />
                  ))}
                </div>
              )}

              <span className="project-cta">View Project</span>
            </div>
          </article>
        ))}
      </div>

      {selected && (
        <Modal
          ariaLabelledBy="project-modal-title"
          closeLabel="Close project details"
          description={selected.fullDescription}
          details={
            <div className="modal-tech-list">
              {selected.technologies.map((technology) => (
                <TechBadge
                  key={`${selected.title}-${technology}`}
                  label={technology}
                />
              ))}
            </div>
          }
          onClose={closeModal}
          title={selected.title}
          actions={
            selected.url && selected.url !== "#" ? (
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
            )
          }
        />
      )}
    </section>
  );
}

export default Projects;
