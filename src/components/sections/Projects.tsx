import { useState } from "react";
import projects, { type Project } from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";
import ButtonLink from "../ui/ButtonLink";
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
          <ProjectCard
            key={project.title}
            project={project}
            onSelect={setSelected}
          />
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
              <ButtonLink
                href={selected.url}
                external
                size="small"
              >
                View Repository
              </ButtonLink>
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
