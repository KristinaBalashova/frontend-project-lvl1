import getRandomInt from '../utils.js';

const gameRule = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const primeGame = () => {
  const randomNum = getRandomInt(2, 20);

  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  return [randomNum, isPrime(randomNum)];
};

export { gameRule, primeGame };
