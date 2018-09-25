import { greedyAI } from "./greedyAI"
import transformKeyIntoMove from "./transformKeyIntoMove"


export const cornerFirstAI = (allowedMoves) => {
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

const corners = [ "0-0", "0-7", "7-7", "7-0" ]
const boarder = [
  "0-1", "0-2", "0-3", "0-4", "0-5", "0-6",
  "1-7", "2-7", "3-7", "4-7", "5-7", "6-7",
  "7-6", "7-5", "7-4", "7-3", "7-2", "7-1",
  "6-0", "5-0", "4-0", "3-0", "2-0", "1-0",
]