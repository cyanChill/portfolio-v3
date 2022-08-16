import { useEffect, useRef, useState, memo, forwardRef } from "react";

import { Technologies } from "../../../data";
import DraggableCarousel from "../../sliders/draggable-carousel";
import DragIndicator from "../../svgs/animated/drag-indicator";
import styles from "./index.module.css";

const About = memo(
  forwardRef((_, ref) => {
    const carouselRef = useRef(null);
    const [showAmount, setShowAmount] = useState();

    useEffect(() => {
      const updateAmount = () => {
        setShowAmount(
          Math.ceil(parseInt(carouselRef.current.offsetWidth) / 150)
        );
      };

      updateAmount(); // On initialization
      window.addEventListener("resize", updateAmount);
      return () => window.removeEventListener("resize", updateAmount);
    }, []);

    return (
      <section id="about" className={`flex ${styles.about}`}>
        <h2 className="section-header">
          <span aria-hidden="true">01.</span>About
        </h2>

        <div className={`flex ${styles.content}`}>
          <p className={styles.past}>
            Being introduced to the world of web development in my first year as
            a highschooler with a newly introduced computer science course lit
            the spark of the beginning of my journey to pursue this passion.
          </p>

          <p className={styles.current}>
            Today, I'm fascinated by <b>web development</b>, creating
            applications, and learning how I can improve my work to benefit the
            user experience.
          </p>

          <p className={styles.current}>
            I work with <b>React</b>, <b>NextJS</b>, <b>JavaScript (ES6+)</b>,{" "}
            <b>CSS</b>, and <b>HTML</b> to create a great user experience. I
            also learned how to use <b>Firebase</b> and <b>MongoDB</b> as
            backend databases and <b>NodeJS</b> and <b>Express</b> for the
            backend experience. I've also used <b>NextJS</b> to create an
            all-in-one fullstack application.
          </p>
        </div>

        <div ref={ref} />

        <div className={`flex ${styles.carouselContainer}`}>
          <DraggableCarousel show={showAmount} ref={carouselRef}>
            {Technologies.map((technology) => (
              <div
                className={`flex ${styles.technology}`}
                key={technology.name}
              >
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
      </section>
    );
  })
);

export default About;
