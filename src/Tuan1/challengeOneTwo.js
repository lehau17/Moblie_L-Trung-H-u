const calculateBMI = (mass, height) => {
  return mass / height ** 2;
};

// Data 1: Mark and John's mass and height
const markMass1 = 78;
const markHeight1 = 1.69;
const johnMass1 = 92;
const johnHeight1 = 1.95;

const markBMI1 = calculateBMI(markMass1, markHeight1);
const johnBMI1 = calculateBMI(johnMass1, johnHeight1);

// Checking if Mark has a higher BMI than John
const markHigherBMI1 = markBMI1 > johnBMI1;

console.log(
  `Data 1: Mark's BMI is ${markBMI1}, John's BMI is ${johnBMI1}, Mark has a higher BMI: ${markHigherBMI1}`
);

// Data 2: Mark and John's mass and height
const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = calculateBMI(markMass2, markHeight2);
const johnBMI2 = calculateBMI(johnMass2, johnHeight2);

// Checking if Mark has a higher BMI than John
const markHigherBMI2 = markBMI2 > johnBMI2;

console.log(
  `Data 2: Mark's BMI is ${markBMI2}, John's BMI is ${johnBMI2}, Mark has a higher BMI: ${markHigherBMI2}`
);

//challenge 2
if (markBMI1 > johnBMI1) {
  console.log(
    `Mark's BMI (${markBMI1.toFixed(
      2
    )}) is higher than John's (${johnBMI1.toFixed(2)})!`
  );
} else {
  console.log(
    `John's BMI (${johnBMI1.toFixed(
      2
    )}) is higher than Mark's (${markBMI1.toFixed(2)})!`
  );
}

if (markBMI2 > johnBMI2) {
  console.log(
    `Mark's BMI (${markBMI2.toFixed(
      2
    )}) is higher than John's (${johnBMI2.toFixed(2)})!`
  );
} else {
  console.log(
    `John's BMI (${johnBMI2.toFixed(
      2
    )}) is higher than Mark's (${markBMI2.toFixed(2)})!`
  );
}

//challenge 3
