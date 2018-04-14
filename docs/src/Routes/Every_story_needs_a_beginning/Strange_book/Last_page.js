import React from 'react'
import {withRouter} from 'react-router-dom'

import {Styled_page} from './Styled_page'
import {Magic} from './Magic'

let clicked = false;

const Last_page = ({history}) => (
    <Styled_page>
        <Magic/>
    </Styled_page>
)

export default withRouter(Last_page)