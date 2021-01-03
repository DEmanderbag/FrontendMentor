let currentSlide = 1;
const slides = document.querySelectorAll(".slider");

function showSlide(slideIndex){
  console.log(slides);

  if (slideIndex > slides.length) { currentSlide = 1 }
  if (slideIndex < 1) { currentSlide = slides.length }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[currentSlide - 1].style.display = 'flex';
}

function nextSlide() {
  showSlide(currentSlide += 1);
}

function previousSlide() {
  showSlide(currentSlide -= 1);
}

showSlide(currentSlide);

const prev = document.querySelector('.btn--prev');
const next =  document.querySelector('.btn--next');

prev.addEventListener("click", previousSlide);
next.addEventListener("click", nextSlide);