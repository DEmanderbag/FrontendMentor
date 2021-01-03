let currentSlide = 1;
const slides = document.querySelectorAll(".slider");

function showSlide(slideIndex){
  if (slideIndex > slides.length) currentSlide = 1;
  else if (slideIndex < 1) currentSlide = slides.length;
  else currentSlide = slideIndex;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[currentSlide - 1].style.display = 'flex';
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function previousSlide() {
  showSlide(currentSlide - 1);
}

showSlide(currentSlide);

const prev = document.querySelectorAll('.btn--prev');
const next =  document.querySelectorAll('.btn--next');

prev.forEach(btn => btn.addEventListener("click", previousSlide));
next.forEach(btn => btn.addEventListener("click", nextSlide));