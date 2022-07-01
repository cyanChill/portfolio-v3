import {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  forwardRef,
} from "react";

import styles from "./index.module.css";

const DraggableCarousel = forwardRef(({ children, show }, ref) => {
  const contentRef = useRef(null);

  const [inputLength, setInputLength] = useState(children.length);
  const [childWidth, setChildWidth] = useState();
  const [childHeight, setChildHeight] = useState();
  // Stores previous translate values for each item
  const [prevTrans, setPrevTrans] = useState([]);
  // Stores the initial x-coordinate of where we touch
  const [touchPos, setTouchPos] = useState(null);

  // Add 16px of padding between each element
  const itemWidth = useMemo(() => childWidth + 16, [childWidth]);

  const updateDimensions = useCallback(() => {
    setChildWidth(contentRef.current.children[0].offsetWidth);
    setChildHeight(contentRef.current.children[0].offsetHeight);
  }, []);

  // Initialize Children translations
  const initTranslates = useCallback(() => {
    if (!childWidth || !show || !itemWidth || !inputLength) return;

    // Turn the HTMLCollection to Array
    const childrenArr = Array.from(contentRef.current.children);
    // We'll have half of the remaining elements that's not being shown on the
    // left & right of what's being shown
    const halfRemain = (1 + (inputLength - show) / 2) * itemWidth;
    const initTrans = []; // Array of initial translate values

    childrenArr.forEach((item, idx) => {
      // Figuring out how much we translate each item
      const transAmount = itemWidth * (idx + 1);
      const finalTransAmout =
        transAmount > contentRef.current.offsetWidth + halfRemain
          ? -(itemWidth * (inputLength - 1 - idx))
          : transAmount;
      item.style.left = `-${itemWidth}px`;
      item.style.transform = `translate(${finalTransAmout}px, 0px)`;
      initTrans.push(finalTransAmout);
    });

    setPrevTrans(initTrans);
  }, [childWidth, show, itemWidth, inputLength]);

  // Set length to match current children from props & get children width
  useEffect(() => {
    setInputLength(children.length);
    setPrevTrans(new Array(children.length).fill(0));

    // On initialization
    initTranslates();
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [children, initTranslates, updateDimensions]);

  // Does the logic of applying "translate()" to the items
  const onMove = (currTouch, inputDown) => {
    const diff = Math.round(inputDown - currTouch); // Drag amount
    const childrenArr = Array.from(contentRef.current.children);

    const halfRemain = (1 + (inputLength - show) / 2) * itemWidth;
    // Boundaries of how we'll shift the items
    const leftBoundary = -(halfRemain + itemWidth);
    const rightBoundary = contentRef.current.offsetWidth + halfRemain;

    const updatedTransVals = childrenArr.map((item, idx) => {
      let moveAmount = parseInt(prevTrans[idx]) - diff;
      moveAmount =
        moveAmount < leftBoundary /* Move Left Items to the Right */
          ? parseInt(prevTrans[inputLength - 1]) - diff + itemWidth * (idx + 1)
          : moveAmount > rightBoundary /* Move Right Items to the Left */
          ? parseInt(prevTrans[0]) - diff - itemWidth * (inputLength - idx)
          : moveAmount; /* Default move value */

      item.style.transform = `translate(${moveAmount}px, 0px)`;
      return moveAmount;
    });

    setPrevTrans(updatedTransVals);
    setTouchPos(currTouch);
  };

  const handleMouseTouchOff = () => {
    setTouchPos(null);
    setPrevTrans(
      Array.from(contentRef.current.children).map((item) =>
        parseInt(item.style.transform.split("px,")[0].split("(")[1])
      )
    );
  };

  const handleMouseTouchMove = (e, type) => {
    const inputDown = touchPos;
    if (inputDown === null) return;
    if (type !== "mouse" && type !== "touch") return;

    const currTouch =
      type === "mouse" ? e.nativeEvent.clientX : e.touches[0].clientX;
    onMove(currTouch, inputDown);
  };

  return (
    <div
      ref={ref}
      className={styles.container}
      // Web Devices
      onMouseDown={(e) => setTouchPos(e.nativeEvent.clientX)}
      onMouseMove={(e) => handleMouseTouchMove(e, "mouse")}
      onMouseLeave={handleMouseTouchOff}
      onMouseUp={handleMouseTouchOff}
      // Mobile Devices
      onTouchStart={(e) => setTouchPos(e.touches[0].clientX)}
      onTouchMove={(e) => handleMouseTouchMove(e, "touch")}
      onTouchEnd={handleMouseTouchOff}
    >
      <div
        ref={contentRef}
        className={styles.content}
        style={{
          height: `${childHeight + 6}px`,
          "--show": show,
        }}
      >
        {children}
      </div>
    </div>
  );
});

export default DraggableCarousel;
