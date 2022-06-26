import readlineSync from 'readline-sync';

const nodGame = (name) => {
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 3; i > 0; i -= 1) {
    const nodOperation = (num1, num2) => {
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

    const randomNubmer1 = Math.floor(Math.random() * 100);
    const randomNubmer2 = Math.floor(Math.random() * 100);
    const randomOperation = `${randomNubmer1} ${randomNubmer2}`;

    console.log(`Question: ${randomOperation}`);
    const userAnswer = readlineSync.question('Your answer:');
    const wrongAnswer = `${Number(userAnswer)} is wrong answer ;(. Correct answer was ${nodOperation(randomNubmer1, randomNubmer2)}.
Let's try again, ${name}!`;

    if (Number(userAnswer) === nodOperation(randomNubmer1, randomNubmer2)) {
      console.log('Correct!');
    } else return console.log(wrongAnswer);
  }

  return console.log(`Congratulations, ${name}!`);
};

export default nodGame;
