import getAllowedMoves from "./getAllowedMoves"

describe("allowed moves in start position", () => {
  const board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, -1, 1, 0, 0, 0],
    [0, 0, 0, 1, -1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]
  const turn = "black"

  test("horizontal direction", () => {
    const allowedMoves = getAllowedMoves(board, turn)
    expect(allowedMoves).toContain("3-2")
    expect(allowedMoves).toContain("4-5")
  })

  test("vertical direction", () => {
    const allowedMoves = getAllowedMoves(board, turn)
    expect(allowedMoves).toContain("2-3")
    expect(allowedMoves).toContain("5-4")
  })

  test("4 moves are allowed", () => {
    const allowedMoves = getAllowedMoves(board, turn)
    expect(allowedMoves.length).toBe(4)
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
    const allowedMoves = getAllowedMoves(board, turn)
    expect(allowedMoves).toContain("2-2")
    expect(allowedMoves).toContain("2-3")
  })

  test("down left", () => {
    const allowedMoves = getAllowedMoves(board, turn)
    expect(allowedMoves).toContain("2-5")
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
    const allowedMoves = getAllowedMoves(board, turn)
    expect(allowedMoves).toContain("5-5")
    expect(allowedMoves).toContain("5-4")
  })

  test("up right", () => {
    const allowedMoves = getAllowedMoves(board, turn)
    expect(allowedMoves).toContain("5-2")
    expect(allowedMoves).toContain("5-3")
  })
})