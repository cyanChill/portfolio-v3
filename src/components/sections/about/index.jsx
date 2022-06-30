import { useState, useRef } from "react";

import { Technologies } from "../../../data";
import styles from "./index.module.css";

const About = () => {
  const containerRef = useRef(null);
  const [isPressed, setIsPressed] = useState(false);
  const [startX, setStartX] = useState();
  const [scrollLeft, setScrollLeft] = useState();

  const onMouseDown = (e) => {
    setIsPressed(true);
    setStartX(e.nativeEvent.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const onMouseMove = (e) => {
    if (!isPressed) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const onTouchDown = (e) => {
    setIsPressed(true);
    setStartX(e.nativeEvent.touches[0].pageX, -containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const onTouchMove = (e) => {
    if (!isPressed) return;
    const x = e.nativeEvent.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = x - startX;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div id="about" className={styles.about}>
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
        className={styles.technologies}
        ref={containerRef}
        // For Web
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        // For Mobile
        onTouchStart={onTouchDown}
        onTouchMove={onTouchMove}
        onTouchEnd={() => setIsPressed(false)}
      >
        {Technologies.map((technology) => (
          <div className={styles.technology} key={technology.name}>
            <img src={technology.icon} alt="" draggable="false" />
            <p>{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
