import getRandomInt from '../utils.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const evenGame = () => {
  const randomNumber = getRandomInt(0, 100);

  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

export { gameRule, evenGame };
