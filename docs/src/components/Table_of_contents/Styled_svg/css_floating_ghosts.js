import { css } from "styled-components"

export const css_floating_ghosts = () => css`
  @keyframes floating {
    0% {transform: translateY(0)}
    25% {transform: translateY(-10px)}
    75% {transform: translateY(20px)}
    100% {transform: translateY(0)}
  }

  svg #ghost_3 {
    animation: floating 2.0s linear infinite;
  }

  svg #ghost_2 {
    animation: floating 2.5s linear infinite;
  }

  svg #ghost_1 {
    animation: floating 1.5s linear infinite;
  }
`;