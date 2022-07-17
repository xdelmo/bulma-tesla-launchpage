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

// Close menu on click outside navbar
navListHalfEmpty.addEventListener("click", () => {
  navList.classList.remove("active");
  navListHalfEmpty.classList.remove("is-left");
});

// Loading animation timeout
setTimeout(() => {
  const loader = document.getElementById("loader-container");
  const main = document.getElementById("main");
  const footer = document.getElementById("footer");
  // Hide animation div and display all website to prevent scrolling on animation
  loader.style.display = "none";
  main.style.display = "block";
  footer.style.display = "block";
}, 1500);
