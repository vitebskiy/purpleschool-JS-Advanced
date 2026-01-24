"use strict";

function Character(race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
}

Character.prototype.speak = function () {
  return console.log(`${this.language}, ${this.name}`);
};

/* ===== Класс Орк ===== */
function Ork(name, language, weapon) {
  this.race = "Ork";
  this.name = name;
  this.language = language;
  this.weapon = weapon;
}

// наследуем методы Персонажа
Ork.prototype = Object.create(Character.prototype);

Ork.prototype.attack = function () {
  console.log(`${this.name} attacks with ${this.weapon}`);
};

Ork.prototype.spell = function () {
  console.log(`${this.name} uses a spell`);
};

Ork.prototype.createSpell = function () {
  console.log(`${this.name} creates a spell`);
};

/* ===== Использование ===== */
const ork = new Ork("Grom", "Orcish", "Axe");

console.log(ork);
ork.attack()