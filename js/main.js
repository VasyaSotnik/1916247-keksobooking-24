const getRandom = (min, max) => {

  const random = (min < 0) ? console.log('Пожалуйста, введите положительное значение!')
  : (max <= min) ? console.log('Пожалуйста, введите значение больше значения "ОТ"')
  : Math.random() * (max - min) + min;
  return random;
}; // Число с плавающей точкой


const getRandom = (min, max) => {
  min = Math.round(min);
  max = Math.round(max);
  const random = (min < 0) ? console.log('Пожалуйста, введите положительное значение!')
  : (max <= min) ? console.log('Пожалуйста, введите значение больше значения "ОТ"')
  : Math.round(Math.random() * (max - min) + min);
  return random;
};
getRandom(1,2);// - Вызов целого числа



/*

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random - отсюда подсмотрел метод math.Random


*/
