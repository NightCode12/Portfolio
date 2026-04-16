import profileImg from "../assets/image/viber_image_2025-12-09_13-10-03-526-removebg-preview.png";
import "../assets/style/about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        {/* <div className="about__photo">
          <img src={profileImg} alt="Falcatan" />
        </div> */}

        <div className="about__text">
          <p className="about__eyebrow">About Me</p>
          <h2 className="about__title">
            Front-End Developer &amp; Automation Builder
          </h2>
          <p className="about__lead">
            I craft modern, responsive interfaces and build smart workflows
            that remove manual work. My focus is clean UI, fast performance,
            and automations that connect apps and data without friction.
          </p>
          <p className="about__body">
            I work across React-based front-end projects and automation tools
            like n8n and Zapier to design systems that are both beautiful and
            efficient. From UI polish to multi-app integrations, I build
            experiences that help teams move faster.
          </p>

          <div className="about__highlights">
            <div className="about__highlight">
              <span className="about__highlight-icon">01</span>
              <p>Design systems &amp; component libraries</p>
            </div>
            <div className="about__highlight">
              <span className="about__highlight-icon">02</span>
              <p>Responsive landing pages &amp; dashboards</p>
            </div>
            <div className="about__highlight">
              <span className="about__highlight-icon">03</span>
              <p>Workflow automations &amp; API integrations</p>
            </div>
          </div>

          <div className="about__tags">
            <span>React</span>
            <span>UI Design</span>
            <span>n8n</span>
            <span>Zapier</span>
            <span>API Integrations</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
