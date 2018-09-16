import model from "../model"

const boardContentNode = document.createElement("div");
boardContentNode.setAttribute("class", "board")
for (let y = 0; y <= 7; y++) {
  for (let x = 0; x <= 7; x++) {
    const field = document.createElement("div")
    field.setAttribute("class", "field" + getPlacedStoneColor(y, x))
    field.setAttribute("data-y", y)
    field.setAttribute("data-x", x)
    field.innerHTML = `
      <div class="stone"></div>
      <div class="square-hack"></div>
    `

    boardContentNode.appendChild(field)
  }
}

function getPlacedStoneColor(y, x) {
  if (model.board[y][x] === 1) {
    return " black"
  }
  if (model.board[y][x] === -1) {
    return " white"
  }
  return ""
}

export default boardContentNode