import playXGames from "./playXGames"
import { createGameEngine } from "../model"

/** @return {object} - { aiName1-aiName2: winquote of aiName1, who is black }*/
export default (aiNames, times) => {
  const gameEngine = createGameEngine()
  const aiCouunt = aiNames.length
  const winQuotes = {}

  for (let i = 0; i < aiCouunt; i++) {
    for (let j = i; j < aiCouunt; j++) {
      winQuotes[`${aiNames[i]}-${aiNames[j]}`] = playXGames(gameEngine, aiNames[i], aiNames[j], times)
    }
  }

  return winQuotes
}