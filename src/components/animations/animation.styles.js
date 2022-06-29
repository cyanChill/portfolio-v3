import styled, { keyframes } from "styled-components";

export const BaseAnimationContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  overflow-y: hidden;
  text-decoration: none;

  position: relative;
`;

export const AnimatedBase = styled.span`
  display: inline-block;

  transition: transform ${({ duration }) => `${duration || "300"}ms`}
    ${({ timingFunc }) => `${timingFunc || "ease-out"}`} !important;
  animation-duration: ${({ duration }) => `${duration || "300"}ms`} !important;

  transition-delay: ${({ delay }) => `${delay || 0}ms`} !important;
  animation-delay: ${({ delay }) => `${delay || 0}ms`} !important;
`;

/* 
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
              Animation Keyframes:
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
*/
export const riseBottomAnimation = keyframes` 
  from {
    transform: translateY(100%)  skewY(50deg);
  }
  to {
    transform: translateY(0%) skewY(0);
  }
`;

export const dropTopAnimation = keyframes`
  from {
    transform: translateY(-100%) skewY(50deg)
  }
  to {
    transform: translateY(0%) skewY(0);
  }
`;
