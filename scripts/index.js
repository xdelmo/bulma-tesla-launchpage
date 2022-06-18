//Function espression to select elements
const selectElement = (s) => document.querySelector(s);

//Open menu on click
selectElement("#navbar-menu").addEventListener("click", () => {
  selectElement(".nav-list").classList.add("active");
});

//Close menu on click
selectElement(".close").addEventListener("click", () => {
  selectElement(".nav-list").classList.remove("active");
});
