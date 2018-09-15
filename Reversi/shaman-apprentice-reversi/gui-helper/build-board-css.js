shamanApprenticeReversiNs.tmp.buildBoardCss = function() {
  const style = document.createElement("style")

  style.innerHTML = `
    .board {
      min-width: 100px;
      max-width: 500px;
      display: grid;
      background-color: black;
      grid-template-columns: repeat(8, 1fr);
      grid-gap: 2px;
    }
    
    .field {
      position: relative;
      background-color: darkgreen;
    }
    
    .square-hack {
      height: 0;
      padding-bottom: 100%;
    }
    
    .stone {
      position: absolute;
      display: hidden;
      height: 95%;
      width: 95%;
      margin: 5%;
      border-radius: 50%;
    }
    
    .black {
      display: block;
      background-color: black;
    }
    
    .white {
      display: block;
      background-color: white;
    }
  `

  return style
}