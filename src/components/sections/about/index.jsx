import { useEffect, useRef, useState } from "react";

import { Technologies } from "../../../data";
import DraggableCarousel from "../../sliders/draggable-carousel";
import DragIndicator from "../../svgs/animated/drag-indicator";
import styles from "./index.module.css";

const About = () => {
  const carouselRef = useRef(null);
  const [showAmount, setShowAmount] = useState();

  useEffect(() => {
    const updateAmount = () => {
      setShowAmount(Math.ceil(parseInt(carouselRef.current.offsetWidth) / 150));
    };

    updateAmount(); // On initialization
    window.addEventListener("resize", updateAmount);
    return () => window.removeEventListener("resize", updateAmount);
  }, []);

  return (
    <div id="about" className={`flex ${styles.about}`}>
      <h1 className="section-header">
        <span aria-hidden="true">01.</span>About
      </h1>

      <div className={styles.content}>
        <p className={styles.past}>
          Being introduced to the world of web development in my first year as a
          highschooler with a newly introduced computer science course lit the
          spark of the beginning of my journey to pursue this passion.
        </p>

        <p className={styles.current}>
          Today, I'm facinated by <span className="bold">web development</span>,
          creating applications, and learning how I can improve my work to
          benefit the user experience.
        </p>
        <p className={styles.current}>
          I work with <span className="bold">React</span>,{" "}
          <span className="bold">NextJS</span>,{" "}
          <span className="bold">JavaScript (ES6+)</span>,{" "}
          <span className="bold">CSS</span>, and{" "}
          <span className="bold">HTML</span> to create a great user experience.
          I also learned how to use <span className="bold">Firebase</span> and{" "}
          <span className="bold">MongoDB</span> as backend databases and{" "}
          <span className="bold">NodeJS</span> and{" "}
          <span className="bold">Express</span> for the backend experience. I've
          also used <span className="bold">NextJS</span> to create an all-in-one
          fullstack application.
        </p>
      </div>

      <div
        className="flex"
        style={{ flexDirection: "column", "--gap": "0.5rem" }}
      >
        <DraggableCarousel show={showAmount} ref={carouselRef}>
          {Technologies.map((technology) => (
            <div className={`flex ${styles.technology}`} key={technology.name}>
              <img src={technology.icon} alt="" draggable="false" />
              <p>{technology.name}</p>
            </div>
          ))}
        </DraggableCarousel>
        <div className={`flex ${styles.dragContainer}`}>
          <DragIndicator
            duration={7.5}
            width="clamp(15rem, 35vw, 20rem)"
            height="clamp(3rem, 7vw, 4rem)"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
