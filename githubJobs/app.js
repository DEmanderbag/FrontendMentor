const body = document.querySelector("body");
const filter = document.querySelector(".filter");
const filterContainer = document.querySelector(".filter__container");

filter.addEventListener("click", () => {
  body.classList.toggle("open");
  filterContainer.classList.toggle("is-open");
});
