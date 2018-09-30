import playXGames from "./playXGames"

/** @return {object} - { aiName1-aiName2: winquote of aiName1, who is black }*/
export default (aiNames, times) =>
  aiNames.reduce((acc, ai1) => {
    aiNames.reduce( (dontCare, ai2) => {
      acc[`${ai1}-${ai2}`] = playXGames(ai1, ai2, times)
    })

    return acc
  }, {})