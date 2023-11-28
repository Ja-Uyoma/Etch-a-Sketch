/**
 * Create an n x n grid of divs
 * @param {number} rowLength The number of rows of the grid
 * @param {number} columnLength The number of columns of the grid
 * @returns An array containing the grid cells
 */
function createGridOfDivs(rowLength, columnLength) {
    let array = [];

    for (let i = 0; i < rowLength * columnLength; ++i) {
        array.push(document.createElement("div"));
    }

    return array;
}

const body = document.querySelector("body");

const container = document.createElement("div");
container.className = "container";

let arrayOfDivs = createGridOfDivs(4, 4);

arrayOfDivs.forEach(elem => {
    container.appendChild(elem);
});

body.appendChild(container);