import { forwardRef } from "react";

import { Projects as ProjectsList } from "../../../data";
import ProjectItem from "../../projectItem";
import styles from "./index.module.css";

const Projects = forwardRef(({ seen }, ref) => {
  return (
    <section
      id="projects"
      className={`flex ${styles.projects} ${seen && styles.seen} $`}
      ref={ref}
    >
      <h2 className="section-header">
        <span aria-hidden="true">02.</span>Projects
      </h2>

      {ProjectsList.map((project) => (
        <ProjectItem
          key={project.name}
          projectInfo={project}
          left={project.onLeft}
        />
      ))}
    </section>
  );
});

export default Projects;
