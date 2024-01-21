/**
 * Create an n x n grid of divs
 * @param {number} gridRows The number of rows of the grid
 * @param {number} gridColumns The number of columns of the grid
 * @returns An array containing the grid cells
 */
function createGridCells(gridRows, gridColumns) {
  let array = [];

  for (let i = 0; i < gridRows * gridColumns; ++i) {
    array.push(document.createElement("div"));
  }

  return array;
}

/**
 * Render the grid cells to the viewport
 */
function renderGrid() {
  const container = document.querySelector("div.container");

  let array = createGridCells(4, 4);
  array.forEach((cell) => {
    container.appendChild(cell);
  });

  changeGridCellColourOnMouseover(array, "red");
  updateYearDynamically();
}

/**
 * Change the colour of a cell when a mouse hovers over it
 * @param {HTMLElement[]} gridCells Array of grid cells
 * @param {string} colour The new background colour of the grid cell
 */
function changeGridCellColourOnMouseover(gridCells, colour) {
  gridCells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = colour;
    });
  });
}

function updateYearDynamically() {
  const year = new Date().getFullYear().toString();
  document.querySelector("span.year").textContent = year;
}

renderGrid();
