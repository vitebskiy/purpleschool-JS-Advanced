"use strict";

const target = new Date(2027, 0, 1, 0, 0, 0, 0);
const app = document.querySelector(".app");

let interval = setInterval(() => {
  const now = new Date();
  const diffMs = target - now;

  if (diffMs <= 0) {
    console.log("С Новым годом!");
    return;
  }

  const seconds = Math.floor(diffMs / 1000) % 60;
  const minutes = Math.floor(diffMs / (1000 * 60)) % 60;
  const hours = Math.floor(diffMs / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));


  app.textContent = `${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
}, 1000);
