/// Define variables


/// DOM elements

const container = document.querySelector(".container");
const resetButton = document.querySelector("#clearButton");


/// Functions
function createGridDivs() {
    for (let x = 0; x<256; x++) {
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
})

/// Call events if needed
createGridDivs();


