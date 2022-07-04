import { useRef } from "react";

import { AnimatedLogoOnLoad } from "../animations/animated-logo";
import { WordDropAnim } from "../animations/word-rise";
import VWordWrapAnim from "../animations/vertical-word-wrap";
import styles from "./index.module.css";

const Navbar = () => {
  const navToggleRef = useRef(null);
  const navMenu = useRef(null);

  const toggleNav = () => {
    const visibility = navMenu.current.getAttribute("data-visible");
    if (visibility === "false") {
      navMenu.current.setAttribute("data-visible", true);
      navToggleRef.current.setAttribute("aria-expanded", true);
    } else {
      navMenu.current.setAttribute("data-visible", false);
      navToggleRef.current.setAttribute("aria-expanded", false);
    }
  };

  const closeNav = () => {
    navMenu.current.setAttribute("data-visible", false);
    navToggleRef.current.setAttribute("aria-expanded", false);
  };

  return (
    <header className={`flex ${styles["primary-header"]}`}>
      <button
        className={styles["logo-btn"]}
        onClick={() => window.scrollTo(0, 0)}
        aria-label="Back to Top"
      >
        <AnimatedLogoOnLoad />
      </button>

      <button
        className={styles["mobile-nav-toggle"]}
        aria-controls="primary-navigation"
        aria-expanded="false"
        onClick={toggleNav}
        ref={navToggleRef}
      >
        <span className="sr-only">Menu</span>
      </button>

      <nav
        id="primary-navigation"
        className={`flex ${styles["primary-navigation"]}`}
        data-visible="false"
        ref={navMenu}
      >
        <a href="#about" onClick={closeNav}>
          <span aria-hidden="true">01.</span>
          <WordDropAnim delay={300} durationMS={450}>
            <VWordWrapAnim>About</VWordWrapAnim>
          </WordDropAnim>
        </a>

        <a href="#projects" onClick={closeNav}>
          <span aria-hidden="true">02.</span>
          <WordDropAnim delayMS={400} durationMS={450}>
            <VWordWrapAnim>Projects</VWordWrapAnim>
          </WordDropAnim>
        </a>

        <a href="#contact" onClick={closeNav}>
          <span aria-hidden="true">03.</span>
          <WordDropAnim delayMS={650} durationMS={450}>
            <VWordWrapAnim>Contact</VWordWrapAnim>
          </WordDropAnim>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
