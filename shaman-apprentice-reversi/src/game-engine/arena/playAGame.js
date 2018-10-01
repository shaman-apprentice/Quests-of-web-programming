import { Actions } from "../model"

export default(gameEngine, aiName1, aiName2) => {
  gameEngine.emit(Actions.newGame, aiName1, aiName2)

  let gameResult = undefined
  const onGameEnd = (_model) =>
    gameResult = _model.score
  gameEngine.on(Actions.gameEnd, onGameEnd)

  while (gameResult === undefined)  {
    gameEngine.emit(Actions.makeMove, false)
  }

  gameEngine.removeListener(Actions.gameEnd, onGameEnd)
  return gameResult
}