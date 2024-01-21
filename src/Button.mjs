const HandleButtonClicked = () => {
  const btn = document.querySelector("main > button");
  btn.addEventListener("click", () => {
    alert("Button clicked!");
  });
};

export default HandleButtonClicked;
