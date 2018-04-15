import * as React from 'react'
import styled from 'styled-components'

const tree_of_wisdom_site = require('./tree_of_wisdom_site.svg') 

export const Tree_svg = ({onClick}) => (
    <Styled_svg
        title="click me for getting an almost unbelievable almost life changing peace of wisdom"
        onClick={onClick}
        dangerouslySetInnerHTML={{__html: tree_of_wisdom_site}}
    />
)

const Styled_svg = styled.div`
  svg {
    height: 100%;
    cursor: pointer;
  }
`