import model from "../model"
import getAllowedMoves from "./getAllowedMoves"

let cachedAllowedMoves

export default function({ fieldNode, x, y }) {
  cachedAllowedMoves = cachedAllowedMoves || getAllowedMoves(model.board, model.turn)

  if (!cachedAllowedMoves[`${y}-${x}`])
    return

  placeStone({ fieldNode, x, y })
  flipStones(cachedAllowedMoves[`${y}-${x}`])
  console.log(calcScore(model.board))

  model.turn = model.turn === "black" ? "white" : "black"
  cachedAllowedMoves = false
}

function placeStone({ fieldNode, x, y }) {
  fieldNode.classList.add(model.turn)
  model.board[y][x] = model.turn === "black" ? 1 : -1
}

function flipStones(stonesToFlip) {
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

function calcScore(board) {
  return board.reduce( (sum, row) =>
    row.reduce( (rowSum, i) =>
      rowSum + i
    , sum)
  , 0)
}