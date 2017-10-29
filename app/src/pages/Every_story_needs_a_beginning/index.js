import React from 'react'
import styled from 'styled-components'

const Styled_container = styled.div`
    @font-face {
        font-family: handwritting;
        src: url(${ require('./assets/LilyScriptOne-Regular.ttf') });
    }
    
    * { 
        font-family: handwritting;
        text-align: center;
     }
`;

export function Every_story_needs_a_beginning(props) {
    return (
        <Styled_container>
            <h1>Every story needs a beginning - even those without an ending</h1>
            <p>asf</p>
        </Styled_container>
    )
}