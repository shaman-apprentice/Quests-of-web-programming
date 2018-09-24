import getAllowedMoves from "../game-engine/getAllowedMoves"

/** @return true if move made, false otherwise */
export default function (model, y, x) {
  if (!model.allowedMoves[`${y}-${x}`])
    return false;

  placeStone(model, y, x)
  flipStones(model, model.allowedMoves[`${y}-${x}`])
  model.score = calcScore(model.board)
  switchTurn(model)
  return true;
}

const placeStone = (model, y, x) =>
  model.board[y][x] = model.turn

const flipStones = (model, stonesToFlip) =>
  stonesToFlip.forEach( stone => {
    model.board[stone.y][stone.x] = model.turn;
  } )

const calcScore = (board) =>
  board.reduce( (sum, row) =>
    row.reduce( (rowSum, i) =>
      rowSum + i
    , sum)
  , 0)

const switchTurn = (model) => {
  model.turn *= -1
  model.allowedMoves = getAllowedMoves(model)

  if (Object.keys(model.allowedMoves).length === 0) { // u must pass :P
    model.turn *= -1
    model.allowedMoves = getAllowedMoves(model)
  }
}