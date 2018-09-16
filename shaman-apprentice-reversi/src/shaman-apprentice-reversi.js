import model from "./model"
import boardCss from "./gui-helper/board-css"

function buildTemplate() {
  const template = document.createElement("template")

  const style = document.createElement("style")
  style.innerHTML = boardCss
  template.content.appendChild(style)

  const board = document.createElement("div");
  board.setAttribute("class", "board")

  function handleStartFormation(y, x) {
    if (model.board[y][x] === 1) {
      return "black"
    }
    if (model.board[y][x] === -1) {
      return "white"
    }
    return ""
  }

  window.handleFieldClick = function (event, y, x) {
    const field = event.currentTarget
    field.classList.add(model.turn)
    model.turn = model.turn === "black" ? "white" : "black"
    console.log(event.target, event.currentTarget)
    console.log(y, x)
    console.log(fieldNode)
  }

  for (let y = 0; y <= 7; y++) {
    for (let x = 0; x <= 7; x++) {
      board.innerHTML += `
        <div
          class="field ${handleStartFormation(y, x)}"
          data-y="${y}"
          data-x="${x}"
          onclick="window.handleFieldClick(event, ${y}, ${x})"
        >
          <div class="stone"></div>
          <div class="square-hack"></div>
        </div>
      `
    }
  }

  template.content.appendChild(board)
  return template
}

const template = buildTemplate()

window.customElements.define("shaman-apprentice-reversi", class extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({mode: "open"})
    shadowRoot.appendChild(template.content.cloneNode(true))
  }
})