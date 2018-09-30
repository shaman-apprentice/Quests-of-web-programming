import playAGame from "./playAGame"
import playXGames from "./playXGames"
import playArena from "./playArena"

test("result of playAGame is always an int", () => {
  expect(typeof playAGame("randomAI", "randomAI")).toBe("number")
})

test("result of playXGame is %", () => {
  const winQuote = playXGames("randomAI", "randomAI", 2)
  expect(winQuote >= 0).toBe(true)
  expect(winQuote <= 1).toBe(true)
})

test("arena plays all possible matches", () => {
  const winQuotes = playArena(["randomAI", "greedyAI", "cornerFirstAI"], 2)
  expect(Object.keys(winQuotes).length).toBe(6)
})
