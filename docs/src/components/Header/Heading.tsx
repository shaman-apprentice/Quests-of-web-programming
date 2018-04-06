import * as React from 'react'
import styled from 'styled-components'

export const Heading: React.SFC<{
    is_table_of_contents_shown: Boolean,
    onClick: any,
}> = (props) =>
    <Styled_h_mock_for_centering_vertical_and_horizontal
        title={ props.is_table_of_contents_shown ?
            undefined :
            'click to open table of contents'
        }
        onClick={props.onClick}
    >
        Quests of Web Programming
    </Styled_h_mock_for_centering_vertical_and_horizontal>

const Styled_h_mock_for_centering_vertical_and_horizontal = styled.div`
  vertical-align: baseline;
  line-height: 100px;
  font-size: 2.5em;
  margin-left: -100px; /*cause about section is 200px wide*/ 
  z-index: -1; /*to not overlap click/title events of about section*/
`
