import { navLinks, profile } from "../data/site";
import "../styles/footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <a className="footer__logo" href="#hero">
        {profile.brand}
        <span>.</span>
      </a>

      <nav className="footer__nav">
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`}>
            {link.label}
          </a>
        ))}
      </nav>

      <p className="footer__copy">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
