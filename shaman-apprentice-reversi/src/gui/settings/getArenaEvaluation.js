import * as AIs from "../../game-engine/ai"
import playArena from "../../game-engine/arena/playArena"

const defaultAINames = Object.keys(AIs)
console.log(defaultAINames)
const defaultWinQuotes = playArena(defaultAINames, 2)

export default (aiNames = defaultAINames, winQuotes = defaultWinQuotes) => {
  const table = document.createElement("table")
  table.appendChild(getHeader(aiNames))
  aiNames.forEach( (name) => appendRow(table, name, winQuotes))
  return table
}

const getHeader = (aiNames) => {
  const tr = document.createElement("tr")
  const zerothElem = document.createElement("th")
  tr.appendChild(zerothElem)
  aiNames.forEach( (name) => {
    const th = document.createElement("th")
    th.innerHTML = name
    tr.appendChild(th)
  })

  return tr
}

const appendRow = (table, name, names, winQuotes) => {
  const tr = document.createElement("tr")
  const th = document.createElement("th")
  th.innerHTML = name
  tr.appendChild(th)

  table.appendChild(tr)
}