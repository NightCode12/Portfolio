import "../assets/style/hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <div className="hero__copy">
          <div className="hero__badge">Available for work</div>
          <h1 className="hero__title">
            Hi, I&apos;m <span>Falcatan</span>
            <br />
            Front-End Developer &amp; Automation Builder
          </h1>
          <p className="hero__subtitle">
            I build modern front-end experiences and automate workflows with
            tools like n8n and Zapier to save time and scale operations.
          </p>

          <div className="hero__cta">
            <a className="hero__btn hero__btn--primary" href="#projects">View Projects</a>
            <a className="hero__btn hero__btn--ghost" href="#contact">Let&apos;s Talk</a>
          </div>

          <div className="hero__meta">
            <div>
              <p className="hero__meta-value">4+</p>
              <p className="hero__meta-label">Years Experience</p>
            </div>
            <div>
              <p className="hero__meta-value">25+</p>
              <p className="hero__meta-label">Projects Delivered</p>
            </div>
            <div>
              <p className="hero__meta-value">8</p>
              <p className="hero__meta-label">Happy Clients</p>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card">
            <div className="hero__card-header">
              <span className="dot dot--green" />
              <span className="dot dot--yellow" />
              <span className="dot dot--red" />
            </div>
            <div className="hero__card-body">
              <p className="hero__card-title">Design - Automate - Deliver</p>
              <p className="hero__card-text">
                Crafting clean interfaces and automation systems that connect
                apps, data, and teams.
              </p>
              <div className="hero__pill-row">
                <span className="hero__pill">React</span>
                <span className="hero__pill">n8n</span>
                <span className="hero__pill">Zapier</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
