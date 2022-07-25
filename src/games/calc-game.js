import getRandomInt from '../utils.js';

export const gameRule = 'What is the result of the expression?';

const calc = (num1, num2) => {
  const signs = ['+', '-', '*'];
  const sign = signs[getRandomInt(0, 2)];
  const question = `${num1} ${sign} ${num2}`;
  let result = 0;
  if (sign === '+') {
    result = num1 + num2;
  } else if (sign === '-') {
    result = num1 - num2;
  } else result = num1 * num2;
  return [question, result];
};

const calcGame = () => {
  const randomNumber1 = getRandomInt(0, 10);
  const randomNumber2 = getRandomInt(0, 10);
  return calc(randomNumber1, randomNumber2);
};

export { calcGame };
