/*
  Synopsis:
    - We input a string and when we hover over the string, each letter will
      translate up and then come from the bottom, returning the letter to
      it's original position
    - We have 1 prop:
      1. text - The string that we'll apply the animation to
*/

import { v4 as uuidv4 } from "uuid";

import { LetterContainer } from "../animation.styles";
import { AnimationContainer, AnimStartLetter, AnimEndLetter } from "./styles";

const VCharWrap = ({ text }) => {
  return (
    <AnimationContainer>
      {text.split("").map((char, charNum) => (
        <LetterContainer key={uuidv4()}>
          <AnimStartLetter delay={charNum * 50}>{char}</AnimStartLetter>
          <AnimEndLetter delay={charNum * 50}>{char}</AnimEndLetter>
        </LetterContainer>
      ))}
    </AnimationContainer>
  );
};

export default VCharWrap;
