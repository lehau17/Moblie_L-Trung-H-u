const calcAverageHumanAge = (ages) =>
  ages
    .map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter((humanAge) => humanAge >= 18)
    .reduce((sum, age, _, array) => sum + age / array.length, 0);

// Test data
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

// Run the function for both test datasets
console.log("Test Data 1 Average Human Age:", calcAverageHumanAge(data1));
console.log("Test Data 2 Average Human Age:", calcAverageHumanAge(data2));
