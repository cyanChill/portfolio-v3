import { useState, useRef } from "react";

import styles from "./index.module.css";

const DraggableSlider = ({ children }) => {
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
    <div
      className={styles.wrapper}
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
      {children}
    </div>
  );
};

export default DraggableSlider;
