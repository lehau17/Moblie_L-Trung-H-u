const printForecast = function (arr) {
  let forecastStr = "... ";

  for (let i = 0; i < arr.length; i++) {
    forecastStr += `${arr[i]}°C in ${i + 1} days ... `;
  }

  console.log(forecastStr);
};

// Test Data 1
const data1 = [17, 21, 23];
printForecast(data1); // Expected output: "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ... "

// Test Data 2
const data2 = [12, 5, -5, 0, 4];
printForecast(data2); // Expected output: "... 12°C in 1 days ... 5°C in 2 days ... -5°C in 3 days ... 0°C in 4 days ... 4°C in 5 days ... "
