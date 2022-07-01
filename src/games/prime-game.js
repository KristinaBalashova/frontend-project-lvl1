import readlineSync from 'readline-sync';
import { getRandomInt } from '../src/index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const primeGame = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 3; i > 0; i -= 1) {
    const randomNum = getRandomInt(2, 20);
    const rigthAnswer = isPrime(randomNum);
    console.log(`Question: ${randomNum}`);

    const userAnswer = readlineSync.question('Your answer:');
    const wrongAnswer = `${userAnswer} is wrong answer ;(. Correct answer was ${rigthAnswer}. Let's try again, ${name}!`;

    if (userAnswer === rigthAnswer) {
      console.log('Correct!');
    } else return console.log(wrongAnswer);
  }
  return console.log(`Congratulations, ${name}!`);
};

export default primeGame;
