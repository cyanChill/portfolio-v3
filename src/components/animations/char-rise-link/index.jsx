/*
  Synopsis:
    - We input a string and when we hover over the string, each letter will
      translate up and then come from the bottom, returning the letter to
      it's original position
*/

import { v4 as uuidv4 } from "uuid";

import "./index.css";

const CharRiseLink = ({ href, text, className }) => {
  return (
    <a href={href} className={`char-rise-container ${className}`}>
      {text.split("").map((char, charNum) => (
        <div className="letterContainer" key={uuidv4()}>
          <span
            className="letter char-rise-start"
            style={{ transitionDelay: `${charNum * 50}ms` }}
          >
            {char}
          </span>
          <span
            className="letter char-rise-end"
            style={{ transitionDelay: `${charNum * 50}ms` }}
          >
            {char}
          </span>
        </div>
      ))}
    </a>
  );
};

export default CharRiseLink;
