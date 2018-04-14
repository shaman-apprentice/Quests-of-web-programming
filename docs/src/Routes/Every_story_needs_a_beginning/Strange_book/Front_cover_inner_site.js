import React from 'react'
import styled from 'styled-components'

import inner_front_cover_bckgr_img from '!url-loader!./assets/InnerCover.jpg'


export const Front_cover_inner_site = styled.div`
    height: 100%;
    width: 100%;
    background-image: url("${inner_front_cover_bckgr_img}");
`