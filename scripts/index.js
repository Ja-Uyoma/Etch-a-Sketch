/**
 * Create an n x n grid of divs
 * @param {number} rowLength The number of rows of the grid
 * @param {number} columnLength The number of columns of the grid
 * @returns An array containing the grid cells
 */
function createGridCells(rowLength, columnLength) {
    let array = [];

    for (let i = 0; i < rowLength * columnLength; ++i) {
        array.push(document.createElement("div"));
    }

    return array;
}

function renderGrid() {
    const gridContainer = document.querySelector("div.container");

    let array = createGridCells(4, 4);
    array.forEach(cell => {
        gridContainer.appendChild(cell);
    });
}

renderGrid();