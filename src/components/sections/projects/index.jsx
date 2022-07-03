import { forwardRef } from "react";

import { Projects as ProjectsList } from "../../../data";
import ProjectItem from "../../projectItem";
import styles from "./index.module.css";

const Projects = forwardRef(({ seen }, ref) => {
  return (
    <div
      id="projects"
      className={`flex ${styles.projects} ${seen && styles.seen} $`}
      ref={ref}
    >
      <h1 className="section-header">
        <span aria-hidden="true">02.</span>Projects
      </h1>

      {ProjectsList.map((project) => (
        <ProjectItem
          key={project.name}
          projectInfo={project}
          left={project.onLeft}
        />
      ))}
    </div>
  );
});

export default Projects;
