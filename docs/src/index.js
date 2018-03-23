import * as React from 'react'
import { render } from 'react-dom'

import { Header } from './components/header'
import { Every_story_needs_a_beginning } from './routes/every_story_needs_a_beginning'

function App() {
    return (
        <>
            <Header />
            <Every_story_needs_a_beginning />
        </>
    );
}

render(<App />, document.getElementById('root'));