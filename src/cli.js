import readlineSync from 'readline-sync';
export const askName = () => {
let name = readlineSync.question('May I have your name?: '); 
console.log('Hello, ' + name); 
}
