const body = document.querySelector("body");
const filter = document.querySelector(".filter");
const filterContainer = document.querySelector(".filter__container");
const jobsSection = document.querySelector(".jobs");
const loadingJobs = document.querySelectorAll(".is-loading");
const loadBtn = document.querySelector(".load-more");

filter.addEventListener("click", () => {
  body.classList.toggle("open");
  filterContainer.classList.toggle("is-open");
});

const API = "https://jobs.github.com/positions.json";
const PROXY = "https://morning-refuge-16267.herokuapp.com/";
let data = [];

async function requestData(page) {
  const request = await fetch(`${PROXY}${API}?page=${page}`);
  data = await request.json();
  displayJob(data);
}

requestData(1);

// function displayJob(jobs) {
//   const htmlString = jobs
//     .map((job) => {
//       return `<article class="job">
//       <h1 class="job__title">${job.title}</h1>
//       <p class="job__company">${job.company}</p>
//       <p class="job__location">${job.location}</p>
//       <p class="job__date">${calculateTime(job.created_at)} . <span class="job__position">${
//         job.type
//       }</span></p>
//       <div class="job__logo"><img src="${checkImage(
//         job.company_logo
//       )}" loading="lazy" alt="company logo"></div>
//     </article>`;
//     })
//     .join("");

//   console.log(data);
//   jobsSection.innerHTML = htmlString;
// }

function displayJob(jobs) {
  for (let job of jobs) {
    let htmlData = `
    <article class="job" data-id="${job.id}">
      <h1 class="job__title">${job.title}</h1>
      <p class="job__company">${job.company}</p>
      <p class="job__location">${job.location}</p>
      <p class="job__date">${calculateTime(job.created_at)} . <span class="job__position">${
      job.type
    }</span></p>
      <div class="job__logo"><img src="${checkImage(
        job.company_logo
      )}" loading="lazy" alt="company logo"></div>
    </article>
    `;
    jobsSection.insertAdjacentHTML("beforeend", htmlData);
  }
  loadingJobs.forEach((e) => e.remove());
  const article = document.querySelectorAll(".job");
  article.forEach((e) => {
    e.addEventListener("click", () => {
      let jobID = e.dataset.id;
      localStorage.setItem("jobID", jobID);
      window.document.location = "./job.html";
    });
  });
}

// Load more jobs
let page = 2;
loadBtn.addEventListener("click", () => {
  requestData(page);
  page++;
});
