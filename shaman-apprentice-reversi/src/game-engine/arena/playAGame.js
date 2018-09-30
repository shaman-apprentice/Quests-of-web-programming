import gameEmitter, { Actions } from "../model"

export default(aiName1, aiName2) => {
  gameEmitter.emit(Actions.newGame)
  gameEmitter.emit(Actions.changeAI, "white", aiName2)
  gameEmitter.emit(Actions.changeAI, "black", aiName1)

  let gameResult = undefined
  gameEmitter.on(Actions.gameEnd, (_model) => {
    gameResult = _model.score
  })

  while (gameResult === undefined)  {
    gameEmitter.emit(Actions.makeMove, false)
  }

  return gameResult
}