#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const NAME_PLAYER = readlineSync.question('May I have your name? ');
console.log(`Hello, ${NAME_PLAYER}!`);

let countCorrectAnswer = 0;
const MAX_NUMBER = 100;

const isEven = (number) => {
  let answer = '';
  if (number % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return answer;
};

console.log('Answer "yes" if the number is even, otherwise answer "no".');
while (countCorrectAnswer < 3) {
  const randomNumber = Math.floor(Math.random() * MAX_NUMBER);
  const isNumberEven = isEven(randomNumber);
  console.log(`Question: ${randomNumber}`);
  const answerPlayer = readlineSync.question('Your answer: ');
  if (isNumberEven === answerPlayer) {
    console.log('Correct!');
    countCorrectAnswer += 1;
  } else {
    console.log(`'${answerPlayer}' is wrong answer ;(. Correct answer was '${isNumberEven}'.\nLet's try again, ${NAME_PLAYER}!`);
    break;
  }
}
if (countCorrectAnswer === 3) {
  console.log(`Congratulations, ${NAME_PLAYER}!`);
}
