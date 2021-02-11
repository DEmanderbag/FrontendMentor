const countries = document.querySelector(".countries");

// API to request data;
const api = `https://restcountries.eu/rest/v2/all?fields=name;capital;region;population;flag`;

async function requestData() {
  const request = await fetch(api);
  const data = await request.json();

  data.forEach((dataPoint) => {
    const { flag, name, population, region, capital } = dataPoint;

    populateData(flag, name, population, region, capital);
  });
}

function populateData(flag, name, population, region, capital) {
  countries.innerHTML += `<div class="country">
        <div class="country__flag">
          <img src="${flag}" alt="Flag of ${name}" loading="lazy">
        </div>
        <div class="country__about">
          <p class="country__name">${name}</p>
          <p class="country__population"><span>Population: </span>${population}</p>
          <p class="country__region"><span>Region: </span>${region}</p>
          <p class="country__capital"><span>Capital: </span>${capital}</p>
        </div>
      </div>`;
}
requestData();
