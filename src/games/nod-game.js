import getRandomInt from '../utils.js';

const gameRule = () => console.log('Find the greatest common divisor of given numbers.');

const nodGame = () => {
  const randomNubmer1 = getRandomInt(0, 10);
  const randomNubmer2 = getRandomInt(0, 10);
  const randomOperation = `${randomNubmer1} ${randomNubmer2}`;

  const getNOD = (num1, num2) => {
    let a = num1;
    let b = num2;
    while (a !== 0 && b !== 0) {
      if (a > b) {
        a %= b;
      } else b %= a;
    }

    const result = a + b;
    return result;
  };

  return [randomOperation, getNOD(randomNubmer1, randomNubmer2)];
};

export { gameRule, nodGame };
