import { useState, forwardRef } from "react";

import {
  GitHub,
  LinkedIn,
  Email,
  ArrowTopRight,
  Close,
} from "../../svgs/logos";
import VWordWrapAnim from "../../animations/vertical-word-wrap";
import styles from "./index.module.css";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const DEFAULT_FORM_STATE = { name: "", email: "", message: "" };
const DEFAULT_ALERT_STATE = { type: "", message: "" };

const Contact = forwardRef((_, ref) => {
  const [formData, setFormData] = useState(DEFAULT_FORM_STATE);
  const [alert, setAlert] = useState(DEFAULT_ALERT_STATE);

  const handleFormChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });

      setAlert({ type: "success", message: "Successfully Submited Form." });
      setFormData(DEFAULT_FORM_STATE);
    } catch (err) {
      setAlert({ type: "error", message: err });
    }
  };

  return (
    <div id="contact" className={`flex ${styles.contact}`} ref={ref}>
      <div
        className={`flex ${styles.alert} ${alert.type !== "" && styles.show} ${
          styles[alert.type]
        }`}
      >
        <span>{alert.message}</span>
        <button
          className={styles.closeBtn}
          onClick={() => setAlert(DEFAULT_ALERT_STATE)}
        >
          <Close />
        </button>
      </div>

      <h1 className="section-header">
        <span aria-hidden="true">03.</span>Contact
      </h1>
      <p>
        I'm currently looking for a role as a full-stack developer. If you have
        any questions, an offer, or want to chat, send an email or message and
        I'll get back to you as soon as I can.
      </p>

      <div className={`flex ${styles.action}`}>
        <SocialLinks />

        <form onSubmit={handleSubmit} className={`flex ${styles.form}`}>
          <input
            type="text"
            name="name"
            placeholder="name*"
            required
            value={formData.name}
            onChange={handleFormChange}
          />
          <input
            type="email"
            name="email"
            placeholder="email*"
            required
            value={formData.email}
            onChange={handleFormChange}
          />
          <textarea
            name="message"
            rows={3}
            placeholder="Your Message*"
            required
            value={formData.message}
            onChange={handleFormChange}
          />
          <button
            type="submit"
            aria-label="Send Message Button"
            className={`flex ${styles.submitBtn}`}
          >
            <VWordWrapAnim>Send</VWordWrapAnim>
            <div className={styles.sendIcon}>
              <ArrowTopRight />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
});

export default Contact;

const SocialLinks = () => {
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("anthonyliang9@gmail.com");
  };

  return (
    <ul className={`flex ${styles.socialLinks}`}>
      <li>
        <a
          href="https://github.com/cyanChill"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to My Github"
        >
          <GitHub />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/anthonyliang9/"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to My LinkedIn"
        >
          <LinkedIn />
        </a>
      </li>
      <li>
        <a
          href="mailto:anthonyliang9@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Email Me"
          onClick={copyEmailToClipboard}
        >
          <Email />
        </a>
      </li>
    </ul>
  );
};
