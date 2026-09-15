import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/site";
import "../styles/contact.css";

const details = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Location", value: profile.location },
];

const Contact = () => (
  <Section id="contact">
    <div className="contact__panel" data-reveal="up">
      <SectionHeading
        eyebrow="Contact"
        title="Let's work together"
        subtitle="I'm open for front-end projects and workflow automation. Tell me what you're building and I'll get back to you quickly."
      />

      <ul className="contact__details">
        {details.map((item) => (
          <li className="contact__detail" key={item.label}>
            <span className="contact__detail-label">{item.label}</span>
            {item.href ? (
              <a className="contact__detail-value" href={item.href}>
                {item.value}
              </a>
            ) : (
              <span className="contact__detail-value">{item.value}</span>
            )}
          </li>
        ))}
      </ul>

      <a className="btn btn--primary contact__cta" href={`mailto:${profile.email}`}>
        Email me
        <span className="btn__arrow">→</span>
      </a>
    </div>
  </Section>
);

export default Contact;
