import React from 'react'
import { ThemeProvider } from 'styled-components'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import _ from 'lodash'

import theme from './theme'
import { StyledBook } from './StyledBook'
import Page from './Page'

import { turnDir } from './constants'

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePageIndex: props.activePageIndex ? props.activePageIndex - (props.activePageIndex % 2) : 0,
            pageTurnDir: turnDir.f,
        };

        this.turnPage = _.throttle(this.turnPage, theme.pageTurnDuration, {trailing: false});
    }

    turnPage = (pageTurnDir) => {
        this.setState(
            { pageTurnDir }, // triggers css changes first
            () => this.setState( s => ({ activePageIndex: pageTurnDir === turnDir.f ?
                s.activePageIndex + 2 :
                s.activePageIndex - 2
            }) ) // and then trigger transition
        );
    };

    renderBook = (pages) => {
        if (this.state.activePageIndex === 0) {
            return [
                <Page
                    key={this.state.activePageIndex}
                    isLeft={false}
                    turnDir={this.state.pageTurnDir}
                    onClick={ () => this.turnPage(turnDir.f) }
                >
                    { pages[this.state.activePageIndex] }
                </Page>
            ];
        }

        if (this.state.activePageIndex >= pages.length-1) {
            return [
                <Page
                    key={pages.length-1}
                    isLeft={true}
                    turnDir={this.state.pageTurnDir}
                    onClick={ () => this.turnPage(turnDir.b) }
                >
                    { pages[pages.length-1] }
                </Page>
            ];
        }

        return [
            <Page
                key={this.state.activePageIndex-1}
                isLeft={true}
                turnDir={this.state.pageTurnDir}
                onClick={ () => this.turnPage(turnDir.b) }
            >
                { pages[this.state.activePageIndex-1] }
            </Page>,
            <Page
                key={this.state.activePageIndex}
                isLeft={false}
                turnDir={this.state.pageTurnDir}
                onClick={ () => this.turnPage(turnDir.f) }
            >
                { pages[this.state.activePageIndex] }
            </Page>
        ];
    };

    render() {
        let pages = React.Children.toArray(this.props.children);
        if (pages.length % 2 === 1) {
            console.warn('a book should have an equal number of pages ( an empty div is added as last page / back cover )');
            pages.push(<div></div>); // add empty page as filler before cover
        }

        return (
            <ThemeProvider theme={theme}>
                <StyledBook
                    isClosed_top={this.state.activePageIndex === 0}
                    isClosed_turnedAround={this.state.activePageIndex >= pages.length -1}
                >
                    <TransitionGroup>
                        { this.renderBook(pages) }
                    </TransitionGroup>
                </StyledBook>
            </ThemeProvider>
        );
    }
}

export default Book;