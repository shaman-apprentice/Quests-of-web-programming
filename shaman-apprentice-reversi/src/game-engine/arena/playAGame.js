import gameEmitter, { Actions } from "../model"

export default(aiName1, aiName2) => {
  gameEmitter.emit(Actions.newGame, aiName1, aiName2)

  let gameResult = undefined
  const onGameEnd = (_model) =>
    gameResult = _model.score
  gameEmitter.on(Actions.gameEnd, onGameEnd)

  while (gameResult === undefined)  {
    gameEmitter.emit(Actions.makeMove, false)
  }

  gameEmitter.removeListener(Actions.gameEnd, onGameEnd)
  return gameResult
}