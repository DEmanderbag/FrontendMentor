const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".menu--close");
const menuList = document.querySelector(".menu__list");

menu.addEventListener("click", () => {
  menuList.classList.add("is-open");
  menuClose.classList.add("menu-open");
});

menuClose.addEventListener("click", () => {
  menuList.classList.remove("is-open");
  menuClose.classList.remove("menu-open");
});

menuList.addEventListener("click", () => {
  menuList.classList.remove("is-open");
  menuClose.classList.remove("menu-open");
});