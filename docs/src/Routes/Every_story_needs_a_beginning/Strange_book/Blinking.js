import React from 'react'
import ReactDOM from 'react-dom'
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

const Styled_Blinking = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: black;
  animation: ${Blinking_keyframe} 1.5s linear infinite;
`

export const Blinking = () => ReactDOM.createPortal(
    <Styled_Blinking />,
    document.getElementById('root')
)