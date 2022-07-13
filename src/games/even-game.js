import { getRandomInt, getAnswer, showIfAnswerRigth } from '../index.js';

const gameRule = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isNumberEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const evenGame = (name) => {
  const undefinedAnswer = `Sorry, you need to answer "yes" or "no". End of the game. Let's try again, ${name}!`;

  const randomNumber = getRandomInt(0, 100);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = getAnswer();
  const wrongAnswer = `${userAnswer} is wrong answer ;(. Correct answer was ${isNumberEven(randomNumber)}.
      Let's try again, ${name}!`;
  if (userAnswer !== 'yes' && userAnswer !== 'no') {
    return console.log(undefinedAnswer);
  }

  if (isNumberEven(randomNumber) === userAnswer) {
    showIfAnswerRigth();
    return true;
  }
  console.log(wrongAnswer);

  return false;
};

export { gameRule, evenGame };
