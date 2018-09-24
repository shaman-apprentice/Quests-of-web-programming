import gameEmitter, { Actions } from "../game-engine/model"

const template = document.createElement("template")
template.innerHTML = `
  <style>
    .wrapper {
      display: inline-block;
      padding-left: 2em;
    }
    button {
      margin: 1em;
      padding: 0.5em;
    }
  </style>
  
  <div class="wrapper">
    <h1>An awesome game of reversi</h1>
    <div>
      <span id="whose-turn">BLACK TO PLAY</span> - Current Score: <span id="score">0</span>
    </div>
    
    <button id="new-game">New Game</button>
  </div>
`

window.customElements.define("shaman-apprentice-reversi-game-settings", class extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({mode: "open"})
    shadowRoot.appendChild(template.content.cloneNode(true))

  }

  connectedCallback() {
    // register here, cause otherwise would also be called useless in template of shaman-apprentice-reversi

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
  }
})

const getScore = (score) => {
  if (score > 0)
    return "BLACK +" + score
  if (score < 0 )
    return "White +" + score * -1
  return "0"
}

const gameSettingsNode = document.createElement("shaman-apprentice-reversi-game-settings")
export default gameSettingsNode