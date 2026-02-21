"use strict";


fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => response.json())
  .then(({ abilities }) => {
    const url = abilities[0].ability.url;
    return fetch(url);
  })
  .then((response) => response.json())
  .then((data) => {
    const { effect_entries } = data;

    for (const element of effect_entries) {
      if (element.language.name === "en") {
        console.log(element.effect);
      }
    }
  });
