const search = document.querySelector("input");

search.addEventListener("keyup", (e) => {
  const searchValue = e.target.value.toLowerCase();
  console.log(searchValue);
  const filteredCountry = data.filter((country) => {
    return country.name.toLowerCase().includes(searchValue);
  });
  displayCountry(filteredCountry);
});
