import gameEmitter, { Actions } from "../game-engine/model"

export default function setBoardContent(targetNode, board, lastMove) {
  if (targetNode.childNodes.length) { // update them (differ between update and create is important for css transition animation
    for (let y = 0; y <= 7; y++) {
      for (let x = 0; x <= 7; x++) {
        const field = targetNode.querySelector(`div[data-y="${y}"][data-x="${x}"]`)
        field.setAttribute("class", "field" + getPlacedStoneClass(board, y, x))
      }
    }

    if (lastMove) {
      const prevLastMove = targetNode.querySelector(".last-move")
      if (prevLastMove)
        prevLastMove.classList.remove("last-move")
      targetNode.querySelector(`div[data-y="${lastMove.y}"][data-x="${lastMove.x}"]`).classList.add("last-move")
    }
  }
  else { // create them
    const fieldClickHandler = (event) =>
      gameEmitter.emit(Actions.makeMove, {
        y: event.currentTarget.dataset.y,
        x: event.currentTarget.dataset.x,
      })

    for (let y = 0; y <= 7; y++) {
      for (let x = 0; x <= 7; x++) {
        const field = document.createElement("div")
        field.setAttribute("class", "field" + getPlacedStoneClass(board, y, x))
        field.setAttribute("data-y", y)
        field.setAttribute("data-x", x)
        field.addEventListener("click", fieldClickHandler)
        field.innerHTML = `
          <div class="stone"></div>
          <div class="square-hack"></div>
        `

        targetNode.appendChild(field)
      }
    }
  }
}

function getPlacedStoneClass(board, y, x) {
  if (board[y][x] === 1) {
    return " black"
  }
  if (board[y][x] === -1) {
    return " white"
  }
  return ""
}