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

let _model
// todo parametrise
const createModel = () => {
   _model = JSON.parse(JSON.stringify(initModel))
   _model.ai = {
     "white": AIs.randomAI,
   }
}

const eventEmitter = new EventEmitter()

export const Actions = {
  makeMove: "makeMove", // { y, x }
  newGame: "newGame",
  changeAI: "changeAI", // { ("white"|"black"), ("human|randomAI"|"monthyAI"|"greedyAI"|"cornerFirstAI")
  modelUpdated: "modelUpdated",
  gameEnd: "gameEnd",
}

eventEmitter.on(Actions.makeMove, (move) => {
  if (move && handleMove(_model, move.y, move.x)) {
    eventEmitter.emit(Actions.modelUpdated, _model, move)
  }

  if (Object.keys(_model.allowedMoves).length === 0) {
    eventEmitter.emit(Actions.gameEnd, _model)
    return
  }

  if (_model.turn === -1 && _model.ai["white"]) {
    eventEmitter.emit(Actions.makeMove, _model.ai["white"](_model))
  }
  else if (_model.turn === 1 && _model.ai["black"]) {
    eventEmitter.emit(Actions.makeMove, _model.ai["black"](_model))
  }
})

eventEmitter.on(Actions.newGame, () => {
  createModel()
  eventEmitter.emit(Actions.modelUpdated, _model)
})

eventEmitter.on(Actions.changeAI, (color, aiName) => {
  _model.ai[color] = AIs[aiName]
  if (_model.ai[color] && (_model.turn === 1 && color === "black" || _model.turn === -1 && color === "white"))
    eventEmitter.emit(Actions.makeMove, _model.ai[color](_model))
})

export default eventEmitter