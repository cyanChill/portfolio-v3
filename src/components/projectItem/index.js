import { useRef } from "react";

import VWordWrapAnim from "../animations/vertical-word-wrap";
import { ArrowTopRight } from "../svgs/logos";
import styles from "./index.module.css";

const ProjectItem = ({ projectInfo, left }) => {
  const videoRef = useRef(null);

  const handlePlay = () => videoRef.current.play();
  const handlePause = () => videoRef.current.pause();

  return (
    <div className={`${left ? styles.left : ""} ${styles.wrapper}`}>
      <div className={`flex ${styles.projectDescription}`}>
        <h3 className={`flex ${styles.projectTitle}`}>{projectInfo.name}</h3>

        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{projectInfo.description}</p>
          <p className={styles.techUsed}>{projectInfo.techDescription}</p>

          <div className={`flex ${styles.links}`}>
            {projectInfo.links.repository && (
              <a
                href={projectInfo.links.repository}
                alt={`Link to ${projectInfo.name} Github Repository.`}
                target="_blank"
                rel="noreferrer"
                className={`flex ${styles.externalLink}`}
              >
                <VWordWrapAnim>Github</VWordWrapAnim>
                <div className={styles.iconSize}>
                  <ArrowTopRight />
                </div>
              </a>
            )}
            {projectInfo.links.liveSite && (
              <a
                href={projectInfo.links.liveSite}
                alt={`Link to ${projectInfo.name} Live Site.`}
                target="_blank"
                rel="noreferrer"
                className={`flex ${styles.externalLink}`}
              >
                <VWordWrapAnim>Live Site</VWordWrapAnim>
                <div className={styles.iconSize}>
                  <ArrowTopRight />
                </div>
              </a>
            )}
          </div>
        </div>
      </div>

      <div
        className={styles.projectPreview}
        onMouseEnter={handlePlay}
        onMouseLeave={handlePause}
      >
        <video
          muted="muted"
          loop
          src={projectInfo.previewVideo}
          alt={`screen recording of using this ${projectInfo.name} application.`}
          ref={videoRef}
        />
      </div>
    </div>
  );
};

export default ProjectItem;
