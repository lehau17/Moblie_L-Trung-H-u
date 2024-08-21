// 1. Define the Car class
class Car {
  // Constructor method
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  // 2. Implement the accelerate method
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is now going at ${this.speed} km/h`);
  }

  // 3. Implement the brake method
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is now going at ${this.speed} km/h`);
  }
}

// 4. Create two Car instances and experiment with the methods
const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

// Test car1
car1.accelerate(); // BMW is now going at 130 km/h
car1.accelerate(); // BMW is now going at 140 km/h
car1.brake(); // BMW is now going at 135 km/h
car1.brake(); // BMW is now going at 130 km/h

// Test car2
car2.accelerate(); // Mercedes is now going at 105 km/h
car2.brake(); // Mercedes is now going at 100 km/h
car2.brake(); // Mercedes is now going at 95 km/h
