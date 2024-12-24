import {
  CreateGrid,
  RenderGrid,
  ChangeGridCellColourOnMouseOVer,
} from "./Grid.mjs";
import HandleButtonClicked from "./Button.mjs";

const main = () => {
  let grid = CreateGrid(16, 16);
  ChangeGridCellColourOnMouseOVer(grid);
  RenderGrid(grid);
  HandleButtonClicked();
};

main();
