/** Eyebrow + title + subtitle, used by every section. */
const SectionHeading = ({ eyebrow, title, subtitle, center = false }) => (
  <div className={`heading ${center ? "heading--center" : ""}`.trim()}>
    <p className="heading__eyebrow" data-reveal="fade">
      {eyebrow}
    </p>
    <h2 className="heading__title" data-reveal="up" style={{ "--d": "60ms" }}>
      {title}
    </h2>
    {subtitle && (
      <p className="heading__subtitle" data-reveal="up" style={{ "--d": "120ms" }}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
