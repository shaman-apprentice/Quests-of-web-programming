import boardCssStyleNode from "./gui/board-css-style-node"
import boardContentNode from "./gui/board-content-node"
import gameSettingsNode from "./gui/shaman-apprentice-reversi-game-settings"
import handleMove from "./game-engine/handleMove"

const template = document.createElement("template")
const boardSection = document.createElement("div") // for display: inline-block
boardSection.setAttribute("style", "display: inline-block; width: 100%; max-width: 500px; vertical-align:top;")
boardSection.appendChild(boardCssStyleNode)
boardSection.appendChild(boardContentNode)
template.content.appendChild(boardSection)
template.content.appendChild(gameSettingsNode)

function handleFieldClick(event) {
  handleMove({
    fieldNode: event.currentTarget,
    y: event.currentTarget.dataset.y,
    x: event.currentTarget.dataset.x,
  })
}

window.customElements.define("shaman-apprentice-reversi", class extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({mode: "open"})
    shadowRoot.appendChild(template.content.cloneNode(true))
    shadowRoot.querySelectorAll(".field").forEach( fieldNode => {
      fieldNode.addEventListener("click", handleFieldClick)
    })
  }
})