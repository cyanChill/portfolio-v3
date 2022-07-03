import styled from "styled-components";

import { BaseAnimationContainer, AnimatedBase } from "../animation.styles";

export const WordWrapStart = styled(AnimatedBase)`
  transform-origin: top right;
  transform: translateY(0%);
`;

export const WordWrapEnd = styled(AnimatedBase)`
  position: absolute;
  bottom: 0;
  left: 0;
  transform-origin: bottom left;
  transform: translateY(100%) skewY(50deg);
  transition: transform ${({ duration }) => `${duration || "300"}ms`}
    cubic-bezier(0, 0.82, 1, 0.83);
`;

export const AnimationContainer = styled(BaseAnimationContainer)`
  position: relative;
  align-items: center;
  gap: 1rem;

  &:hover > ${WordWrapStart} {
    transform: translateY(-100%) skewY(50deg);
  }

  &:hover > ${WordWrapEnd} {
    transform: translateY(0%) skewY(0deg);
  }
`;
