/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */

import {MIN_PRICE, MAX_PRICE, MIN_ROOMS, MAX_ROOMS, MIN_GUESTS, MAX_GUESTS, MIN_LAT, MAX_LAT, MIN_LNG, MAX_LNG, FEATURE_ARR, TYPE_ARR, CHECKIN_CHECKOUT_ARR, PHOTOS_ARR} from './set.js';

const getRandoms = (min, max) => {
  min = Math.round(min);
  max = Math.round(max);

  const random = (min < 0) ? console.log('Пожалуйста, введите положительное значение!')
    : (max <= min) ? console.log('Пожалуйста, введите значение больше значения "ОТ"')
      : Math.round(Math.random() * (max - min) + min);
  return random;
}; // Случайное число От и До

const getFloatRandom = (min, max, float = 15) => {
  const random = (min < 0) ? console.log('Пожалуйста, введите положительное значение!')
    : (max <= min) ? console.log('Пожалуйста, введите значение больше значения "ОТ"')
      : (Math.random() * (max - min) + min).toFixed(float);
  return random;
}; // Случайное число От и До с плавающей точкой


const author = {
  avatar: function () {
    let randomPng = getRandoms(0 , 10);
    randomPng = randomPng < 10 ? `0${  randomPng}` : randomPng;
    return `img/avatar/user${  randomPng  }.png`;
  },
}; // Обьект, описывающий автора


const getArr = (value) => value[getRandoms(0, value.length - 1)]; // Функция вызова рандомного значения из Массива

const pushArray = (array) => {
  const newArray = [];
  array.forEach((array) => {
    if(getRandoms(0,1)) {
      newArray.push(array);
    }
  });
  return newArray;
};

const offer = {
  title: 'Заголовок',
  address: '55.7522, 37.6156',
  price: getRandoms(MIN_PRICE, MAX_PRICE),
  type: getArr(TYPE_ARR),
  rooms: getRandoms(MIN_ROOMS, MAX_ROOMS),
  guests: getRandoms(MIN_GUESTS, MAX_GUESTS),
  checkin: getArr(CHECKIN_CHECKOUT_ARR),
  checkout: getArr(CHECKIN_CHECKOUT_ARR),
  features: pushArray(FEATURE_ARR),
  description: 'Хостел',
  photos: pushArray(PHOTOS_ARR),
}; // Обьект с информацией об обьявлении

const locations = {
  lat: getFloatRandom(MIN_LAT, MAX_LAT, 5),
  lng: getFloatRandom(MIN_LNG, MAX_LNG, 5),
}; // Обьект с локацией


const getRandomArr = () => {
  let array = Object.values(offer).splice(2);
  const secondArray = String(Object.values(locations)).split(',');
  array.splice(7,1);
  array = String(array).split(',');
  return [...array, ...secondArray];
}; // Массив из 10 рандомных значений
