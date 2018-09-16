import model from "../model"

export default function({ fieldNode, x, y }) {
  console.log(fieldNode, x, y)
  fieldNode.classList.add(model.turn)
  model.turn = model.turn === "black" ? "white" : "black"
}