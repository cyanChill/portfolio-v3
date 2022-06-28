/*
  Synopsis:
    - We input a string and when we hover over the string, each letter will
      translate up and then come from the bottom, returning the letter to
      it's original position
    - We have 2 props:
      1. text - The string that we'll apply the animation to
      2. className - The classes applied to this component externally
*/

import { v4 as uuidv4 } from "uuid";

import "./index.css";

const VCharWrap = ({ text, className }) => {
  return (
    <div className={`vchar-wrap-container ${className}`}>
      {text.split("").map((char, charNum) => (
        <div className="letterContainer" key={uuidv4()}>
          <span
            className="letter vchar-wrap-start"
            style={{ transitionDelay: `${charNum * 50}ms` }}
          >
            {char}
          </span>
          <span
            className="letter vchar-wrap-end"
            style={{ transitionDelay: `${charNum * 50}ms` }}
          >
            {char}
          </span>
        </div>
      ))}
    </div>
  );
};

export default VCharWrap;
