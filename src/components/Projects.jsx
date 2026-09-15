import { useMemo, useRef, useState } from "react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/projects";
import "../styles/projects.css";

const PER_PAGE = 6;

const Projects = () => {
  const [activeId, setActiveId] = useState(null);
  const [page, setPage] = useState(0);
  const gridRef = useRef(null);

  const active = projects.find((p) => p.id === activeId) ?? null;
  const pageCount = Math.ceil(projects.length / PER_PAGE);

  const visible = useMemo(
    () => projects.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE),
    [page],
  );

  /* Jump back to the top of the grid so a shorter last page doesn't
     leave the viewport parked below the section. */
  const goTo = (next) => {
    setPage(next);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        subtitle="A curated set of UI builds, automation tools, and interactive experiences."
      />

      <div className="projects__grid" ref={gridRef}>
        {visible.map((project, i) => (
          <article
            className="card card--interactive projects__card"
            key={project.id}
            data-reveal="up"
            style={{ "--d": `${(i % 3) * 90}ms` }}
            role="button"
            tabIndex={0}
            aria-label={`Open ${project.title}`}
            onClick={() => setActiveId(project.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveId(project.id);
              }
            }}
          >
            <div className="projects__thumb">
              <img src={project.images[0]} alt="" loading="lazy" />
              <span className="projects__open">View project ↗</span>
            </div>

            <div className="projects__body">
              <p className="projects__date">{project.date}</p>
              <h3 className="projects__name">{project.title}</h3>
              <p className="projects__desc">{project.desc}</p>

              <div className="tag-row projects__tags">
                {project.stack.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {pageCount > 1 && (
        <nav className="pager" aria-label="Projects pagination">
          <button
            type="button"
            className="btn btn--ghost pager__step"
            onClick={() => goTo(page - 1)}
            disabled={page === 0}
            aria-label="Previous page"
          >
            ←
          </button>

          <ul className="pager__list">
            {Array.from({ length: pageCount }, (_, i) => (
              <li key={i}>
                <button
                  type="button"
                  className={`pager__dot${i === page ? " is-active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Page ${i + 1} of ${pageCount}`}
                  aria-current={i === page ? "page" : undefined}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="btn btn--ghost pager__step"
            onClick={() => goTo(page + 1)}
            disabled={page === pageCount - 1}
            aria-label="Next page"
          >
            →
          </button>
        </nav>
      )}

      {active && <ProjectModal project={active} onClose={() => setActiveId(null)} />}
    </Section>
  );
};

export default Projects;
