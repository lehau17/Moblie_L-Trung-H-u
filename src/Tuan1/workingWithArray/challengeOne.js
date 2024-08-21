function checkDogs(dogsJulia, dogsKate) {
  // Step 1: Create a shallow copy of Julia's array and remove the cat ages
  const correctedJulia = dogsJulia.slice(); // Create a shallow copy
  correctedJulia.shift(); // Remove the first element
  correctedJulia.shift(); // Remove the second element
  correctedJulia.pop(); // Remove the last element
  correctedJulia.pop(); // Remove the second to last element

  // Step 2: Create an array with both Julia's (corrected) and Kate's data
  const allDogs = correctedJulia.concat(dogsKate);

  // Step 3: Log whether each dog is an adult or a puppy
  allDogs.forEach((age, index) => {
    const dogNumber = index + 1;
    if (age >= 3) {
      console.log(
        `Dog number ${dogNumber} is an adult, and is ${age} years old`
      );
    } else {
      console.log(`Dog number ${dogNumber} is still a puppy 🐶`);
    }
  });
}

// Test data
const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

// Run the function for both test datasets
console.log("Test Data 1:");
checkDogs(dogsJulia1, dogsKate1);

console.log("\nTest Data 2:");
checkDogs(dogsJulia2, dogsKate2);
