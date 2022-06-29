/*
  Synopsis:
    - We input a string and onload, each letter will appear from the bottom,
      returning the letter to its original position
    - We have 2 props:
      1. text - The string that we'll apply the animation to
      2. delayMS (optional) - How much time in ms do we delay the animation start
      3. duration (optional) - How long the animation will take to complete
*/

import { BaseAnimationContainer } from "../animation.styles";
import { WordRise, WordDrop } from "./styles";

/* Word appear from bottom */
export const WordRiseAnim = ({ text, delayMS = 0, durationMS = 300 }) => {
  return (
    <BaseAnimationContainer>
      <WordRise delay={delayMS} duration={durationMS}>
        {text}
      </WordRise>
    </BaseAnimationContainer>
  );
};

/* Word appears from top */
export const WordDropAnim = ({ text, delayMS = 0, durationMS = 300 }) => {
  return (
    <BaseAnimationContainer>
      <WordDrop delay={delayMS} duration={durationMS}>
        {text}
      </WordDrop>
    </BaseAnimationContainer>
  );
};
