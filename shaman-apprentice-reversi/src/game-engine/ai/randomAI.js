export const randomAI =  ({ allowedMoves }) => {
  const keyList = Object.keys(allowedMoves)
  const moveKey = keyList[Math.floor(Math.random() * keyList.length)]
  return { y: moveKey[0], x: moveKey[2] }
}
