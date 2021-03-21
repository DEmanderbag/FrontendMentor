const more = document.querySelector(".cta");
const screen = document.querySelector(".overlay");
const moreSection = document.querySelector(".more");
const quoteSection = document.querySelector(".quote");

more.addEventListener("click", () => {
  screen.classList.toggle("open");
  quoteSection.classList.toggle("hidden");
  moreSection.classList.toggle("is-open");
});
