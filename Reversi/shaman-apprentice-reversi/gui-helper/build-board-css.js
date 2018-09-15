shamanApprenticeReversiNs.tmp.buildBoardCss = function() {
  const style = document.createElement("style")

  style.innerHTML = `
    .field {
      display: inline-block;
    }
  `

  return style
}