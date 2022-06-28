import { useRef } from "react";

import logo from "../../assets/logo.svg";
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
      <button className="logo-btn" onClick={() => window.scrollTo(0, 0)}>
        <img className="logo" src={logo} alt="" />
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
              <span aria-hidden="true">00</span>About
            </a>
          </li>
          <li>
            <a href="#projects">
              <span aria-hidden="true">01</span>Projects
            </a>
          </li>
          <li>
            <a href="#contact">
              <span aria-hidden="true">02</span>Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
