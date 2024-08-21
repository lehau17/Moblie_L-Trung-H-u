// Test data
const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

// Tip calculation using a ternary operator
const tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
const tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2;

// Final value calculation
const total1 = bill1 + tip1;
const total2 = bill2 + tip2;
const total3 = bill3 + tip3;

// Printing the results
console.log(
  `The bill was ${bill1}, the tip was ${tip1}, and the total value ${total1}`
);
console.log(
  `The bill was ${bill2}, the tip was ${tip2}, and the total value ${total2}`
);
console.log(
  `The bill was ${bill3}, the tip was ${tip3}, and the total value ${total3}`
);
