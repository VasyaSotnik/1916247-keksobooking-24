/* eslint-disable no-console */

/*  ------------- Функции */

const getRandoms = (min, max) => {
  if (min < 0) {
    return console.log('Пожалуйста, введите положительное значение!');
  } else if (max <= min) {
    return console.log('Пожалуйста, введите значение больше значения "ОТ"');
  }
  return Math.round(Math.random() * (max - min) + min);
}; // Случайное число От и До

const getFloatRandom = (min, max, float = 15) => {
  if (min < 0) {
    return console.log('Пожалуйста, введите положительное значение!');
  } else if (max <= min) {
    return console.log('Пожалуйста, введите значение больше значения "ОТ"');
  }
  return (Math.random() * (max - min) + min).toFixed(float);
}; // Случайное число с плавающей точкой

const getArr = (value) => value[getRandoms(0, value.length - 1)]; // Функция вызова рандомного значения из Массива

const pushArr = (array) => {
  const resultArr = [];
  // eslint-disable-next-line no-shadow
  array.forEach((array) => {
    if (getRandoms(0, 1)) {
      resultArr.push(array);
    }
  });
  return resultArr;
};

export { getRandoms, getFloatRandom, getArr, pushArr };
