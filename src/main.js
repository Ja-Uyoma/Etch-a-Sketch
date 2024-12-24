import {
  CreateGrid,
  RenderGrid,
  ChangeGridCellColourOnMouseOver,
} from "./Grid.mjs";
import HandleButtonClicked from "./Button.mjs";

const main = () => {
  let grid = CreateGrid(16, 16);
  ChangeGridCellColourOnMouseOver(grid);
  RenderGrid(grid);
  HandleButtonClicked();
};

main();
