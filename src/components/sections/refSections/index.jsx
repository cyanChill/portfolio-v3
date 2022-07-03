import { useEffect } from "react";

import useElementOnScreen from "../../../hooks/useElementOnScreen";
import About from "../about";
import Projects from "../projects";
import Contact from "../contact";

const options = { root: null, rootMargin: "0px", threshold: 0 };

const RefSections = () => {
  const [aboutRef, aboutVisible] = useElementOnScreen({
    ...options,
    threshold: 0.4,
  });
  const [projectsRef, projectsVisible] = useElementOnScreen(options);
  const [contactRef, contactVisible] = useElementOnScreen({
    ...options,
    threshold: 0.5,
  });

  useEffect(() => {
    if (aboutVisible) {
      document.body.classList.remove("project-focus");
      document.body.classList.remove("contact-focus");
    } else if (projectsVisible && !contactVisible) {
      document.body.classList.add("project-focus");
      document.body.classList.remove("contact-focus");
    } else if (contactVisible) {
      document.body.classList.add("contact-focus");
      document.body.classList.remove("project-focus");
    } else {
      document.body.classList.remove("project-focus");
      document.body.classList.remove("contact-focus");
    }
  }, [projectsVisible, contactVisible, aboutVisible]);

  return (
    <>
      <About ref={aboutRef} />
      <Projects seen={contactVisible} ref={projectsRef} />
      <Contact ref={contactRef} />
    </>
  );
};

export default RefSections;
