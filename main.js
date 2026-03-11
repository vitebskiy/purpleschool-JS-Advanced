"use strict";

const wrapper = document.querySelector(".content-wrapper");
const counter = document.querySelector(".counter__value");

wrapper.addEventListener("click", (event) => {
  const currentItem = event.target.closest(".btn");

  if (!currentItem) return; 

  currentItem.textContent = `Нажата`;
  counter.textContent++;
});
