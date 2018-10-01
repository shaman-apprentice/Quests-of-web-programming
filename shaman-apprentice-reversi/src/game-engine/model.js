import EventEmitter from "events"

import getAllowedMoves from "./getAllowedMoves"
import handleMove from "./handleMove"

import * as AIs from "./ai/index"

const startPosi = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0,-1, 1, 0, 0, 0],
  [0, 0, 0, 1,-1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
]

const initModel = {
  board: startPosi,
  score: 0,
  turn: 1, // black := 1, white -1
  allowedMoves: getAllowedMoves({ board: startPosi, turn: 1 }),
  ai: {},
}

const Actions = {
  makeMove: "makeMove", // { y, x }
  newGame: "newGame",
  changeAI: "changeAI", // { ("white"|"black"), ("human|randomAI"|"monthyAI"|"greedyAI"|"cornerFirstAI")
  modelUpdated: "modelUpdated",
  gameEnd: "gameEnd",
}

/**
* @return {EventEmitter}
* */
const createGameEngine = () => {
  let _model
  const gameEngine = new EventEmitter()

  gameEngine.on(Actions.makeMove, (move) => {
    if (move && handleMove(_model, move.y, move.x)) {
      gameEngine.emit(Actions.modelUpdated, _model, move)
    }

    if (Object.keys(_model.allowedMoves).length === 0) {
      gameEngine.emit(Actions.gameEnd, _model)
      return
    }

    if (_model.turn === -1 && _model.ai["white"]) {
      gameEngine.emit(Actions.makeMove, _model.ai["white"](_model))
    }
    else if (_model.turn === 1 && _model.ai["black"]) {
      gameEngine.emit(Actions.makeMove, _model.ai["black"](_model))
    }
  })

  gameEngine.on(Actions.newGame, (ai1Name, ai2Name) => {
    _model = createModel(ai1Name, ai2Name)
    gameEngine.emit(Actions.modelUpdated, _model)
  })

  gameEngine.on(Actions.changeAI, (color, aiName) => {
    _model.ai[color] = AIs[aiName]
    if (_model.ai[color] && (_model.turn === 1 && color === "black" || _model.turn === -1 && color === "white"))
      gameEngine.emit(Actions.makeMove, _model.ai[color](_model))
  })

  return gameEngine
}

const createModel = (ai1Name = undefined, ai2Name = "randomAI") => {
   const model = JSON.parse(JSON.stringify(initModel))
   model.ai = {
     "black": AIs[ai1Name],
     "white": AIs[ai2Name],
   }
   return model
}

export { Actions, createGameEngine }
// for legacy and cause of singleton anyway so fat
const defaultGameEmitter = createGameEngine()
export default defaultGameEmitter