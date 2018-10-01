import * as AIs from "../ai"
import { createGameEngine } from "../model"

import playAGame from "./playAGame"
import playXGames from "./playXGames"
import playArena from "./playArena"

let gameEngine
beforeEach( () => {
  gameEngine = createGameEngine()
})

test("result of playAGame is always an int", () => {
  expect(typeof playAGame(gameEngine, "randomAI", "randomAI")).toBe("number")
})

test("result of playXGame is %", () => {
  const winQuote = playXGames(gameEngine, "randomAI", "randomAI", 2)
  expect(winQuote >= 0).toBe(true)
  expect(winQuote <= 1).toBe(true)
})

test("arena plays all possible matches", () => {
  const winQuotes = playArena(["randomAI", "greedyAI", "cornerFirstAI"], 2)
  expect(Object.keys(winQuotes).length).toBe(6)
})

test.only("make quotes", () => {
  const ais = Object.keys(AIs)
  console.log(ais)
  const winQuotes = playArena(ais, 1000)
  console.log(winQuotes)
})
