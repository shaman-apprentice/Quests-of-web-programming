import gameEmitter, { Actions } from "../game-engine/model"

export const getScore = (score) => {
  if (score > 0)
    return "BLACK +" + score
  if (score < 0 )
    return "White +" + score * -1
  return "0"
}

export const getAIRow = (color) => {
  const result = document.createElement("div")
  result.setAttribute("class", color + "-ai")
  result.innerHTML = `<div class="color ${color}">${color.toUpperCase()}:</div>`

  result.appendChild(getButton(result, color, "Human", "I sure hope u know what u are doing..."))
  result.appendChild(getButton(result, color, "Gustav", "Plays random moves"))
  result.appendChild(getButton(result, color, "Beagle Boys", "Monte carlos playing 100 games withs random moves"))
  result.appendChild(getButton(result, color, "Dagobert", "Turns maximal stones per move"))
  result.appendChild(getButton(result, color, "Donald", "Trys to play in the corner, then at the border and finally plays like Dagobert"))

  return result;
}

const getButton = (aiRow, color, label, tootlip) => {
  const button = document.createElement("button")
  button.innerText = label
  button.setAttribute("title", tootlip)
  button.setAttribute("data-name", label)
  button.addEventListener("click", (event) => {
    const selected = aiRow.querySelector(".selected")
    if (selected)
      selected.classList.remove("selected")

    if (event.target !== selected) {
      event.target.classList.add("selected")
      gameEmitter.emit(Actions.changeAI, color, aiMapping[label])
    }
    else {
      aiRow.querySelector(`[data-name="${label}"]`).classList.add("selected")
      gameEmitter.emit(Actions.changeAI, color, aiMapping.Human)
    }
  })
  return button
}

const aiMapping = {
  Human: "human",
  Gustav: "randomAI",
  Dagobert: "greedyAI",
  Donald: undefined,
  "Beagle Boys": undefined,
}