import { cornerFirstAI } from "./cornerFirstAI"
import {greedyAI} from "./greedyAI"

test("plays in the corner", () => {
  const allowedMoves =  {
    "2-3": [1, 2, 3],
    "7-7": [4],
    "4-5": [5, 6, 7, 8],
  }

  const move = cornerFirstAI({ allowedMoves })
  expect(move.y).toBe("7")
  expect(move.x).toBe("7")
})

test("plays in the corner although there is a border move", () => {
  const allowedMoves =  {
    "0-1": [1, 2, 3],
    "7-7": [4],
    "4-5": [5, 6, 7, 8],
  }

  const move = cornerFirstAI({ allowedMoves })
  expect(move.y).toBe("7")
  expect(move.x).toBe("7")
})

test("plays at the boarder", () => {
  const allowedMoves =  {
    "2-1": [1, 2, 3],
    "3-4": [4],
    "0-5": [5, 6, 7, 8],
  }

  const move = cornerFirstAI({ allowedMoves })
  expect(move.y).toBe("0")
  expect(move.x).toBe("5")
})

test("plays same as greedyAI when neither corner nor boarder", () => {
  const allowedMoves =  {
    "2-4": [1, 2, 3],
    "3-3": [4],
    "4-5": [5, 6, 7, 8],
  }

  const move = cornerFirstAI({ allowedMoves })
  expect(move).toMatchObject(greedyAI({ allowedMoves }))
})