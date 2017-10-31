import React from 'react'

import { Book } from 'react-hardback-book'
import OuterCover from './FrontCover'
import InnerCover from './InnerCover'
import MyPage from './MyPage';
import BackCover from './BackCover';

import dancingGhost from './imgs/dancingGhost.gif'

export function Strange_Book() {
    return (
        <Book>
            <OuterCover/>

            <InnerCover/>
            <MyPage isLeft={false}>
                <p>Do not read on.</p>
                <p>This book is a <span style={{fontSize: '1.3em'}}>secret</span> book,</p>
                <p>about <span style={{fontSize: '1.3em'}}>secret</span> magic.</p>
            </MyPage>

            <MyPage isLeft={true}>
                <div style={{fontWeight: 'bold'}}>
                    <p>You should not go further!</p>
                    <p>This is <span style={{color: 'orangered'}}>really a secret</span> book, </p>
                    <p>about <span style={{color: 'orangered'}}>really secret</span> magic! </p>
                </div>
            </MyPage>
            <MyPage isLeft={false}>
                <div style={{fontWeight: 'bold', color: 'red'}}>
                    <p>You really should not continue!</p>
                    <p>This is a very secret book,</p>
                    <p>about very secret magic!</p>
                </div>
            </MyPage>

            <MyPage isLeft={true}>
                <p style={{fontStyle: 'italic', fontWeight: 'bold', color: 'purple'}}>WOLOLO</p>

                <h3 style={{marginTop: '2em', marginBottom: '0.5em'}}>EDV</h3>
                <p style={{marginTop: '0.5em'}}>
                    Electronic data voodoo <br/>
                    How to dance in front of the pc, <br/>
                    so that...
                </p>

                <img src={dancingGhost} alt="dancing ghost"/>
            </MyPage>
            <InnerCover/>

            <BackCover/>
        </Book>
    )
}