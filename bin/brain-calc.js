#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const NAME_PLAYER = readlineSync.question('May I have your name? ');
console.log(`Hello, ${NAME_PLAYER}!`);

let countCorrectAnswer = 0;
const COUNT_ROUND = 3;
const MAX_NUMBER = 100;

const calc = (number1, number2, operation) => {
  let solution;
  if (operation === 0) {
    solution = number1 + number2;
  } else if (operation === 1) {
    solution = number1 - number2;
  } else if (operation === 2) {
    solution = number1 * number2;
  }
  return solution;
};

const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log('Answer "yes" if the number is even, otherwise answer "no".');
while (countCorrectAnswer < COUNT_ROUND) {
  const randomNumber1 = getRandomIntInclusive(1, MAX_NUMBER);
  const randomNumber2 = getRandomIntInclusive(1, MAX_NUMBER);
  const randomOperation = getRandomIntInclusive(0, 2);
  const operation = ['+', '-', '*'];

  const equal = calc(randomNumber1, randomNumber2, randomOperation);
  console.log(`Question: ${randomNumber1} ${operation[randomOperation]} ${randomNumber2}`);
  const answerPlayer = readlineSync.question('Your answer: ');
  if (equal === parseInt(answerPlayer, 10)) {
    console.log('Correct!');
    countCorrectAnswer += 1;
  } else {
    console.log(`'${answerPlayer}' is wrong answer ;(. Correct answer was '${equal}'.\nLet's try again, ${NAME_PLAYER}!`);
    break;
  }
}
if (countCorrectAnswer === 3) {
  console.log(`Congratulations, ${NAME_PLAYER}!`);
}
