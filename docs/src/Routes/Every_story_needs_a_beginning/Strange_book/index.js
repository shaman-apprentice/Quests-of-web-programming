import * as React from 'react'

import Hardback_book from '../Hardback_book'
import Front_cover from './Front_cover'
import {Front_cover_inner_site} from './Front_cover_inner_site'
import {Styled_page} from './Styled_page'
import dancingGhost from './assets/dancingGhost.gif'
import Last_page from './Last_page'

export const Strange_book = () => (
    <Hardback_book>
        <Front_cover />
        <Front_cover_inner_site />

        <Last_page />

        <Styled_page isLeft={false}>
            <p>Do not read on.</p>
            <p>This book is a <span style={{fontSize: '1.3em'}}>secret</span> book,</p>
            <p>about <span style={{fontSize: '1.3em'}}>secret</span> magic.</p>
        </Styled_page>

        <Styled_page isLeft={true}>
            <div style={{fontWeight: 'bold'}}>
                <p>You should not go further!</p>
                <p>This is <span style={{color: 'orangered'}}>really a secret</span> book, </p>
                <p>about <span style={{color: 'orangered'}}>really secret</span> magic! </p>
            </div>
        </Styled_page>
        <Styled_page isLeft={false}>
            <div style={{fontWeight: 'bold', color: 'red'}}>
                <p>You really should not continue!</p>
                <p>This is a very secret book,</p>
                <p>about very secret magic!</p>
            </div>
        </Styled_page>

        <Styled_page isLeft={true}>
            <p style={{fontStyle: 'italic', fontWeight: 'bold', color: 'purple'}}>WOLOLOLOO</p>

            <h3 style={{marginTop: '2em', marginBottom: '0.5em'}}>EDV</h3>
            <p style={{marginTop: '0.5em'}}>
                Electronic data voodoo <br/>
                How to dance in front of the pc, <br/>
                so that...
            </p>

            <img src={dancingGhost} alt="dancing ghost"/>
        </Styled_page>
    </Hardback_book>
)