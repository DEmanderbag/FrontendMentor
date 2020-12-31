const questions = document.querySelector(".questions");
const question = questions.querySelectorAll(".question__section");

question.forEach(e => {
  e.addEventListener("click", () => {
    let tittle = e.childNodes[1];
    let anwser = e.childNodes[3];

    if(anwser.style.maxHeight){
      anwser.style.maxHeight = null;
      tittle.classList.toggle("question__title--open");   
      anwser.classList.toggle("question__anwser--open");
    } else {
      anwser.style.maxHeight = anwser.scrollHeight + "px";
      tittle.classList.toggle("question__title--open");  
      anwser.classList.toggle("question__anwser--open");
    }
  })
});

// Change arrow when it's open
// Close previous accordion if one is already pressed