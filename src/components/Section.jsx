/** Shared section shell: consistent padding, max width and scroll anchor. */
const Section = ({ id, className = "", tight = false, children }) => (
  <section
    id={id}
    className={`section ${tight ? "section--tight" : ""} ${className}`.trim()}
  >
    <div className="container">{children}</div>
  </section>
);

export default Section;
