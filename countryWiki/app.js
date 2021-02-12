const countries = document.querySelector(".countries");
const loading = document.querySelectorAll(".is-loading");

// API to request data;
const api = `https://restcountries.eu/rest/v2/all?fields=name;capital;region;population;flag`;

async function requestData() {
  try {
    const request = await fetch(api);
    const data = await request.json();
    data.forEach((dataPoint) => {
      const { flag, name, population, region, capital } = dataPoint;
      populateData(flag, name, population, region, capital);
    });
  } catch (e) {
    console.error(e);
  }
}

function populateData(flag, name, population, region, capital) {
  countries.innerHTML += `<article class="country">
        <div class="country__flag">
          <img src="${flag}" alt="Flag of ${name}" loading="lazy">
        </div>
        <div class="country__about">
          <h2 class="country__name">${name}</h2>
          <p class="country__population"><span>Population: </span>${population}</p>
          <p class="country__region"><span>Region: </span>${region}</p>
          <p class="country__capital"><span>Capital: </span>${capital}</p>
        </div>
      </article>`;
}

requestData();

function removeLoader() {
  for (const country of loading) {
    country.classList.add("hidden");
  }
}

const head = document.querySelector("head");
const cta = document.querySelector(".cta");

cta.addEventListener("click", () => {
  cta.classList.toggle("clicked");
  if (cta.classList.contains("clicked")) {
    loadCSSFile("assets/style/light.css");
  } else {
    loadCSSFile("assets/style/dark.css");
  }
  // e ? loadCSSFile("assets/style/light.css") : ;
});
// cta.addEventListener("click", () => {
//   if (toggle.checked === true) {
//     loadCSSFile("style/light.css");
//   } else {
//     loadCSSFile("style/dark.css");
//   }
// });

function loadCSSFile(filename) {
  let link = document.createElement("link");
  // link.type = "text/css";
  link.rel = "stylesheet";
  link.href = filename;
  head.appendChild(link);
}
