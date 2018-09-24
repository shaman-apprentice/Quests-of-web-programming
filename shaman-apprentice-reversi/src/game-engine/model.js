import EventEmitter from "events"

import getAllowedMoves from "./getAllowedMoves"
import handleMove from "./handleMove"

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
  allowedMoves: getAllowedMoves({ board: startPosi, turn: 1 })
}


const createModel = () =>
  JSON.parse(JSON.stringify(initModel))

let _model = createModel();

const eventEmitter = new EventEmitter()

export const Actions = {
  makeMove: "makeMove", // { y, x }
  newGame: "newGame",
  changeKI: "changeKI", // ("randmom"|"monthy"|"greedy"|"greedy-corner")
  modelUpdated: "modelUpdated",
  gameEnd: "gameEnd",
}

eventEmitter.on(Actions.makeMove, ({ y, x }) => {
  if (handleMove(_model, y, x))
    eventEmitter.emit(Actions.modelUpdated, _model)

  console.log(_model.allowedMoves)
  if (_model.allowedMoves.length === 0)
    eventEmitter.emit(Actions.gameEnd, _model)
})
eventEmitter.on(Actions.newGame, () => {
  _model = createModel()
  eventEmitter.emit(Actions.modelUpdated, _model)
})

export default eventEmitter