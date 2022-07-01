/*
  Synopsis:
    - We input a string and when we hover over the string, each letter will
      translate up and then come from the bottom, returning the letter to
      it's original position
    - We have 1 prop:
      1. text - The string that we'll apply the animation to
      2. duration (optional) - How long the animation will take to complete
*/

import { AnimationContainer, WordWrapStart, WordWrapEnd } from "./styles";

const VWordWrapAnim = ({ durationMS = 300, children }) => {
  return (
    <AnimationContainer>
      <WordWrapStart duration={durationMS}>{children}</WordWrapStart>
      <WordWrapEnd duration={durationMS}>{children}</WordWrapEnd>
    </AnimationContainer>
  );
};

export default VWordWrapAnim;
