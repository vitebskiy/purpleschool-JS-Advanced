"use strict";

class Character {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  speek() {
    return console.log(`${this.name} speaks ${this.language}`);
  }
}

class Ork extends Character {
  constructor(name, language, weapon) {
    super("Ork", name, language);
    this.weapon = weapon;
  }

  attack() {
    return console.log(`${this.name} attacks with ${this.weapon}`);
  }

  speak() {
    console.log(`${this.name} speaks ${this.language}`);
  }
}

class Elf extends Character {
  constructor(name, language, spellType) {
    super("Elf", name, language);
    this.spellType = spellType;
  }

  createSpell() {
    console.log(`${this.name} creates a ${this.spellType} spell`);
  }

  speak() {
    console.log(`${this.name} speaks ${this.language}`);
  }
}

/* ===== Использование ===== */
const ork = new Ork("Grom", "Orcish", "Axe");
const elf = new Elf("Elrion", "Elvish", "Fire");

ork.speak();
ork.attack();

elf.speak();
elf.createSpell();
