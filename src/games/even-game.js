import getRandomInt from '../utils.js';

const gameRule = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const evenGame = () => {
  const randomNumber = getRandomInt(0, 100);

  const isNumberEven = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  return [randomNumber, isNumberEven(randomNumber)];
};

export { gameRule, evenGame };
