const menuButton = document.querySelector(".menu-btn");
const sideDrawer = document.querySelector("#side-drawer");
const closeButton = sideDrawer.querySelector(".menu-btn");

let isMenuOpen = false;

function openMenu() {
  sideDrawer.setAttribute("aria-hidden", "false");
  menuButton.setAttribute("aria-expanded", "true");
  isMenuOpen = true;
}

function closeMenu() {
  sideDrawer.setAttribute("aria-hidden", "true");
  menuButton.setAttribute("aria-expanded", "false");
  isMenuOpen = false;
}

menuButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

closeButton.addEventListener("click", function (e) {
  e.preventDefault();
  closeMenu();
});
