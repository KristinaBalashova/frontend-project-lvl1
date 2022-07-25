import getRandomInt from '../utils.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return true;
    }
  }
  return false;
};
const primeGame = () => {
  const randomNum = getRandomInt(2, 20);

  const answer = isPrime(randomNum) ? 'no' : 'yes';
  return [randomNum, answer];
};

export { gameRule, primeGame };
