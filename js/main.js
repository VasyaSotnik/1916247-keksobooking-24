/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import {locations, offer, author} from './set.js';
import {getRandoms} from './functions.js';

const getRandomArr = () => {
  let array = Object.values(offer).splice(2);
  const secondArray = String(Object.values(locations)).split(',');
  array.splice(7,1);
  array = String(array).split(',');
  return [...array, ...secondArray];
}; // Массив из 10 рандомных значений

console.log(getRandoms(4,444));

