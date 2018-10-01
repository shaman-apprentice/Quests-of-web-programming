import gameEmitter, { Actions } from "../../game-engine/model"

import { getScore, getAIRow } from "./settingsHelper"
import getArenaEvaluation from "./getArenaEvaluation"
import styleNode from "./styles"

const template = document.createElement("template")
template.content.appendChild(styleNode)
const wrapper = document.createElement("div")
wrapper.setAttribute("class", "wrapper")
wrapper.innerHTML = `
  <div class="wrapper">
    <h1>An awesome game of reversi</h1>
    <div>
      <span id="whose-turn">BLACK TO PLAY</span> - Current Score: <span id="score">0</span>
    </div>
    
    <button id="new-game">New Game</button>
    <div class="ai-section">Set AIs:</div>
  </div>
`
wrapper.append(getArenaEvaluation())
template.content.appendChild(wrapper)

window.customElements.define("shaman-apprentice-reversi-game-settings", class extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({mode: "open"})
    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    const newButton = this.shadowRoot.querySelector("#new-game")
    newButton.addEventListener("click", () => {
      gameEmitter.emit(Actions.newGame)
    })

    const whosToPlay = this.shadowRoot.querySelector("#whose-turn")
    const score = this.shadowRoot.querySelector("#score")
    gameEmitter.on(Actions.modelUpdated, (model) => {
      whosToPlay.innerHTML = model.turn === 1 ? "BLACK TO PLAY" : "WHITE TO PLAY"
      score.innerHTML = getScore(model.score)
    })

    const aiSection = this.shadowRoot.querySelector(".ai-section")
    aiSection.appendChild(getAIRow("black"))
    aiSection.appendChild(getAIRow("white"))

    aiSection.querySelector(".black-ai [data-name='Human']").classList.add("selected")
    aiSection.querySelector(".white-ai [data-name='Gustav']").classList.add("selected")
    gameEmitter.on(Actions.newGame, () => highlightStartAIs(aiSection))
  }
})

const highlightStartAIs = (aiSection) => {
  aiSection.querySelectorAll(".selected").forEach( (node) =>
    node.classList.remove("selected")
  )
  // hard coded start AIs so far:
  aiSection.querySelector(".black-ai [data-name='Human']").classList.add("selected")
  aiSection.querySelector(".white-ai [data-name='Gustav']").classList.add("selected")
}

const gameSettingsNode = document.createElement("shaman-apprentice-reversi-game-settings")
export default gameSettingsNode