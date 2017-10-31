import React from 'react'
import styled, { injectGlobal } from 'styled-components'

import { PergamentSection } from './PergamentSection'
import { Strange_Book } from './Strange_Book'

const Styled_container = styled.div`
    font-size: 1.2em;

    @font-face {
        font-family: handwritting;
        src: url(${ require('./assets/LilyScriptOne-Regular.ttf') });
    }
    
    > * {
        margin: auto;
    }
    
    * { 
        font-family: handwritting;
        text-align: center;
     }
`;

export class Every_story_needs_a_beginning extends React.Component {

    componentWillMount() {
        injectGlobal` body { background-color: burlywood } `;
    }

    componentWillUnmount() {
        injectGlobal` body { background-color: inherit } `;
    }

    render() {
        return (
            <Styled_container>
                <h1 style={{ marginBottom: '-0.5em' }}>Every story needs a beginning - even those without an ending</h1>

                <p style={{ fontFamily: 'latin', fontSize: '0.8em', fontStyle: 'italic'}}>
                    This will be a journey of learning. To quote Albert Einstein: <br/>
                    “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”<br/>
                    Hence we can endlessly learn <span style={{ fontSize: '1.5em', display: 'inline-block', marginTop: '-0.5em' }}>&#x263A;</span><br/>
                </p>

                <PergamentSection>
                    Once upon a time, in a parallel universe very different than this one, there was a young man. He wasn’t born in the right universe
                    for having the chance of becoming a Jedi. In this universe it is impossible to discover Narnia through a wardrobe, when you are eight.
                    To be precise it is impossible at any age in this universe. No one will ever get their Hogwarts letter, when he is eleven.
                    Neither when he is twelve in case of repeater or at any other age. And waiting for Gandalf until your fifty birthday, to take you out
                    to an adventure, is also not very promising in this universe.
                </PergamentSection>

                <PergamentSection>
                    Nevertheless, their were rumours about unexplainable things, which could be taken as magic. Their were legends about people,
                    who could write clean source code. Source code written by intelligent people, forged through tests. In fact every piece of code had the destiny
                    of fulfilling a unit test. Those pieces which weren’t good enough to fulfil a test, were merciless improved. Those pieces which weren’t clear
                    and readable, pitiless refactored. Under these circumstances, legends says, there were heroes who touched running systems;
                    updated them without fear of breaking something; even  without the need for a restart afterwards...
                </PergamentSection>

                <PergamentSection>
                    Looking out for new things, being afraid of nothing, believing in the unbelievable, our young man knows, deep inside of his heart,
                    that these legend are more than fairy tales. Maybe that they already, exits somewhere in this strange universe.
                </PergamentSection>

                <PergamentSection>
                    He is ready to bear witness of miracles. No he is not only ready, he wants to become a part of them. And he knows, that if he only tries hard enough,
                    gives everything, never gives up, he can proof, that it is possible to do this kind of magic. He catches slowly a deep breath and says to himself:
                    "Just focus, take your time and do the next step right" ...
                </PergamentSection>

                <PergamentSection>
                    So he summons all of his courage, knowing that today is the day, where he will start an adventure telling worth. What should ever go wrong,
                    if he would never waver, what he surely never would. So he steps out of the front door and

                    <span style={{ fontStyle: 'italic' }}>UIII</span> stumbles over his feet, finding himself horizontal on the ground ...
                </PergamentSection>

                <PergamentSection>
                    <div style={{ fontSize: '0.8em', fontStyle: 'italic' }}>
                        *A fast look to the left*
                        <br/><br/><br/><br/>
                        *A fast look to the right*
                        <br/><br/><br/><br/>
                        Puh, nobody has seen that!
                        <br/>
                    </div>
                    <div style={{ fontWeight: 'bold', position: 'absolute', bottom: 50, left: 130 }}>OH, what is this?</div>
                </PergamentSection>

                <div style={{ fontSize: '0.8em', margin: '10px 0 10px 0' }}>
                    <Strange_Book/>
                </div>
            </Styled_container>
        )
    }
}
