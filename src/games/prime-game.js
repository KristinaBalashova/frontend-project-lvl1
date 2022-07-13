import { getRandomInt, getAnswer, showIfAnswerRigth } from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const gameRule = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const primeGame = (name) => {
  const randomNum = getRandomInt(2, 20);
  const rigthAnswer = isPrime(randomNum);
  console.log(`Question: ${randomNum}`);
  const userAnswer = getAnswer();

  const wrongAnswer = `${userAnswer} is wrong answer ;(. Correct answer was ${rigthAnswer}. Let's try again, ${name}!`;

  if (userAnswer === rigthAnswer) {
    showIfAnswerRigth();
    return true;
  }

  console.log(wrongAnswer);
  return false;
};

export { gameRule, primeGame };
