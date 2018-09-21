import getAllowedMoves from "./getAllowedMoves"

const getMove = (y, x, allowedMoves) =>
  allowedMoves.find( move => move === `${y}-${x}` )

let cachedAllowedMoves

export default function({ fieldNode, x, y, model }) {
  cachedAllowedMoves = cachedAllowedMoves || getAllowedMoves(model.board, model.turn)

  if (!cachedAllowedMoves[`${y}-${x}`])
    return

  const otherColor = model.turn === "black" ? "white" : "black"

  fieldNode.classList.add(model.turn)
  model.board[y][x] = model.turn === "black" ? 1 : -1
  const reversiNode = document.querySelector("shaman-apprentice-reversi").shadowRoot
  console.log(cachedAllowedMoves[`${y}-${x}`])
  cachedAllowedMoves[`${y}-${x}`].forEach( stone => {
    console.log(reversiNode.querySelector(`[data-y="${stone.y}"][data-x="${stone.x}"]`))
    const target = reversiNode.querySelector(`[data-y="${stone.y}"][data-x="${stone.x}"]`)
    model.board[stone.y][stone.x] = model.turn === "black" ? 1 : -1
    target.classList.remove(otherColor)
    target.classList.add(model.turn)
  } )

  model.turn = otherColor
  cachedAllowedMoves = false
}