import readlineSync from 'readline-sync';
import { getRandomInt } from '../src/index.js';

const evenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const isNumberEven = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const gameEnd = `Sorry, you need to answer "yes" or "no". End of the game. Let us try again, ${name}!`;
  const wrongAnswerNo = `"no" is wrong answer ;(. Correct answer was "yes". Let us try again, ${name}!`;
  const wrongAnswerYes = `"yes" is wrong answer ;(. Correct answer was "no". Let us try again, ${name}!`;

  for (let i = 3; i > 0; i -= 1) {
    const randomNumber = getRandomInt(0, 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      return console.log(gameEnd);
    }

    if (isNumberEven(randomNumber) === userAnswer) {
      console.log('Correct!');
    } else if (isNumberEven(randomNumber) !== userAnswer && userAnswer === 'yes') {
      return console.log(wrongAnswerYes);
    } else return console.log(wrongAnswerNo);
  }
  return console.log(`Congratulations, ${name}!`);
};

export default evenGame;
