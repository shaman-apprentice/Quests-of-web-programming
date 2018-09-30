import playAGame from "./playAGame"

test("result is always an int", () => {
  expect(typeof playAGame("randomAI", "randomAI")).toBe("number")
})