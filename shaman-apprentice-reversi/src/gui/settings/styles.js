const styles = document.createElement("style")
styles.innerHTML = `
  .wrapper {
    display: inline-block;
    padding-left: 2em;
  }
  
  button {
    margin: 0.5em;
    padding: 0.5em;
    cursor: pointer;
  }
  
  .ai-section {
    border: 2px black dashed;
    padding: 0.5em;
    font-weight: bold;
  }
  
  .ai-section div.color {
    display: inline-block;
    border: 1px solid black;
    padding: 1em;
    margin-left: 1em;
  }
  
  .ai-section div.color.white {
    color: black;
    background-color: white;
  }
  
  .ai-section div.color.black {
    color: white;
    background-color: black;
  }
  
  .ai-section .selected {
    background-color: aquamarine;
  }
`

export default styles