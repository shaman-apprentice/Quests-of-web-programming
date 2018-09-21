import getAllowedMoves from "./getAllowedMoves"

const getMove = (y, x, allowedMoves) =>
  allowedMoves.find( move => move === `${y}-${x}` )

let cachedAllowedMoves

export default function({ fieldNode, x, y, model }) {
  cachedAllowedMoves = cachedAllowedMoves || getAllowedMoves(model.board, model.turn)
  const move = getMove(y, x, cachedAllowedMoves);

  if (!move)
    return;
  else
    cachedAllowedMoves = undefined

  // update board and flip in dom
  fieldNode.classList.add(model.turn)
  console.log(fieldNode, x, y)
  model.turn = model.turn === "black" ? "white" : "black"
}