import { GitHub, LinkedIn, Email, Send } from "../../svgs/logos";
import VWordWrapAnim from "../../animations/vertical-word-wrap";
import styles from "./index.module.css";

const Contact = () => {
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("anthonyliang9@gmail.com");
  };

  return (
    <div id={styles.contact}>
      <h1>
        <span aria-hidden="true">03.</span>Contact
      </h1>
      <p>
        I'm currently looking for a role as a full-stack developer. If you have
        any questions, an offer, or want to chat, send an email or message and
        I'll get back to you as soon as I can.
      </p>

      <div className={styles.action}>
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

        <form name="contact" method="post" className={styles.form}>
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="name*" required />
          <input type="email" name="email" placeholder="email*" required />
          <textarea
            name="message"
            rows={3}
            placeholder="Your Message*"
            required
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
