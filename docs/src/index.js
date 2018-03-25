import * as React from 'react'
import { render } from 'react-dom'

import { Header } from './components/Header'
import { Every_story_needs_a_beginning } from './routes/Every_story_needs_a_beginning'

// body style / margin/padding=0 set in index.html
function App() {
    return (
        <>
            <Header />
            <Every_story_needs_a_beginning />
        </>
    );
}

render(<App />, document.getElementById('root'));