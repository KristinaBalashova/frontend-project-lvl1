import getRandomInt from '../utils.js';

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

const progressionGame = () => {
  const arifmArray = getProgressionArray();

  const missedInd = getRandomInt(1, 9);

  const getProgression = progressionWithMissedInd(arifmArray, missedInd);

  return [getProgression, arifmArray[missedInd]];
};

export { gameRule, progressionGame };
