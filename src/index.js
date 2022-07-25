import readlineSync from 'readline-sync';

const gameLoop = (game, rule) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(rule);

  for (let i = 3; i > 0; i -= 1) {
    const questionAnswer = game();
    console.log(`Question: ${questionAnswer[0]}`);
    const userAnswer = readlineSync.question('Your answer:');
    const wrongAnswer = `${userAnswer} is wrong answer ;(. Correct answer was ${questionAnswer[1]}. Let's try again, ${name}!`;
    if (String(userAnswer) === String(questionAnswer[1])) {
      console.log('Correct!');
    } else {
      console.log(wrongAnswer);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameLoop;
