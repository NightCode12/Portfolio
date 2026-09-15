import { heroStats, profile } from "../data/site";
import "../styles/hero.css";

const Hero = () => (
  <section className="section hero" id="hero">
    <div className="container hero__inner">
      <div className="hero__copy">
        <h1 className="hero__title animate-rise" style={{ "--d": "90ms" }}>
          Hi, I&apos;m <span className="hero__name">{profile.name}</span>
          <br />
          <span className="hero__role">{profile.role}</span>
        </h1>

        <p className="hero__subtitle animate-rise" style={{ "--d": "180ms" }}>
          I build modern front-end experiences and automate workflows with tools
          like n8n and Zapier to save time and scale operations.
        </p>

        <div className="hero__cta animate-rise" style={{ "--d": "260ms" }}>
          <a className="btn btn--primary" href="#projects">
            View projects <span className="btn__arrow">→</span>
          </a>
          <a className="btn btn--ghost" href="#contact">
            Let&apos;s talk
          </a>
        </div>

        <dl className="hero__stats animate-rise" style={{ "--d": "340ms" }}>
          {heroStats.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <dt className="hero__stat-value">{stat.value}</dt>
              <dd className="hero__stat-label">{stat.label}</dd>
            </div>
          ))}

          {/* Availability reads as the last stat in the row. */}
          {profile.available && (
            <div className="hero__stat hero__stat--status">
              <dt className="hero__stat-value">
                <span className="hero__status-dot" />
                Available
              </dt>
              <dd className="hero__stat-label">For work</dd>
            </div>
          )}
        </dl>
      </div>

      <aside className="hero__visual animate-rise" style={{ "--d": "420ms" }}>
        <div className="hero__card">
          <div className="hero__card-bar">
            <span className="hero__dot hero__dot--red" />
            <span className="hero__dot hero__dot--yellow" />
            <span className="hero__dot hero__dot--green" />
            <span className="hero__card-file">workflow.jsx</span>
          </div>

          <div className="hero__card-body">
            <p className="hero__card-title">Design → Automate → Deliver</p>
            <p className="hero__card-text">
              Crafting clean interfaces and automation systems that connect apps,
              data, and teams.
            </p>
            <div className="tag-row">
              <span className="tag">React</span>
              <span className="tag">n8n</span>
              <span className="tag">Zapier</span>
            </div>
          </div>
        </div>
      </aside>
    </div>

    <a className="hero__scroll" href="#about" aria-label="Scroll to about">
      <span className="hero__scroll-line" />
      Scroll
    </a>
  </section>
);

export default Hero;
