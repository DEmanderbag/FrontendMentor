const body = document.querySelector("body");
const filter = document.querySelector(".filter");
const filterContainer = document.querySelector(".filter__container");
const jobsSection = document.querySelector(".jobs");

filter.addEventListener("click", () => {
  body.classList.toggle("open");
  filterContainer.classList.toggle("is-open");
});

let data = [];

fetch("https://morning-refuge-16267.herokuapp.com/https://jobs.github.com/positions.json")
  .then((res) => res.json())
  .then((data) => {
    displayJob(data);
  });

function displayJob(jobs) {
  const htmlString = jobs
    .map((job) => {
      return `<article class="job">
      <h1 class="job__title">${job.title}</h1>
      <p class="job__company">${job.company}</p>
      <p class="job__location">${job.location}</p>
      <p class="job__date">${calculateTime(job.created_at)} . <span class="job__position">${
        job.type
      }</span></p>
      <div class="job__logo"><img src="${checkImage(
        job.company_logo
      )}" loading="lazy" alt="company logo"></div>
    </article>`;
    })
    .join("");
  jobsSection.innerHTML = htmlString;
}

function calculateTime(jobDate) {
  let postDate = new Date(jobDate);
  let currentDate = new Date();
  let differentTime = Math.abs(currentDate - postDate);

  const diffDays = Math.ceil(differentTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.round(Math.ceil(currentDate - postDate) / 36e5);
  if (diffHours < 1) return `1h ago`;
  if (diffHours < 23) return `${diffHours}h ago`;
  if (diffHours > 23) return `${diffDays}d ago`;
}

function checkImage(logo) {
  if (logo === null) {
    return "assets/icons/default.svg";
  } else {
    return logo;
  }
}
