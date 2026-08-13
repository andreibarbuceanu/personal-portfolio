import "./Skills.css";
import skillCategories from "../../data/skills";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h2>Skills</h2>
        <p>
          Technologies and tools I have used in university and personal
          projects.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <article className="skill-category" key={category.title}>
            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <span className="tech-badge" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
