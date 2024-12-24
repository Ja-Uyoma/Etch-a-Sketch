/**
 * Create an n x n grid of divs
 * @param {number} gridRows The number of rows of the grid
 * @param {number} gridColumns The number of columns of the grid
 * @returns An array containing the grid cells
 */
const CreateGrid = (gridRows, gridColumns) => {
  let array = [];

  for (let i = 0; i < gridRows * gridColumns; ++i) {
    array.push(document.createElement("div"));
  }

  return array;
};

/**
 * Render the grid cells to the DOM
 * @param {HTMLElement[]} gridCells An array of divs representing the grid cells
 */
const RenderGrid = (gridCells) => {
  const container = document.querySelector("div.container");

  gridCells.forEach((cell) => {
    container.appendChild(cell);
  });
};

/**
 * Change the colour of a grid cell when the mouse hovers over it
 * @param {HTMLElement[]} gridCells The grid
 */
function ChangeGridCellColourOnMouseOver(gridCells) {
  const min = 0;
  const max = 255;

  gridCells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      const r = Math.floor(Math.random() * (max - min) + min);
      const g = Math.floor(Math.random() * (max - min) + min);
      const b = Math.floor(Math.random() * (max - min) + min);

      cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
  });
}

export { CreateGrid, RenderGrid, ChangeGridCellColourOnMouseOver };
