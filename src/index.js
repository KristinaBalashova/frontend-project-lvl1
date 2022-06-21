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
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // Максимум не включается, минимум включается
}
