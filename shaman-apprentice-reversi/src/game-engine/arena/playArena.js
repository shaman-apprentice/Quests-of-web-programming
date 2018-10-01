import playXGames from "./playXGames"

/** @return {object} - { aiName1-aiName2: winquote of aiName1, who is black }*/
export default (aiNames, times) => {
  const aiCouunt = aiNames.length
  const winQuotes = {}

  for (let i = 0; i < aiCouunt; i++) {
    for (let j = i; j < aiCouunt; j++) {
      winQuotes[`${aiNames[i]}-${aiNames[j]}`] = playXGames(aiNames[i], aiNames[j], times)
    }
  }

  return winQuotes
}