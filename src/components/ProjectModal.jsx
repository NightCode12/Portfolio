import { useCallback, useEffect, useRef, useState } from "react";
import { useBodyLock } from "../hooks/useBodyLock";

const EXIT_MS = 220;

const ProjectModal = ({ project, onClose }) => {
  const [closing, setClosing] = useState(false);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const cardRef = useRef(null);
  const touchX = useRef(0);
  const restoreFocus = useRef(null);

  const images = project.images ?? [];
  const multiple = images.length > 1;

  useBodyLock(true);

  /* Play the exit animation before unmounting. */
  const close = useCallback(() => {
    setClosing(true);
    setTimeout(onClose, EXIT_MS);
  }, [onClose]);

  const go = useCallback(
    (step) => {
      if (!multiple) return;
      setDirection(step);
      setIndex((prev) => (prev + step + images.length) % images.length);
    },
    [images.length, multiple]
  );

  /* Move focus into the dialog, and back out when it closes. */
  useEffect(() => {
    restoreFocus.current = document.activeElement;
    cardRef.current?.focus();
    return () => restoreFocus.current?.focus?.();
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") return close();
      if (e.key === "ArrowRight") return go(1);
      if (e.key === "ArrowLeft") return go(-1);
      if (e.key !== "Tab") return;

      // Keep tabbing inside the dialog.
      const focusables = cardRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables?.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close, go]);

  const onTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(delta) > 45) go(delta < 0 ? 1 : -1);
  };

  return (
    <div
      className={`modal ${closing ? "is-closing" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
      onClick={close}
    >
      <div
        className="modal__card"
        ref={cardRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="icon-btn modal__close" type="button" onClick={close} aria-label="Close">
          ×
        </button>

        <header className="modal__header">
          <p className="modal__date">{project.date}</p>
          <h3 className="modal__title">{project.title}</h3>
        </header>

        <div className="modal__layout">
          <div className="modal__media">
            <div
              className="modal__stage"
              onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
              onTouchEnd={onTouchEnd}
            >
              <img
                key={index}
                className={direction > 0 ? "slide-next" : "slide-prev"}
                src={images[index]}
                alt={`${project.title} screenshot ${index + 1}`}
              />

              {multiple && (
                <>
                  <button
                    className="icon-btn modal__nav modal__nav--prev"
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button
                    className="icon-btn modal__nav modal__nav--next"
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next image"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {multiple && (
              <div className="modal__dots">
                {images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    className={i === index ? "is-active" : ""}
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="modal__info">
            <p className="modal__desc">{project.desc}</p>

            <div className="tag-row">
              {project.stack.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            {project.link ? (
              <a
                className="btn btn--primary"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View live site <span className="btn__arrow">↗</span>
              </a>
            ) : project.download ? (
              <a
                className="btn btn--primary btn--down"
                href={project.download}
                download={project.downloadName}
              >
                Download overview <span className="btn__arrow">↓</span>
              </a>
            ) : (
              <button className="btn btn--ghost" type="button" disabled>
                Private project
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
