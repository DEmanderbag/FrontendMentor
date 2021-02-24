const aboutCard = document.querySelector(".about__card");
const jobAbout = document.querySelector(".job__about");
const jobGroup = document.querySelector(".job__group");
const apply = document.querySelector(".apply p");
const applyNow = document.querySelector(".apply__now");
console.log(applyNow);
let jobID = localStorage.getItem("jobID");

const PROXY = "https://morning-refuge-16267.herokuapp.com/";

async function loadJob(jobData) {
  let request = await fetch(`${PROXY}https://jobs.github.com/positions/${jobData}.json`);
  let data = await request.json();
  displayData(data);
}

function displayData(data) {
  let companyCard = `<div class="job__logo">
  <img src="${checkImage(data.company_logo)}" alt="company logo">
  </div>
    <div class="company__info">
      <h1 class="about__company">${data.company}</h1>
      <p class="about__site">${
        data.company_url ? data.company_url : "Company Website not provided"
      }</p>
    </div>
      <a href="${data.company_url}" class="link link--cta">Company Site</a>`;
  console.log(data.description);
  console.log(data);

  aboutCard.innerHTML = companyCard;

  let companyData = `
  <div class="job__more">
    <h1 class="job__title">${data.title}</h1>
      <p class="job__date">${calculateTime(data.created_at)} . <span class="job__position">${
    data.type
  }</span></p>
      <p class="job__location">${data.location}</p>
  </div>
        <a href="#apply"><button class="cta load-more full--width">Apply Now</button></a>`;

  jobGroup.innerHTML = companyData;
  jobAbout.innerHTML = data.description;
  apply.innerHTML = data.how_to_apply;

  const jobTitle = `
  <div class="company__apply">
    <p class="job__title">${data.title}</p>
    <p class="about__company">${data.company}</p>
  </div>`;
  applyNow.insertAdjacentHTML("afterbegin", jobTitle);
}

loadJob(jobID);
