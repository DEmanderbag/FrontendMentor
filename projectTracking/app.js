const menu = document.querySelector("nav");
const menuOpen = document.querySelector(".menu");
let menuIcon = document.querySelector("nav img");

menu.addEventListener("click", () =>{
  if(menuOpen.classList.contains("mobile__menu")){
    menuOpen.style.display = "none";
    menuOpen.classList.toggle("mobile__menu");
    menuIcon.src = "images/icon-hamburger.svg";
  } else {
    menuOpen.style.display = "block";
    menuOpen.classList.toggle("mobile__menu");
    menuIcon.src = "images/icon-close.svg"
  }
})