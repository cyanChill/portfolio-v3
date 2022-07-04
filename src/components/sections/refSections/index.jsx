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

  useEffect(() => {
    if (aboutVisible) {
      document.body.classList.remove("project-focus");
    } else if (projectsVisible) {
      document.body.classList.add("project-focus");
    } else {
      document.body.classList.remove("project-focus");
    }
  }, [projectsVisible, aboutVisible]);

  return (
    <>
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
    </>
  );
};

export default RefSections;
