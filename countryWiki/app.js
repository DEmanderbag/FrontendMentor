const countriesSection = document.querySelector(".countries");
const loading = document.querySelectorAll(".is-loading");

// Set dark mode if user has system set to dark mode
let theme = localStorage.getItem("theme");
if (theme === null) {
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  if (darkModeMediaQuery.matches === true) {
    darkMode();
  }
}

// API to request data;
const api = `https://restcountries.eu/rest/v2/all?fields=name;capital;region;population;flag`;

let data = [];
async function requestData() {
  try {
    const request = await fetch(api);
    data = await request.json();
    displayCountry(data);
  } catch (e) {
    console.error(e);
  }
}

const displayCountry = (countries) => {
  const htmlString = countries
    .map((country) => {
      return `<article class="country" data-name="${country.name}">
        <div class="country__flag">
          <img src="${country.flag}" loading="lazy" alt="Flag of ${country.name}">
        </div>
        <div class="country__about">
          <h2 class="country__name">${country.name}</h2>
          <p class="country__population"><span>Population: </span>${country.population.toLocaleString()}</p>
          <p class="country__region"><span>Region: </span>${country.region}</p>
          <p class="country__capital"><span>Capital: </span>${country.capital}</p>
        </div>
      </article>`;
    })
    .join("");
  countriesSection.innerHTML = htmlString;

  const article = document.querySelectorAll("article");
  article.forEach((e) => {
    e.addEventListener("click", () => {
      let country = e.dataset.name;
      localStorage.setItem("countryName", country);
      window.document.location = "./country.html";
    });
  });
};

requestData();
