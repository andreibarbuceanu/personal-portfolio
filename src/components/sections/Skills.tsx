import "./Skills.css";
import skillCategories from "../../data/skills";
import SectionHeader from "../ui/SectionHeader";
import TechBadge from "../ui/TechBadge";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <SectionHeader
        title="Skills"
        description="Technologies and tools I have used in university and personal projects."
      />

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <article className="skill-category" key={category.title}>
            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <TechBadge key={skill} label={skill} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
