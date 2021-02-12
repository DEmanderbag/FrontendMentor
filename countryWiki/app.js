const countriesSection = document.querySelector(".countries");
const loading = document.querySelectorAll(".is-loading");

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
      return `<article class="country">
        <div class="country__flag">
          <img src="${country.flag}" alt="Flag of ${country.name}" loading="lazy">
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
};

requestData();

function removeLoader() {
  for (const country of loading) {
    country.classList.add("hidden");
  }
}

// For the dark mode
const head = document.querySelector("head");
const cta = document.querySelector(".cta");

cta.addEventListener("click", () => {
  cta.classList.toggle("clicked");
  if (cta.classList.contains("clicked")) {
    loadCSSFile("assets/style/light.css");
  } else {
    loadCSSFile("assets/style/dark.css");
  }
});

function loadCSSFile(filename) {
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = filename;
  head.appendChild(link);
}
