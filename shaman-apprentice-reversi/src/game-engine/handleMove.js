import getAllowedMoves from "./getAllowedMoves"

let cachedAllowedMoves

export default function({ fieldNode, x, y, model }) {
  cachedAllowedMoves = cachedAllowedMoves || getAllowedMoves(model.board, model.turn)

  if (!cachedAllowedMoves[`${y}-${x}`])
    return

  placeStone({ fieldNode, x, y, model })
  flipStones(cachedAllowedMoves[`${y}-${x}`], model)

  model.turn = model.turn === "black" ? "white" : "black"
  cachedAllowedMoves = false
}

function placeStone({ fieldNode, x, y, model }) {
  fieldNode.classList.add(model.turn)
  model.board[y][x] = model.turn === "black" ? 1 : -1
}

function flipStones(stonesToFlip, model) {
  const reversiNode = document.querySelector("shaman-apprentice-reversi").shadowRoot
  const fieldValue = model.turn === "black" ? 1 : -1
  const otherColor = model.turn === "black" ? "white" : "black"

  stonesToFlip.forEach( stone => {
    const target = reversiNode.querySelector(`[data-y="${stone.y}"][data-x="${stone.x}"]`)
    model.board[stone.y][stone.x] = fieldValue
    target.classList.remove(otherColor)
    target.classList.add(model.turn)
  } )
}