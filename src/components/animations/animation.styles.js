import styled, { keyframes } from "styled-components";

export const BaseAnimationContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  overflow-y: hidden;
  text-decoration: none;
`;

export const LetterContainer = styled.div`
  position: relative;
`;

export const Letter = styled.span`
  display: inline-block;
`;

/* 
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
              Animation Keyframes:
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
*/
export const riseAnimation = keyframes` 
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;
