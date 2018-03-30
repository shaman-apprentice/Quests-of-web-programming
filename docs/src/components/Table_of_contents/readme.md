Format of "route img/svg" is as follow

// it's important this outer g elem doesn't get any transformation,
// because they would be overwritten by :hover css in Styled_svg.js
<g id={routes_config.name} >
    <g>/* drawings */</g>
    // so mouse over is triggered also, when having mouse between a hole in drawing
    <bounding_elem/>
    <title>Some title</title>
</g>