import { greedyAI } from "./greedyAI"

test("a simple sort", () => {
  const allowedMoves =  {
    "2-3": [1, 2, 3],
    "3-4": [4],
    "4-5": [5, 6, 7, 8],
  }

  const move = greedyAI({ allowedMoves })
  expect(move.y).toBe("4")
  expect(move.x).toBe("5")
})