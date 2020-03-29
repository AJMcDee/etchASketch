/// Define variables
let newGridDimension
let toggleOption = "black"

/// DOM elements

const container = document.querySelector(".container");
const resetButton = document.querySelector("#clearButton");
const selectRandom = document.querySelector("#selectRandom");
const selectBlack = document.querySelector("#selectBlack");


/// Functions
function createOriginalGrid() {
    for (let x = 0; x<256; x++) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute("id", x)
        newDiv.setAttribute("class", "gridSquare");
        container.appendChild(newDiv);
        
    }
}

function toggleColour(){
    if (toggleOption === "random") {
        toggleOption = "black"
        document.querySelector("#toggle").textContent = "Draw with random colours";
    } else {
        toggleOption = "random"
        document.querySelector("#toggle").textContent = "Draw with black squares";
    }
    console.log(toggleOption)
    return toggleOption
}

function populateNewGrid(num) {
    for (let x = 0; x<(num*num); x++) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute("id", x)
        newDiv.setAttribute("class", "gridSquare");
        container.appendChild(newDiv);
    }
}

function isNumeric(value) {
    return /^\d+$/.test(value);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


/// Event listeners


document.getElementById("container").addEventListener("mouseover", function(event) {
    console.log(toggleOption);
    var target = event.target;
    if (toggleOption == "random"){
        target.style.backgroundColor = getRandomColor();
    } else {
        target.style.backgroundColor = "black";
    }
  }, false);

resetButton.addEventListener("click", () => {
    var squares = [].slice.call(container.children);
    squares.forEach(function(e){
        e.style.backgroundColor = "white"});

     for (let valid = 0; valid < 1;) { 
            newGridDimension = window.prompt("How many columns and rows would you like for your new grid?");
            if (isNumeric(newGridDimension) === false) {
                console.log("Test");
                alert("Invalid entry. Please enter one whole number.");
            } else {
                newGridDimension = parseInt(newGridDimension);
                squares.forEach(function(e){
                    e.remove()});
                document.getElementById("container").style.gridTemplateColumns = `repeat(${newGridDimension}, 1fr)`;
                document.getElementById("container").style.gridTemplateRows = `repeat(${newGridDimension}, 1fr)`;
                populateNewGrid(newGridDimension);
                break
            }
    }
})

/// Call events if needed

createOriginalGrid();



