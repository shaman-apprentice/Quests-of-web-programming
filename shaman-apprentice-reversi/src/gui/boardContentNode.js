import boardCssStyleNode from "./board-css-style-node"

const boardSection = document.createElement("div") // for display: inline-block / next to setting section
boardSection.setAttribute("style", "display: inline-block; width: 100%; max-width: 500px; vertical-align:top;")
boardSection.appendChild(boardCssStyleNode)

const boardContentNode = document.createElement("div");
boardContentNode.setAttribute("class", "board") // filled by controller/setBoardContent.js

boardSection.appendChild(boardContentNode)

export default boardSection