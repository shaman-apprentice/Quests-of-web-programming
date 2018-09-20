const directions = [
  { yStep:  0, xStep:  1 }, // right
  { yStep:  0, xStep: -1 }, // left
  { yStep:  1, xStep:  0 }, // down
  { yStep: -1, xStep:  0 }, // up
  { yStep: -1, xStep:  1 }, // up right
  { yStep:  1, xStep:  1 }, // down right
  { yStep:  1, xStep: -1 }, // down left
  { yStep: -1, xStep: -1 }, // up left
]

const isOnBoard = (y, x) =>
  y >= 0 && y <= 7 && x >= 0 && x <= 7

const isNeutralStone = (i) =>
  i === 0

export default function(board, turn) {
  const allowedMoves = []

  const isOwnStone = turn === "black" ? (i) => i === 1 : (i) => i === -1
  const isOpponentStone = turn === "black" ? (i) => i === -1 : (i) => i === 1

  for (let y = 0; y <= 7; y++) {
    for (let x = 0; x <= 7; x++) {
      if (!isNeutralStone(board[y][x]))
        continue // already placed / for sure not allowed

      directions.forEach( ({ yStep, xStep }) => {
        let yLine = y + yStep
        let xLine = x + xStep
        if (!isOnBoard(yLine, xLine) || !isOpponentStone(board[yLine][xLine])) {
          return // at least one stone to flip must exist
        }

        while (isOnBoard(yLine, xLine)) {
          if (isNeutralStone(board[yLine][xLine]))
            return;

          if (isOwnStone(board[yLine][xLine])) {
            allowedMoves.push(`${y}-${x}`)
            return;
          }

          yLine += yStep
          xLine += xStep
        }
      } )

    }
  }

  return allowedMoves
}
