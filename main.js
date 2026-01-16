"use strict";

function validationAge(dateString) {
  const birthDate = new Date(dateString);
  const now = new Date();

  let age = now.getFullYear() - birthDate.getFullYear();

  const monthDiff = now.getMonth() - birthDate.getMonth();
  const dayDiff = now.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age -= 1;
  }

  return age > 14;
}

console.log(validationAge("2022-01-01")); 