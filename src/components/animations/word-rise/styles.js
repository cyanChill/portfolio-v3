import styled from "styled-components";

import {
  AnimatedBase,
  riseBottomAnimation,
  dropTopAnimation,
} from "../animation.styles";

export const WordRise = styled(AnimatedBase)`
  transform-origin: bottom left;
  transform: translateY(100%) skewY(50deg);
  animation: ${riseBottomAnimation} ease-out 1 forwards;
`;

export const WordDrop = styled(AnimatedBase)`
  transform-origin: bottom right;
  transform: translateY(-100%) skewY(50deg);
  animation: ${dropTopAnimation} ease-out 1 forwards;
`;
