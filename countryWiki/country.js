const container = document.querySelector(".container");
console.log(container);
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
    groupBorder += `<li class="list__item">${border}</li>`;
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
}
