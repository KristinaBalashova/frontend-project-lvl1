import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export function getRandomInt(min, max) {
  let a = min;
  let b = max;
  a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a)) + a;
}

export const lastCongrats = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const getAnswer = () => {
  const userAnswer = readlineSync.question('Your answer:');
  return userAnswer;
};

export const showIfAnswerRigth = () => {
  console.log('Correct!');
};

export const gameLoop = (game, rule) => {
  let isSuccess = false;
  const name = greeting();
  rule();

  for (let i = 3; i > 0; i -= 1) {
    isSuccess = game(name);

    if (isSuccess === false) {
      return;
    }
  }
  lastCongrats(name);
};
