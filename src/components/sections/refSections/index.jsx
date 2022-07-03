import { useEffect } from "react";

import useElementOnScreen from "../../../hooks/useElementOnScreen";
import About from "../about";
import Projects from "../projects";

const options = { root: null, rootMargin: "0px", threshold: 0 };

const RefSections = () => {
  const [aboutRef, aboutVisible] = useElementOnScreen({
    ...options,
    threshold: 1,
  });
  const [projectsRef, projectsVisible] = useElementOnScreen(options);
  const [contactRef, contactVisible] = useElementOnScreen({
    ...options,
    threshold: 1,
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
      <Projects seen={projectsVisible && !aboutVisible} ref={projectsRef} />
      <div ref={contactRef} />
    </>
  );
};

export default RefSections;
