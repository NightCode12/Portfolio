import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { aboutTags, highlights, profile } from "../data/site";
import "../styles/about.css";

const About = () => (
  <Section id="about">
    <SectionHeading
      eyebrow="About me"
      title={profile.role}
      subtitle="I craft modern, responsive interfaces and build smart workflows that remove manual work — clean UI, fast performance, and automations that connect apps and data without friction."
    />

    <div className="about__grid">
      <div className="about__text" data-reveal="left">
        <p className="about__body">
          I work across React-based front-end projects and automation tools like
          n8n and Zapier to design systems that are both beautiful and efficient.
          From UI polish to multi-app integrations, I build experiences that help
          teams move faster.
        </p>

        <p className="about__location">
          Based in {profile.location} — working with teams anywhere.
        </p>

        <div className="tag-row">
          {aboutTags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <ul className="about__list">
        {highlights.map((item, i) => (
          <li
            className="about__item"
            key={item}
            data-reveal="right"
            style={{ "--d": `${i * 90}ms` }}
          >
            <span className="about__num">{String(i + 1).padStart(2, "0")}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

export default About;
