import styled, {keyframes} from 'styled-components'

const Blinking_keyframe = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.9;
  }
  100% {
    opacity: 0;
  }
`

export interface Styled_blinking_props {
    animation_iteration_count: number,
    animation_time: number,
}

export const Styled_blinking = styled.div.attrs<Styled_blinking_props>({})`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  background: black;
  animation: ${Blinking_keyframe} ${props => props.animation_time}s;
  animation-iteration-count: ${props => props.animation_iteration_count};
`
