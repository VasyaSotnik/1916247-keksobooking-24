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

let author = {
  avatar: function () {
    let randomPng = getRandoms(0, 10);
    let avatar = '';
    randomAvatar < 10 ? avatar = 'img/avatars/user' + '0' + randomPng + '.png' : avatar = 'img/avatars/user' + randomPng + '.png';
    return avatar;
  }
}; // Обьект, описывающий автора

const getArr = (value) => {
  let getObject = getRandoms(0, value.length - 1);
  for (let i = 0; 0 <= value.length - 1; i++) {
    if (i === getObject) {
      getObject = value[i];
      break;
    }
  }
  return getObject;
}; // Функция вызова рандомного значения из Массива

const offer = {
  title: 'Заголовок',
  address: '55.7522, 37.6156',
  price: function () {
    return getRandoms(MIN_PRICE, MAX_PRICE);
  },
  type: function () {
    return getArr(TYPE_ARR);
  },
  rooms: function () {
    return getRandoms(MIN_ROOMS, MAX_ROOMS);
  },
  guests: function () {
    return getRandoms(MIN_GUESTS, MAX_GUESTS);
  },
  checkin: function () {
    return getArr(CHECKIN_CHECKOUT_ARR);
  },
  checkout: function () {
    return getArr(CHECKIN_CHECKOUT_ARR);
  },
  features: function () {
    return getArr(FEATURE_ARR);
  },
  description: 'Хостел',
  photos: function () {
    return getArr(PHOTOS_ARR);
  },
}; // Обьект с информацией об обьявлении

const location = {
  lat: function () {
    return getFloatRandom(MIN_LAT, MAX_LAT, 5);
  },
  lng: function () {
    return getFloatRandom(MIN_LNG, MAX_LNG, 5);
  },
}; // Обьект с локацией
