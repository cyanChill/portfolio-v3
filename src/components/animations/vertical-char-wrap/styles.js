import styled from "styled-components";

import { BaseAnimationContainer, Letter } from "../animation.styles";

export const AnimStartLetter = styled(Letter)`
  opacity: 1;
  transform: translateY(0%);
  transition: transform 300ms ease-out, opacity 300ms ease-out;
  transition-delay: ${(props) => (props.delay ? `${props.delay}ms` : "0ms")};
`;

export const AnimEndLetter = styled(Letter)`
  position: absolute;
  inset: 0;

  opacity: 0;
  transform: translateY(100%);
  transition: transform 300ms ease-out, opacity 300ms ease-out;
  transition-delay: ${(props) => (props.delay ? `${props.delay}ms` : "0ms")};
`;

export const AnimationContainer = styled(BaseAnimationContainer)`
  transition: transform 300ms ease-out, opacity 300ms ease-out;

  &:hover ${AnimStartLetter} {
    opacity: 0;
    transform: translateY(-100%);
  }

  &:hover ${AnimEndLetter} {
    opacity: 1;
    transform: translateY(0%);
  }
`;
