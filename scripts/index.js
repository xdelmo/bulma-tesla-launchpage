const closeIcon = document.getElementById("closeIcon");
const navbarMenu = document.getElementById("navbar-menu");
const navList = document.getElementById("navList");
const navListHalfEmpty = document.getElementById("navListHalfEmpty");

// Open menu on click
navbarMenu.addEventListener("click", () => {
  navList.classList.add("active");
  navListHalfEmpty.classList.add("is-left");
});

// Close menu on click
closeIcon.addEventListener("click", () => {
  navList.classList.remove("active");
  navListHalfEmpty.classList.remove("is-left");
});

// Close menu on click
navListHalfEmpty.addEventListener("click", () => {
  navList.classList.remove("active");
  navListHalfEmpty.classList.remove("is-left");
});

// Close menu on click outside navList
// window.addEventListener("click", function (e) {
//   if (!navList.contains(e.target)) {
//      navList.classList.remove("active");

//   }
// });
