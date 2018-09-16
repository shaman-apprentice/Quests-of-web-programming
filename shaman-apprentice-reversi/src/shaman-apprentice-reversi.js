import boardCssStyleNode from "./template-helper/board-css-style-node"
import boardContentNode from "./template-helper/board-content-node"
import model from "./model"

const template = document.createElement("template")
template.content.appendChild(boardCssStyleNode)
template.content.appendChild(boardContentNode)

function handleFieldClick(event) {
  model.eventEmitter.emit(model.eventTypes.move, {
    fieldNode: event.currentTarget,
    y: event.currentTarget.dataset.y,
    x: event.currentTarget.dataset.x,
    model,
  })
}

window.customElements.define("shaman-apprentice-reversi", class extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({mode: "open"})
    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.shadowRoot.querySelectorAll(".field").forEach( fieldNode => {
      fieldNode.addEventListener("click", handleFieldClick)
    })
  }

  disconnectedCallback() {
    this.shadowRoot.querySelectorAll(".field").forEach(fieldNode => {
      fieldNode.removeEventListener("click", handleFieldClick)
    })
  }
})