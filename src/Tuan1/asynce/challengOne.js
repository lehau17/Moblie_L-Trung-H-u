function whereAmI(lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Problem with geocoding (${response.status})`);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Problem with country data (${response.status})`);
      return response.json();
    })
    .then((data) => {
      console.log(data[0]);
      console.log(`Country: ${data[0].name.common}`);
      console.log(`Region: ${data[0].region}`);
      console.log(`Population: ${data[0].population}`);
      console.log(`Language: ${Object.values(data[0].languages).join(", ")}`);
      console.log(`Currency: ${Object.values(data[0].currencies)[0].name}`);
    })
    .catch((err) => console.error(`${err.message}`));
}

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
