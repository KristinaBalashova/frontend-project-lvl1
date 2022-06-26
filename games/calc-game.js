import readlineSync from 'readline-sync';
import { getRandomInt } from '../src/index.js';

const calcGame = (name) => {
  console.log('What is the result of the expression?');

  for (let i = 3; i > 0; i -= 1) {
    const randomOperation = () => {
      const randomNubmer1 = Math.floor(Math.random() * 100);
      const randomNubmer2 = Math.floor(Math.random() * 100);

      const signs = ['+', '-', '*'];
      const sign = signs[getRandomInt(0, 3)];
      const question = `${randomNubmer1}${sign}${randomNubmer2}`;

      let result;

      if (sign === '+') {
        result = randomNubmer1 + randomNubmer2;
      } else if (sign === '-') {
        result = randomNubmer1 - randomNubmer2;
      } else result = randomNubmer1 * randomNubmer2;

      return [question, result];
    };
    const questionResult = randomOperation();
    console.log(`Question: ${questionResult[0]}`);
    const userAnswer = readlineSync.question('Your answer:');
    const wrongAnswer = `${Number(userAnswer)} is wrong answer ;(. Correct answer was ${questionResult[1]}.
Let's try again, ${name}!`;

    if (Number(userAnswer) === questionResult[1]) {
      console.log('Correct!');
    } else return console.log(wrongAnswer);
  }

  return console.log(`Congratulations, ${name}!`);
};

export default calcGame;
