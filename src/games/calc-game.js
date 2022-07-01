import readlineSync from 'readline-sync';
import { getRandomInt, getAnswer, showIfAnswerRigth } from '../index.js';

const randomOperation = () => {
  const randomNubmer1 = Math.floor(Math.random() * 100);
  const randomNubmer2 = Math.floor(Math.random() * 100);

  const signs = ['+', '-', '*'];
  const sign = signs[getRandomInt(0, 3)];
  const question = `${randomNubmer1} ${sign} ${randomNubmer2}`;

  let result;

  if (sign === '+') {
    result = randomNubmer1 + randomNubmer2;
  } else if (sign === '-') {
    result = randomNubmer1 - randomNubmer2;
  } else result = randomNubmer1 * randomNubmer2;

  return [question, result];
};

export const gameRule = () => console.log('What is the result of the expression?');

const calcGame = (name) => {
  const questionResult = randomOperation();
  console.log(`Question: ${questionResult[0]}`);
  let userAnswer = Number(getAnswer());
  const wrongAnswer = `${userAnswer} is wrong answer ;(. Correct answer was ${questionResult[1]}.
      Let's try again, ${name}!`;

  if (userAnswer === questionResult[1]) {
    showIfAnswerRigth();
    return true;
  }

  console.log(wrongAnswer);
  return false;
};

export default calcGame;
