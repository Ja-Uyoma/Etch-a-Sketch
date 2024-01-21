import { CreateGrid, RenderGrid, ChangeGridCellBgColourOnMouseOver } from "./Grid.mjs";
import UpdateYear from "./UpdateYear.mjs";

const main = () => {
  UpdateYear();
  let grid = CreateGrid(4, 4);
  ChangeGridCellBgColourOnMouseOver(grid, "red");
  RenderGrid(grid);
};

main();
