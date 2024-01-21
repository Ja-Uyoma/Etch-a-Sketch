import { CreateGrid, RenderGrid } from "./Grid.mjs";

/**
 * Render a new grid to the DOM with the dimensions given in the prompt
 */
const HandleButtonClicked = () => {
  let dimensions = 0;

  const btn = document.querySelector("main > button");
  btn.addEventListener("click", () => {
    dimensions = Number(prompt("Enter the grid dimensions"));

    if (dimensions > 100) {
      dimensions = 100;
    } else if (dimensions <= 0) {
      dimensions = 16;
    }

    let cells = document.querySelectorAll("div.container > div");
    cells.forEach((cell) => {
      cell.remove();
    });

    let grid = CreateGrid(dimensions, dimensions);
    RenderGrid(grid);

    let container = document.querySelector("div.container");
    container.style = `grid-template-columns: repeat(${dimensions}, 1fr); grid-template-rows: repeat(${dimensions}, 1fr)`;
  });
};

export default HandleButtonClicked;
