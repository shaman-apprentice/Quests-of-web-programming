import gameEmitter, { Actions } from "./game-engine/model"

import setBoardContent from "./controller/setBoardContent"

import boardCssStyleNode from "./gui/board-css-style-node"
import boardContentNode from "./gui/board-content-node"
import gameSettingsNode from "./gui/shaman-apprentice-reversi-game-settings"

const template = document.createElement("template")
const boardSection = document.createElement("div") // for display: inline-block
boardSection.setAttribute("style", "display: inline-block; width: 100%; max-width: 500px; vertical-align:top;")
boardSection.appendChild(boardCssStyleNode)
boardSection.appendChild(boardContentNode)
template.content.appendChild(boardSection)
template.content.appendChild(gameSettingsNode)


window.customElements.define("shaman-apprentice-reversi", class extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({mode: "open"})
    shadowRoot.appendChild(template.content.cloneNode(true))

    this.boardNode = shadowRoot.querySelector(".board")

    gameEmitter.on(Actions.modelUpdated, ({ board }, lastMove) => {
      setBoardContent(this.boardNode, board, lastMove)
    })
    gameEmitter.emit(Actions.newGame)

    gameEmitter.on(Actions.gameEnd, (model) => {
      setTimeout(() => {
        if (confirm(`Congratulation - ${getWinnerText(model.score)} by ${Math.abs(model.score)} points. \n New Game?`))
          gameEmitter.emit(Actions.newGame)
      }, 1500)
    })
  }
})

const getWinnerText = (score) => {
  if (score > 0)
    return "Black has won"
  if (score < 0)
    return "White has won"
  return "Black and White have won"
}