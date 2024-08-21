// 1. Define the CarCl class using ES6 class syntax
class CarCl {
  // Constructor method
  constructor(make, speed) {
    this.make = make;
    this.speed = speed; // speed in km/h
  }

  // Method to accelerate the car
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is now going at ${this.speed} km/h`);
  }

  // Method to brake the car
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is now going at ${this.speed} km/h`);
  }

  // 2. Getter for speed in miles per hour (mi/h)
  get speedUS() {
    return this.speed / 1.6;
  }

  // 3. Setter for speed in miles per hour (mi/h)
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// 4. Create a new car and experiment with the methods and getter/setter
const car1 = new CarCl("Ford", 120);

// Testing accelerate and brake methods
car1.accelerate(); // Ford is now going at 130 km/h
car1.brake(); // Ford is now going at 125 km/h

// Testing the speedUS getter
console.log(`${car1.make} is going at ${car1.speedUS} mi/h`); // Ford is going at 78.125 mi/h

// Testing the speedUS setter
car1.speedUS = 50; // Setting the speed to 50 mi/h
console.log(`${car1.make} is now going at ${car1.speed} km/h`); // Ford is now going at 80 km/h
