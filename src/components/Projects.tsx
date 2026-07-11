import './Projects.css';
import projects from '../data/projects';
import { useState } from 'react';

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
    if (title.includes('To-Do')) return '📋';
    if (title.includes('Blackjack')) return '🎮';
    if (title.includes('QR')) return '🔳';
    if (title.includes('Auto')) return '🚗';
    return '📁';
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>A selection of web, embedded and software projects I have built.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (//map() creeaza automat carduri pt cate proiecte am eu
          <div
            key={project.title}
            className="project-card"
            role="button"
            tabIndex={0}
            onClick={() => setSelected(project)}//cand apas pe card salvez proiectul in selected si deschide modalul
            onKeyDown={(e) => {
              if (e.key === 'Enter') setSelected(project);//pt accesibilitate sa pot deschide modalul din enter
            }}
          >
            <div className="project-icon" aria-hidden>
              {getProjectIcon(project.title)}  
            </div>

            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {project.technologies && project.technologies.length > 0 && (
                <div className="tech-list">
                  {project.technologies.map((tech) => (
                    <span className="tech-badge" key={`${project.title}-${tech}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <span className="project-cta">View Project</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>
              Close
            </button>
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>

            <div className="modal-tech-list">
              {selected.technologies.map((t) => (
                <span className="tech-badge" key={`${selected.title}-${t}`}>
                  {t}
                </span>
              ))}
            </div>

            <div className="modal-actions">
              {selected.url && selected.url !== '#' ? (
                <a href={selected.url} target="_blank" rel="noopener noreferrer" className="cta-button">
                  View Repository
                </a>
              ) : (
                <p style={{ color: '#8b949e', fontSize: '0.95rem' }}>Repository not available publicly.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
