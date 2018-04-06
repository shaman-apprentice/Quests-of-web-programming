import * as React from 'react'

import {Styled_layout} from './Styled_layout'
import {Impressum} from './Impressum'
import {About_this_project} from './About_this_project'

export const About = () =>
    <Styled_layout>
        <About_this_project />
        <Impressum />
    </Styled_layout>
;