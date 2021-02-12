const countries = document.querySelector(".countries");

// API to request data;
const api = `https://restcountries.eu/rest/v2/all?fields=name;capital;region;population;flag`;

async function requestData() {
  try {
    const request = await fetch(apis);
    const data = await request.json();
    console.log(data);
    data.forEach((dataPoint) => {
      const { flag, name, population, region, capital } = dataPoint;
      // console.log(dataPoint);
      populateData(flag, name, population, region, capital);
    });
  } catch (e) {
    console.error(e);
  }
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
