const mark = {
  fullName: "Mark Miller",
  mass: 78, // kg
  height: 1.69, // meters

  calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92, // kg
  height: 1.95, // meters

  calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${
      john.fullName
    }'s (${john.bmi.toFixed(1)})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${
      mark.fullName
    }'s (${mark.bmi.toFixed(1)})!`
  );
} else {
  console.log(
    `Both ${mark.fullName} and ${
      john.fullName
    } have the same BMI (${mark.bmi.toFixed(1)})!`
  );
}
