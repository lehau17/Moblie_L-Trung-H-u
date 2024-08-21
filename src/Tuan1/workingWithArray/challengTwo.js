function calcAverageHumanAge(ages) {
  // Step 1: Convert dog ages to human ages
  const humanAges = ages.map((dogAge) => {
    if (dogAge <= 2) {
      return 2 * dogAge;
    } else {
      return 16 + dogAge * 4;
    }
  });

  // Step 2: Exclude dogs that are less than 18 human years old
  const adultHumanAges = humanAges.filter((age) => age >= 18);

  // Step 3: Calculate the average human age
  const averageHumanAge =
    adultHumanAges.reduce((sum, age) => sum + age, 0) / adultHumanAges.length;

  return averageHumanAge;
}

// Test data
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

// Run the function for both test datasets
console.log("Test Data 1 Average Human Age:", calcAverageHumanAge(data1));
console.log("Test Data 2 Average Human Age:", calcAverageHumanAge(data2));
