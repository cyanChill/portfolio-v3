import { Projects as ProjectsList } from "../../../data";
import ProjectItem from "../../projectItem";
import styles from "./index.module.css";

const Projects = () => {
  return (
    <div id="projects" className={`flex ${styles.projects}`}>
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
};

export default Projects;
