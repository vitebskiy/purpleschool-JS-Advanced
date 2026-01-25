"use strict";

/* ===== Базовый класс Персонаж ===== */
function Character(race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
}

Character.prototype.speak = function () {
  console.log(`${this.name} speaks ${this.language}`);
};

/* ===== Класс Орк ===== */
function Ork(name, language, weapon) {
  this.race = "Ork";
  this.name = name;
  this.language = language;
  this.weapon = weapon;
}

Ork.prototype = Object.create(Character.prototype);

Ork.prototype.attack = function () {
  console.log(`${this.name} attacks with ${this.weapon}`);
};

/* ===== Класс Эльф ===== */
function Elf(name, language, spellType) {
  this.race = "Elf";
  this.name = name;
  this.language = language;
  this.spellType = spellType;
}

Elf.prototype = Object.create(Character.prototype);

Elf.prototype.createSpell = function () {
  console.log(`${this.name} creates a ${this.spellType} spell`);
};

/* ===== Использование ===== */
const ork = new Ork("Grom", "Orcish", "Axe");
const elf = new Elf("Elrion", "Elvish", "Fire");

ork.speak();
ork.attack();

elf.speak();
elf.createSpell();