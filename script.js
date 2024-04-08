// Dark Mode
const body = document.querySelector("body"),
toggleSwitch = document.getElementById("toggle-switch");
toggleSwitch.addEventListener('click', () => {
body.classList.toggle("dark");
})      


function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
