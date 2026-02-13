"use strict";

class Billing {
  constructor(amount) {
    this.amount = amount;
  }

  calculateTotal() {
    throw new Error("Method calculateTotal() must be implemented in subclass");
  }
}

class FixBilling extends Billing {
  calculateTotal() {
    return this.amount;
  }
}

class HourBilling extends Billing {
  constructor(amount, hours) {
    super(amount);
    this.hour = hours;
  }

  calculateTotal() {
    return this.amount * this.hour;
  }
}

class ItemBilling extends Billing {
  constructor(amount, elements) {
    super(amount);
    this.elements = elements;
  }

  calculateTotal() {
    return this.amount * this.elements;
  }
}

// const amount = new Billing(222)
// amount.calculateTotal()
// console.log(amount);

const fix = new FixBilling(300);
console.log(fix.calculateTotal());

const hour = new HourBilling(100, 8);
console.log(hour.calculateTotal());

const item = new ItemBilling(20, 5);
console.log(item.calculateTotal());
