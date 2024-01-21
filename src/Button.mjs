/**
 * Set the number of cells of the new grid to be rendered to the DOM
 * @returns Whether the button was clicked and the number of grid cells
 */
const HandleButtonClicked = () => {
  let dimensions = 0;
  let clicked = false;

  const btn = document.querySelector("main > button");
  btn.addEventListener("click", () => {
    dimensions = Number(prompt("Enter the grid dimensions"));
    clicked = true;
  });

  return {
    buttonClicked: clicked,
    dimensions: dimensions > 100 ? 100 : dimensions,
  };
};

export default HandleButtonClicked;
