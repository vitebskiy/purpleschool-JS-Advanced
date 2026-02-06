"use strict";

class Car {
  #brend;
  #model;
  #miles;

  constructor(brend, model, miles) {
    this.#brend = brend;
    this.#model = model;
    this.#miles = miles;
  }

  get changeMiles() {
    return this.#miles;
  }

  set changeMiles(miles) {
    this.#miles = miles;
  }

  info() {
    return console.log(`Марка ${this.#brend}, модель ${this.#model}, ${this.#miles}`);
  }
}

const car = new Car("Ford", "Focus", 6000);

console.log(car);

car.changeMiles = 7500;

car.info;

console.log(car);
