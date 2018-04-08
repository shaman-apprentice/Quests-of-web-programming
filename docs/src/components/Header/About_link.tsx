import * as React from 'react'
import {withRouter, RouteComponentProps} from 'react-router-dom'
import styled from 'styled-components'

interface Props extends RouteComponentProps<any> {
    close_table_of_contents: Function,
}

const About_link: React.SFC<Props> = (props) =>
    <Styles
        title="Link to About / Impressum"
        onClick={() => {
            props.close_table_of_contents();
            props.history.push('/index')
        }}
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