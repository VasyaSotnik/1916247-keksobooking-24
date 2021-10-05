/* eslint-disable eol-last */
/* eslint-disable prefer-const */
/* eslint-disable arrow-body-style */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */

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
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg']; // Массив с Фотками

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
    randomPng = randomPng < 10 ? '0' + randomPng : randomPng;
    return 'img/avatar/user' + randomPng + '.png';
  },
}; // Обьект, описывающий автора


const getArr = (value) => {
  return value[getRandoms(0, value.length - 1)];
}; // Функция вызова рандомного значения из Массива

const pushArray = (value) => {
  let randomLength = getRandoms(0, value.length - 1);
  let array = [];
  while (array.length - 1 < randomLength) {
    let checkArray = getArr(value);
    if (!array.includes(checkArray)) {
      array.push(checkArray);
    }
  }
  return array;
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

const location = {
  lat: getFloatRandom(MIN_LAT, MAX_LAT, 5),
  lng: getFloatRandom(MIN_LNG, MAX_LNG, 5),
}; // Обьект с локацией


const getRandomArr = () => {
  let array = Object.values(offer).splice(2);
  array.splice(7,1);
  array = String(array).split(',');
  String(Object.values(location)).split(',').push(array);
  return array;
}; // Массив из 10 рандомных значений
