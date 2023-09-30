let menu = document.querySelector(".mobile-menu");
let open = document.querySelector(".open-nav");
let close = document.querySelector(".close-nav");

function openNav() {
  menu.style.display = "block";
}

function closeNav() {
  if (openNav) {
    menu.style.display = "none";
  }
}

open.addEventListener("click", openNav);
close.addEventListener("click", closeNav);
