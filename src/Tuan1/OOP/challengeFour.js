class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is now going at ${this.speed} km/h`);
    return this; // Enable chaining
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is now going at ${this.speed} km/h`);
    return this; // Enable chaining
  }
}

class EVCl extends CarCl {
  #charge; // Private field

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`${this.make} battery charged to ${this.#charge}%`);
    return this; // Enable chaining
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this; // Enable chaining
  }
}

const rivian = new EVCl("Rivian", 120, 23);

rivian.accelerate().brake().chargeBattery(90).accelerate().brake();
