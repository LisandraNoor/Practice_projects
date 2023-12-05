'use strict';
//Challange 1
//const dogsJulia = [3, 5, 2, 12, 7];
//const dogsKate = [4, 1, 15, 8, 3];
const dogsJulia = [9, 16, 6, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];
const newDogsJulia = [...dogsJulia];

newDogsJulia.splice(0, 1);
newDogsJulia.splice(newDogsJulia.length - 2, newDogsJulia.length - 2);
//console.log(newDogsJulia);

const allDogs = newDogsJulia.concat(dogsKate);
//console.log(allDogs);

const checkDogs = function (arr) {
  arr.forEach(function (val, i, arr) {
    if (val >= 3) {
      //console.log(`Dog number ${i + 1} is an adult, and is ${val} years old`);
    } else {
      //console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs(allDogs);

//Challange 2

//Challange 3

//Challange 4
