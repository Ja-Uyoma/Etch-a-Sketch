/** Dynamically update the year on the page footer to match the current year */
const UpdateYear = () => {
  const year = new Date().getFullYear().toString();
  document.querySelector("span.year").textContent = year;
};

export default UpdateYear;
