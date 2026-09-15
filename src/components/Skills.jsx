import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/skills";
import "../styles/skills.css";

const Skills = () => (
  <Section id="skills">
    <SectionHeading
      eyebrow="Skills"
      title="Toolstack & focus"
      subtitle="A balanced toolkit for clean front-end delivery and smart automation."
    />

    <div className="stack">
      {skillGroups.map((group) => (
        <section className="stack__group" key={group.key}>
          <header className="stack__label" data-reveal="fade">
            <h3 className="stack__name">{group.label}</h3>
            <p className="stack__blurb">{group.blurb}</p>
            <span className="stack__rule" aria-hidden="true" />
            <span className="stack__count">{String(group.skills.length).padStart(2, "0")}</span>
          </header>

          <ul className="stack__grid">
            {group.skills.map((skill, i) => (
              <li
                className="skill"
                key={skill.name}
                data-reveal="up"
                style={{ "--d": `${i * 70}ms` }}
              >
                <span className="skill__icon">
                  <img src={skill.icon} alt="" loading="lazy" />
                </span>
                <span className="skill__name">{skill.name}</span>
                <span className="skill__level">{skill.level}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  </Section>
);

export default Skills;
