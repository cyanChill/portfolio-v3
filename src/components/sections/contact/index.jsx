import { useState } from "react";

import { GitHub, LinkedIn, Email, Send, Close } from "../../svgs/logos";
import VWordWrapAnim from "../../animations/vertical-word-wrap";
import styles from "./index.module.css";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const DEFAULT_FORM_STATE = { name: "", email: "", message: "" };
const DEFAULT_ALERT_STATE = { type: "", message: "" };

const Contact = () => {
  const [formData, setFormData] = useState(DEFAULT_FORM_STATE);
  const [alert, setAlert] = useState(DEFAULT_ALERT_STATE);

  const handleFormChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.trim(),
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
    <div id={styles.contact}>
      <div
        className={`${styles.alert} ${alert.type !== "" && styles.show} ${
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

      <h1>
        <span aria-hidden="true">03.</span>Contact
      </h1>
      <p>
        I'm currently looking for a role as a full-stack developer. If you have
        any questions, an offer, or want to chat, send an email or message and
        I'll get back to you as soon as I can.
      </p>

      <div className={styles.action}>
        <SocialLinks />

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="name*"
            required
            onChange={handleFormChange}
          />
          <input
            type="email"
            name="email"
            placeholder="email*"
            required
            onChange={handleFormChange}
          />
          <textarea
            name="message"
            rows={3}
            placeholder="Your Message*"
            required
            onChange={handleFormChange}
          />
          <button
            type="submit"
            aria-label="Send Message Button"
            className={styles.submitBtn}
          >
            <VWordWrapAnim text={`Send`}>
              <div className={styles.sendIcon}>
                <Send />
              </div>
            </VWordWrapAnim>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

const SocialLinks = () => {
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("anthonyliang9@gmail.com");
  };

  return (
    <ul className={styles.socialLinks}>
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
