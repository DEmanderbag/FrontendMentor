const search = document.querySelector("input");

search.addEventListener("keyup", (e) => {
  if (select.value !== "filter") {
    select.value = "filter";
  }
  const searchValue = e.target.value.toLowerCase();
  const filteredCountry = data.filter((country) => {
    return country.name.toLowerCase().includes(searchValue);
  });
  displayCountry(filteredCountry);
});

// Filter by Region
const select = document.querySelector("select");

select.addEventListener("change", (e) => {
  const filterData = e.target.value;
  console.log(filterData);
  const filteredCountry = data.filter((country) => {
    return country.region.toLowerCase().includes(filterData);
  });
  displayCountry(filteredCountry);
});
