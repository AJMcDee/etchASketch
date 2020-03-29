/// Define variables
let newGridDimension

/// DOM elements

const container = document.querySelector(".container");
const resetButton = document.querySelector("#clearButton");


/// Functions
function createOriginalGrid() {
    for (let x = 0; x<256; x++) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute("id", x)
        newDiv.setAttribute("class", "gridSquare");
        container.appendChild(newDiv);
        
    }
}

function populateNewGrid(num) {
    for (let x = 0; x<(num*num); x++) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute("id", x)
        newDiv.setAttribute("class", "gridSquare");
        container.appendChild(newDiv);
    }
}

/// Event listeners

document.getElementById("container").addEventListener("mouseover", function(event) {
    var target = event.target;
    target.style.backgroundColor = "black";
  }, false);

resetButton.addEventListener("click", () => {
    var squares = [].slice.call(container.children);
    squares.forEach(function(e){
        e.style.backgroundColor = "white"});
     newGridDimension = window.prompt("How many columns and rows would you like for your new grid?");
     newGridDimension = parseInt(newGridDimension);
     if (typeof newGridDimension === "number") { 
        squares.forEach(function(e){
            e.remove()});
        document.getElementById("container").style.gridTemplateColumns = `repeat(${newGridDimension}, 1fr)`;
        document.getElementById("container").style.gridTemplateRows = `repeat(${newGridDimension}, 1fr)`;
    populateNewGrid(newGridDimension);
    } 
})

/// Call events if needed

createOriginalGrid();



