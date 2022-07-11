import { useState, useEffect } from "react";

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

const Contact = () => {
  const [formData, setFormData] = useState(DEFAULT_FORM_STATE);
  const [alert, setAlert] = useState(DEFAULT_ALERT_STATE);
  const [currTimeOut, setCurrTimeOut] = useState(null);

  /* Listen for when we "replay" the requests from background-sync  */
  useEffect(() => {
    const handleSWMessage = (e) => {
      clearTimeout(currTimeOut);

      const resType = e.data.type;
      if (resType === "REPLAY_SUCCESS") {
        setAlert({
          type: "success",
          message: "Sent queued response that was submitted offline.",
        });
      } else if (resType === "REPLAY_FAIL") {
        setAlert({
          type: "error",
          message: "Failed to send queued response that was submitted offline.",
        });
      }

      const newTimeout = setTimeout(() => setAlert(DEFAULT_ALERT_STATE), 5000);
      setCurrTimeOut(newTimeout);
    };

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("message", handleSWMessage);
    }

    return () => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.removeEventListener("message", handleSWMessage);
      }
    };
  }, [currTimeOut]);

  const handleFormChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then((res) => {
        console.log("response from client-side", res);
        setAlert({ type: "success", message: "Successfully Submited Form." });
        setFormData(DEFAULT_FORM_STATE);
      })
      .catch((err) => {
        if (err.message === "Failed to fetch") {
          setAlert({
            type: "error",
            message:
              "Your response has been queued for submission. Please reconnect to the internet to complete the submission.",
          });
          setFormData(DEFAULT_FORM_STATE);
        } else {
          setAlert({ type: "error", message: err.message });
        }
      })
      .finally(() => {
        clearTimeout(currTimeOut);
        const newTimeout = setTimeout(() => {
          setAlert(DEFAULT_ALERT_STATE);
        }, 5000);
        setCurrTimeOut(newTimeout);
      });
  };

  return (
    <section id="contact" className={`flex ${styles.contact}`}>
      <h2 className="section-header">
        <span aria-hidden="true">03.</span>Contact
      </h2>
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
            aria-label="Send Message"
            className={`flex ${styles.submitBtn}`}
          >
            <VWordWrapAnim>Send</VWordWrapAnim>
            <div className={styles.sendIcon}>
              <ArrowTopRight />
            </div>
          </button>
        </form>
      </div>

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
    </section>
  );
};

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
