import gameEmitter, { Actions } from "../game-engine/model"

import { getScore, getAIRow } from "./settingsHelper"

const template = document.createElement("template")
template.innerHTML = `
  <style>
    .wrapper {
      display: inline-block;
      padding-left: 2em;
    }
    
    button {
      margin: 0.5em;
      padding: 0.5em;
      cursor: pointer;
    }
    
    .ai-section {
      border: 2px black dashed;
      padding: 0.5em;
      font-weight: bold;
    }
    
    .ai-section div.color {
      display: inline-block;
      border: 1px solid black;
      padding: 1em;
      margin-left: 1em;
    }
    
    .ai-section div.color.white {
      color: black;
      background-color: white;
    }
    
    .ai-section div.color.black {
      color: white;
      background-color: black;
    }
    
    .ai-section .selected {
      background-color: aquamarine;
    }
  </style>
  
  <div class="wrapper">
    <h1>An awesome game of reversi</h1>
    <div>
      <span id="whose-turn">BLACK TO PLAY</span> - Current Score: <span id="score">0</span>
    </div>
    
    <button id="new-game">New Game</button>
    <div class="ai-section">Set AIs:</div>
  </div>
`

window.customElements.define("shaman-apprentice-reversi-game-settings", class extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({mode: "open"})
    shadowRoot.appendChild(template.content.cloneNode(true))

  }

  connectedCallback() {
    // register here and not in constructor,
    // cause otherwise would also be called useless in template of shaman-apprentice-reversi

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

    // hard coded start AIs so far:
    aiSection.querySelector(".black-ai [data-name='Human']").classList.add("selected")
    aiSection.querySelector(".white-ai [data-name='Gustav']").classList.add("selected")
  }
})

const gameSettingsNode = document.createElement("shaman-apprentice-reversi-game-settings")
export default gameSettingsNode