"use strict";

const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const request = new XMLHttpRequest();

request.open("GET", url);
request.send();

request.addEventListener("load", function () {
  const { abilities } = JSON.parse(this.response);
  const result = abilities[0].ability.url;


  // console.log(result);

  const request2 = new XMLHttpRequest();

  request2.open("GET", result);
  request2.send();

  request2.addEventListener("load", function () {
    const {effect_entries} = JSON.parse(this.response);

    console.log(effect_entries[2].effect);
  });
});

// console.log(result);
