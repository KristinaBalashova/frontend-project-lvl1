import { getRandomInt, getAnswer, showIfAnswerRigth } from '../index.js';

const getProgressionArray = () => { // a- стартовое число b - число, на которое меняется прогрессия
  const a = getRandomInt(1, 10);
  const b = getRandomInt(1, 6);
  const array = [a];
  for (let i = 1; i < 10; i += 1) {
    array.push(array[i - 1] + b);
  }
  return array;
};

const progressionWithMissedInd = (array, missedInd) => {
  let result = '';
  let i;
  for (i = 0; i < array.length; i += 1) {
    if (i !== missedInd) {
      result += `${array[i]} `;
    } else result += '.. ';
  }

  return result;
};

const gameRule = () => console.log('What number is missing in the progression?');

const progressionGame = (name) => {
  console.log('What number is missing in the progression?');

  const arifmArray = getProgressionArray();

  const missedInd = getRandomInt(1, 10);

  const getProgression = progressionWithMissedInd(arifmArray, missedInd);
  console.log(`Question: ${getProgression}`);
  const userAnswer = getAnswer();
  const wrongAnswer = `${Number(userAnswer)} is wrong answer ;(.
    
Correct answer was ${arifmArray[missedInd]}. Let's try again, ${name}!`;

  if (Number(userAnswer) === arifmArray[missedInd]) {
    showIfAnswerRigth();
    return true;
  }

  console.log(wrongAnswer);

  return false;
};

export { gameRule, progressionGame };
