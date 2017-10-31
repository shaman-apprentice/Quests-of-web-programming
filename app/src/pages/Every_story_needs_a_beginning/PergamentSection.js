import React from 'react'
import styled from 'styled-components'

const StyledPergament = styled.div`
    position: relative;
    background-image: url('${require('./assets/pergament.png')}');
    /* dimension of background-image */
    width: 691px;
    height: 464px;
    
    margin-bottom: 10px;
    
    > div {
        padding: 80px;
    }
`;

export function PergamentSection({ children }) {
    return <StyledPergament><div>{ children }</div></StyledPergament>;
}