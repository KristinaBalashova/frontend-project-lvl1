import readlineSync from 'readline-sync';
import { getRandomInt, userName } from '../src/index.js';

const progressionArray = () => { // a- стартовое число b - число, на которое меняется прогрессия
  const a = getRandomInt(1, 10);
  const b = getRandomInt(1, 6);
  const array = [a];
  for (let i = 1; i < 10; i += 1) {
    array.push(array[i - 1] + b);
  }
  return array;
};

const progression = (array, missedInd) => {
  let result = '';
  let i;
  for (i = 0; i < array.length; i += 1) {
    if (i !== missedInd) {
      result += `${array[i]} `;
    } else result += '.. ';
  }

  return result;
};

export const progressionGame = (name) => {
  console.log('What number is missing in the progression?');

  for (let i = 3; i > 0; i -= 1) {
    const arifmArray = progressionArray();

    const missedInd = getRandomInt(1, 10);

    const strArray = progression(arifmArray, missedInd);

    console.log(`Question: ${strArray}`);

    let userAnswer = readlineSync.question('Your answer:');
    const wrongAnswer = `${Number(userAnswer)} is wrong answer ;(.
Correct answer was ${arifmArray[missedInd]}. Let us try again, ${name}!`;

    if (Number(userAnswer) === arifmArray[missedInd]) {
      console.log('Correct!');
    } else return console.log(wrongAnswer);
  }
  return console.log(`Congratulations, ${name}!`);
};
