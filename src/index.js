import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

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

export const wrongAnswer = (userAnswer, rightAnswer, name) => `${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${name}!`;

export const checkResult = (userAnswer, rigthAnswer, name) => {
  if (String(userAnswer) === String(rigthAnswer)) {
    showIfAnswerRigth();
    return true;
  }

  console.log(wrongAnswer(userAnswer, rigthAnswer, name));
  return false;
};

export const askQuestion = (operation) => console.log(`Question: ${operation}`);

export const gameLoop = (game, rule) => {
  const name = greeting();
  rule();

  for (let i = 3; i > 0; i -= 1) {
    const questionAnswer = game();
    askQuestion(questionAnswer[0]);
    const userAnswer = getAnswer();
    const isCorrect = checkResult(userAnswer, questionAnswer[1], name);
    if (!isCorrect) {
      return;
    }
  }
  lastCongrats(name);
};
