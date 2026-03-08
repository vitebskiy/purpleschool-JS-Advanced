"use strict";

// Создать функцию race(), которая будет принимать массив Promise
// , и возвращать первый успешно выполненный или отклоненный.

function race(promises) {
  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      promise.then((value) => {
        resolve(value);
      });

      promise.catch((error) => {
        reject(error);
      });
    }
  });
}

const p1 = new Promise((resolve) => setTimeout(() => resolve("First"), 300));

const p2 = new Promise((resolve) => setTimeout(() => resolve("Second"), 100));

const p3 = new Promise((reject) => setTimeout(() => reject("Error"), 200));

race([p1, p2, p3])
  .then((result) => console.log("Resolved", result))
  .catch((err) => console.log("Rejected", err));
