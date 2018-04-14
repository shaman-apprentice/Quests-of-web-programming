import { css } from 'styled-components';
import { StyledPage } from './StyledPage';
import { turnDir, transState } from '../../constants';

const StyledLeftPage = StyledPage.extend`
    transform-origin: right;
    ${ props => turningForward(props) }
    ${ props => turningBackward(props) }
`;

function turningBackward(props) {
    return props.turnDir === turnDir.b && css`
        ${ props => props.transState === transState.entering && css`
            z-index: 0;
            transform: rotateY(0deg);
        `}
    
        ${ props => props.transState === transState.entered && css`
            z-index: 0;
            transform: rotateY(0deg);
        `}
    
         ${ props => props.transState === transState.exiting && css`
            z-index: 1;
            transform: rotateY(90deg);
        `}
        
      ${ props => props.transState === transState.exited && css`
            z-index: 1;
            transform: rotateY(180deg);
        `}
    `;
}

function turningForward(props) {
    return props.turnDir === turnDir.f && css`
        ${ props => props.transState === transState.entering && css`
            z-index: -1;
            transform: rotateY(90deg);
        `}
    
        ${ props => props.transState === transState.entered && css`
            z-index: 2;
            transform: rotateY(0deg);
        `}
    
         ${ props => props.transState === transState.exiting && css`
            z-index: 0;
            transform: rotateY(0deg);
        `}
        
      ${ props => props.transState === transState.exited && css`
            z-index: 0;
            transform: rotateY(0deg);
        `}
    `;
}

export { StyledLeftPage };