import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrolled } from "../hooks/useScrolled";
import "../styles/header.css";

const SECTION_IDS = navLinks.map((link) => link.id);

const Header = () => {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useActiveSection(SECTION_IDS);

  // Close the mobile menu if the viewport grows past the breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 769px)");
    const close = () => mq.matches && setOpen(false);

    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header__inner">
        <a className="header__logo" href="#hero" onClick={() => setOpen(false)}>
          {profile.brand}
          <span>.</span>
        </a>

        <nav className={`header__nav ${open ? "is-open" : ""}`}>
          {navLinks.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`header__link ${active === link.id ? "is-active" : ""}`}
              style={{ "--i": i }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="header__cta" href="#contact" onClick={() => setOpen(false)}>
          Hire me
        </a>

        <button
          className={`header__toggle ${open ? "is-open" : ""}`}
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`header__scrim ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
    </header>
  );
};

export default Header;
