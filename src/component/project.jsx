import { useEffect, useRef, useState } from "react";
import "../assets/style/project.css";

import zahga1 from "../assets/image/zahga/Screenshot 2026-04-15 143434.png";
import zahga2 from "../assets/image/zahga/Screenshot 2026-04-15 143526.png";
import zahga3 from "../assets/image/zahga/Screenshot 2026-04-15 143543.png";
import zahga4 from "../assets/image/zahga/Screenshot 2026-04-15 143558.png";
import zahga5 from "../assets/image/zahga/Screenshot 2026-04-15 143619.png";

import harness1 from "../assets/image/harnessTogo/Screenshot 2026-04-15 143653.png";
import harness2 from "../assets/image/harnessTogo/Screenshot 2026-04-15 143724.png";
import harness3 from "../assets/image/harnessTogo/Screenshot 2026-04-15 143803.png";
import harness4 from "../assets/image/harnessTogo/Screenshot 2026-04-15 143817.png";
import harness5 from "../assets/image/harnessTogo/Screenshot 2026-04-15 143829.png";

import quikskope1 from "../assets/image/quikskope/Screenshot 2026-04-15 145222.png";
import quikskopeFile from "../assets/file/QuikSkope_Automation_Overview.pdf";

import wms1 from "../assets/image/WMS/image.png";
import wms2 from "../assets/image/WMS/image copy.png";
import wms3 from "../assets/image/WMS/image copy 2.png";
import wms4 from "../assets/image/WMS/image copy 3.png";

const makePlaceholder = (label, hue) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='900' height='600'>
      <defs>
        <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
          <stop offset='0%' stop-color='hsl(${hue},70%,55%)'/>
          <stop offset='100%' stop-color='hsl(${hue + 40},70%,45%)'/>
        </linearGradient>
      </defs>
      <rect width='100%' height='100%' fill='url(%23g)'/>
      <text x='50%' y='50%' font-family='Arial' font-size='48' fill='rgba(255,255,255,0.85)'
        text-anchor='middle' dominant-baseline='middle'>${label}</text>
    </svg>`
  )}`;

const projects = [
  {
    title: "ZAHGA",
    date: "April 2026",
    desc: "Corporate website for an IT company, showcasing services, solutions, and expertise with a modern, professional design.",
    stack: ["React", "CSS", "JS"],
    link: "https://zahga.vercel.app/",
    images: [zahga1, zahga2, zahga3, zahga4, zahga5],
  },
  {
    title: "HarnessTogo",
    date: "Apr 2026",
    desc: "Logistics platform delivering streamlined shipment tracking and operations management with a clean, focused interface.",
    stack: ["React", "CSS", "JS"],
    link: "https://harness-togo.vercel.app/",
    images: [harness1, harness2, harness3, harness4, harness5],
  },
  {
    title: "Quikskope Automation",
    date: "October 2025",
    desc: "Workflow automation system built with Zapier and AI to streamline business operations and reduce manual tasks.",
    stack: ["Zapier", "AI", "Automation"],
    link: "",
    download: quikskopeFile,
    downloadName: "QuikSkope_Automation_Overview.pdf",
    images: [quikskope1],
  },
  {
    title: "Warehouse Management System",
    date: "Mar 2026",
    desc: "Centralized warehouse platform connecting 7 retail stores, enabling real-time order management, inventory tracking, and streamlined fulfillment across all locations.",
    stack: ["React", "Dashboard", "Inventory"],
    link: "",
    images: [wms1, wms2, wms3, wms4],
  },
  {
    title: "Selene Brain",
    date: "Jan 2026",
    desc: "Inventory tracker for medical equipment with quick search flows.",
    stack: ["N8n", "AI", "Automation"],
    link: "",
    images: [
      makePlaceholder("Med 1", 180),
      makePlaceholder("Med 2", 320),
    ],
  },
];

const Project = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);

  const openModal = (index) => {
    setActiveProject(index);
    setActiveIndex(0);
  };

  const closeModal = () => {
    setActiveProject(null);
    setActiveIndex(0);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("modal-open", activeProject !== null);
    return () => document.body.classList.remove("modal-open");
  }, [activeProject]);

  const project = activeProject !== null ? projects[activeProject] : null;
  const images = project?.images ?? [];

  const goNext = () => {
    if (!images.length) return;
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    if (!images.length) return;
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) < 40) return;
    if (delta < 0) {
      goNext();
    } else {
      goPrev();
    }
  };

  return (
    <section className="project" id="projects">
      <div className="project__inner">
        <div className="project__heading">
          <p className="project__eyebrow">Projects</p>
          <h2 className="project__title">Selected Work</h2>
          <p className="project__subtitle">
            A curated set of UI builds, automation tools, and interactive experiences.
          </p>
        </div>

        <div className="project__grid">
          {projects.map((item, index) => (
            <article
              className="project__card"
              style={{ "--delay": `${index * 90}ms` }}
              key={item.title}
              onClick={() => openModal(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter") openModal(index);
              }}
            >
              <div className="project__thumb">
                {item.images?.[0] ? (
                  <img src={item.images[0]} alt={`${item.title} thumbnail`} />
                ) : (
                  <span>{item.title.split(" ").map((word) => word[0]).slice(0, 3).join("")}</span>
                )}
              </div>
              <div className="project__body">
                <div className="project__meta">
                  <p className="project__date">{item.date}</p>
                  <h3>{item.title}</h3>
                </div>
                <p className="project__desc">{item.desc}</p>
                <div className="project__tags">
                  {item.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {project && (
        <div className="project__modal" role="dialog" aria-modal="true" onClick={closeModal}>
          <div className="project__modal-card" onClick={(event) => event.stopPropagation()}>
            <button className="project__modal-close" type="button" onClick={closeModal}>
              ×
            </button>
            <h3 className="project__modal-title">{project.title}</h3>
            <div className="project__modal-layout">
              <div className="project__modal-media">
                <div className="project__carousel">
                  <button className="project__nav" type="button" onClick={goPrev}>
                    ‹
                  </button>
                  <img
                    src={images[activeIndex]}
                    alt={`${project.title} preview`}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  />
                  <button className="project__nav" type="button" onClick={goNext}>
                    ›
                  </button>
                </div>
                <div className="project__dots">
                  {images.map((_, idx) => (
                    <button
                      key={`${project.title}-${idx}`}
                      className={idx === activeIndex ? "is-active" : ""}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="project__modal-info">
                <p className="project__modal-desc">{project.desc}</p>
                {project.link ? (
                  <a
                    className="project__live-btn"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Site ↗
                  </a>
                ) : project.download ? (
                  <a
                    className="project__live-btn"
                    href={project.download}
                    download={project.downloadName}
                  >
                    Download File ↓
                  </a>
                ) : (
                  <button className="project__live-btn is-disabled" type="button" disabled>
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
