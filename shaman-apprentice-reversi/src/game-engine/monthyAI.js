import { greedyAI } from "./greedyAI"
import transformKeyIntoMove from "./transformKeyIntoMove"


export const monthyAI = (allowedMoves) => {
  for (let key of corners) {
    if (key in allowedMoves)
      return transformKeyIntoMove(key)
  }

  for (let key of boarder) {
    if (key in allowedMoves)
      return transformKeyIntoMove(key)
  }

  return greedyAI(allowedMoves)
}
