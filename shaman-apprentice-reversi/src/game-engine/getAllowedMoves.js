export default function(board, turn) {
  const allowedMoves = []

  const isOwnStone = turn === "black" ? (i) => i === 1 : (i) => i === -1
  const isOpponentStone = turn === "black" ? (i) => i === -1 : (i) => i === 1
  const isNeutralStone = (i) => i === 0

  for (let y = 0; y <= 7; y++) {
    for (let x = 0; x <= 7; x++) {
      const curr = board[y][x]

      if (!isNeutralStone(curr) )
        continue

      // check right
      if (x < 6 && isOpponentStone(board[y][x+1])) {
        for (let xRight = x + 2; xRight <= 7; xRight++) {
          if (isOwnStone(board[y][xRight])) {
            allowedMoves.push(`${y}-${x}`)
            break
          }
          else if (isNeutralStone(board[y][xRight]))
            break
        }
      }

      // check left
      if (x > 1 && isOpponentStone(board[y][x-1])) {
        for (let xLeft = x - 2; xLeft >= 0; xLeft--) {
          if (isOwnStone(board[y][xLeft])) {
            allowedMoves.push(`${y}-${x}`)
            break
          }
          else if (isNeutralStone(board[y][xLeft]))
            break
        }
      }

      // check downwards
      if (y < 6 && isOpponentStone(board[y+1][x])) {
        for (let yDown = y + 2; yDown <= 7; yDown++) {
          if (isOwnStone(board[yDown][x])) {
            allowedMoves.push(`${y}-${x}`)
            break
          }
          else if (isNeutralStone(board[yDown][x] )) {
            break
          }
        }
      }

      // check upwards
      if (y > 1 && isOpponentStone(board[y-1][x])) {
        for (let yUp = y - 2; yUp >= 0; yUp--) {
          if (isOwnStone(board[yUp][x])) {
            allowedMoves.push(`${y}-${x}`)
            break
          }
          else if (isNeutralStone(board[yUp][x] )) {
            break
          }
        }
      }

      // check diagonal down right
      if (y < 6 && x < 6 && isOpponentStone(board[y+1][x+1])) {
        let yDiagonal = y + 2
        let xDiagonal = x + 2
        while (yDiagonal <= 7 && xDiagonal <= 7) {
          if (isOwnStone(board[yDiagonal][xDiagonal])) {
            allowedMoves.push(`${y}-${x}`)
            break
          }
          else if (isNeutralStone(board[yDiagonal][xDiagonal])) {
            break
          }
          yDiagonal += 1
          xDiagonal += 1
        }
      }

      // check diagonal down left
      if (y < 6 && x > 1 && isOpponentStone(board[y+1][x-1])) {
        let yDiagonal = y + 2
        let xDiagonal = x - 2
        while (yDiagonal <= 7 && xDiagonal >= 0) {
          if (isOwnStone(board[yDiagonal][xDiagonal])) {
            allowedMoves.push(`${y}-${x}`)
            break
          }
          else if (isNeutralStone(board[yDiagonal][xDiagonal])) {
            break
          }
          yDiagonal += 1
          xDiagonal -= 1
        }
      }

      // check diagonal up left
      if (y > 1 && x > 1 && isOpponentStone(board[y-1][x-1])) {
        let yDiagonal = y - 2
        let xDiagonal = x - 2
        while (yDiagonal >= 0 && xDiagonal >= 0) {
          if (isOwnStone(board[yDiagonal][xDiagonal])) {
            allowedMoves.push(`${y}-${x}`)
            break
          }
          else if (isNeutralStone(board[yDiagonal][xDiagonal])) {
            break
          }
          yDiagonal -= 1
          xDiagonal -= 1
        }
      }

      // check diagonal up right
      if (y > 1 && x < 6 && isOpponentStone(board[y-1][x+1])) {
        let yDiagonal = y - 2
        let xDiagonal = x + 2
        while (yDiagonal >= 0 && xDiagonal <= 7) {
          if (isOwnStone(board[yDiagonal][xDiagonal])) {
            allowedMoves.push(`${y}-${x}`)
            break
          }
          else if (isNeutralStone(board[yDiagonal][xDiagonal])) {
            break
          }
          yDiagonal -= 1
          xDiagonal += 1
        }
      }

    }
  }
  return allowedMoves
}
