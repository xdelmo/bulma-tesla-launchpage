//Function espression to select elements
const selectElement = (s) => document.querySelector(s);

//Open menu on click
selectElement("#navbar-menu").addEventListener("click", () => {
  selectElement(".nav-list").classList.add("active");
});

//Close menu on click
selectElement(".close").addEventListener("click", () => {
  selectElement(".nav-list").classList.remove("active");
  // selectElement("#empty-div").classList.remove("active");
});

// const ulEl = document.querySelector(".nav-list");
// if (ulEl.classList.contains(active)) {
//   console.log("attivo");
//   document.addEventListener("click", ({ target }) => {
//     if (!target.matches(".nav-list, .nav-list *")) {
//       selectElement(".nav-list").classList.remove("active");
//     }
//   });
// }
