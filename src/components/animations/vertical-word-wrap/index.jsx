/*
  Synopsis:
    - We input a string and when we hover over the string, each letter will
      translate up and then come from the bottom, returning the letter to
      it's original position
    - We have 1 prop:
      1. text - The string that we'll apply the animation to
      2. duration (optional) - How long the animation will take to complete
*/

import { AnimationContainer, WordWrap } from "./styles";

const VWordWrapAnim = ({ text, durationMS = 300 }) => {
  return (
    <AnimationContainer>
      <WordWrap duration={durationMS} content={text}>
        {text}
      </WordWrap>
    </AnimationContainer>
  );
};

export default VWordWrapAnim;
