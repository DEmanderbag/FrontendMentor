const container = document.querySelector(".container");

// Get theme
let theme = localStorage.getItem("theme");
if (theme === "null") {
  console.log(theme);
} else if (theme === "true") {
  loadCSSFile("assets/style/dark.css");
} else {
  loadCSSFile("assets/style/light.css");
}

theme = localStorage.setItem("theme", theme);

async function getCountryData(countryName) {
  const API = `https://restcountries.eu/rest/v2/name/${countryName}?fields=flag;name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;?fullText=true`;

  try {
    const request = await fetch(API);
    let data = await request.json();
    displayData(data[0]);
  } catch (e) {
    console.error(e);
  }
}

// Get name of the clicked country
let countryName = localStorage.getItem("countryName");
getCountryData(countryName);

function displayData(country) {
  // Get all languages
  let groupLanguage;
  for (let language of country.languages) {
    groupLanguage += `, ${language.name}`;
  }
  let finalLanguage = groupLanguage.substring(11);

  let groupBorder;
  let finalBorder;
  for (let border of country.borders) {
    groupBorder += `<li class="list__item"><a href="#">${border}</a></li>`;
    finalBorder = groupBorder.substring(9);
  }

  const htmlString = `<div class="container__left">
        <img src="${country.flag}" alt="Flag of ${country.name}">
      </div>
      <div class="container__right">
        <h2 class="country__name">${country.name}</h2>
        <div class="container__group">
          <div class="country__more">
            <p class="country__native"><span>Native Name: </span>${country.nativeName}</p>
            <p class="country__population"><span>Population:
              </span>${country.population.toLocaleString()}</p>
            <p class="country__region"><span>Region: </span>${country.region}</p>
            <p class="country__sub-region"><span>Sub Region: </span>${country.subregion}</p>
            <p class="country__capital"><span>Capital: </span>${country.capital}</p>
          </div>
          <div class="country__fact">
            <p><span>Top Level Domain: </span>${country.topLevelDomain[0]}</p>
            <p><span>Currencies: </span>${country.currencies[0].name}</p>
            <p><span>Languages: </span>${finalLanguage}</p>
          </div>
        </div>
        <div class="country__borders">
          <h3>Border Countries:</h3>
          <ul class="border__country">
          ${finalBorder == undefined ? "No borders with any country" : finalBorder}
          </ul>
        </div>
      </div>`;
  container.innerHTML = htmlString;

  borders();
}

function borders() {
  const borderCountry = document.querySelectorAll(".list__item");

  borderCountry.forEach((e) => {
    e.addEventListener("click", () => {
      let borderValue = e.textContent;
      getBorderData(borderValue);
    });
  });
}

async function getBorderData(borderData) {
  loadingData();
  const borderAPI = `https://restcountries.eu/rest/v2/alpha/${borderData}?fields=flag;name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders`;

  try {
    const request = await fetch(borderAPI);
    let data = await request.json();
    displayData(data);
  } catch (e) {
    console.error(e);
  }
}

function loadingData() {
  const htmlString = `<div class="container__left is-loading"></div>
      <div class="container__right is-loading">
        <h2 class="country__name"></h2>
        <div class="container__group is-loading">
          <div class="country__more">
            <p class="country__native"><span></span></p>
            <p class="country__population"><span></span></p>
            <p class="country__region"><span></span></p>
            <p class="country__sub-region"><span></span></p>
            <p class="country__capital"><span></span></p>
          </div>
        </div>
        <div class="country__borders is-loading">
          <h3></h3>
          <ul class="border__country is-loading">
          </ul>
        </div>
      </div>`;
  container.innerHTML = htmlString;
}
