import getAllowedMoves from "./getAllowedMoves"

describe("allowed moves in start position", () => {
  const board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0,-1, 1, 0, 0, 0],
    [0, 0, 0, 1,-1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]
  const turn = "black"

  test("horizontal direction", () => {
    expect(getAllowedMoves(board, turn)).toMatchObject({
      "3-2": [ { y: 3, x: 3 } ],
      "4-5": [ { y: 4, x: 4 } ],
    })
  })

  test("vertical direction", () => {
    expect(getAllowedMoves(board, turn)).toMatchObject({
      "2-3": [ { y: 3, x: 3 } ],
      "5-4": [ { y: 4, x: 4 } ],
    })
  })

  test("4 moves are allowed", () => {
    expect(Object.keys(getAllowedMoves(board, turn)).length).toBe(4)
  })
})

describe("diagonal allowed moves downwards", () => {
  const board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0,-1,-1, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]
  const turn = "black"

  test("down right", () => {
    expect(getAllowedMoves(board, turn)).toMatchObject({
      "2-2": [ { y: 3, x: 3 } ],
    })
  })

  test("down left", () => {
    expect(getAllowedMoves(board, turn)).toMatchObject({
      "2-5": [ { y: 3, x: 4 } ],
    })
  })
})

describe("diagonal allowed moves upwards", () => {
  const board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0,-1,-1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]
  const turn = "black"

  test("up left", () => {
    expect(getAllowedMoves(board, turn)).toMatchObject({
      "5-5": [ { y: 4, x: 4 } ],
    })
  })

  test("up right", () => {
    expect(getAllowedMoves(board, turn)).toMatchObject({
      "5-2": [ { y: 4, x: 3 } ],
    })
  })
})

test("stones of multiple directions are added to flip", () => {
  const board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1,-1, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1,-1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]
  const turn = "white"

  expect(getAllowedMoves(board, turn)).toMatchObject({
    "4-2": [ { y: 4, x: 3 }, { y: 3, x: 3 } ],
  })
})