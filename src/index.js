import { CreateGrid, RenderGrid, ChangeGridCellBgColourOnMouseOver } from "./Grid.mjs";
import UpdateYear from "./UpdateYear.mjs";
import HandleButtonClicked from "./Button.mjs";

const main = () => {
  UpdateYear();
  let grid = CreateGrid(16, 16);
  ChangeGridCellBgColourOnMouseOver(grid, "red");
  RenderGrid(grid);
  HandleButtonClicked();
};

main();
