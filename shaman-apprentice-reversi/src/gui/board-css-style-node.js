const styleNode = document.createElement("style")
styleNode.innerHTML = `
  .board {
    min-width: 100px;
    max-width: 500px;
    border: 3px solid black;
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
    height: 95%;
    width: 95%;
    margin: 5%;
    border-radius: 50%;
  }
  
  .field.black .stone {
    background-color: black;
  }
  
  .field.white .stone {
    background-color: white;
    transform: rotateY(180deg)
  }
  
  .field .stone {
    transition: all 1s linear
  }
`

export default styleNode