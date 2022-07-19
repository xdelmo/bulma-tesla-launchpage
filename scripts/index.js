const closeIcon = document.getElementById("closeIcon");
const navbarMenu = document.getElementById("navbar-menu");
const navList = document.getElementById("navList");
const navListHalfEmpty = document.getElementById("navListHalfEmpty");

// Loading animation timeout 1.5second
setTimeout(() => {
  const loader = document.getElementById("loader-container");
  const main = document.getElementById("main");
  const footer = document.getElementById("footer");
  // Hide animation div and display whole website to prevent scrolling on animation
  loader.style.display = "none";
  main.style.display = "block";
  footer.style.display = "block";
}, 1500);

function openMenu() {
  navList.classList.add("active");
  navListHalfEmpty.classList.add("is-left");
}

// Open menu on click
navbarMenu.addEventListener("click", () => {
  openMenu();
});

function closeMenu() {
  navList.classList.remove("active");
  navListHalfEmpty.classList.remove("is-left");
}

// Close menu on click
closeIcon.addEventListener("click", () => {
  closeMenu();
});

// Close menu on click outside navbar
navListHalfEmpty.addEventListener("click", () => {
  closeMenu();
});

// Close menu after clicking any nav-link
document
  .querySelectorAll(".nav-link")
  .forEach((el) => el.addEventListener("click", closeMenu));
