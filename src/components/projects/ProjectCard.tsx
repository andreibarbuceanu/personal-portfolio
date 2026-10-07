import type { KeyboardEvent } from "react";
import type { Project } from "../../data/projects";
import TechBadge from "../ui/TechBadge";
import "./ProjectCard.css";

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
};

function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const selectProject = () => {
    onSelect(project);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectProject();
    }
  };

  return (
    <article
      className="project-card"
      role="button"
      tabIndex={0}
      onClick={selectProject}
      onKeyDown={handleKeyDown}
    >
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>

        {project.technologies.length > 0 && (
          <div className="project-tech-list">
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
  );
}

export default ProjectCard;
