import { useState } from "react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { experienceTabs } from "../data/experience";
import "../styles/experience.css";

const Experience = () => {
  const [active, setActive] = useState(experienceTabs[0].key);
  const items = experienceTabs.find((tab) => tab.key === active).items;

  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Work & education"
        subtitle="A snapshot of my hands-on development journey and learning path."
      />

      <div className="tabs" role="tablist" aria-label="Experience categories" data-reveal="up">
        {experienceTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={active === tab.key}
            className={`tabs__btn ${active === tab.key ? "is-active" : ""}`}
            onClick={() => setActive(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Remounting on `active` replays the entrance animation per tab. */}
      <ol className="timeline" key={active}>
        {items.map((item, i) => (
          <li className="timeline__item" key={item.title} style={{ "--d": `${i * 90}ms` }}>
            <span className="timeline__marker" aria-hidden="true" />

            <div className="card timeline__card">
              <p className="timeline__range">{item.range}</p>
              <h3 className="timeline__title">{item.title}</h3>
              {item.company && <p className="timeline__company">{item.company}</p>}
              <p className="timeline__details">{item.details}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
