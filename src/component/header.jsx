import { useState } from "react";
import "../assets/style/header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__logo" href="#hero" onClick={handleNavClick}>
          Falcat<span>.</span>
        </a>

        <button
          className={`site-header__toggle ${open ? "is-open" : ""}`}
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-header__nav ${open ? "is-open" : ""}`}>
          <a href="#hero" onClick={handleNavClick}>Home</a>
          <a href="#about" onClick={handleNavClick}>About</a>
          <a href="#skills" onClick={handleNavClick}>Skills</a>
          <a href="#projects" onClick={handleNavClick}>Projects</a>
          <a href="#experience" onClick={handleNavClick}>Experience</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
