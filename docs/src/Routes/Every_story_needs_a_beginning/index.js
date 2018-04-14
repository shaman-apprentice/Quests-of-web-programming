import * as React from 'react'

import {Styled_handwriting} from './Styled_handwriting'
import {Strange_book} from './Strange_book'

export function Every_story_needs_a_beginning() {
    return (
        <div style={{maxWidth: 800, margin: 'auto'}}>
            <Styled_handwriting>
                <h2 style={{textAlign: 'center'}}>Every story needs a beginning</h2>

                <p>
                    Once upon a time, in a parallel universe very different than this one, there was a young man. He wasn’t born in the right universe
                    for having the chance of becoming a Jedi. In this universe it is impossible to discover Narnia through a wardrobe, when you are eight.
                    To be precise it is impossible at any age in this universe. No one will ever get their Hogwarts letter, when he is eleven.
                    Neither when he is twelve in case of repeater or at any other age. And waiting for Gandalf until your fifty birthday, to take you out
                    to an adventure, is also not very promising in this universe.
                </p>
                <p>
                    Nevertheless, their were rumours about unexplainable things, which could be taken as magic. Their were legends about people,
                    who could write clean source code. Source code written by intelligent people, forged through tests. In fact every piece of code had the destiny
                    of fulfilling an unit test. Those pieces which weren’t necessary to fulfil a test, were merciless removed. Those pieces which weren’t clear
                    and readable pitiless refactored. Under these circumstances, legends says, there were heroes who touched running systems -
                    updated them without fear of breaking something; even without the need for a restart afterwards...
                </p>
                <p>
                    Looking out for new things, being afraid of nothing, believing in the unbelievable, our main character knows, deep inside of his heart,
                    that these legend are more than fairy tales. Maybe that they already exits somewhere in this strange universe.
                </p>
                <p>
                    He is ready to bear witness of miracles. No he is not only ready, he wants to become a part of them. He knows, that if he only tries hard enough,
                    gives everything, never gives up, he can proof, that this kind of magic does exist. He catches slowly a deep breath
                     and says to himself: <span style={{ fontStyle:'italic'}}>Just focus, take your time and do the next step right.</span>
                </p>
                <p>
                    So he summons all of his courage, knowing that today is the day, where he will start an adventure telling worth. What should ever go wrong,
                    if he would never waver! So he steps out of the front door and <span style={{ fontStyle:'italic'}}>*uiiiiii*</span> stumbles
                    over his own feet, finding himself horizontal on the ground ...
                </p>
                <p>
                    *A fast look to the left* *A fast look to the right* Puh, nobody has seen that. OH, what is this?
                </p>
            </Styled_handwriting>

            <div style={{
                // this div is needed for preventing outer margin auto to disturb css animation
                // zIndex is needed for preventing books zIndex to "grow upwards"
                position: 'relative',
                zIndex: 0,
            }}>
                <Strange_book />
            </div>
        </div>
    );
}