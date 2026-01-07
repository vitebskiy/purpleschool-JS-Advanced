"use strict";

const array = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

const test = array.map((el) => {
  return el.id;
});

const test2 = new Set(test);

let result = [];

for (const element of test2) {
  let found = array.find((el) => el.id === element);
  result.push(found);
}

console.log(result);