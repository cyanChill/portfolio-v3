/*
  Synopsis:
    - We input a string and onload, each letter will appear from the bottom,
      returning the letter to its original position
    - We have 2 props:
      1. text - The string that we'll apply the animation to
      2. delayMS (optional) - How much time in ms do we delay the animation start
*/

import { v4 as uuidv4 } from "uuid";

import { BaseAnimationContainer, LetterContainer } from "../animation.styles";
import { CharRiseLetter } from "./styles";

const CharRise = ({ text, delayMS = 0 }) => {
  return (
    <BaseAnimationContainer>
      {text.split("").map((char, charNum) => (
        <LetterContainer key={uuidv4()}>
          <CharRiseLetter delay={charNum * 50 + delayMS}>{char}</CharRiseLetter>
        </LetterContainer>
      ))}
    </BaseAnimationContainer>
  );
};

export default CharRise;
