/*  ------------- Файл со всеми значениями */

import {getRandoms, getFloatRandom, getArr, pushArr} from './functions.js';

const MIN_PRICE = 1000; // Минимальная стоимость
const MAX_PRICE = 100000; // максимальная стоимость
const MIN_ROOMS = 1; //  Минимальное количество комнат
const MAX_ROOMS = 10; // Максимальное количество комнат
const MIN_GUESTS = 1; // Минимум гостей
const MAX_GUESTS = 10; // Максимум гостей
const MIN_LAT = 35.64561; // Координаты широты, минимальное значение (от)
const MAX_LAT = 35.70000; // Координаты широты, максимальное значение (до)
const MIN_LNG = 139.70000; // Координаты долготы, максимальное значение (от)
const MAX_LNG = 139.80000; // Координаты долготы, максимальное значение (до)
const FEATURE_ARR = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']; // Массив особенности
const TYPE_ARR = ['palace', 'flat', 'house', 'bungalow', 'hotel']; // Массив типа дома
const CHECKIN_CHECKOUT_ARR = ['12:00', '13:00', '14:00']; // Массив времени
const PHOTOS_ARR = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const author = {
  avatar: function () {
    let randomPng = getRandoms(0, 10);
    randomPng = randomPng < 10 ? `0${randomPng}` : randomPng;
    return `img/avatar/user${randomPng}.png`;
  },
}; // Обьект, описывающий автора

const offer = {
  title: 'Заголовок',
  address: '55.7522, 37.6156',
  price: getRandoms(MIN_PRICE, MAX_PRICE),
  type: getArr(TYPE_ARR),
  rooms: getRandoms(MIN_ROOMS, MAX_ROOMS),
  guests: getRandoms(MIN_GUESTS, MAX_GUESTS),
  checkin: getArr(CHECKIN_CHECKOUT_ARR),
  checkout: getArr(CHECKIN_CHECKOUT_ARR),
  features: pushArr(FEATURE_ARR),
  description: 'Хостел',
  photos: pushArr(PHOTOS_ARR),
}; // Обьект с информацией об обьявлении

const locations = {
  lat: getFloatRandom(MIN_LAT, MAX_LAT, 5),
  lng: getFloatRandom(MIN_LNG, MAX_LNG, 5),
}; // Обьект с локацией


export { MIN_PRICE, MAX_PRICE, MIN_ROOMS, MAX_ROOMS, MIN_GUESTS, MAX_GUESTS, MIN_LAT, MAX_LAT, MIN_LNG, MAX_LNG, FEATURE_ARR, TYPE_ARR, CHECKIN_CHECKOUT_ARR, PHOTOS_ARR, locations, offer, author};
