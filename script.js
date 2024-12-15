/* toggle menu */
const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("tablet-active");
});
