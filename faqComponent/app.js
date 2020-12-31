const questions = document.querySelector(".questions");
const question = questions.querySelectorAll(".question__section");

question.forEach(e => {
  e.addEventListener("pointerdown", () => {
    let tittle = e.childNodes[1];
    let anwser = e.childNodes[3];
    let image = e.querySelector(".question__section img");
    if(anwser.style.maxHeight){
      image.style.transform = "rotate(0deg)";
      anwser.style.maxHeight = null;
      tittle.classList.toggle("question__title--open");   
      anwser.classList.toggle("question__anwser--open");
    } else {
      image.style.transform = "rotate(180deg)";
      anwser.style.maxHeight = anwser.scrollHeight + "px";
      tittle.classList.toggle("question__title--open");  
      anwser.classList.toggle("question__anwser--open");
    }
  })
});

// Close previous accordion if one is already pressed 