"use strict";

function getCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
}

getCoordinates()
  .then(({ latitude, longitude }) => {
    console.log("latitude:", latitude);
    console.log("longitude:", longitude);
  })
  .catch((error) => {
    if (error.code === 1) {
      console.log("Геолокация запрещена пользователем (code 1). Разреши доступ в браузере.");
      return;
    }

    console.log("Ошибка геолокации:", error);
  });
