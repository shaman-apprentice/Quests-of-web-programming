import boardCssStyleNode from "./template-helper/board-css-style-node"
import boardContentNode from "./template-helper/board-content-node"
import model from "./model"

const template = document.createElement("template")
template.content.appendChild(boardCssStyleNode)
template.content.appendChild(boardContentNode)
boardContentNode.addEventListener("click", () => console.log("hi board clicked"))
console.log(boardContentNode)

window.customElements.define("shaman-apprentice-reversi", class extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({mode: "open"})
    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.shadowRoot.querySelectorAll(".field").forEach( fieldNode => {
      fieldNode.addEventListener("click", this.handleFieldClick)
    })
  }

  handleFieldClick(event) {
    console.log(event.currentTarget.dataset.y, "-", event.currentTarget.dataset.x)
    const field = event.currentTarget
    field.classList.add(model.turn)
    model.turn = model.turn === "black" ? "white" : "black"
  }
})