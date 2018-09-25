import transformKeyIntoMove from "./transformKeyIntoMove"

export const greedyAI = ({ allowedMoves }) => {
  const possibleMoves = Object.keys(allowedMoves)
  const movesSortedByStonesToFlip = possibleMoves.sort( (a, b) =>
    allowedMoves[a].length < allowedMoves[b].length
  )
  const move = movesSortedByStonesToFlip[0]
  return transformKeyIntoMove(move)
}