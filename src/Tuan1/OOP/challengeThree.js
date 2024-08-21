// 1. Car constructor function
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

// Accelerate method for Car
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is now going at ${this.speed} km/h`);
};

// Brake method for Car
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is now going at ${this.speed} km/h`);
};

// 2. EV constructor function, inheriting from Car
function EV(make, speed, charge) {
  // Call the Car constructor with make and speed
  Car.call(this, make, speed);
  this.charge = charge; // Add the charge property
}

// Inherit the Car prototype methods
EV.prototype = Object.create(Car.prototype);

// Set the constructor of EV back to EV
EV.prototype.constructor = EV;

// 3. Method to charge the battery
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`${this.make} is now charged to ${this.charge}%`);
};

// 4. Override the accelerate method for EV
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--; // Decrease charge by 1%
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

// Create an electric car object and test the methods
const tesla = new EV("Tesla", 120, 23);

// Test the methods
tesla.accelerate(); // Tesla going at 140 km/h, with a charge of 22%
tesla.brake(); // Tesla is now going at 135 km/h
tesla.chargeBattery(90); // Tesla is now charged to 90%
tesla.accelerate(); // Tesla going at 155 km/h, with a charge of 89%
