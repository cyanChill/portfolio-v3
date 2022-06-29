import styled from "styled-components";

import { BaseAnimationContainer, AnimatedBase } from "../animation.styles";

export const WordWrap = styled(AnimatedBase)`
  position: relative;
  transform-origin: top right;
  transform: translateY(0%);

  &:after {
    content: "${({ content }) => `${content || " "}`}";
    position: absolute;
    bottom: 0;
    left: 0;

    transform-origin: bottom left;
    transform: translateY(100%) skewY(50deg);
    transition: transform ${({ duration }) => `${duration || "300"}ms`}
      cubic-bezier(0, 0.82, 1, 0.83);
  }
`;

export const AnimationContainer = styled(BaseAnimationContainer)`
  &:hover ${WordWrap} {
    transform: translateY(-100%) skewY(50deg);
  }

  &:hover ${WordWrap}:after {
    transform: translateY(275%) skewY(-50deg);
  }
`;
