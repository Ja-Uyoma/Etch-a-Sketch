import {
  CreateGrid,
  RenderGrid,
  ChangeGridCellBgColourOnMouseOver,
} from "./Grid.mjs";
import HandleButtonClicked from "./Button.mjs";

const main = () => {
  let grid = CreateGrid(16, 16);
  ChangeGridCellBgColourOnMouseOver(grid, "red");
  RenderGrid(grid);
  HandleButtonClicked();
};

main();
