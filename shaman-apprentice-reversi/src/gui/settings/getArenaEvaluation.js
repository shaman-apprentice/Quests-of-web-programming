import * as AIs from "../../game-engine/ai"

const defaultAINames = Object.keys(AIs)
// 1000 games played in arena.test.js
const defaultWinQuotes = {
  'randomAI-randomAI': 0,
  'randomAI-greedyAI': 1,
  'randomAI-cornerFirstAI': 0,
  'randomAI-monthyAI': 0,
  'greedyAI-greedyAI': 0,
  'greedyAI-cornerFirstAI': 0,
  'greedyAI-monthyAI': 0,
  'cornerFirstAI-cornerFirstAI': 0,
  'cornerFirstAI-monthyAI': 0,
  'monthyAI-monthyAI': 0.5,
}

const createMirroredWinQuotes = (winQuotes) =>
  Object.keys(winQuotes).reduce( (acc, key) => {
    const players = key.split("-")
    acc[`${players[1]}-${[players[0]]}`] = players[1] === players[0] ?
      getDiagonalEntry(winQuotes[key]) :
       1 - winQuotes[key] + "%"
    return acc
  }, { ...winQuotes })

const getDiagonalEntry = (blacksWinQuote) => `
  <div style="position: relative;">
    <div style="position: absolute; font-size: 0.9em; bottom: -0.3em; left: 0;">${1 - blacksWinQuote}%</div>
    <div style="font-weight: bold;">\\</div>
    <div style="position: absolute; font-size: 0.9em; top: -0.2em; right: 0;">${1 - blacksWinQuote}%</div>
  </div>
`


export default (aiNames = defaultAINames, winQuotes = defaultWinQuotes) => {
  const allWinQuotes = createMirroredWinQuotes(winQuotes)
  const table = document.createElement("table")
  table.appendChild(getHeader(aiNames))
  aiNames.forEach( (name) => appendRow(table, name, aiNames, allWinQuotes) )
  return table
}

const getHeader = (aiNames) => {
  const tr = document.createElement("tr")
  const zerothElem = document.createElement("th")
  zerothElem.innerHTML = "WHITE \\ BLACK"
  tr.appendChild(zerothElem)
  aiNames.forEach( (name) => {
    const th = document.createElement("th")
    th.innerHTML = name
    tr.appendChild(th)
  })

  return tr
}

const appendRow = (table, white, names, winQuotes) => {
  const tr = document.createElement("tr")
  const th = document.createElement("th")
  th.innerHTML = white
  tr.appendChild(th)

  names.forEach( black => {
    const td = document.createElement("td")
    td.innerHTML = winQuotes[`${black}-${white}`]
    tr.appendChild(td)
  })

  table.appendChild(tr)
}