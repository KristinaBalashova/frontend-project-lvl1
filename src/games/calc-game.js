import getRandomInt from '../utils.js';

export const gameRule = () => console.log('What is the result of the expression?');

const calcGame = () => {
  const randomNubmer1 = getRandomInt(0, 10);
  const randomNubmer2 = getRandomInt(0, 10);

  const signs = ['+', '-', '*'];
  const sign = signs[getRandomInt(0, 2)];
  const question = `${randomNubmer1} ${sign} ${randomNubmer2}`;

  let result;

  if (sign === '+') {
    result = randomNubmer1 + randomNubmer2;
  } else if (sign === '-') {
    result = randomNubmer1 - randomNubmer2;
  } else result = randomNubmer1 * randomNubmer2;

  return [question, result];
};

export { calcGame };
