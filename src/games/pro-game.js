import getRandomInt from '../utils.js';

const getProgression = (start, step, length) => {
  const arr = [start];

  for (let i = 1; i < length; i += 1) {
    arr.push(arr[i - 1] + step);
  }

  return arr;
};

const gameRule = 'What number is missing in the progression?';

const progressionGame = () => {
  const arrStart = getRandomInt(1, 10);
  const arrStep = getRandomInt(1, 5);
  const arrLength = getRandomInt(10, 13);

  const progression = getProgression(arrStart, arrStep, arrLength);

  const missedInd = getRandomInt(1, arrLength);

  const missedElement = progression[missedInd];

  progression[missedInd] = '..';

  return [progression.join(' '), String(missedElement)];
};

export { gameRule, progressionGame };
