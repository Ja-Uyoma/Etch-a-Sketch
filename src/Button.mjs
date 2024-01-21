import { CreateGrid, RenderGrid } from "./Grid.mjs";

/**
 * Set the number of cells of the new grid to be rendered to the DOM
 * @returns Whether the button was clicked and the number of grid cells
 */
const HandleButtonClicked = () => {
  let dimensions = 0;

  const btn = document.querySelector("main > button");
  btn.addEventListener("click", () => {
    dimensions = Number(prompt("Enter the grid dimensions"));

    if (dimensions > 100) {
      dimensions = 100;
    } else if (dimensions < 0) {
      dimensions = 10;
    }

    let cells = document.querySelectorAll("div.container > div");
    cells.forEach((cell) => {
      cell.remove();
    });

    let grid = CreateGrid(dimensions, dimensions);
    RenderGrid(grid);
  });
};

export default HandleButtonClicked;
