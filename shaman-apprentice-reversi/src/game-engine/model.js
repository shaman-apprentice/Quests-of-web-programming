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
  changeKI: "changeKI", // ("randomAI"|"monthyAI"|"greedyAI"|"greedy-cornerAI")
  modelUpdated: "modelUpdated",
  gameEnd: "gameEnd",
}

eventEmitter.on(Actions.makeMove, ({ y, x }) => {
  if (handleMove(_model, y, x))
    eventEmitter.emit(Actions.modelUpdated, _model, { y, x })

  if (Object.keys(_model.allowedMoves).length === 0) {
    eventEmitter.emit(Actions.gameEnd, _model)
    return
  }

  if (_model.turn === -1 && _model.ai["white"]) {
    eventEmitter.emit(Actions.makeMove, _model.ai["white"](_model.allowedMoves))
  }
  else if (_model.turn === 1 && _model.ai["black"]) {
    eventEmitter.emit(Actions.makeMove, _model.ai["white"](_model.allowedMoves))
  }
})

eventEmitter.on(Actions.newGame, () => {
  createModel()
  eventEmitter.emit(Actions.modelUpdated, _model)
})

export default eventEmitter