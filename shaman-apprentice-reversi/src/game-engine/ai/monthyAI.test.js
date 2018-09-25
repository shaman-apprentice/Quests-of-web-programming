import { monthyAI, getBestCandidate } from "./monthyAI"
import getAllowedMoves from "../getAllowedMoves"

let startPosi = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0,-1, 1, 0, 0, 0],
  [0, 0, 0, 1,-1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
]

let initModel = {
  board: startPosi,
  score: 0,
  turn: 1, // black := 1, white -1
  allowedMoves: getAllowedMoves({ board: startPosi, turn: 1 }),
}

let model;
beforeEach(() => {
  model = JSON.parse(JSON.stringify(initModel))
})

test("monthyAI does not change model", () => {
  monthyAI(model)
  expect(JSON.stringify(model)).toBe(JSON.stringify(initModel))
})

test("plays a move", () => {
  const move = monthyAI(model)
  expect(move.y).toBeDefined()
  expect(move.x).toBeDefined()
})


test("takes best candidate", () => {
  const candiates = { '2-3': -19, '3-2': -13, '4-5': 9, '5-4': 6 }
  expect(getBestCandidate(candiates)).toBe("4-5")
})