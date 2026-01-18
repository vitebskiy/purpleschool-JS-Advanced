"use strict";

const app = document.querySelector(".app");
const target = new Date(2027, 0, 1, 0, 0, 0);

function tick() {
  const now = new Date();
  let diffMs = target - now;

  if (diffMs <= 0) {
    app.textContent = "С Новым годом!";
    clearInterval(timer);
    return;
  }

  const MS = 1000;
  const MIN = 60 * MS;
  const HOUR = 60 * MIN;
  const DAY = 24 * HOUR;
  const MONTH = 30 * DAY; // ❗ условный месяц

  const months = Math.floor(diffMs / MONTH);
  diffMs %= MONTH;

  const days = Math.floor(diffMs / DAY);
  diffMs %= DAY;

  const hours = Math.floor(diffMs / HOUR);
  diffMs %= HOUR;

  const minutes = Math.floor(diffMs / MIN);
  diffMs %= MIN;

  const seconds = Math.floor(diffMs / MS);

  app.textContent =
    `${months} месяцев, ${days} дней, ` +
    `${hours} часов, ${minutes} минут, ${seconds} секунд`;
}

tick();
const timer = setInterval(tick, 1000);
