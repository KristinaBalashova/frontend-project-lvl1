import getRandomInt from '../utils.js';
import getRound from '../index.js';

const gameRule = 'What is the result of the expression?';

const calc = (num1, num2, sign) => {
  let result = 0;
  if (sign === '+') {
    result = num1 + num2;
  } else if (sign === '-') {
    result = num1 - num2;
  } else result = num1 * num2;
  return result;
};

const calcGame = () => {
  const signs = ['+', '-', '*'];
  const randomSign = signs[getRandomInt(0, 2)];
  const randomNumber1 = getRandomInt(0, 10);
  const randomNumber2 = getRandomInt(0, 10);
  const question = `${randomNumber1} ${randomSign} ${randomNumber2}`;
  return [question, String(calc(randomNumber1, randomNumber2, randomSign))];
};

const playGame = () => getRound(calcGame, gameRule);

export default playGame;
