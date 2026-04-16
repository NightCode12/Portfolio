import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/style/contact.css";

const SERVICE_ID = "service_waqkcpp";
const TEMPLATE_ID = "template_kvtuc3r";
const PUBLIC_KEY = "JTo5XTf_FDoywO4sY";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus("sent");
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__intro">
          <p className="contact__eyebrow">Contact</p>
          <h2 className="contact__title">Let's Work Together</h2>
          <p className="contact__subtitle">
            I'm open for front‑end projects and workflow automation. Tell me what
            you're building and I'll get back to you quickly.
          </p>

          <div className="contact__quick">
            <div>
              <p className="contact__quick-label">Email</p>
              <p className="contact__quick-value">kmfalcatan2@gmail.com</p>
            </div>
            <div>
              <p className="contact__quick-label">Phone</p>
              <p className="contact__quick-value">0999 918 8228</p>
            </div>
          </div>
        </div>

        <div className="contact__panel">
          <form className="contact__form" ref={formRef} onSubmit={handleSubmit}>
            <div className="contact__row">
              <label>
                Name
                <input type="text" name="user_name" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input type="email" name="user_email" placeholder="you@email.com" required />
              </label>
            </div>
            <label>
              Subject
              <input type="text" name="subject" placeholder="Subject..." required />
            </label>
            <label>
              Message
              <textarea rows="4" name="message" placeholder="Tell me about your project..." required />
            </label>
            <button type="submit" className="contact__btn" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "sent" && <p className="contact__status contact__status--success">Message sent successfully!</p>}
            {status === "error" && <p className="contact__status contact__status--error">Failed to send. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
