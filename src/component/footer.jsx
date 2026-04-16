import "../assets/style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} <span>Falcat.</span> All rights reserved.
        </p>
        <div className="footer__links">
          <a href="#hero">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
