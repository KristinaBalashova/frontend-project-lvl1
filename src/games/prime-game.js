import getRandomInt from '../utils.js';
import getRound from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const primeGame = () => {
  const randomNum = getRandomInt(2, 20);

  const answer = isPrime(randomNum) ? 'yes' : 'no';
  return [randomNum, answer];
};

const playGame = () => getRound(primeGame, gameRule);

export default playGame;
