const toggle = document.querySelector("input");
const cardPrice = document.querySelectorAll(".card__price");
const monthlyPlan = ["$19.99", "$24.99", "$39.99"];
const annualPlan = ["$199.99", "$249.99", "$399.99"];

toggle.addEventListener("click", () =>{
  const toggleValue = toggle.checked

  if(toggleValue !== true){
    yearToggle();
  } else {
    monthToggle();
  }
})

function monthToggle(){
  for (let i = 0; i < monthlyPlan.length;) {
  cardPrice.forEach(e => {
    e.innerText = monthlyPlan[i];
     i++
  }); 
}
}

function yearToggle(){
  for (let i = 0; i < annualPlan.length;) {
  cardPrice.forEach(e => {
    e.innerText = annualPlan[i];
     i++
  }); 
}
}

monthToggle();