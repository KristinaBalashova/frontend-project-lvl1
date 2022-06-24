import readlineSync from 'readline-sync';

export const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = userName();
  console.log(`Hello,${name}`);
  return name;
};

export function getRandomInt(min, max) {
  let a = min;
  let b = max;
  a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a)) + a;
}
