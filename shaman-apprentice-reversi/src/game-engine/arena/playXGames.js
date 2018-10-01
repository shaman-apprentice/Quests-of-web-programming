import playAGame from "./playAGame"

/** @return {number} - % of won games for black */
export default (gameEngine, aiName1, aiName2, times) => {
  let wins = 0

  for (let i = 0; i < times; i++) {
    const result = playAGame(gameEngine, aiName1, aiName2)
    if (result > 0)
      wins += 1
    else if (result === 0)
      wins += 0.5
  }

  return wins / times
}