import { randomAI } from "./randomAI"
import transformKeyIntoMove from "./transformKeyIntoMove"

import handleMove from "../handleMove"

export const monthyAI = (model) => {
  const scoresOfCandiates = {}
  for (let candidate of Object.keys(model.allowedMoves)) {
    const move = transformKeyIntoMove(candidate)

    let scoreOfCandi = 0;
    for (let i = 0; i < 100; i++) {
      let modelOfCandi = JSON.parse(JSON.stringify(model))
      handleMove(modelOfCandi, move.y, move.x)
      playRandomGame(modelOfCandi)
      scoreOfCandi += interpreteScore(modelOfCandi.score, model.turn)
    }

    scoresOfCandiates[candidate] = scoreOfCandi
  }

  return transformKeyIntoMove(getBestCandidate(scoresOfCandiates))
}

const playRandomGame = (model) => {
  if (Object.keys(model.allowedMoves).length === 0)
    return model.score

  const move = randomAI(model)
  handleMove(model, move.y, move.x)

  return playRandomGame(model)
}

// 1 win, -1 lost, 0.5 tie
const interpreteScore = (score, turn) => {
  if (score === 0)
    return 0
  if (score > 0 && turn === 1 || score < 0 && turn === -1 )
    return 1
  return -1
}

export const getBestCandidate = (candidates) =>
  Object.keys(candidates).sort( (c1, c2) =>
    candidates[c1] < candidates[c2]
  )[0]