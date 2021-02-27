// Normal screen
const inputJob = document.querySelector(".input--title");
const inputLocation = document.querySelector(".input--location");
const fullTime = document.querySelector("#checkbox");
const searchButton = document.querySelector(".search--desktop");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  lookUp(inputJob, inputLocation, fullTime);
});

// Small / mobile screen
const mobileInputLocation = document.querySelector(".location");
const mobileFullTime = document.querySelector("#checkbox--mobile");
const mobileSearchButton = document.querySelector(".search--mobile");
const mobileBtn = document.querySelector(".search");

mobileSearchButton.addEventListener("click", (e) => {
  e.preventDefault();
  lookUp(inputJob, mobileInputLocation, mobileFullTime);
  body.classList.remove("open");
  filterContainer.classList.remove("is-open");
});

mobileBtn.addEventListener("click", (e) => {
  e.preventDefault();
  lookUp(inputJob, mobileInputLocation, mobileFullTime);
});

function lookUp(name, location, fullPosition) {
  let jobName = name.value;
  let jobLocation = location.value;
  let jobFullTime = fullPosition.checked;

  const usp = new URLSearchParams({
    description: jobName,
    location: jobLocation,
    full_time: jobFullTime,
  });

  fetch(`${PROXY}https://jobs.github.com/positions.json?${usp}`)
    .then((request) => request.json())
    .then((data) => {
      jobsSection.innerHTML = "";
      displayJob(data);
    });
}

window.addEventListener("resize", fucntionName);

function fucntionName() {
  if (window.innerWidth <= 720) {
    body.classList.remove("open");
    filterContainer.classList.remove("is-open");
  } else return;
}
