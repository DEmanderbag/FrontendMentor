const body = document.querySelector("body");
const menu = document.querySelector(".menu");
const menuLine = document.querySelector(".menu div");
const menuList = document.querySelector(".list");
const menuItems = document.querySelectorAll(".list li");

menu.addEventListener("click", () =>{
  body.classList.toggle("open");
  menuLine.classList.toggle("menu__line--open");
  menuList.classList.toggle("is-open");
})

menuItems.forEach(e => e.addEventListener("click", () =>{
  menuLine.classList.toggle("menu__line--open");
  menuList.classList.toggle("is-open");
}));