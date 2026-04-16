import "../assets/style/skills.css";

const devicon = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;

const skills = [
  { name: "HTML", level: "Semantic structure", tag: "Markup", icon: devicon("html5") },
  { name: "CSS", level: "Modern layouts", tag: "Styling", icon: devicon("css3") },
  { name: "JavaScript", level: "Interactive UI", tag: "Logic", icon: devicon("javascript") },
  { name: "React", level: "Component systems", tag: "Framework", icon: devicon("react") },
  { name: "Supabase", level: "Backend & database", tag: "Backend", icon: devicon("supabase") },
  { name: "Figma", level: "UI design", tag: "Design", icon: devicon("figma") },
  { name: "Canva", level: "Visual content", tag: "Design", icon: devicon("canva") },
  { name: "n8n", level: "Workflow automation", tag: "Automation" },
  { name: "Zapier", level: "App integrations", tag: "Automation" },
  { name: "VS Code", level: "Daily workspace", tag: "Tooling", icon: devicon("vscode") },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__inner">
        <div className="skills__heading">
          <p className="skills__eyebrow">Skills</p>
          <h2 className="skills__title">Toolstack &amp; Focus</h2>
          <p className="skills__subtitle">
            A balanced toolkit for clean front-end delivery and smart automation.
          </p>
        </div>

        <div className="skills__grid">
          {skills.map((skill) => (
            <article className="skills__card" key={skill.name}>
              <div className="skills__icon" aria-hidden="true">
                {skill.icon ? (
                  <img src={skill.icon} alt={skill.name} />
                ) : (
                  skill.name.slice(0, 2).toUpperCase()
                )}
              </div>
              <div className="skills__meta">
                <p className="skills__name">{skill.name}</p>
                <p className="skills__desc">{skill.level}</p>
              </div>
              <span className="skills__tag">{skill.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
