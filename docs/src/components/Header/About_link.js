import * as React from 'react'
import {withRouter} from 'react-router-dom'
import styled from 'styled-components'

//{'/index?table_of_contents=false'
const About_link = (props) =>
    <Styles
        title="Link to About / Impressum"
        onClick={() => props.history.push('/index?table_of_contents=false')}
    >
        <img
            src="https://avatars1.githubusercontent.com/u/3596742"
            alt="my GitHub image"
            height={80}
        />
        <div>
            About <br/>
            <span style={{fontSize: '0.75em'}}>&amp;</span> <br/>
            Impressum <br/>
        </div>
    </Styles>

const Styles = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-template-rows: 80px;
  
  margin: 0.5em;
  border: 2px solid darkcyan;
  
  > :nth-child(1) {
    grid-column: 1 / 1;
  }
  
  > :nth-child(2) {
    grid-column: 2 / 2;
    margin-top: 0.5em;
  }
`

export default withRouter(About_link)