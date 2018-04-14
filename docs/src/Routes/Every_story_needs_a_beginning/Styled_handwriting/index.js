import React from 'react'
import styled from 'styled-components'

import handwriting_font from './LilyScriptOne-Regular.ttf'

export const Styled_handwriting = styled.div`
    @font-face {
        font-family: handwritting;
        src: url(${ handwriting_font });
    }
    
    * { 
        font-family: handwritting;
        text-align: center;
     }
`