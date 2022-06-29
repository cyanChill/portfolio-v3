import { useRef } from "react";

import { AnimatedLogo1 } from "../animations/animated-logo";
import { WordDropAnim } from "../animations/word-rise";
import "./index.css";

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

  return (
    <header className="primary-header flex">
      <button
        className="logo-btn"
        onClick={() => window.scrollTo(0, 0)}
        aria-label="Back to Top"
      >
        <AnimatedLogo1 />
      </button>

      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded="false"
        onClick={toggleNav}
        ref={navToggleRef}
      >
        <span className="sr-only">Menu</span>
      </button>

      <nav>
        <ul
          id="primary-navigation"
          className="primary-navigation flex"
          data-visible="false"
          ref={navMenu}
        >
          <li>
            <a href="#about">
              <span aria-hidden="true">01.</span>
              <WordDropAnim text="About" delay={300} durationMS={450} />
            </a>
          </li>
          <li>
            <a href="#projects">
              <span aria-hidden="true">02.</span>
              <WordDropAnim text="Projects" delayMS={400} durationMS={450} />
            </a>
          </li>
          <li>
            <a href="#contact">
              <span aria-hidden="true">03.</span>
              <WordDropAnim text="Contact" delayMS={650} durationMS={450} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
