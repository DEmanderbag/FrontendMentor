const aboutCard = document.querySelector(".about__card");
const jobAbout = document.querySelector(".job__about");
const jobGroup = document.querySelector(".job__group");
const apply = document.querySelector(".apply p");
let jobID = localStorage.getItem("jobID");

const PROXY = "https://morning-refuge-16267.herokuapp.com/";

async function loadJob(jobData) {
  let request = await fetch(`${PROXY}https://jobs.github.com/positions/${jobData}.json`);
  let data = await request.json();
  displayData(data);
}

function displayData(data) {
  let companyCard = `<div class="job__logo">
  <img src="${data.company_logo}" alt="company logo"></div>
      <h1 class="about__company">${data.company}</h1>
      <p class="about__site">${data.company_url.substr(12)}</p>
      <a href="${data.company_url}" class="link link--cta">Company Site</a>`;
  console.log(data.description);
  console.log(data);

  aboutCard.innerHTML = companyCard;

  let companyData = `<h1 class="job__title">${data.title}</h1>
        <p class="job__date">${calculateTime(data.created_at)} . <span
            class="job__position">${data.type}</span></p>
        <p class="job__location">${data.location}</p>
        <button class="cta load-more full--width">Apply Now</button>`;

  jobGroup.innerHTML = companyData;
  jobAbout.innerHTML = data.description;
  apply.innerHTML = data.how_to_apply;
}

loadJob(jobID);

function calculateTime(jobDate) {
  let postDate = new Date(jobDate);
  let currentDate = new Date();
  let differentTime = Math.abs(currentDate - postDate);

  const diffDays = Math.ceil(differentTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.round(Math.ceil(currentDate - postDate) / 36e5);
  if (diffHours < 1) return `1h ago`;
  if (diffHours < 23) return `${diffHours}h ago`;
  if (diffHours >= 23) return `${diffDays}d ago`;
}
