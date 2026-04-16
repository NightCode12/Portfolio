import { useState } from "react";
import "../assets/style/experience.css";

const work = [
  {
    range: "October 20, 2025 (PRESENT)",
    title: "IT Specialist",
    company: "Hyacinth Industries LLC",
    details:
      "Build and maintain company websites while designing workflow automations using n8n and Zapier to streamline internal processes and reduce manual tasks.",
  },{
    range: "January – May 2025",
    title: "Software Engineering Intern",
    company: "Webcraft",
    details:
      "Developed responsive websites for clients and assisted in setting up automated workflows to connect apps and improve team productivity.",
  }
];

const education = [
  {
    range: "2021 – 2025",
    title: "Western Mindanao State University",
    details: "BS in Information Technology (BSIT).",
  },
  {
    range: "2019 – 2021",
    title: "Baliwasan National High School – Stand Alone",
    details: "Technical-Vocational-Livelihood (TVL) track.",
  },
  {
    range: "2015 – 2019",
    title: "Zamboanga National High School – West",
    details: "Focused on foundational academic skills.",
  },
];

const certificates = [
  {
    range: "April 24, 2025",
    title: "Responsive Web Design",
    company: "freeCodeCamp",
    details: "Completed certification focused on modern, accessible layouts.",
  },
  {
    range: "May 06, 2025",
    title: "Legacy Front End",
    company: "freeCodeCamp",
    details: "Strengthened fundamentals in HTML, CSS, and JavaScript.",
  },
];

const filters = [
  { key: "work", label: "Work" },
  { key: "education", label: "Education" },
  { key: "certificates", label: "Certificates" },
];

const dataMap = { work, education, certificates };

const Experience = () => {
  const [active, setActive] = useState("work");
  const items = dataMap[active];

  return (
    <section className="experience" id="experience">
      <div className="experience__inner">
        <div className="experience__heading">
          <p className="experience__eyebrow">Experience</p>
          <h2 className="experience__title">Work &amp; Education</h2>
          <p className="experience__subtitle">
            A snapshot of my hands-on development journey and learning path.
          </p>
        </div>

        <div className="experience__filters">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`experience__filter ${active === f.key ? "is-active" : ""}`}
              type="button"
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="experience__list">
          {items.map((item) => (
            <article className="experience__card" key={item.title}>
              <span className="experience__range">{item.range}</span>
              <h4>{item.title}</h4>
              {item.company && (
                <p className="experience__company">{item.company}</p>
              )}
              <p className="experience__details">{item.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
