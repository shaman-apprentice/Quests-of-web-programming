import * as React from 'react'

export const Heading: React.SFC<{
    is_table_of_contents_shown: Boolean,
    onClick: any,
}> = (props) =>
    <h1
        title={ props.is_table_of_contents_shown ?
            undefined :
            'click to open table of contents'
        }
        onClick={props.onClick}
    >
        Quests of Web Programming
    </h1>