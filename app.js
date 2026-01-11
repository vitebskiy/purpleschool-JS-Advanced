"use strict";

// 1. Первая реализация кода

const DICE_MAP = {
  D4: 4,
  D6: 6,
  D8: 8,
  D10: 10,
  D12: 12,
  D16: 16,
  D20: 20,
};

function rollDice(diceType) {
  const max = DICE_MAP[diceType];
  return Math.floor(Math.random() * max) + 1;
}

console.log(rollDice("D16"));

// 2 реализация кода.

function roll(dice) {
  const result = Math.floor(Math.random() * dice + 1);
  return result;
}

console.log(roll(20));
