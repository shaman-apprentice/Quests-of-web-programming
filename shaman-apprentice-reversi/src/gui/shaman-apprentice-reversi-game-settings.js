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
})

const gameSettingsNode = document.createElement("shaman-apprentice-reversi-game-settings")
export default gameSettingsNode