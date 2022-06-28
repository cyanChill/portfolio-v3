import styled from "styled-components";

import { Letter, riseAnimation } from "../animation.styles";

export const CharRiseLetter = styled(Letter)`
  opacity: 0;
  transform: translateY(100%);
  animation: ${riseAnimation} 300ms ease-out 1 forwards;
  animation-delay: ${(props) => (props.delay ? `${props.delay}ms` : "0ms")};
`;
