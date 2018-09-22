const board = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0,-1, 1, 0, 0, 0],
  [0, 0, 0, 1,-1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
]

const allowedMoves = board.reduce( (acc, row, y) => {
  acc += row.reduce( (innerAcc, col, x) => {
    innerAcc += `${y}-${x}`
    return innerAcc
  }, "")
  return acc;
}, "")

const model = {
  board,
  allowedMoves,
  score: 0,
  turn: "black", // black := 1, white -1
}

export default model