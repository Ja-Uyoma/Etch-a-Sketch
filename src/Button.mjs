const HandleButtonClicked = () => {
  let dimensions = 0;

  const btn = document.querySelector("main > button");
  btn.addEventListener("click", () => {
    dimensions = Number(prompt("Enter the grid dimensions"));
  });

  return dimensions > 100 ? 100 : dimensions;
};

export default HandleButtonClicked;
