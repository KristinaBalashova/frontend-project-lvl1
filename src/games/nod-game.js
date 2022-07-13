import { getRandomInt, getAnswer, showIfAnswerRigth } from '../index.js';

const gameRule = () => console.log('Find the greatest common divisor of given numbers.');

const getNOD = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else b %= a;
  }

  const result = a + b;
  return result;
};

const nodGame = (name) => {
  const randomNubmer1 = getRandomInt(0, 10);
  const randomNubmer2 = getRandomInt(0, 10);
  const randomOperation = `${randomNubmer1} ${randomNubmer2}`;

  console.log(`Question: ${randomOperation}`);
  const userAnswer = getAnswer();
  const wrongAnswer = `${Number(userAnswer)} is wrong answer ;(. Correct answer was ${getNOD(randomNubmer1, randomNubmer2)}. Let us try again, ${name}!`;

  if (Number(userAnswer) === getNOD(randomNubmer1, randomNubmer2)) {
    showIfAnswerRigth();
    return true;
  }
  console.log(wrongAnswer);
  return false;
};

export { gameRule, nodGame };
